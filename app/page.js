import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
const page = () => {
  return (
    <div>
      <section className='flex flex-col min-h-screen justify-center items-center pb-[6vw]'>
      <Navbar></Navbar>
      <h1 className='text-white font-semibold text-6xl max-w-[70vw] text-center pt-[9vw]'>Innovating with purpose while Building the future.</h1>
      <div className='mt-4 text-[#666666] text-2xl max-w-[67vw] text-center'>Hi! Welcome to vaidik.tech we are a group thriving in various sectors of technology particularly in coding based application we also provide hardware and software solutions. I as the founder welcome you to my project.</div>
      <div className='flex gap-4 mb-2 mt-4'>
        <button id='contact'><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#ffffff"><path d="M160-40v-80h640v80H160Zm0-800v-80h640v80H160Zm320 400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm70-80q45-56 109-88t141-32q77 0 141 32t109 88h70v-480H160v480h70Zm118 0h264q-29-20-62.5-30T480-280q-36 0-69.5 10T348-240Zm132-280q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm0 40Z"/></svg>Contact us</button>
        <button id='basic' ><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#000000"><path d="M180-360 40-500l42-42 70 70q-6-27-9-54t-3-54q0-82 27-159t78-141l43 43q-43 56-65.5 121.5T200-580q0 26 3 51.5t10 50.5l65-64 42 42-140 140Zm478 233q-23 8-46.5 7.5T566-131L304-253l18-40q10-20 28-32.5t40-14.5l68-5-112-307q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l148 407-100 7 131 61q7 3 15 3.5t15-1.5l157-57q31-11 45-41.5t3-61.5l-55-150q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150q23 63-4.5 122.5T815-184l-157 57Zm-90-265-54-151q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150-76 28Zm113-41-41-113q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l41 112-75 28Zm8 78Z"/></svg>Not impressed?</button>
      </div>
      <div className="rounded-xl w-[55vw] h-[30vw] border-2 mt-4 border-[#666666] p-4 overflow-hidden">
      <img
        src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp"
        alt="Chrome dev tools preview"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

      <div id='lamp1'></div>
      <div id='lamp2'></div>

      
    </section>
    <section className='bg-black min-h-screen flex flex-col items-center p-16'>
      <h1 className='font-semibold text-4xl text-center max-w-[70vw]'> Hi there! This site is under development, till the time feel free to check out one of my web dev project</h1>
      <div className="rounded-xl w-[55vw] h-[30vw] border-2 mt-4 border-[#666666] p-4 overflow-hidden">
      <a href="https://blynkerr-land.vercel.app/"><img
        src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp"
        alt="Chrome dev tools preview"
        className="w-full h-full object-cover rounded-lg"
      />
      </a>
    </div>
    </section>
  </div>
    
  )
}

export default page

