//Icones header
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone, FaKeyboard } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlinePlus } from "react-icons/hi";


// images header
import YoutubeLogo from '../../assets/logoYoutube.png';
//outros 
import Image from 'next/image';
import NavTags from '../navTags'

type props = {
    showAside:boolean
    setShowAside:React.Dispatch<React.SetStateAction<boolean>>

}

const index = ({showAside,setShowAside}:props) => {
  return (
     <header className='flex flex-col fixed top-[-10px] right-0 z-20 w-full bg-zinc-950/90 pb-5 backdrop-blur-xs'>

        <div className=" px-3  flex justify-between   items-center">

        <div className="flex  items-center gap-3">

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

        <form className="flex justify-center 
         items-center gap-2 flex-1 px-3">

          <div className="relative w-full max-w-[600px]">

            <input type="text" placeholder="Pesquisar"
              className="border border-gray-700 focus:outline-none focus:border-blue-800 rounded-l-full w-full text-gray-50 h-10 px-2 hidden sm:block" />

            <FaKeyboard className="absolute top-1/3 text-lg right-2 text-white hidden sm:block" />
          </div>

          <button className="cursor-pointer h-10 w-10  flex justify-center items-center text-xl border border-none
          text-gray-50 rounded-full 
          ml-[-9px]
          sm:rounded-r-full
          sm:rounded-l-none
          transition-colors duration-300 ease-in-out
          hover:bg-zinc-800
          bg-transparent
          sm:border-gray-800
          sm:w-14
          sm:bg-zinc-800">
            <IoSearch />
          </button>

          <button className="cursor-pointer h-10 w-10  flex justify-center items-center text-xl border border-none
          text-gray-50 rounded-full 
          sm:rounded-r-full
          sm:rounded-l-none
          transition-colors duration-300 ease-in-out
          hover:bg-zinc-800
          bg-transparent
          sm:border-gray-800
          sm:w-12">
            <FaMicrophone />
          </button>
        </form>

        <nav className="flex items-center gap-1">

          <button className="text-white h-10 w-auto px-3 flex justify-center items-center gap-1  transition duration-300 ease-in-out rounded-full hover:bg-zinc-800">

            <span className="font-thin font-3xl">
              <HiOutlinePlus />
            </span>

            Criar
          </button>
          <button className="text-white  h-10 w-10 flex justify-center items-center text-[25px] transition duration-300 ease-in-out rounded-full notification ">
            <IoIosNotificationsOutline />
          </button>
          <button className="flex bg-red-600 w-9 h-9 justify-center items-center rounded-full text-[20px] ">
            J
          </button>


        </nav>
        </div>

        <NavTags showAside={showAside}/>
        
      </header>
  )
}

export default index
