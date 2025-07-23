import React from 'react'
import video from '@/app/types/videotype'
import Image from 'next/image'

type props = {
    video: video
}
const index = ({ video }: props) => {
    return (
        <div className=" flex flex-col">

            <div className="relative">

                <Image
                    src={video.thumbnail}
                    alt=""
                    width={320}
                    height={180}
                    className="rounded-lg w-full"
                />


                <span className={`text-white bg-gray-950 text-xs absolute  p-0.5 rounded-xs bottom-1 right-1 
                  ${video.isLive ? 'bg-red-500 top-2  right-2 h-5 px-1' : ''}`}>{video.duration !== null ? video.duration : 'Ao vivo'}</span>
            </div>

            <div className="mt-3 flex  gap-2 ">

                <Image 
                className="h-9 w-9 bg-zinc-700  shrink-0 rounded-full block " src={video.thumbnail + 1} alt='' 
                width={320} 
                height={180}/>

                <div className="text-sm text-white">
                    <p className="text-gray-50 text-base line-clamp-2">{video.title}</p>
                    <p className="text-gray-500 text-sm">{video.channel}</p>
                    <p className="text-gray-500 text-sm ">
                        {video.views} {video.isLive ? 'Assistindo' : 'Visualizações'} • {video.time}</p>
                    <p className="text-gray-500 text-sm "></p>
                </div>
            </div>

        </div>
    )
}

export default index
