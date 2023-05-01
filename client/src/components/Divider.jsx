import react from 'react'

function Divider() {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full border-t border-gray-300' />
      </div>
      <div className='relative flex justify-center'>
        <hr className='bg-gray-300 px-2 py-5 text-gray-500' />
      </div>
    </div>
  )
}

export default Divider
