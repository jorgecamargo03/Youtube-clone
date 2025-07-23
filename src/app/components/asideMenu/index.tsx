//icons aside
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import {  IoTimeOutline } from "react-icons/io5";
import { FaRegCompass,} from "react-icons/fa";
import { AiFillHome, AiOutlineLike } from "react-icons/ai";
import { RiPlayList2Line } from "react-icons/ri";
import { GoHistory } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
//image
import YoutubeLogo from '../../assets/logoYoutube.png'
//outros
import Image from 'next/image';

type props = {
    showAside:boolean
    setShowAside:React.Dispatch<React.SetStateAction<boolean>>
}
const index = ({setShowAside,showAside}:props) => {
    const config = "flex items-center gap-3 text-white py-1.5 px-2 transition-colors ease-in-out duration-200 normie text-sm"

  return (
    <aside className={`
    fixed top-0 left-0 h-full w-[240px] bg-zinc-950 shadow-lg z-20
    transform transition-transform duration-300 ease-in-out
    ${showAside ? 'translate-x-0' : '-translate-x-full'}
     
  `}>
          <div className="flex gap-5">
            <button className="ml-3">
              <RxHamburgerMenu className="text-3xl mr-2   text-white block " onClick={() => setShowAside(!showAside)} />
            </button>

            <a className="relative mr-1" href="https://www.youtube.com/">
              <div>
                <Image src={YoutubeLogo} alt="Logo youtubw" className="h-auto w-[100px] max-w-full min-w-[90px]" />
              </div>


              <span
                className="absolute top-4 right-[-10px] text-[9px] text-zinc-400">BR</span>
            </a>
          </div>
          <nav className="flex flex-col gap-2 ml-2 mt-5 relative">
            <a className="flex  items-center gap-3 text-white p-2 active text-sm">
              <AiFillHome className="text-lg" />
              Início
            </a>

            <a className={config}>
              <FaRegCompass className="text-lg" />
              Explorar
            </a>
            <a className={config}>
              <RiPlayList2Line className="text-lg" />
              Inscrições
            </a>

            <hr className="mx-2 border-gray-400" />
            <p className="flex items-center text-lg ml-2 transition ease-in-out duration-300 hover:bg-zinc-800 mx-2 rounded-sm py-1 ">Você <MdOutlineKeyboardArrowRight className="text-xl" /></p>

            <a className={config}>
              <GoHistory className="text-lg" />
              Inscrições
            </a>
            <a className={config}>
              <IoTimeOutline className="text-lg" />
              Assistir Mais tarde
            </a>
            <a className={config}>
              <AiOutlineLike className="text-lg" />
              Videos Marcados
            </a>

            <hr className="mx-2 border-gray-400" />
            <a className={config}>
              <div className="h-8 w-8 rounded-full bg-red-800"></div>
              Tech-channel
            </a>
            <a className={config}>
              <div className="h-8 w-8 rounded-full bg-green-800"></div>
              Josia clona cartao
            </a>
            <a className={config}>
              <div className="h-8 w-8 rounded-full bg-blue-800"></div>
              Alarga Rego
            </a>



          </nav>

        </aside>
  )
}

export default index
