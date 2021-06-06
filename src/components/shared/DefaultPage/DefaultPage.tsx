import React from 'react'
import './DefaultPage.scss'

declare interface DefaultOrganizationProps{
    title: string
    subTitle?: string
}

const DefaultPage: React.FC<DefaultOrganizationProps> = (props) => {
    return (
        <section className='AppDefaultPageSection'>
            <h1>{props.title}</h1>
            <h2>{props.subTitle || ''}</h2>
            <article className='AppDefaultArticleContent'>
                {props.children}
            </article>
        </section>
    );
}

export default DefaultPage;