import Card from '../components/card-item'
import styled from '../styles/learningpage.module.css'
import { materiTodo,materiFilter,Crud,CrudBackend } from '../data/materi-todo'
export default function LearningPage(){
    return(
        <>
            <div className={styled.ContainerLearn}>
                <Card content={materiTodo}/>
                <Card content={materiFilter}/>
                <Card content={Crud}/>
                <Card content={CrudBackend}/>



            </div>
        </>
    )
}