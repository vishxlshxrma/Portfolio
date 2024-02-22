import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

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
        <>
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
                Hello! I'm Vishal Kumar, a B.Tech graduate in Computer Science with a solid foundation in web development. My academic journey at Maharaja Surajmal Institute of Technology equipped me with a diverse skill set. My expertise extends to MERN Stack development, where I successfully designed and implemented seamless user experiences.
                </p>
                <p>
                In addition to my technical proficiency, I've explored various facets of data science, contributing to impactful projects like Malaria Detection using Python and Machine Learning. I have a keen interest in the synergy between artificial intelligence and voice assistants, as reflected in my research publications.
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
            <Loader type='pacman' />
        </>
    )
}

export default About