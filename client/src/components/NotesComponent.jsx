import React from 'react'

const NotesComponent = () => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <h2 className="title-font font-medium text-3xl text-gray-900">
                Title
            </h2>
            <p className="leading-relaxed mt-3">This is Description</p>
            <div className='flex gap-3 justify-center mt-5'>
                <button className='border p-2 rounded bg-green-800 text-white'>Edit</button>
                <button className='border p-2 rounded bg-red-600 text-white'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default NotesComponent
