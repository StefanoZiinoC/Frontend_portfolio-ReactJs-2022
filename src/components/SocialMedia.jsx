import React from 'react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import SzcCV from '../assets/SzcCV.pdf';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div >
        <a href={ SzcCV} target="_blank" rel="noreferrer">
            <ImProfile />
            </a>
        </div>
        <div >
        <a href='https://github.com/StefanoZiinoC' target="_blank" rel="noreferrer">
            <AiOutlineGithub />
            </a>
        </div>
        <div>
        <a href='https://www.linkedin.com/in/stefano-ziino-colanino-199898160/' target="_blank" rel="noreferrer">
            <AiFillLinkedin />
        </a>
        </div>
    </div>
  )
}

export default SocialMedia