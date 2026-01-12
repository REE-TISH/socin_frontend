import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image,setImage] = useState(null)
    const navigate = useNavigate()

    const handleCreateUser = () => {
        // 1. Basic validation
        if (!username || !email || !password ) {
            toast.error('Please fill in all fields',{theme:"dark"})
            return
        }

        const data = new FormData
        data.append('username',username)
        data.append('email',email)
        data.append('password',password)
        data.append('avatar',image)

        axios.post('https://socin-backend.onrender.com/api/create-user/', data)
            .then((response) => {
                // Usually successful POST is 201 Created
                if (response.status === 200 || response.status === 201) {
                    toast.success("Account created successfully",{theme:"dark"})
                    navigate('/login/')
                }
            })
            .catch((err) => {
                console.error(err)
                toast.error(err.response?.data?.message || "Something went wrong",{theme:"dark"})
            })
    }

    return (
        <div className='min-h-screen bg-gradient-to-l flex justify-center items-center from-gray-900 to-black'>
            <div className='bg-black border rounded-2xl border-slate-600 p-8'>
                <div className='flex justify-center items-center mb-6'>
                    <h1 className='text-white text-xl'>Register !!</h1>
                </div>
                <div className='flex flex-col gap-4'>
                    {/* Username */}
                    <div>
                        <p className='text-white text-[10px]'>username</p>
                        <input 
                            type="text" 
                            onChange={(e) => setUsername(e.target.value)} 
                            className='text-white focus:border-slate-900 border rounded-xl px-3 py-1 border-slate-700 bg-transparent' 
                            placeholder='Enter Username' 
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <p className='text-white text-[10px]'>Email</p>
                        <input 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='text-white focus:border-slate-900 border rounded-xl px-3 py-1 border-slate-700 bg-transparent' 
                            placeholder='Enter email' 
                        />
                    </div>
                    {/* Password */}
                    <div>
                        <p className='text-white text-[10px]'>password</p>
                        <input 
                            type="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            className='text-white focus:border-slate-900 border rounded-xl px-3 py-1 border-slate-700 bg-transparent' 
                            placeholder='Enter password' 
                        />
                    </div>
                    {/* User Profile Image */}
                    <div>
                        <p className='text-white text-[10px]'>User Profile Image</p>
                        <input 
                            type="file" 
                            accept='image/*'
                            onChange={(e) => setImage(e.target.files[0])} 
                            className='text-white w-50 focus:border-slate-900 border rounded-xl px-3 py-1 border-slate-700 bg-transparent' 
                            placeholder='Enter password' 
                        />
                    </div>
                    <div>
                        <button 
                            onClick={handleCreateUser} 
                            className='w-full text-white cursor-pointer  hover:bg-gray-800 p-2 rounded-xl bg-gray-900 transition-colors'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage