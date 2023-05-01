import React from 'react'

function Card() {
  return (
    <>
      {/* Be sure to use this with a layout container that is full-width on mobile */}
      <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          {
            <div className='grid-cols-2'>
              <div>
                <img src='https://d33wubrfki0l68.cloudfront.net/74f6186aaa2b6d5f6ea6da1013abfeb672f5c807/aee81/assets/jpeg/crown-template.jpeg'></img>
              </div>
              <div>
                <h2>Dopefolio</h2>
                <p>
                  Dopefolio is a successful Open-Source project that I created
                  which have been featured on some of the biggest tech sites
                  like CSS-Tricks, Hostinger, etc & used by thousands of
                  developers globally
                </p>
                <button></button>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Card
