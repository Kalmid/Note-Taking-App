import React from 'react'
import NotesComponent from '../components/NotesComponent'

const Notes = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Notes
                </h1>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
                <NotesComponent/>
                <NotesComponent/>
                <NotesComponent/>
                <NotesComponent/>
            </div>
        </div>
    </section>
  )
}

export default Notes
