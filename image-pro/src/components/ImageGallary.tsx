import React from 'react'

function ImageGallary() {
    return (
        <div className='grid md:grid-cols-3 justify-center gap-4 mt-10'>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src=""
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    
                    <p>Uploaded By:</p>
                    <span>Created On:</span>
                    
                </div>
            </div>
        </div>
    )
}

export default ImageGallary