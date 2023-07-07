import { playlistandpods } from '@/data/playlistdata'
import React from 'react'

const PlayListsandPodCasts = () => {
  return (
    <div className='flex overflow-x-auto bar my-4 items-center gap-x-4 '>
        {playlistandpods.map((item) => (
            <main className=' bg-neutral-600/60  flex items-center justify-center  text-center p-1 h-8  rounded-2xl' key={item.id}>
                <p className=' text-white text-center w-32 text-xs capitalize font-semibold'>{item.name}</p>
            </main>
        ))}
    </div>
  )
}

export default PlayListsandPodCasts