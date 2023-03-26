import React from 'react'
import p1 from '../assets/project1.png'
import p2 from '../assets/project2.png'
import p3 from '../assets/project3.png'
import p4 from '../assets/project4.png'
import p5 from '../assets/project5.png'
const Projects = () => {
    const projects=[
        {
            id:1,
            src:p1,
            name:"TravellingPanda",
            details:"It is an E-tour website whoose purpose is to provide a virtual tour to of the 7 wonders of the world to our lovely users.",
            demolink:"https://cosmic-bienenstitch-50bf82.netlify.app/",
            codelink:"https://github.com/YashSaxena1012/Travellingpanda",
        },
        {
            id:2,
            src:p2,
            name:"Personal Portfolio",
            details:"MY personal portfolio website containing datails about my skills and project.",
            demolink:"https://sensational-elf-8ad43f.netlify.app/",
            codelink:"",
        },
        {
            id:3,
            src:p3,
            name:"Weather Update",
            details:"A react based webite  which tells about the current temperature,sunset time,sunrise time,wind velocity and humidity for a city or country.",
            demolink:"https://relaxed-tulumba-d126a5.netlify.app/",
            codelink:"https://github.com/YashSaxena1012/weather-app",
        },
        {
            id:4,
            src:p4,
            name:"MYfolio",
            details:"It was a small project where i build a multiple page landing page for a portfolio building website. It was built using html,css and uses some concepts of JavaScript too.It is a responsive website so it works on all screen sizes.",
            demolink:"https://astonishing-hamster-99beee.netlify.app/",
            codelink:"https://github.com/YashSaxena1012/MYFOLIO-official-",
        },
        {
            id:5,
            src:p5,
            name:"Corona Tracker",
            details:"A react based website which updates the user about corona affected cases as well as recoveries and deaths for ceertan countries.",
            demolink:"https://majestic-marzipan-988508.netlify.app/",
            codelink:"https://github.com/YashSaxena1012/corona-tracker-app",
        },
    ]
    return (
        <div name="Projects">
            <div className='flex flex-col h-full pb-10 -mt-40 md:mt-0 bg-slate-300'>
                <p className='font-bold text-5xl'>PROJECTS</p>
                <p className='text-xl'>Here are some of the projects I have made</p>
                <div className='flex space-x-4 space-y-4 flex-wrap justify-center items-center'>
                    {projects.map(({id,src,name,details,demolink,codelink})=>{
                        return<>
                <div key={id} className="hover:scale-105 hover:shadow-md hover:shadow-gray-800 duration-200 max-w-sm w-full h-max-content bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg w-full h-3/5" src={src} alt="" />
                    <div class="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                        <div className='flex relative align-end space-x-4'>
                        <a href={demolink} className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <p>LIVE</p>
                        </a>
                        <a href={codelink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <p>CODE</p>
                        </a>
                        </div>
                    </div>
                </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
