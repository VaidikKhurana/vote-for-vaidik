import React from 'react'

const Footer = () => {
  return (
    <div className='h-[19vw] bg-black pl-24 flex'>
        <div className='flex flex-col text-[#666666] font-medium text-lg gap-2'>
            <h1 className='text-5xl'> VOTE FOR VAIDIK AS HEAD BOY 2025</h1>
            
        </div>
        <div className='ml-[70vw] flex flex-col gap-2'>
            Site operational since <br></br> <span className='text-[#666666]'>18th May</span>
            <p className='text-[#666666]'>Campaign</p>
            <p className={`font-sans`}>vote-vaidik.vercel.app</p>
        </div>
    </div>
  )
}

export default Footer
