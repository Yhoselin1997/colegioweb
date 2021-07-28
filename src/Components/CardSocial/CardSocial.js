import React from 'react'

import cs from './CardSocial.module.css'

import Container from 'react-bootstrap/Container';

const CardSocial = ({ video, title, content }) => {
    return (
        <Container>
            <div className={cs.containerCS}>
                <div className={cs.imgBxCS}>
                    <iframe
                        className={cs.videoCS}
                        src={video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div className={cs.detailsCS}>
                    <h2 className={cs.titleCS}>{title}</h2>
                    <p className={cs.textoCS}>{content}</p>
                </div>
            </div>
        </Container>
    )
}

export default CardSocial
