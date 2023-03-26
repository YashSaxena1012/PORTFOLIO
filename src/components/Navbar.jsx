import React, { useState } from "react";
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from "react-scroll";
const Navbar=()=>{
    const[nav,setnav]=useState(false)
    const links=[
        {
            id:1,
            link:'Home'
        },
        {
            id:2,
            link:'About'
        },
        {
            id:3,
            link:'Projects'
        },
        {
            id:5,
            link:'Skills'
        },
        {
            id:4,
            link:'Contact'
        }
    ]
    return (  
    <>
<div className="flex justify_between item-center w-full h-16 px-4 bg-black text-white fixed">
    <div>
        <h1 className="text-4xl font-logo ml-2 my-3">Yash</h1>
    </div>
    <ul className="hidden md:flex absolute top-4 right-4 space-x-2 ">
       {links.map(({id,link})=>
        <li key={id} className="px-4 cursor-pointer font-medium text-gray-500 hover:text-slate-300 duration-300 hover:scale-105">
            <Link to={link} smooth duration={400}>{link}</Link></li>
        )}
    </ul>
    <div  className="md:hidden cursor-pointer absolute right-4 my-4 pr-2 z-10 text-gray-400" onClick={()=>setnav(!nav)}>
        {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
    </div>
    {nav && (
        <ul className="flex flex-col justify-center items-center text-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        {links.map(({id,link})=>
            <li kwy={id} className="px-4 cursor-pointer text-4xl py-3 text-gray-500 hover:text-slate-300 duration-300 hover:scale-105">
                <Link to={link} onClick={()=>setnav(!nav)} smooth duration={400}>{link}</Link></li>
            )}
    </ul>
    )}
</div>
    </>
    );
}

export default Navbar;