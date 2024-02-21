import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo'
import { useEffect, useState } from 'react';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i','s','h','a','l']
    const jobArray = ['i','o','s',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => {
            clearTimeout(timeoutID);
        };

    }, [])
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer' /> 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>iOS Developer / Data Scientist / Web Developer</h2>
                <Link to='/contact'className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home