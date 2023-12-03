import React, { useState } from 'react'
import rightarrow from "../images/rightarrow.png"
import book from "../images/book_logo.png"
import target from "../images/target.png"
import docs from "../images/docs.png"
import AI from "../images/ai-image.png";
import Docs from "../images/standup-image.png";
import Project from "../images/projects-image.png";
import Wikis from "../images/wikis-image.png";
import Carousel from './Carousel'
import kanban from "../images/kanban-board.png";
import table from "../images/table.png";
import calender from "../images/calender.png";
import chronology from "../images/chronology.png";
import gallery from "../images/gallery.png";
import list from "../images/list.png";
import design from "../images/design-category.png";
import product from "../images/product-category.png";
import marketing from "../images/marketing-category.png";
import operation from "../images/operation-category.png";
import hr from "../images/hr-category.png";
import meetup from "../images/meetup.png";
import event from "../images/event.png";
import setup from "../images/setups.png";
import coffee from "../images/coffee.png";
import Carousel2 from './Carousel2'


const Body = () => {

  const [selectedDiv, setSelectedDiv]= useState("AI");
  const [selectedOption, setSelectedOption]= useState(kanban);
  const [selectedCategory, setSelectedCategory]= useState(Wikis)

  const images = [AI, Wikis, Project, Docs];
  const photos = [meetup,event,setup,coffee];

  const [currentImage, setCurrentImage]= useState(-1);

  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      {/* first container */}
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='text-6xl font-bold'>Write, plan, share.</h1>
        <h1 className='text-6xl font-bold'>With AI at your side.</h1>
        <p className='text-2xl font-semibold'>Notion is the connected workspace where better, faster work happens.</p>
        <button className='flex px-3 py-2 mt-2 font-semibold gap-2 rounded-md bg-black hover:bg-gray-800 text-white items-center'>Get Notion free 
        <img className='w-5' alt='arrow icon' src={rightarrow}/></button>
      </div>
      <img className='w-2/4 mt-14' alt='working environment' src='https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png'/>

{/* first carousal container */}
      <div  className='flex gap-3 mt-1 '>

        <div onMouseLeave={()=>setCurrentImage(-1)} onMouseOver={()=>{setSelectedDiv("AI");setCurrentImage(0)}}className='rounded-xl flex flex-col justify-between bg-gray-200 hover:bg-white border border-gray-300 pl-4 pr-2 py-2 w-60 h-36'>
          <div className='flex gap-1'>
            <img className='w-7 z-50 h-6' alt='AI icon' src="https://i.pinimg.com/originals/f9/62/3e/f9623ed1c420e0c82af17ae7acd3f90f.png"/>
            <h2 className='font-bold text-2xl'>AI</h2>
            <h3 className='bg-blue-200 text-xs text-blue-600 px-2 py-1 rounded-full'>Now with Q&A</h3>
          </div>
          <p className='text-sm'>Ask literally anything. Notion will answer.</p>
          { selectedDiv==="AI" &&
          <button className='text-sx text-blue-600 '>Learn more </button>
          }
        </div>

        <div onMouseLeave={()=>setCurrentImage(-1)} onMouseOver={()=>{setSelectedDiv("Wikis");setCurrentImage(1)}} className='rounded-xl flex flex-col justify-between bg-gray-200 hover:bg-white border border-gray-300 pl-4 pr-2 py-2 w-60 h-36'>
          <div className='flex gap-1'>
            <img className='w-7 z-50 h-6' alt='wikis icon' src={book}/>
            <h2 className='font-bold text-2xl'>Wiki</h2>
          </div>
          <p className='text-sm'>Centralise your knowledge. No more desperate searching for answers.</p>
          { selectedDiv==="Wikis" &&
          <button className='text-sx text-red-600 '>Learn more </button>
          }
        </div>
         <div onMouseLeave={()=>setCurrentImage(-1)} onMouseOver={()=>{setSelectedDiv("Project");setCurrentImage(2)}} className='rounded-xl flex flex-col justify-between bg-gray-200 hover:bg-white border border-gray-300 pl-4 pr-2 py-2 w-60 h-36'>
          <div className='flex gap-1'>
            <img className='w-7 z-50 h-6 ' alt='targets icon' src={target}/>
            <h2 className='font-bold text-2xl'>Projects</h2>
          </div>
          <p className='text-sm'>Manage complex projects, avoiding chaos.</p>
          { selectedDiv==="Project" &&
          <button className='text-sx text-blue-900 '>Learn more </button>
          }
        </div>
         <div onMouseLeave={()=>setCurrentImage(-1)} onMouseOver={()=>{setSelectedDiv("Docs"); setCurrentImage(3)}} className='rounded-xl flex flex-col justify-between bg-gray-200 hover:bg-white border border-gray-300 pl-4 pr-2 py-2 w-60 h-36'>
          <div className='flex gap-1'>
            <img className='w-7 z-50 h-6' alt='AI icon' src={docs}/>
            <h2 className='font-bold text-2xl'>Documents</h2>
          </div>
          <p className='text-sm'>Simple, powerfull, elegant. New generation of notes and documents.</p>
          { selectedDiv==="Docs" &&
          <button className='text-sx text-orange-600 '>Learn more </button>
          }
        </div>
        </div>
      {/* carousal images */}
        <Carousel currentImage={currentImage} images={images}/>

        {/* second container */}
        <div className='flex flex-col items-center gap-3'>
          <h1 className='text-5xl font-bold'>Millions of people use Notion every day</h1>
          <div className='w-full flex flex-col items-center'>
          <p className='w-2/4 flex '>Used by the best teams in the world, from next-generation </p>
          <p >start-ups to the largest companies.</p>
          </div>
          <h2 className='text-blue-400 hover:text-blue-700 text-lg hover:underline underline-offset-2'>Read out customer testimonials ➡️</h2>

          {/* brands images */}
          <div className='w-3/4 mt-6 mb-14 flex gap-10 justify-center items-center'>
            <img className='w-24' alt='brand' src='https://images.ctfassets.net/spoqsaf9291f/1oGakTMMC1P6f0hfkXO7fV/9fabc635435ffc82fcdea02920cb242e/download_1.png'/>
            <img className='w-24' alt='brand' src='https://images.ctfassets.net/spoqsaf9291f/1ZxvxKRmJzctjrG5LF3z4t/eb9e74c9939eb8e6fd50040ef856ba83/AXA_Climate_Blue_Horizontal_RVB_1.png'/>
            <img className='w-24' alt='brand' src='https://images.ctfassets.net/spoqsaf9291f/5EMp8ULFFMguGeLWbKAamn/a0ca0208cb1fbc9672efe53782479afd/QONTO.png'/>
            <img className='w-24' alt='brand' src='https://images.ctfassets.net/spoqsaf9291f/4xwTKYhIzygN3OyuNQpIJh/46b291a05ff8b583cf888dbeedc3fea3/alan_1.png'/>
            <img className='w-24' alt='brand' src='https://images.ctfassets.net/spoqsaf9291f/7fJO5gfrsy0i3m3sAXXfIi/dff12232edf66e45a19c68163c700ffc/station.png'/>
          </div>
        </div>

        {/* third container */}
        <div className='my-10 flex flex-col justify-center items-center gap-2'>
          <div className='flex justify-center'>
            <h1 className='text-5xl font-bold w-2/5 text-center'> Consolidate your tools. Reduce your costs.</h1>
            <img className='w-52 pt-8' alt='sketch' src='https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/pages/home/giant-pencil-illustration.png'/>
            </div>
            <div className='flex justify-center relative'>
          <img className='w-2/5 mr-20 -mt-4 bg-transparent' alt='logos' src='https://www.notion.so/cdn-cgi/image/format=webp,width=1200/front-static/pages/home/tools-before-notion-V2.png'/>
          <img className='absolute mix-blend-darken right-[400px] -top-4' alt='line' src='https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-strikethrough-V2.png'/>
          </div>
        </div>

       {/* fourth conatiner */}
        <div className='flex flex-col my-8 justify-center items-center gap-3 w-2/4'>
          <p className='text-3xl text-center font-semibold'><q>Notion allowed us to do without a dozen different tools.</q></p>
          <div className='flex gap-2'>
            <img className='w-32 h-10' alt='icon' src='https://www.notion.so/cdn-cgi/image/format=webp,width=128/front-static/shared/logos/color/metalab.png'/>
            <div className='flex flex-col'> 
              <h2 className='font-bold'>Justin Watt</h2>
              <h3 className='text-xs'>Director of Operations and Marketing at MetaLab</h3>
            </div>
          </div>
        </div>

       {/* fifth container */}
        <div className='flex flex-col w-2/3'>
          <div className='flex gap-2 mt-10 items-center'>
          <img alt='img' src='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekI.png'/>
          <h2 className='text-5xl font-bold'>Powerful content blocks</h2>
          </div>

          <div className='border p-5 pt-10 bg-gray-100 rounded-xl border-gray-300'>
            <h2 className='text-xl font-bold'>View, filter and sort however you want</h2>
            <p className='w-3/5 mb-8'>Only view tasks assigned to you or items marked as urgent. Break down any project in whatever way works best for you.</p>

            {/* images */}
            <div >
              <img  alt='img' src={selectedOption}/>
            </div>

            {/* category */}
            <div className='flex gap-5 mt-8 justify-center'>
              <button onClick={()=>setSelectedOption(kanban)} className='px-2 py-1 rounded-lg border border-gray-300 hover:bg-gray-300  '>Kanban board</button>
              <button onClick={()=>setSelectedOption(table)} className='px-2 py-1 rounded-lg border border-gray-300 hover:bg-gray-300'>Table</button>
              <button onClick={()=>setSelectedOption(chronology)} className='px-2 py-1 rounded-lg border border-gray-300 hover:bg-gray-300'>Chronology</button>
              <button onClick={()=>setSelectedOption(calender)} className='px-2 py-1 rounded-lg border border-gray-300 hover:bg-gray-300'>calender</button>
              <button onClick={()=>setSelectedOption(gallery)} className='px-2 py-1 rounded-lg border border-gray-300 hover:bg-gray-300'>Gallery</button>
              <button onClick={()=>setSelectedOption(list)} className='px-2 py-1 rounded-lg border border-gray-300 hover:bg-gray-300'>List</button>
            </div>
          </div>

       {/* cards */}
          <div className='flex gap-6 mt-5'>
            <div className='flex flex-col gap-2 pl-5 pt-10  bg-gray-100 rounded-xl border border-gray-200'>
              <h2 className='font-bold text-xl'>Personalize the information you track</h2>
              <p className='w-5/6 mb-5'>Create your own labels, proprietary or otherwise, so everyone knows what we're talking about and everything stays organized.</p>
              <img className='w-[500px]' alt="img" src='https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png'/>
            </div>
            <div className='flex flex-col gap-2 pl-5 pt-10  bg-gray-100 rounded-xl border border-gray-200'>
              <h2 className='font-bold text-xl'>Create any page, communicate any idea</h2>
              <p className='w-11/12 mb-5'>In Notion, you can drag and drop all kinds of elements: images, flyout menus, tasks, and even built-in databases.</p>
              <img className='w-[500px] h-full' alt="img" src='https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png'/>
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-8 mb-14 justify-center items-center gap-3 w-2/4'>
          <p className='text-3xl text-center font-semibold'><q>Notion adapts to your needs, whether minimalist or sophisticated.</q></p>
          <div className='flex gap-2'>
            <img className='w-8 h-10' alt='icon' src='https://www.notion.so/cdn-cgi/image/format=webp,width=48/front-static/shared/logos/color/match-group.png'/>
            <div className='flex flex-col'> 
              <h2 className='font-bold'>Rahim Makani</h2>
              <h3 className='text-xs'>Product Director at Match Group</h3>
            </div>
          </div>
        </div>

      {/* sixth container */}
        <div className='flex flex-col gap-3 mt-8 mb-14 justify-center items-center'>
          <h1 className='text-5xl mb-7 font-bold'>All teams, in one place</h1>
          {/* category */}
          <div className='flex gap-5'>
            <div onClick={()=>setSelectedCategory(Wikis)} className={'flex flex-col w-40 bg-gray-200 border border-gray-300 items-center px-6 py-3 rounded-xl justify-between '+ (selectedCategory===Wikis && "bg-white") }>
              <img className='w-20' alt='img' src='https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/engineering-v2.png'/>
              <h2 className='font-semibold'>Engineering</h2>
            </div>
            <div onClick={()=>setSelectedCategory(design)} className={'flex flex-col w-40 bg-gray-200 border border-gray-300 items-center px-6 py-3 rounded-xl justify-between '+ (selectedCategory===design && "bg-white") }>
              <img className='w-20' alt='img' src='https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/design-v2.png'/>
              <h2 className='font-semibold'>Design</h2>
            </div>
            <div onClick={()=>setSelectedCategory(product)} className={'flex flex-col w-40 bg-gray-200 border border-gray-300 items-center px-6 py-3 rounded-xl justify-between '+ (selectedCategory===product && "bg-white") }>
              <img className='w-20' alt='img' src='https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/product.png'/>
              <h2 className='font-semibold'>Product</h2>
            </div>
            <div onClick={()=>setSelectedCategory(marketing)} className={'flex flex-col w-40 bg-gray-200 border border-gray-300 items-center px-6 py-3 rounded-xl justify-between '+ (selectedCategory===marketing && "bg-white") }>
              <img className='w-20' alt='img' src='https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/marketing.png'/>
              <h2 className='font-semibold'>Marketing</h2>
            </div>
            <div onClick={()=>setSelectedCategory(operation)} className={'flex flex-col w-40 bg-gray-200 border border-gray-300 items-center px-6 py-3 rounded-xl justify-between '+ (selectedCategory===operation && "bg-white") }>
              <img className='w-20' alt='img' src='https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/operations.png'/>
              <h2 className='font-semibold'>Operations</h2>
            </div>
            <div onClick={()=>setSelectedCategory(hr)} className={'flex flex-col w-40 bg-gray-200 border border-gray-300 items-center px-6 py-3 rounded-xl justify-between '+ (selectedCategory===hr && "bg-white") }>
              <img className='w-20' alt='img' src='https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/hr-v2.png'/>
              <h2 className='font-semibold'>HR</h2>
            </div>
          </div>
          {/* images */}
          <div className='flex justify-center'>
            <img className='w-5/6 rounded-xl' alt='img' src={selectedCategory}/>
          </div>
        </div>

        <div className='flex flex-col my-10 items-center gap-3'>
        <h1 className='text-5xl font-bold'>Join a global movement.</h1>
        <h1 className='text-5xl font-bold'>Unleash your creativity.</h1>
          <div className='w-full flex flex-col items-center'>
          <p className='w-10/12 flex text-center'>Our vibrant community produces content, teaches courses, and leads events all over the world.</p>
          </div>
          <h2 className='text-blue-400 hover:text-blue-700 text-lg hover:underline underline-offset-2'>Learn more ➡️</h2>
        </div>

      {/* face cuts images */}
        <div className='mb-5'>
          <img alt='face images' src='https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/avatars.png'/>
        </div>

       {/* statistics divs */}
        <div className='flex gap-5 justify-center w-8/12 items-center'>
          <div className='flex flex-col w-1/3 h-28 px-6 py-2 bg-gray-200 rounded-xl border border-gray-200'>
            <h1 className='text-6xl font-bold text-blue-500'>1M+</h1>
            <h3>community members</h3>
          </div>
          <div className='flex flex-col w-1/3 h-28 px-6 py-2 bg-gray-200 rounded-xl border border-gray-200'>
            <h1 className='text-6xl font-bold text-blue-500'>150+</h1>
            <h3>community groups</h3>
          </div>
          <div className='flex flex-col w-1/3 h-28 px-6 py-2 bg-gray-200 rounded-xl border border-gray-200'>
            <h1 className='text-6xl font-bold text-blue-500'>50+</h1>
            <h3>countries represented</h3>
          </div>
        </div>

      {/* seventh container */}
        <div className='flex gap-5 mt-5'>
          <div className='flex flex-col p-8 h-[420px] rounded-xl border border-gray-200 bg-gray-200 gap-2'>
            <h1 className='font-semibold text-lg'>An always-on support network</h1>
            <p className='w-10/12'>Swap setups and share tips in over 149 online communities.</p>
            <img className='w-72' alt='img' src='https://www.notion.so/cdn-cgi/image/format=webp,width=384/front-static/pages/home/community-icons-V2.png'/>
          </div>
          <div className='flex flex-col p-8 rounded-xl border border-gray-200 bg-gray-200 gap-2'>
            <h1 className='font-semibold text-lg'>Choose your language</h1>
            <p className='w-[420px]'>Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!</p>
            <img className='w-[400px] mt-10' alt='img' src='https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png'/>
          </div>
        </div>

        {/* container with carousel */}
        <div className='flex gap-3 w-8/12 h-7/12  mt-5'>
          {/* carousal */}
            <Carousel2 images={photos}/>
        {/* cards */}
          <div className='flex flex-col gap-3'>
            {/* profile card */}
            <div className='flex flex-col border w-80 p-5 border-gray-200 rounded-xl bg-gray-200 gap-5'>
              <div className='flex gap-2'>
                <img className='w-12' alt='user' src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png'/>
                <div className='flex flex-col'>
                  <h1 className='font-semibold'>Deborah Mecca</h1>
                  <h2>@DebMecca</h2>
                </div>
              </div>
              <p>I used to HATE documenting things. And then I started using <span className='text-blue-500'>@NotionHQ</span> and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs.</p>
            </div>

            <div className='flex flex-col border w-80 p-5 border-gray-200 rounded-xl bg-gray-200 gap-5'>
              <div className='flex gap-2'>
                <img className='w-12' alt='user' src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-andre.png'/>
                <div className='flex flex-col'>
                  <h1 className='font-semibold'>André Blackman</h1>
                  <h2>@mindofandre</h2>
                </div>
              </div>
              <p>One of the most incredible things about <span className='text-blue-500'>@NotionHQ</span> is the dynamic community being built - creating and sharing at its best.</p>
            </div>

            <div className='flex flex-col border w-80 p-5 border-gray-200 rounded-xl bg-gray-200 gap-5'>
              <div className='flex gap-2'>
                <img className='w-12' alt='user' src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-oliver.png'/>
                <div className='flex flex-col'>
                  <h1 className='font-semibold'>Oliver Peyre</h1>
                  <h2>@opeyre</h2>
                </div>
              </div>
              <p><span className='text-blue-500'>@NotionHQ</span> Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!</p>
            </div>
          </div>
        </div>

      <div className='flex gap-28'>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <h2 className='text-4xl font-bold'>Endless ways to use it</h2>
          <h3 className='text-blue-500 hover:underline underline-offset-2'>Browse all templates→➡️</h3>
        </div>
        <img className='w-52' alt='img' src='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekJ.png'/>
      </div>

      <div className='flex mb-10 gap-5'>
        {/* first div */}
        <div className='flex flex-col p-5 bg-gray-200 border border-gray-200 rounded-xl'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-xl font-semibold'>Company wiki</h2>
            <h3 className='text-blue-500 hover:underline underline-offset-2'>Get template➡️</h3>
          </div>
          <img className='w-[420px] mt-32 ml-16' alt='img' src='https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/company-wiki-template.png'/>
        </div>
        {/* second div */}
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-10 bg-gray-200 border border-gray-200 rounded-xl px-5 py-10'>
            <h2 className='text-xl font-bold'>Product roadmap</h2>
            <h3 className='text-blue-500 hover:underline underline-offset-2'>Get template➡️</h3>
          </div>
          <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-10 bg-gray-200 border border-gray-200 rounded-xl px-5 py-10'>
            <h2 className='text-xl font-bold'>Meeting notes</h2>
            <h3 className='text-blue-500 hover:underline underline-offset-2'>Get template➡️</h3>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-10 bg-gray-200 border border-gray-200 rounded-xl px-5 py-10'>
            <h2 className='text-xl font-bold'>Editorial calender</h2>
            <h3 className='text-blue-500 hover:underline underline-offset-2'>Get template➡️</h3>
          </div>
        </div>
        </div>
       
        {/* third div */}
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-10 bg-gray-200 border border-gray-200 rounded-xl px-5 py-10'>
            <h2 className='text-xl font-bold'>OKRs</h2>
            <h3 className='text-blue-500 hover:underline underline-offset-2'>Get template➡️</h3>
          </div>
          <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-10 bg-gray-200 border border-gray-200 rounded-xl px-5 py-10'>
            <h2 className='text-xl font-bold'>Vacation planner</h2>
            <h3 className='text-blue-500 hover:underline underline-offset-2'>Get template➡️</h3>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-10 bg-gray-200 border border-gray-200 rounded-xl px-5 py-10'>
            <h2 className='text-xl font-bold'>Habit tracker</h2>
            <h3 className='text-blue-500 hover:underline underline-offset-2'>Get template➡️</h3>
          </div>
        </div>
        </div>
      </div>

    <div className='mt-10 flex flex-col mb-10 items-center justify-center gap-2'>
      <h1 className='text-6xl font-bold'>Get started for free</h1>
      <p className='mb-2'>Play around with it first. Pay and add your team later.</p>
      <div className='flex gap-5 items-center'>
        <button className='text-lg font-bold text-white bg-black px-3 py-1 rounded-lg'>Try Notion free</button>
        <h3 className='text-blue-500 hover:underline underline-offset-2'>Request a demo ➡️</h3>
      </div>
    </div>
    <img className='mb-10' alt='img' src='https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png'/>
    </div>
  )
}

export default Body