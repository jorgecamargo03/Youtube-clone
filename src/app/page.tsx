'use client'

import { useState } from "react";
import Header from './components/header'
import CONTENTPRINCIPAL from './components/CONTENTPRINCIPAL'


export default function Home() {
  const [showAside, setShowAside] = useState(false)
  return (

    <div className=" min-h-screen  bg-zinc-950 overflow-hidden">

      <Header setShowAside={setShowAside} showAside={showAside}/>


      <CONTENTPRINCIPAL setShowAside={setShowAside} showAside={showAside}/> 


    </div>
  );
}