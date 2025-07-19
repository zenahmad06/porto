import styled from '../styles/component-styles/card.module.css'
export default function Card({content}){
    return (
        <>
            <div className={styled.ItemCont}>
                <h1>{content.title}</h1>
                <p>{content.content}</p>
                <p>Lihat hasil</p>
                <a href= {content.link.project} target="_blank" rel="noopener noreferrer">
                    lihat project
                </a>
                <p>penjelasan materi</p>
                 <a href={content.link.blog} target="_blank" rel="noopener noreferrer">
                    kunjungi blog
                </a>
            </div>
        
        </>
    )
}