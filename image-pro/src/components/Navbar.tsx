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
            <button onClick={handleLogout}>Log-Out</button>
        </div>
    )
}

export default Navbar