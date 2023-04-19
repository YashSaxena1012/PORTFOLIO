import React from 'react'

const About = () => {
  return (
      <div name="About" className='w-full h-screen bg-white text-black'>
        <div className=' p-4 mx-auto flex flex-col justify-center w-full max-w-screen-lg  h-full'>
            <div className='pb-8 '>
                <p className='font-bold text-5xl border-b-4 border-black w-fit'>ABOUT</p>
            </div>
            <p className='hover:animate-pulse font-medium'>Yash Saxena and I am currently pursuing my BTech from JSS Academy of Technical Education in the field of Information Technology.
Web development has always gained my attention.I like to build and learn and believe only with practice one can be confident in this field.
</p><br />
            <p className='hover:animate-pulse' > My expertise in HTML, CSS, and JavaScript, as well as front-end frameworks like React and Tailwind, allows me to design intuitive and visually appealing user experiences. I prioritize communication and collaboration with clients to deliver products that exceed their expectations and meet their users' needs.</p>
    <p className='font-2xl'>
    Let's work together to build something great!
    </p>
        </div>
      </div>
  )
}

export default About
