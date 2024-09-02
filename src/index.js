import React from "react"
import ReactDOM from "react-dom/client"
import Image from './images.jpeg'
import './styles.css'
import twitter from './twitter.png'
import facebook from './facebook.webp'
import instagram from './Instagram.png'
import github from './github.webp'

function MainPicture() {
    return (
        <img src={Image} alt="Image" className="img-container"/>
    )
}

function Intro() {
    return (
        <div className="div-intro">
            <h2>Bill Gates</h2>
            <h4>Founder, Microsoft</h4>
            <p>microsoft.com</p>
            <div className="buttons">
                <button className="email">Email</button>
                <button className="linkedin">LinkedIn</button>
            </div>
        </div>
    )
}

function About() {
    return(
        <div className="about">
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
    )
}

function Interests() {
    return(
        <div className="interests">
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}

function Footer() {
    return(
        <div className="footer">
            <img src={twitter} alt="twitter" className="logos"/>
            <img src={facebook} className="logos"/>
            <img src={instagram} className="logos"/>
            <img src={github} className="logos"/>
        </div>
    )
}

function App() {
    return (
        <div className="main-container">

            <div className="main-div">
            <MainPicture />
            <Intro />
            <About />
            <Interests />
            <Footer />
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)