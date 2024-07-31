
import { collection } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase/Config";

type Image{
    createdAt: Date,
    userEmail: string,
    imageUrl: string
}
const useFirestore = (collectionName: string) => {
    const [docs, setDocs] = useState<Image[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
            try {

                const q = query(collection(db, collectionName),orderBy("createdAt","desc"));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const images : Image[]= [];
                    querySnapshot.forEach((doc) => {
                        images.push(doc.data().name);
                    });
                    setDocs(images)
                });

            } catch (error) {
                error.message
            }
        }
        getData()
    }, [collectionName])

    return {
        docs, isLoading
    }

}
export default useFirestore;