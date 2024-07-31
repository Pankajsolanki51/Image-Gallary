import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../Firebase/Config';

function Navbar() {
    const handleLogout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error.message);

        }
    }
    return (
        <div className="navbar bg-base-100 justify-between">
            <a className="font-bold  text-xl ">Gallary-Pro 📸</a>
            <button className='btn btn-primary' style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                backgroundColor: '#007bff', // primary button color
                color: '#fff' // text color
            }} onClick={handleLogout}>Log-Out</button>
        </div>
    )
}

export default Navbar