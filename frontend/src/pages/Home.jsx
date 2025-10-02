import React from 'react'
import { useNavigate } from 'react-router-dom';
import GridMotion from '../components/GridMotion';
import image1 from '../assets/homeImages/slide1.jpg'
import image2 from '../assets/homeImages/slide2.jpg'
import image3 from '../assets/homeImages/slide3.jpg'
import image4 from '../assets/homeImages/slide4.jpg'
import image5 from '../assets/homeImages/slide5.jpg'
import image6 from '../assets/homeImages/slide6.jpg'
import image7 from '../assets/homeImages/slide7.jpg'
import image8 from '../assets/homeImages/slide8.jpg'
import image9 from '../assets/homeImages/slide9.jpg'
import image10 from '../assets/homeImages/slide10.jpg'
import image11 from '../assets/homeImages/slide11.jpg'
import image12 from '../assets/homeImages/slide12.jpg'
import image13 from '../assets/homeImages/slide13.jpg'
import image14 from '../assets/homeImages/slide14.jpg'

const items = [
    
    <div key='jsx-1' className="text-4xl md:text-6xl font-extrabold uppercase text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)] rounded-xl transform scale-105 hover:scale-110 transition-transform duration-300 animate-bounce" style={{ fontFamily: "'Baloo 2', cursive" }}>Daebak<br />DOODLE</div>,
    <img key="img-1" src={image5} alt="BOF" />,

    
    <div key='jsx-2' className="text-2xl md:text-4xl drop-shadow-md tracking-wide text-center animate-pulse">
        <span className="font-bold text-purple-400">where doodles</span>{" "}
        <span className="font-extrabold text-pink-400 italic">meet K-pop drama</span>
    </div>,
    <img key="img-2" src={image7} alt="BTS" />,
    
    
    <div key='jsx-3' className="text-4xl md:text-6xl font-extrabold uppercase text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)] rounded-xl transform scale-105 hover:scale-110 transition-transform duration-300 animate-bounce" style={{ fontFamily: "'Baloo 2', cursive" }}>Daebak<br />DOODLE</div>,
    <img key="img-3" src={image4} alt="TrueBeauty" />,

    
    <div key='jsx-4' className="text-2xl md:text-4xl drop-shadow-md tracking-wide text-center animate-pulse">
        <span className="font-bold text-purple-400">where doodles</span>{" "}
        <span className="font-extrabold text-pink-400 italic">meet K-pop drama</span>
    </div>,
    <img key="img-4" src={image8} alt="BTS" />,

    
    <div key='jsx-5' className="text-4xl md:text-6xl font-extrabold uppercase text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)] rounded-xl transform scale-105 hover:scale-110 transition-transform duration-300 animate-bounce" style={{ fontFamily: "'Baloo 2', cursive" }}>Daebak<br />DOODLE</div>,
    <img key="img-5" src={image3} alt="BOF" />,

    <div key='jsx-6' className="text-2xl md:text-4xl drop-shadow-md tracking-wide text-center animate-pulse">
        <span className="font-bold text-purple-400">where doodles</span>{" "}
        <span className="font-extrabold text-pink-400 italic">meet K-pop drama</span>
    </div>,
    <img key="img-6" src={image9} alt="BTS" />,
    
    <div key='jsx-7' className="text-4xl md:text-6xl font-extrabold uppercase text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)] rounded-xl transform scale-105 hover:scale-110 transition-transform duration-300 animate-bounce" style={{ fontFamily: "'Baloo 2', cursive" }}>Daebak<br />DOODLE</div>,
    <img key="img-7" src={image2} alt="BOF" />,

    <div key='jsx-8' className="text-2xl md:text-4xl drop-shadow-md tracking-wide text-center animate-pulse">
        <span className="font-bold text-purple-400">where doodles</span>{" "}
        <span className="font-extrabold text-pink-400 italic">meet K-pop drama</span>
    </div>,
    <img key="img-8" src={image10} alt="BTS" />,
    
    <div key='jsx-9' className="text-4xl md:text-6xl font-extrabold uppercase text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)] rounded-xl transform scale-105 hover:scale-110 transition-transform duration-300 animate-bounce" style={{ fontFamily: "'Baloo 2', cursive" }}>Daebak<br />DOODLE</div>,
    <img key="img-9" src={image1} alt="BOF" />,

    <div key='jsx-10' className="text-2xl md:text-4xl drop-shadow-md tracking-wide text-center animate-pulse">
        <span className="font-bold text-purple-400">where doodles</span>{" "}
        <span className="font-extrabold text-pink-400 italic">meet K-pop drama</span>
    </div>,
    <img key="img-10" src={image11} alt="BTS" />,
    
    <div key='jsx-11' className="text-4xl md:text-6xl font-extrabold uppercase text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)] rounded-xl transform scale-105 hover:scale-110 transition-transform duration-300 animate-bounce" style={{ fontFamily: "'Baloo 2', cursive" }}>Daebak<br />DOODLE</div>,
    <img key="img-11" src={image6} alt="BOF" />,

    <div key='jsx-12' className="text-2xl md:text-4xl drop-shadow-md tracking-wide text-center animate-pulse">
        <span className="font-bold text-purple-400">where doodles</span>{" "}
        <span className="font-extrabold text-pink-400 italic">meet K-pop drama</span>
    </div>,
    <img key="img-12" src={image13} alt="BTS" />,
    
    <div key='jsx-13' className="text-4xl md:text-6xl font-extrabold uppercase text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)] rounded-xl transform scale-105 hover:scale-110 transition-transform duration-300 animate-bounce" style={{ fontFamily: "'Baloo 2', cursive" }}>Daebak<br />DOODLE</div>,
    <img key="img-13" src={image14} alt="BOF" />,

    <div key='jsx-14' className="text-2xl md:text-4xl drop-shadow-md tracking-wide text-center animate-pulse">
        <span className="font-bold text-purple-400">where doodles</span>{" "}
        <span className="font-extrabold text-pink-400 italic">meet K-pop drama</span>
    </div>,
    <img key="img-14" src={image12} alt="BTS" />,
    

];

const Home = () => {

    const navigate = useNavigate();
    return (
        <div className="relative w-full h-screen">

            <GridMotion items={items} />

            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-900/40 to-indigo-900/60 backdrop-blur-[2px] mix-blend-multiply z-10"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
                <button 
                    onClick={() => navigate('/themeSelection')}
                    className="relative inline-block text-white font-bold text-lg tracking-wider uppercase px-8 py-4 border-2 border-pink-400  shadow-2xl z-10 transition-all duration-300 ease-in-out active:scale-90 before:absolute before:top-0 before:left-1/2 before:right-1/2 before:bottom-0  before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-blue-400 before:z-[-1] before:opacity-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:right-0 hover:before:opacity-100">
                    Start Game
                </button>
                <button className="relative inline-block text-white font-bold text-lg tracking-wider uppercase px-8 py-4 border-2 border-purple-400  shadow-2xl z-10 transition-all duration-300 ease-in-out active:scale-90 before:absolute before:top-0 before:left-1/2 before:right-1/2 before:bottom-0  before:bg-gradient-to-r before:from-purple-600 before:via-fuchsia-500 before:to-purple-400 before:z-[-1] before:opacity-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:right-0 hover:before:opacity-100">
                    How to Play
                </button>
            </div>
        </div>
    )
}

export default Home
