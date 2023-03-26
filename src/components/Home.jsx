import React from 'react';
import Yashpic from '../assets/yashpic.jpg'
import {TbCircleArrowRightFilled} from 'react-icons/Tb' 
import { Link } from 'react-scroll';
const Home=()=>{
    return (  
        <>
    <div name="Home" className='h-full bg-gradient-to-b from-black to-slate-900 w-full'>
        <div className='max-w-screen-lg mx-auto  md:space-x-10  flex flex-col items-center justify-evenly h-full px-4 md:flex-row'>
        <div ><img className="w-2/4  md:w-full mb-4  mx-auto mt-20 rounded-xl" src={Yashpic} alt="picture" /></div>
            <div className='text-white flex flex-col justify-center h-full'>
                <h2 className='font-bold text-5xl text-center md:mt-28 '>I am a front end developer</h2>
                <p className='my-2 text-2xl text-slate-400 ' >
                My passion lies in creating dynamic and intuitive user interfaces that are not only aesthetically pleasing but also functionally efficient. <br />
                    I like to build and learn and believe that only wih practice one can be confident and skillfull in web development.
                </p>
            <Link to='Projects' smooth duration={500} className='text-white flex bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-semibold rounded-lg text-2xl px-5 py-2.5 mt-2 mb-2 duration-200 cursor-pointer m-auto w-2/5'>Projects<span><TbCircleArrowRightFilled className='w-8 h-8 mx-4 hover:ml-80 md:hover:ml-32 duration-300'/></span></Link>
            </div>
        </div>
    </div>
    </>
    )
}

export default Home;