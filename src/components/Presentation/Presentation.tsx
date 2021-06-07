import React from 'react'

import './Presentation.scss'
import profile from '../../assets/image_profile.png'
import Button from "../shared/Button";
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import {SiMinutemailer} from 'react-icons/si'

const Presentation: React.FC<any> = () => {
    return (
        <>
            <section className='AppSectionPresentation'>
                <section className='AppSectionProfilePresentation'>
                    <ul className='social-media-list'>
                        <li><FaGithub size={25} className='AppPresentationIcon'/></li>
                        <li><FaLinkedin size={25} className='AppPresentationIcon'/></li>
                    </ul>
                    <img className='AppProfile' alt='app-profile' src={profile}/>
                </section>
                <article className='AppPresentationContent'>
                    <div className='AppTitle' >
                        <h1>Olá, me chamo <span className='bold'>João Victor</span></h1>
                        <h2>Desenvolvedor Fullstack</h2>
                    </div>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries
                    </p>
                    <Button content='Entre em contato' icon={<SiMinutemailer size={40}/>}/>
                </article>
            </section>
        </>
    );
};

export default Presentation;