import React from 'react'

const Footer = () => {
  return (
    <div className='h-[19vw] bg-black pl-24 flex'>
        <div className='flex flex-col text-[#666666] font-medium text-lg gap-2'>
            <img src='/logo.png' className='w-[5vw]'></img>
            <h1>Contact</h1>
            <h1>Services</h1>
            <h1>Landing</h1>
            <h1>Skills</h1>
        </div>
        <div className='ml-[70vw] flex flex-col gap-2'>
            Site operational since <br></br> <span className='text-[#666666]'>8th April</span>
            <p className='text-[#666666]'>v0.6 beta dev</p>
            <p className={`font-sans`}>vaidik-five.vercel.app</p>
        </div>
    </div>
  )
}

export default Footer
