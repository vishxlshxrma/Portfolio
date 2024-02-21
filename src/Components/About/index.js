import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

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

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About