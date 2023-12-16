import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {  NavLink } from 'react-router-dom';
import { FaBars, FaTimes  } from 'react-icons/fa';
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai'
import { FiDownloadCloud } from "react-icons/fi";
import gsap from "gsap";

const Nav_bar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const[is_hoverOpen, setHoverOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const hClick = () => setNav(!nav);

  useEffect(() => {
    gsap.fromTo(
      ".logo-namenav",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 1.5 }
    );
  }, []);

  return (
    <main name='top' onMouseLeave={() => setHoverOpen(false)} className='navbar second_color md:px-10 lg:px-20 fixed text-white bg h-[70px] w-full z-10 flex justify-between items-center py-2'>
     
        <NavLink className=" z-10 p-4 flex justify-between " to='/home'>
            <div className='logo-namenav text-3xl pr-2'>&lt;/</div>  
            <svg  id="nav_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 49.9 9.2 37.5 22.7 33.4z"/>
            </svg>
            <div className='logo-namenav text-3xl '>&gt;</div> 
        </NavLink> 

       <div className='hidden md:flex justify-center space-x-10 items-center'>
         <div onMouseEnter={() => setHoverOpen(true)}>
           <button className='relative' onClick={() => setIsOpen((isOpen) => !isOpen)}>
                    Portfolio
                    {! is_hoverOpen ? (
                        <AiOutlineCaretUp className='absolute mt-[-20px] ml-16 ' />
                    ) : (
                    <AiOutlineCaretDown className='absolute ml-16 mt-[-16px]' />
                    )}
           </button>
            

        {is_hoverOpen &&   (
            <ul  onMouseLeave={() => setHoverOpen(false)} className='shadow-2xl shadow-black absolute mt-5 text-black bg-white w-[180px] border-[2px] pb-1 pt-1 rounded-md md:right-[245px] lg:right-[285px]'>
               <Link onClick={hClick} to='home' spy={true} smooth={true} duration={400} >
                     <li className='duration-300 p-2 pl-4 hover:bg-gray-200 cursor-pointer w-full'>
                        Home
                    </li>
                </Link>
            
                <Link onClick={hClick}  to='about' spy={true} smooth={true} duration={400} >
                    <li className='duration-300 p-2 pl-4 hover:bg-gray-200 cursor-pointer w-full'>
                        About 
                    </li>
                </Link>

                <Link onClick={hClick}  to='skills' spy={true} smooth={true} duration={400} >
                    <li className='duration-300 p-2 pl-4 hover:bg-gray-200 cursor-pointer w-full'>
                       Skills
                    </li>
                </Link>

                <Link onClick={hClick}  to='projects' spy={true} smooth={true} duration={400} >
                    <li className='duration-300 p-2 pl-4 hover:bg-gray-200 cursor-pointer w-full'>
                        projects
                    </li>
                </Link>

                <Link onClick={hClick} to='contact' spy={true} smooth={true}  duration={400}>
                    <li className='duration-300 p-2 pl-4 hover:bg-gray-200 cursor-pointer w-full'>
                        Contact
                    </li>
                </Link>

            </ul>
        )}
        </div>
         

        <button className='CV rounded-md px-2 h-[30px] w-[90px]'>
            <NavLink to="/resources"> Resources </NavLink>
        </button>
        
        <div className='flex CV justify-between rounded-md px-2  h-[30px] w-[150px]  bg-slate-700'>
             <button>Download CV </button>
              <FiDownloadCloud  className=' mt-1 text-2xl '/>
         </div>
    </div>
   
    <div className="md:hidden cursor-pointer z-10 px-4 text-4xl"  onClick={hClick} >
        {!nav ? <FaBars className='icon text-3xl'/> :  <FaTimes className="  text-3xl " />}
    </div>

     {nav ? (
       <ul className="first_color md:hidden  py-20 p-8 justify-start absolute space-y-5 top-0 w-[100%] h-screen flex-col flex duration-500 "> 
                
               <li>
                    <button className='CV rounded-md px-2 h-[30px] w-[90px]'>
                        <NavLink to="/resources"> Resources</NavLink>
                    </button>
               </li>
            
                <li className='flex CV justify-between rounded-md px-2  h-[30px] w-[150px] bg-slate-700'>
                    <button className=''>Download CV </button>
                    <FiDownloadCloud  className=' mt-1 text-2xl '/>
        
                </li>

                <div className='md:hidden'>
                        <button className='relative' onClick={() => setIsOpen((isOpen) => !isOpen)}>
                            Portfolio
                            {! isOpen ? (
                                <AiOutlineCaretUp className='absolute mt-[-20px] ml-16 ' />
                            ) : (
                            <AiOutlineCaretDown className='absolute ml-16 mt-[-16px]' />
                            )}
                    </button>
                    
                {isOpen &&   (
                    <ul className='shadow-2xl shadow-black absolute pt-1 border-[2px] pb-1 mt-3 text-black bg-white w-[180px] rounded-md'>
                       <Link  onClick={hClick} to='home' spy={true} smooth={true} duration={400} >
                            <li className='duration-300 p-2 pl-4 hover:bg-gray-200 cursor-pointer w-full'>
                                Home
                            </li>
                        </Link>
                    
                        <Link onClick={hClick}  to='about' spy={true} smooth={true} duration={400} >
                            <li className='duration-300 p-2 pl-4 hover:bg-gray-200 cursor-pointer w-full'>
                                About 
                            </li>
                        </Link>

                        <Link  onClick={hClick}  to='skills' spy={true} smooth={true} duration={400} >
                            <li className='duration-300 p-2 pl-4 hover:bg-gray-200 cursor-pointer w-full'>
                            Skills
                            </li>
                        </Link>

                        <Link  onClick={hClick}  to='projects' spy={true} smooth={true} duration={400} >
                            <li className='duration-300 p-2 pl-4 hover:bg-gray-200 cursor-pointer w-full'>
                                projects
                            </li>
                        </Link>

                        <Link onClick={hClick} to='contact' spy={true} smooth={true}  duration={400}>
                            <li className='duration-300 p-2 pl-4 hover:bg-gray-200 cursor-pointer w-full'>
                                Contact
                            </li>
                        </Link>
                    </ul>
                )}
                </div>
                

            </ul>): ""} 

   
    </main>
  );
};

export default Nav_bar;



