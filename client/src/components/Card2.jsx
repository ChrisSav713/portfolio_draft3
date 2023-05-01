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
                <h2>Wilsonport</h2>
                <p>
                  Wilsonport is a multiservice logistics and transport company
                  and I created their website from scratch using the frontend
                  tools I know
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
