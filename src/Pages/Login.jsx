
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const[formData,setFormData]=useState({
       email:'',
       password:""
  })
       const handleInputChange=e=>{
            setFormData({...formData,[e.target.name]: e.target.value});
       }
           const handleSubmit=async(e)=>{
                e.preventDefault();
                 try {
                      const response=await Login(email,password);
                       console.log('login succesful',response.data);
                 } catch (error) {
                        console.log('login error ')
                 }
           }
  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 gap-3'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10  '>
          Hello<span className='text-primaryColor gap-3'>Welcome</span> Back
        </h3>
           <form className='py-4 md:py-0'>
            <div className='mb-5'>
             
              <input type='email' placeholder='Enter your Email ' name='email' value={formData.email} onChange={handleInputChange}
                 className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                  required
             />
            </div>
            <div className='mb-5'>
              <input type='password' placeholder='Enter your password ' name='password' value={formData.password} onChange={handleInputChange}
                     className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor  placeholder:text-textColor rounded-md cursor-pointer'
                         required 
                          />
                       </div>
                           <div className='mt-7'>
                             <button
                                 type='submit'
                                 className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
                             >Login
                             </button>
                           </div>
                              <p className='mt-5 text-textColor text-centre'>Don&apos;t have an account?
                                <Link to='/register' className='text-primaryColor'>Register</Link>
                              </p>
                         </form>
                             </div>

                              </section>
    
    
  )
}

export default Login
