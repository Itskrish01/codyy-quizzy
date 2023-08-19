import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/home'
import HtmlQuiz from './pages/htmlQuiz'
import ReactQuiz from './pages/reactQuiz'
import JavascriptQuiz from './pages/jsQuiz'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/quiz/html" element={<HtmlQuiz />} />
      <Route path="/quiz/react" element={<ReactQuiz />} />
      <Route path="/quiz/javascript" element={<JavascriptQuiz />} />
    </Routes>
  )
}

export default App
