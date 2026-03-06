import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 body-font text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to={"/"}>
                <img src='/note.svg' alt='logo' height="60" width="60"/>
                <span className="ml-3 text-xl">Notes Taking App</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link className="mr-5 hover:text-gray-900" to={"/"}>Home</Link>
                <Link className="mr-5 hover:text-gray-900" to={"/notes"}>Notes</Link>
            </nav>
        </div>
    </header>

  )
}

export default Header
