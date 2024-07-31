import React, { useState } from 'react'
import useStorage from '../hooks/useStorage';

function UploadForm() {
    const [selected, setSelected] = useState<File | null>(null);
    const { stratUpload , progress} = useStorage();
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelected(e.target.files[0]);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selected) {
            //start uplaod teh image
            stratUpload(selected)
            
            

        }
        setSelected(null)
    }
    return (
        <div className='text-center mt-10'>
            <form onSubmit={handleSubmit} className='flex items-center flex-col gap-8'>
                <input onChange={handleFileChange} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                <button type='submit' className={`btn btn-primary gap-3 ${Boolean(progress) && 'loading'}`} 
                disabled={!selected}>Upload <span>🚀</span></button>
            </form>
        </div>
    )
}

export default UploadForm