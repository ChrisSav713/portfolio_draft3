import React from 'react'

function About() {
  return (
    <div className='bg-gray-200'>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600'>
            I recently graduated a coding bootcamp at Coding Dojo that covered
            full stack web development in Java, Python, and MERN (react)
          </p>
          <hr></hr>
          <p pt-5>Check out my diploma here!</p>
          <div className='mt-5 flex items-center justify-center gap-x-6'>
            <a
              href='https://app.diplomasafe.com/en-US/claim/de6571b39e33c8b9115bb0f1605199734009699d9/6d8cda6bb6cf07baad0630572ef6f458cba12fa7824433ea167317674ba10f5c?from=email_claim'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-md bg-slate-500 px-3.5 py-2.5 text-2xl font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200'
            >
              🎓
              <img
                className='list-image-none'
                src='https://cutecdn.codingdojo.com/svg_images/logos/coding_dojo_white_new_version.svg'
                href='codingdojo.com'
                target='_blank'
                rel='noopener noreferrer'
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
