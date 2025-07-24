//Icones header
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import {  FaKeyboard } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlinePlus } from "react-icons/hi";
import { IoMdArrowBack } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { HiMiniMicrophone } from "react-icons/hi2";
import './index.scss'

// images header
import YoutubeLogo from '../../assets/logoYoutube.png';
//outros 
import Image from 'next/image';
import NavTags from '../navTags'

type props = {
  showAside: boolean
  setShowAside: React.Dispatch<React.SetStateAction<boolean>>

}

const Index = ({ showAside, setShowAside }: props) => {

  const [showInput, setShowInput] = useState(false)
  const [inputValue,setInputValue]=useState('')

  return (
    <header className='flex flex-col fixed top-[-10px] right-0 z-20 w-full bg-zinc-950/90 pb-5 backdrop-blur-xs h-32'>

      <div className=" px-3  flex justify-between   items-center">

        <div className={`flex   items-center  gap-3 ${showInput ? 'hidden sm:flex' : ''}`}>

          <button>
            <RxHamburgerMenu className="text-3xl mr-3  text-white block " onClick={() => setShowAside(!showAside)} />
          </button>

          <a className="relative mr-1" href="https://www.youtube.com/">
            <div>
              <Image src={YoutubeLogo} alt="Logo youtubw" className="h-auto w-[100px] max-w-full min-w-[90px]" />
            </div>


            <span
              className="absolute top-4 right-[-10px] text-[9px] text-zinc-400">BR</span>
          </a>

        </div>


        <form className={`flex justify-center 
         items-center gap-2 flex-1 px-3 ${showInput ? 'mt-[23px] sm:mt-[2px]  py-2' : ''}`}>


          <div className={` ${showInput ? 'block sm:hidden' : 'hidden'}`}>
            <button
              type='button'
              className={`
                
               hover:bg-zinc-800  p-2 rounded-full
                 self-center text-2xl
                 transition-colors duration-150 ease-in
                 `}
              onClick={() => setShowInput(!showInput)}>
             <IoMdArrowBack />
            </button>
          </div>


          <div className="relative w-full max-w-[600px]">

            <input type="text" placeholder="Pesquisar"
              value={inputValue}
              onChange={(e)=>setInputValue(e.target.value)}
              className={`border border-zinc-700/99 focus:outline-none focus:border-blue-800 rounded-l-full w-full text-gray-50 h-10 px-2  ${showInput ? 'block' : 'hidden sm:block'}`} />

            <FaKeyboard className={`absolute z-[90] top-1/4 text-xl right-2 text-white 
            ${showInput ? 'block' : 'hidden sm:block'} ${inputValue!=='' ? 'right-12' : ''}`}
             />
             {inputValue!=='' ? 
             <div className='absolute right-0 top-[1.7px] h-9 w-9 hover:bg-zinc-700 
             flex justify-center items-center rounded-full p-0.5'
             onClick={()=>setInputValue('')}>
              <TfiClose className=' text-xl
               '/>
            </div>
:''}
             


          </div>

         <div className='flex '>
          <button type='button'
            onClick={() => setShowInput(!showInput)}
            className={`cursor-pointer h-10 w-10  flex justify-center items-center text-2xl border border-none
          text-gray-50 rounded-full 
          ml-[-9px]
          shrink-0
          sm:rounded-r-full
          sm:rounded-l-none
          transition-colors duration-300 ease-in-out
          hover:bg-zinc-800
          bg-transparent
          sm:border-gray-800
          sm:w-14
          ${showInput ? 'bg-zinc-800 w-14 rounded-l-none' : ''}
          sm:bg-zinc-800`}>
            <CiSearch />
          </button>

          <button type='button' className="cursor-pointer h-10 w-10  flex justify-center items-center text-xl border border-none
          text-gray-50 rounded-full 
          sm:rounded-r-full
          sm:rounded-l-none
          shrink-0
          transition-colors duration-300 ease-in-out
          hover:bg-zinc-800
          bg-transparent
          md-hide
          sm:border-gray-800
          sm:w-12">
            <HiMiniMicrophone/>
          </button>
             </div>
        </form>

        <nav className={`flex items-center gap-1  ${showInput ? 'hidden sm:flex' : ''}`}>

          <button className="text-white h-10 w-auto px-3 flex justify-center items-center gap-1  transition duration-300 ease-in-out rounded-full bg-zinc-800 hover:bg-zinc-700">

            <span className="font-thin font-3xl">
              <HiOutlinePlus />
            </span>

            Criar
          </button>
          <button className="text-white  h-10 w-10 flex justify-center items-center text-[25px] transition duration-300 ease-in-out rounded-full notification md-hide ">
            <IoIosNotificationsOutline />
          </button>
          <button className="flex bg-red-600 w-9 h-9 justify-center items-center rounded-full text-[20px] ">
            J
          </button>


        </nav>
      </div>

      <NavTags showAside={showAside} showInput={showInput} />

    </header>
  )
}

export default Index
