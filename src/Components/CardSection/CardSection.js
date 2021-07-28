import React from 'react'

import cs from './CardSection.module.css'

const CardSection = ({title, video, image, content, url}) => {
    return (
        <>
        <div className={cs.containerCS}>
            <div className={cs.imgBxCS}>
                <div className={cs.contentCS}>
                    <h2 className={cs.titleCS}>{title}</h2>
                    <p className={cs.textoCS}>{content}</p>
                </div>
             <iframe 
                className={cs.videoCS}
                src={video}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </div>
            <div className={cs.detailsCS}>
                    <img className={cs.imgCS} src={image} alt={image}/>
                    <a className={cs.aCS} href={url}>Ver documento</a>
            </div>
        </div>        
        </>       
    )
}

export default CardSection
