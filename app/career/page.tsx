import React from 'react'
import Navhome from '@/components/Navhome'
import Question from '@/components/Question'
import Image from 'next/image'


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

  },
  {
    question:'What do you enjoy doing in your free time? (Select all that apply)',
    options:[
     ' 🧩 Solving puzzles & logic games',  
    '🎨 Creating art, music, or videos  ',
   '📚 Reading & learning new things  ',
   ' 💡 Coming up with business ideas  ',
   ' 🤝 Helping & mentoring others  ',
   ' 🛠 Building or fixing things  ',
   '🎮 Playing video games  ',
   ' 🔬 Experimenting with science ' 

    ]
  },
  {
    question:'Would you rather:  ',
    options:[
      ' Work on a *big idea* that could change the world?',  
    'Build a *stable career* with good income & security?  '


    ]
  },

  {
    question:'Which of these skills do you already have? (Select all that apply)  ',
    options:[
      ' 💻 Coding & Software Development ', 
   '🎨 Graphic Design & Creativity ', 
   ' 🔬 Scientific Research & Analysis',  
   ' 🗣 Communication & Public Speaking ', 
   ' 📈 Data Analysis & Statistics ', 
   ' 🏗 Engineering & Technical Skills ', 
   ' 🎬 Video & Content Creation ', 
   ' 📊 Business & Marketing Strategies ', 


    ]
  },
  {
    question:'How do you prefer solving problems?  ',
    options:[
      ' 🧠 Analyzing & logically thinking through them       ',
      ' 🎨 Finding creative or unconventional solutions  ',
      ' 💬 Talking to people & getting different perspectives',
      ' 🔬 Testing different approaches through experiments  ',
   
    ]
  },
  {
    question:' Do you prefer working with: ', 
   options:[' *Numbers & Data* 📊  ',
    '*People & Conversations* 🤝 ', 
  ' *Technology & Machines* 🔧  ',
  ' *Creative Ideas & Concepts* 🎭'
   ]
  },
  {
    question:'What type of work environment do you prefer?',  
   options:[' 🏢 Office setting with a structured routine  ',
   ' 🏡 Remote work with flexibility  ',
   ' 🚀 Fast-paced, high-energy workplace',  
   ' 🌲 Outdoor or hands-on work'
   ]
  },
  {
    question:'Do you prefer working:',  
   options:['*Alone* (independently solving problems) ', 
   '*In a small team* (collaborating with a few people)',  
   '*With large groups* (big meetings, teamwork, and networking)',
   ]
  },
  {
    question:'How do you handle pressure & deadlines? ', 
   options:[ '✅ I thrive under pressure  ',
    '📆 I prefer structured timelines & planning',  
    '⏳ I work best at my own pace'
  ]
  }
  

]

const page = () => {


  return (
    <div className='bg-amber-50 w-screen h-screen overflow-y-scroll overflow-x-hidden gap-10 flex flex-col items-center justify-start '>
       <Navhome/>
        <div className='w-full m-3'>
        {question_personal.map((item)=>(
          <div key={item.question} className='flex flex-col flex-wrap gap-4 items-start border rounded-xl p-5 m-4 '>
            <h2 className='text-blue-900 font-medium text-xl '>{item.question}</h2>
            <Question option={item.options}/>
          </div>
          
          
        ))}

        <div className='w-full h-fit flex flex-row justify-between px-5  '>
          <button className='w-[27px] h-[27px] bgone border rounded-xl relative'><Image className='absolute top-1/2 left-1/2 translate-x-[-30%] translate-y-[-50%]' src={'/back.svg'} alt='back' width={20} height={20}/></button>
          <button className='w-[27px] h-[27px] bgone border rounded-xl relative '> 
          <Image className='absolute top-1/2 left-1/2 translate-x-[-30%] translate-y-[-50%]' src={'/forward.svg'} alt='back' width={20} height={20}/>
          </button>
        </div>


        </div>
        



        
    </div>
  )
}

export default page