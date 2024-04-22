import React from 'react'
import tictactoe from '../assets/portfolio/tictactoe.png'
import loginAnimated from '../assets/portfolio/loginAnimated.png'
import imageSlider from '../assets/portfolio/imageSlider.png'
import market from '../assets/portfolio/market.png'

const Portfolio = () => {

    const portfolio = [
        {
            id:1,
            src: market,
            title:"E-Commerce Website",
            sumber: "https://qshop-project.vercel.app/",
            href:"https://github.com/AnnadviJundi/tugas-kelompok-react-js"
        },
        {
            id:2,
            src: imageSlider,
            title:"Image Slider HTML CSS JS",
            sumber: "https://image-slider-alpha.vercel.app/",
            href:"https://github.com/AnnadviJundi/Image-Slider-Using-HTML-CSS-and-JavaScript"
        },
        {
            id:3,
            src: tictactoe,
            title:"Tic Tac Toe",
            sumber: "https://tic-tac-toe-nu-ashen.vercel.app/",
            href:"https://github.com/AnnadviJundi/Tic-Tac-Toe"
        },
        {
            id:4,
            src: loginAnimated,
            title:"Animated Login",
            sumber: "https://login-form-animated.vercel.app/",
            href:"https://github.com/AnnadviJundi/login-form-animated"
        },
    ]

        
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check Out some of my work right here</p>
            </div>

            <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                portfolio.map(({id,title, src, sumber, href}) =>(

                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>

                        <p className='mt-4 flex items-center justify-center font-bold text-blue-200'>{title}</p>

                        <div className="flex items-center justify-center">
                            <a href={sumber} className="w-1/2 px-10 py-4 m-4 duration-200 hover:scale-105 text-white" target="_blank" rel="noreferrer">Demo</a>
                            <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white" target="_blank" rel="noreferrer">Code</a>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>

    </div>
  )
}

export default Portfolio