import React from 'react';
import hero from '../assets/hero.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">i'm a Full Stack Developer</h2><br />
                <h2 className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">M. Annadvi Jundi Abdurobbirosul</h2>
                <p className="text-gray-500 py-4 max-w-md text-xl">
                I'm a passionate and results-driven Full Stack Programmer with a year of hands-on experience in creating dynamic and efficient web applications. My journey in the world of programming began with a fascination for turning ideas into functional, user-friendly software.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-500">
                        <MdOutlineKeyboardArrowRight size={22} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={hero} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home