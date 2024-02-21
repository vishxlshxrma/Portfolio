import { useEffect,useRef } from 'react'
import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
    const bgref = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline().to(bgref.current, {
            duration: 1,
            opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 2,
        })
        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])

    return (
        <div className='logo-container' ref={bgref}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt='S' />
            <svg
                width='559pt'
                height='897pt'
                version='1.0'
                viewBox='0 0 559 897'
                xmlns='http://www.w3.org/2000/svg'
                >
                    <g
                    className='svg-container'
                    transform='translate(0 457) scale(.1 -.1)'
                    fill='none'
                    >
                    <path ref={outlineLogoRef}
                    d='M100 0 L50 100 L0 0 L25 0 L50 75 L75 0 Z' />
                    </g>
                </svg>

        </div>
    )
}

export default Logo