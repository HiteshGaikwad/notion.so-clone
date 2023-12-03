import React, { useState } from 'react'
import logo from '../images/logo.png';
import book from '../images/book_logo.png'
import docs from '../images/docs.png'
import target from '../images/target.png'
import enterprise from "../images/enterprise.png";
import bussiness  from "../images/small-business.png";
import personal from "../images/pesonal.png"
import arrowup from "../images/arrow-up.png";
import arrowdown from "../images/arrow-down.png"


const Header = () => {

    const [isProductOpen, setIsProductOpen]= useState(false);
    const [isDownloadOpen, setIsDownloadOpen]= useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen]= useState(false);
    const [isResourcesOpen, setIsResourcesOpen]= useState(false);

  return (
    <div className='flex items-center justify-between fixed w-full top-0 z-50 bg-white'>
        {/* left container */}
        <div className='flex gap-3 items-center'>
            {/* logo & name */}
            <div className='flex items-center'>
                <img className='w-14' alt='logo' src={logo}/>
                <h1 className='text-lg font-semibold'>Notion</h1>
            </div>

            {/* list of tags */}
            <div className='flex'>
                <ul className='flex gap-2 relative'>
                    <li onMouseOver={()=>{setIsResourcesOpen(false); setIsDownloadOpen(false); setIsProductOpen(true);setIsSolutionsOpen(false) }}  onClick={()=>setIsProductOpen(!isProductOpen)} className='px-2 py-1 flex gap-2 items-center hover:bg-gray-200 rounded-sm'>Product
                    {isProductOpen?<img className='w-5 h-3 mix-blend-darken' alt='arrow up' src={arrowup}/>:<img className='w-5 h-3 mix-blend-darken' alt='arrow down' src={arrowdown}/>}
                    </li>
                    {/* container for list of product, should visible on hovering */}
                    {isProductOpen && <div className='flex gap-4 shadow-md z-50 bg-white shadow-gray-300 absolute top-8 left-0 '>
                        {/* left side of container */}
                        <div className='border-r border-gray-200 w-fit '>
                            <ul className='py-2 px-2'>
                                <li className='flex gap-2 items-center hover:bg-gray-200 hover:rounded-lg pl-2 pr-5 py-1'>
                                    <img className='w-8 h-6 mix-blend-darken' alt='wikis logo' src={book}/>
                                    <div className='flex flex-col'>
                                        <h2 className='text-sm font-semibold'>Wikis</h2>
                                        <h3 className='text-sm w-52'>Centralise your knowledge</h3>
                                    </div>
                                </li>
                                <li className='flex gap-2 items-center hover:bg-gray-200 hover:rounded-lg pl-2 pr-5 py-1'>
                                    <img className='w-7 h-6 mix-blend-darken' alt='wikis logo' src={target}/>
                                    <div className='flex flex-col'>
                                        <h2 className='text-sm font-semibold'>Projects</h2>
                                        <h3 className='text-sm '>For every team or size</h3>
                                    </div>
                                </li>
                                <li className='flex gap-2 items-center hover:bg-gray-200 hover:rounded-lg pl-2 pr-5 py-1'>
                                    <img className='w-8 h-6 mix-blend-darken' alt='wikis logo' src={docs}/>
                                    <div className='flex flex-col'>
                                        <h2 className='text-sm font-semibold'>Docs</h2>
                                        <h3 className='text-sm'>Simple & powerful</h3>
                                    </div>
                                </li>
                                <li className='flex gap-2 items-center hover:bg-gray-200 hover:rounded-lg pl-2 pr-5 py-1'>
                                    <img className='w-7 h-6 mix-blend-darken' alt='wikis logo' src="https://i.pinimg.com/originals/f9/62/3e/f9623ed1c420e0c82af17ae7acd3f90f.png"/>
                                    <div className='flex flex-col'>
                                        <h2 className='text-sm font-semibold'>Notion AI</h2>
                                        <h3 className='text-sm'>Integrated AI assistant</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* right side of container */}
                        <div>
                            <ul className='py-2 pr-2'>
                                <li className='flex flex-col items-start hover:bg-gray-200 hover:rounded-lg  pl-2 pr-5 py-1'>
                                    <h2 className='font-semibold'>Template Gallery</h2>
                                    <h3 className='w-48 text-sm'>Setups to get you started</h3>
                                </li>
                                <li  className='flex flex-col hover:bg-gray-200 hover:rounded-lg items-start  pl-2 pr-5 py-1'>
                                <h2 className='font-semibold'>Customer stories</h2>
                                    <h3  className='w-48 text-sm'>See hoe teams use Notion</h3>
                                </li>
                                <li  className='flex flex-col hover:bg-gray-200 hover:rounded-lg items-start  pl-2 pr-5 py-1'>
                                <h2 className='font-semibold'>Connections</h2>
                                    <h3  className='w-48 text-sm'>Connect your tools to Notion</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                    }
                    
                    <li onMouseOver={()=>{setIsResourcesOpen(false); setIsDownloadOpen(true); setIsProductOpen(false);setIsSolutionsOpen(false) }}  onClick={()=>setIsDownloadOpen(!isDownloadOpen)} className='px-2 py-1 flex gap-2 items-center hover:bg-gray-200 rounded-sm'>Download
                    {isDownloadOpen?<img className='w-5 h-3 mix-blend-darken' alt='arrow up' src={arrowup}/>:<img className='w-5 h-3 mix-blend-darken' alt='arrow down' src={arrowdown}/>}
                    </li>
                    {
                        isDownloadOpen && <div className='flex gap-4 shadow-md z-50 bg-white shadow-gray-300 absolute top-8 left-28 '>
                            <ul className='p-2'>
                                <li className='text-sm font-bold hover:bg-gray-200 rounded-lg px-4 py-1'>iOS & Android</li>
                                <li className='text-sm font-bold hover:bg-gray-200 rounded-lg px-4 py-1'>Mac & Windows</li>
                                <li className='text-sm font-bold hover:bg-gray-200 rounded-lg px-4 py-1'>Web Clipper</li>
                            </ul>
                        </div>
                    }

                    <li onMouseOver={()=>{setIsResourcesOpen(false); setIsDownloadOpen(false); setIsProductOpen(false);setIsSolutionsOpen(true) }}  onClick={()=>setIsSolutionsOpen(!isSolutionsOpen)} className='px-2 py-1 flex gap-2 items-center hover:bg-gray-200 rounded-sm'>Solutions
                    {isSolutionsOpen?<img className='w-5 h-3 mix-blend-darken' alt='arrow up' src={arrowup}/>:<img className='w-5 h-3 mix-blend-darken' alt='arrow down' src={arrowdown}/>}
                    </li>
                    {isSolutionsOpen && <div className='flex gap-4 bg-white shadow-md z-50 shadow-gray-300 absolute top-8 left-60 '>
                        {/* left side of container */}
                        <div className='border-r border-gray-200 w-fit '> 
                        <span className='text-xs pl-5'>BY TEAM SIZE</span> 
                            <ul className='py-2 px-2'>
                                <li className='flex gap-2 items-center hover:bg-gray-200 hover:rounded-lg pl-2 pr-5 py-1'>
                                    <img className='w-8 h-6 mix-blend-darken' alt='wikis logo' src={enterprise}/>
                                    <div className='flex flex-col'>
                                        <h2 className='text-sm font-semibold'>Enterprise</h2>
                                        <h3 className='text-sm w-52'>Advanced features for your org</h3>
                                    </div>
                                </li>
                                <li className='flex gap-2 items-center hover:bg-gray-200 hover:rounded-lg pl-2 pr-5 py-1'>
                                    <img className='w-7 h-6 mix-blend-darken' alt='wikis logo' src={bussiness}/>
                                    <div className='flex flex-col'>
                                        <h2 className='text-sm font-semibold'>Small business</h2>
                                        <h3 className='text-sm '>Run your team on one tool</h3>
                                    </div>
                                </li>
                                <li className='flex gap-2 items-center hover:bg-gray-200 hover:rounded-lg pl-2 pr-5 py-1'>
                                    <img className='w-8 h-6 mix-blend-darken' alt='wikis logo' src={personal}/>
                                    <div className='flex flex-col'>
                                        <h2 className='text-sm font-semibold'>Personal</h2>
                                        <h3 className='text-sm'>Free for individuals</h3>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                        {/* middle of container */}
                        <div className='border-r border-gray-200'>
                        <span className='text-xs'>BY TEAM FUNCTION</span> 
                            <ul className='py-2 pr-2 w-44'>
                                <li className='flex flex-col items-start hover:bg-gray-200 hover:rounded-lg  pl-2 pr-5 py-1'>
                                    Design
                                </li>
                                <li  className='flex flex-col hover:bg-gray-200 hover:rounded-lg items-start  pl-2 pr-5 py-1'>
                               Engineering
                                </li>
                                <li  className='flex flex-col hover:bg-gray-200 hover:rounded-lg items-start  pl-2 pr-5 py-1'>
                                Product
                                </li>
                                <li  className='flex flex-col hover:bg-gray-200 hover:rounded-lg items-start  pl-2 pr-5 py-1'>
                                Managers
                                </li>
                            </ul>
                        </div> 
                        {/* right side container */}
                        <div> 
                            <span className='text-xs'>NOTION FOR</span>
                            <ul className='py-2 pr-2 w-36'>
                                <li className='flex flex-col items-start hover:bg-gray-200 hover:rounded-lg  pl-2 pr-5 py-1'>
                                    Startups
                                </li>
                                <li  className='flex flex-col hover:bg-gray-200 hover:rounded-lg items-start  pl-2 pr-5 py-1'>
                                Remote works
                                </li>
                                <li  className='flex flex-col hover:bg-gray-200 hover:rounded-lg items-start  pl-2 pr-5 py-1'>
                                Education
                                </li>
                                <li  className='flex flex-col hover:bg-gray-200 hover:rounded-lg items-start  pl-2 pr-5 py-1'>
                                Nonprofits
                                </li>
                            </ul>
                        </div>
                    </div>
                    }

                    <li onMouseOver={()=>{setIsResourcesOpen(true); setIsDownloadOpen(false); setIsProductOpen(false);setIsSolutionsOpen(false) }}  onClick={()=>setIsResourcesOpen(!isResourcesOpen)} className='px-2 py-1 flex gap-2 items-center hover:bg-gray-200 rounded-sm'>Resources
                    {isResourcesOpen?<img className='w-5 h-3 mix-blend-darken' alt='arrow up' src={arrowup}/>:<img className='w-5 h-3 mix-blend-darken' alt='arrow down' src={arrowdown}/>}
                    </li>
                    {
                        isResourcesOpen && <div className='flex gap-4 shadow-md z-50 bg-white shadow-gray-300 absolute top-8 left-[350px] '>
                            <ul className='w-52 p-2'>
                                <li className='text-sm font-semibold hover:bg-gray-200 rounded-lg px-3 py-1'>Blog</li>
                                <li className='text-sm font-semibold hover:bg-gray-200 rounded-lg px-3 py-1'>Guides & tutorials</li>
                                <li className='text-sm font-semibold hover:bg-gray-200 rounded-lg px-3 py-1'>Webinars</li>
                                <li className='text-sm font-semibold hover:bg-gray-200 rounded-lg px-3 py-1'>Help center</li>
                                <li className='text-sm font-semibold hover:bg-gray-200 rounded-lg px-3 py-1'>API docs</li>
                                <li className='text-sm font-semibold hover:bg-gray-200 rounded-lg px-3 py-1'>Community</li>
                                <li className='text-sm font-semibold hover:bg-gray-200 rounded-lg px-3 py-1'>Hire a consultant</li>
                            </ul>
                        </div>
                    }

                    <li className='px-2 py-1 hover:bg-gray-200 rounded-sm'>Pricing</li>
                </ul>
            </div>
        </div>

        {/* right container */}
        <div className='flex items-center gap-4 pr-4'>
            <h1  className='px-3 py-1 hover:bg-gray-100'>Request a demo</h1>
            <span className='w-px h-5 bg-gray-200'></span>
            <button className='px-3 py-1 hover:bg-gray-100'>Login</button>
            <button className='text-white bg-black px-3 py-2 rounded-lg font-bold text-sm hover:bg-gray-800'>Get Notion free</button>

        </div>
    </div>
  )
}

export default Header