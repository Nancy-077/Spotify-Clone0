import React from 'react'
import Navbar from './navbar'
import { albumsData} from '../assets/assets'
import AlbumItem from './AlbumItem'

import {songsData} from '../assets/assets'
import SongItem from './songItem'


const displayHome = () => {
  return (
   <div>
   <Navbar/>

  <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>featured charts</h1>
    <div className='flex overflow-auto'>
    {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
  </div>
  </div>

  <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Today's biggest Hits</h1>
    <div className='flex overflow-auto'>
      {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
  </div>
  </div>


  

   </div>
  )
}

export default displayHome