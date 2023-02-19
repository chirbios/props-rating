import Stars from './components/Stars/Stars'

import './App.css'

export default function App() {

  return (
    <div className='App'>
      <Stars count={3} />
      <Stars count={2} />
      <Stars count={2} />
    </div>
  )
}

