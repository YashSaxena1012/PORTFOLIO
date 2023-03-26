import React from 'react'

const About = () => {
  return (
      <div name="About" className='w-full h-screen bg-white text-black'>
        <div className=' p-4 mx-auto flex flex-col justify-center w-full max-w-screen-lg  h-full'>
            <div className='pb-8 '>
                <p className='font-bold text-5xl border-b-4 border-black w-fit'>ABOUT</p>
            </div>
            <p className='hover:animate-pulse font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus voluptates architecto obcaecati doloribus, quibusdam dicta facilis asperiores ratione quas eum voluptatem et sunt illum iure, tempora modi! Tenetur nemo sapiente possimus laudantium sint sed nostrum cumque soluta atque quod nulla, maiores repudiandae dicta autem harum veniam molestiae tempore labore!</p><br />
            <p className='hover:animate-pulse' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse consectetur doloremque officia qui dolorem ad odit veritatis eaque possimus quod explicabo, ullam praesentium enim at ducimus adipisci libero officiis. Eveniet odit est laborum consequuntur excepturi iusto ullam, officiis, non unde amet minus dolores autem quo ipsa mollitia! Rerum, aut?</p>
        </div>
      </div>
  )
}

export default About
