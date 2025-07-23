import React from 'react'

//icons 
import { AiFillHome } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";

//images
import Youtube_shorts from '../../assets/logoYt-shorts.png'


//outros
import Image from 'next/image'
import AsideMenu from '../asideMenu'

import GridVideos from '../GridVideos'


type props = {
    showAside:boolean
    setShowAside:React.Dispatch<React.SetStateAction<boolean>>
}

const index = ({setShowAside,showAside}:props) => {
  return (
   <div className=" flex mt-[100px] ">

        <div className="fixed bg-zinc-250 h-full top-30 left-0 hidden sm:block ">
          <nav className="flex flex-col gap-5 ml-2 ">
            <button className="flex justify-center items-center flex-col text-xs transition-colors ease-in-out duration-200 hover:bg-zinc-700 p-3 rounded-lg">
              <AiFillHome className="text-2xl" />
              Início
            </button>
            <button className="flex justify-center items-center flex-col  transition-colors ease-in-out duration-200 hover:bg-zinc-700 p-3 rounded-lg text-xs">
               <Image src={Youtube_shorts} className="w-9 h-auto" alt="logo-shorts"/> 
              Shorts
            </button>
            <button className="flex justify-center items-center  transition-colors ease-in-out duration-200 hover:bg-zinc-700 p-3 rounded-lg flex-col text-[11px]">
              <MdOutlineSubscriptions className="text-2xl" />
              Inscrições
            </button>
            <button className="flex justify-center items-center  transition-colors ease-in-out duration-200 hover:bg-zinc-700 p-3 rounded-lg flex-col text-xs">
              <IoPersonCircleOutline className="text-2xl" />
              Você
            </button>
          </nav>
        </div>
        

        <AsideMenu setShowAside={setShowAside} showAside={showAside}/>

        <main className={`transition-all duration-300 flex-1 min-w-0 ml-[0px] ${showAside ? 'lg:ml-[240px]' : ''} sm:ml-[85px]`}>

  


          <GridVideos/>

        </main>

      </div>
  )
}

export default index
