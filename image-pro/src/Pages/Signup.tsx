import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Config';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Image Pro</h1>
          <p className="py-6">Signup to share your images</p>
        </div>
        <div className="cardsm:w-[30rem] w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            {error && <div className="text-red-500">{error}</div>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign-Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
