import Card from '../components/card-item'
import styled from '../styles/learningpage.module.css'
import { materiTodo } from '../data/materi-todo'
export default function LearningPage(){
    return(
        <>
            <div className={styled.ContainerLearn}>
                <Card content={materiTodo}/>
            </div>
        </>
    )
}