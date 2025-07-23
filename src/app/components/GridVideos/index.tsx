'use client'
import React from 'react'
import { useVideos } from '../../hook/videsHook';
import CardVideo from '../CardVideo'

const Index = () => {
    const {Videos} = useVideos()

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 py-6 ">
            {Videos.map((video, index) => (

                <CardVideo video={video} key={index}/>


            ))}
        </div>
    )
}

export default Index
