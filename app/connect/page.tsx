import React from 'react'
import Navhome from '@/components/Navhome'
import Image from 'next/image'

const contact =[
    
    
    {
        pic:'/work.svg',
        name:'shaswati',
        interest:'software',
        hobby:'sleeping',
        mail:'dafeafra.gmial.com',
        contact:'23324121',

    }
   
]

const page = () => {
  return (
    <div className='bg-amber-50 w-full h-screen overflow-hidden'>
        <Navhome/>
        <div className='flex flex-row items-center overflow-hidden'>
            <div className=' hidden md:flex md:w-[50%] flex-col items-start gap-5 p-30 border-r-1 border-blue-900 pr-3 '>
                <Image src={'/work.svg'} alt='profile' width={100} height={100} className='border-1 w-[100px] h-[100px] rounded-[100%] border-blue-900 '/>
                
                <h1 className='p-5 text-blue-900 text-2xl font-bold'>name</h1>
                <div className='p-5 text-blue-900 opacity-80 text-lg font-normal flex  flex-col items-start gap-3'>
                    <h2>interest</h2>
                    <h2>hobby</h2>
                    <h2>mail</h2>
                    <h2>contact</h2>
                </div>
                
                



            </div>

            <div className='flex-col flex-1 h-screen overflow-y-scroll items-center p-3 w-[50%] '>
                {contact.map((item)=>(
                    <div  key={item.mail} className='flex block:flex-col md:flex-row block:w-[100%] md:w-full   h-fit border  rounded-sm border-blue-900  flex-col items-center gap-17 justify-start p-4 m-3'>

                        <Image src={`${item.pic}`} alt='profile' width={100} height={100} className='border-1 w-[100px] h-[100px] rounded-[100%] border-blue-900 '/>
                    
                    
                    <div className='flex flex-col items-start gap-2'>
                    <h1 className='p-2 text-blue-900 text-lg font-semibold'>{item.name}</h1>
                    <div className='p-2 text-blue-900 opacity-80 text-sm font-normal flex  flex-col items-start gap-3'>
                        <h2>{item.interest}</h2>
                        <h2>{item.hobby}</h2>
                        <h2>{item.mail}</h2>
                        <h2>{item.contact}</h2>
                    </div>

                    </div>

                    
    
    
    
                </div>
                ))}

            </div>

        </div>
    </div>
  )
}

export default page