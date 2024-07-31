import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"
import { storage , db} from "../Firebase/Config";
import { v4 as uuidv4 } from 'uuid'
import { useAuth } from "./useAuth";
const useStorage = () => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<Error | null>(null);
    const {user} = useAuth();
    
    
    
    const stratUpload = (file: File) => {
        if (!file) {
            return;
        }

        const fileId = uuidv4();
        const formateFile = file.type.split('/')[1];
        console.log(formateFile);


        const storageRef = ref(storage, `images/${fileId}.${formateFile}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress)
        },
            (error) => {
                setError(error)
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)

                
                setProgress(progress)


                // STORE DATA IN THE FIERSTORE DB
                await addDoc(collection(db, "images"), {
                    imageUrl: downloadURL,
                    createdAt: new Date,
                    userEmail: user?.email
                });
            }
        );

    }

    return {
        progress, error, stratUpload
    };
}
export default useStorage;