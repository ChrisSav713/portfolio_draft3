import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'

function Projects() {
  return (
    <div className='bg-white'>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Projects
          </h2>
          <Card />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </div>
  )
}

export default Projects
