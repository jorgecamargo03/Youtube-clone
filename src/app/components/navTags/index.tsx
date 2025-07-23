'use client'
import React,{useState} from 'react'
import { useVideos} from '@/app/hook/videsHook'
type props={
   showAside:boolean
   showInput:boolean
}

const Index = ({showAside,showInput}:props) => {
    const [isActive, setisActive] = useState('Tudo')
    const {tags} = useVideos()
    const tagClass = " px-2 py-1 rounded-sm text-sm trasition-colors ease-in-out duration-300";
  return (
    <div className={` z-90
    overflow-x-auto scrollbar-hide max-w-full rounded-xs mx-3
    transition-all duration-100 ease-in-out
     fixed self-start
     top-20
     shrink-0
     mt-2
     
     ${showInput ? '' : ''}
    ${showAside ? 'lg:ml-[260px]' : ''}
    `}>

            <nav className="flex gap-2  whitespace-nowrap w-max shrink-0">


              {tags.map((tag, index) => {
                const Iselected = isActive === tag

                return (

                  <button
                    key={index}
                    className={`${tagClass} ${Iselected ? 'bg-gray-50 text-zinc-950' : 'bg-zinc-800 text-white shrink-0'}`}
                    onClick={() => {
                      console.log(tag);
                      setisActive(tag)
                    }
                    }>{tag}</button>)

              })}

            </nav>
          </div>
  )
}

export default Index
