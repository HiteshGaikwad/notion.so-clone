import React from 'react'
import logo from '../images/logo.png'
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import linkedin from "../images/linkedin.png";


const Footer = () => {
  return (
    <div className='flex flex-col gap-20 pb-20 pt-5 items-center'>

      {/* main top container */}
      <div className='flex gap-32'>
         {/* social media container */}
        <div className='flex flex-col gap-5'>
          {/* logo & name */}
        <div className='flex items-center'>
                <img className='w-14' alt='logo' src={logo}/>
                <h1 className='text-lg font-semibold'>Notion</h1>
            </div>

            {/* social media  */}
            <div className='flex gap-4 items-center'>
              <img className='w-10 grayscale mix-blend-darken hover:grayscale-0 hover:bg-gray-200 rounded-lg' alt='instagram icon' src={instagram}></img>
              <img className='w-6 h-6 grayscale hover:grayscale-0' alt='twitter icon' src={twitter}></img>
              <img className='w-6 h-6 grayscale hover:grayscale-0' alt='linkedin icon' src={linkedin}></img>
              <img className='w-6 h-6 grayscale hover:grayscale-0' alt='facebook icon' src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg'></img>
              <img className='w-9 h-9 grayscale hover:grayscale-0' alt='youtube icon' src={youtube}></img>
            </div>
            <select className='w-32 px-3 py-1 hover:bg-gray-200 border border-gray-300 outline-none'>
              <option value="English">
                English (US)
              </option>
              <option value="Français">
              Français (France)
              </option>
              <option value="Deutsch">
                Deutsch (German)
              </option>
              <option value="日本語">
                日本語 (Japanese)
              </option>
              <option value="한국어">
                한국어 (Korean)
              </option>
              <option value="Português">
                Português (Brasil)
              </option>
              <option option="Español">
                Español (Latinoamérica) Spanish
              </option>
              <option value="Español">
                Español (España)(Spain) 
              </option>
            </select>
        </div>

        {/* first tags container */}
        <div className='flex flex-col gap-10'>
          {/* products */}
          <div>
            <ul>
              <span className='text-[17px] font-bold'>Product</span>
              <li className='text-sm text-gray-500 pt-3 px-1 pb-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Wikis</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Projects</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Docs</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Notion AI</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>What's new</li>
            </ul>
          </div>
          {/* solutions */}
          <div>
            <ul>
              <span className='text-[17px] font-bold'>Solutions</span>
          <li className='text-sm text-gray-500  pt-3 px-1 pb-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Enterprise</li>
          <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Small business</li>
          <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Personal use</li>
          <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Remote work</li>
          <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Startups</li>
          <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Education</li>
          <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Noprofits</li>
          <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Engineering</li>
          <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Product</li>
          <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Design</li>
          <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Managers</li>
          </ul>
          </div>

          </div>

          {/* second tags container */}
          <div className='flex flex-col gap-10'>
          <div>
            <span className='text-[17px] font-bold'>Download</span>
            <ul>
              <li className='text-sm text-gray-500 pt-3 px-1 pb-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>iOS & Android</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Mac & Windows</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Web Clipper</li>
            </ul>
          </div>
          <div>
            <span className='text-[17px] font-bold'>Build</span>
            <ul>
              <li className='text-sm text-gray-500 pt-3 px-1 pb-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Integrations</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Templates</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>API docs</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Guides & tutorials</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Hire a consultant</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Become an affiliate</li>
            </ul>
          </div>
          <div>
            <span className='text-[17px] font-bold'>Learn</span>
            <ul>
              <li className='text-sm text-gray-500 pt-3 px-1 pb-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Customer stories</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Help center</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Webinars</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Blog</li>
              <li className='text-sm text-gray-500 p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Community</li>
              </ul>
          </div>
          </div>

          {/* third tags container */}
          <div className='flex flex-col gap-10'>
          <div>
            <span className='text-[17px] font-bold'>Get started</span>
            <ul>
              <li className='text-sm text-gray-500  pt-3 px-1 pb-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Switch from Confluence</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Switch from Asana</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Switch from Evernote</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Compare vs Monday</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Compare vs Clickup</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Compare vs Jira</li>
            </ul>
          </div>
          <div>
            <span className='text-[17px] font-bold'>Resources</span>
            <ul>
              <li className='text-sm text-gray-500  pt-3 px-1 pb-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Pricing</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>About us</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Careers</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Media kit</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Email us</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Security</li>
              <li className='text-sm text-gray-500  pt-3 px-1 pb-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Cookie settings</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Terms & privacy</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>California Privacy Notice</li>
              <li className='text-sm text-gray-500  p-1 font-semibold hover:text-blue-600 hover:underline underline-offset-2'>Status</li>
            </ul>
          </div>
          </div>
      </div>
      <div className='flex flex-col gap-2'>
      <h2 className='text-sm font-semibold'>Do Not Sell or Share My Info</h2>
      <h3 className='text-sm text-gray-600'>© 2023 Notion Labs, Inc.</h3>
      </div>
    </div>
  )
}

export default Footer