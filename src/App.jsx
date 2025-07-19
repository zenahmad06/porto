
import { HashRouter, Route, Routes} from 'react-router-dom'
import MainLayout from './layout/main-layout'
import LearningPage from './pages/learning-page'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route  index element={<LearningPage/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
