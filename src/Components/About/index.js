import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const setClass = () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000);
        }
        setClass()
    }, [])

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','M','e']}
                    idx={15} 
                    />
                </h1>
                <p>
                Hello there! I'm Vishal, a passionate and results-driven Data Scientist with a relentless curiosity for unlocking the hidden insights within data. My mission is to leverage the power of data to make informed decisions, drive innovation, and create positive impact.
                </p>
                <p>
                Seeking a role that leverages my B.Tech in Computer Science (CGPA: 8.8) and diverse experiences. As an Operational Analyst intern, I've optimized workflows. Skilled in IMS, Cloud Computing, Full Stack Development. Eager to contribute technical expertise, innovation, and collaborative spirit.
                </p>
                <p>
                Hello there! I'm Vishal, a passionate and results-driven Data Scientist with a relentless curiosity for unlocking the hidden insights within data. My mission is to leverage the power of data to make informed decisions, drive innovation, and create positive impact.
                </p>
            </div>
        </div>
    )
}

export default About