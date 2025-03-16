import React from 'react'
import Navhome from '@/components/Navhome'
import Question from '@/components/Question'


const question_personal= [

  {
    question:'What kind of topics excite you the most?' , 
    options:[' 🖥 Technology & Programming  ',
    ' 🎨 Arts & Design  ',
    ' 📊 Business & Finance ', 
    ' 🏥 Healthcare & Medicine',  
    ' ⚖ Law & Policy',  
    ' 🎭 Entertainment & Media ', 
    ' 🌍 Environment & Sustainability ', 
    ' 🏗 Engineering & Construction ', 
    ' 🚀 Science & Research  ',
    ' 🎓 Education & Teaching ', 
    ]

  }
  

]

const page = () => {


  return (
    <div className='bg-amber-50 w-screen h-screen overflow-y-scroll  gap-20'>
        <Navhome/>
        <div className='felx-1 m-3 p-5'>
        {question_personal.map((item)=>(
          <div className='felx-col felx-wrap gap-4 items-center border rounded-xl'>
            <h2 className='text-blue-900 font-medium text-xl '>{item.question}</h2>
            <Question option={item.options}/>
          </div>
          
          
        ))}


        </div>
        



        
    </div>
  )
}

export default page