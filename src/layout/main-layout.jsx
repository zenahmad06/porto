import LearningPage from '../pages/learning-page'
import styled from '../styles/mainlayout.module.css'
import {Link,Outlet} from 'react-router-dom'
export default function MainLayout(){
    return(
        <>
            <header className={styled.Header}>
                <h1>Contoh</h1>
                <nav>
                    <Link to="/"><h2>Learning</h2></Link>
            
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
        
        </>
    )
}