import React from 'react'

function Intro() {
  return (
    <div className='bg-white'>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Hi, I'm Chris!
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-900'>
            A Frontend focused Web Developer... ect...
          </p>
          <div className='mt-5 flex items-center justify-center gap-x-6'>
            <a
              href='https://docs.google.com/document/d/1p8qikRzBI09lwJ5fSjk3285CT7m1wUHDlXLujKqbtWo/edit'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-md bg-slate-200 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200'
            >
              link to something
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
