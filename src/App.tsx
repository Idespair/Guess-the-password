import lock from './assets/lock.png'
import './App.css'
import { UserButtons } from './components/UserButtons'  

function App() {
  return (
    <>
      <div>
          <img src={lock} className="lock" alt="React logo" />
      </div>
      <h1>Adivinhe a senha</h1>
      <div>
          <div className='buttons'>
            <UserButtons/>
          </div>
      </div>
    </>
  )
}

export default App
