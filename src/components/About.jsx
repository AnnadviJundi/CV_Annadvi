import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
            In my one-year journey, I've honed my skills in both front-end and back-end development. On the front end, I specialize in crafting intuitive and visually appealing user interfaces using technologies such as HTML, CSS, and JavaScript (React.js). 
            </p>

            <br />

            <p className="text-xl">
            The tech world is ever-evolving, and I am committed to staying ahead of the curve. I actively seek out new technologies and frameworks to enhance my skill set. I believe in the power of continuous learning and embrace each project as an opportunity to expand my knowledge base.
            </p>
        </div>
    </div>
  )
}

export default About