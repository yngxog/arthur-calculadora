import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensagem from './components/Mensagem'
import Frase from './components/Frase'
import Calculadora from './components/Caluladora'

function HelloWorld() {
  return <p>HelloWorld</p>
}   

function App() {
  return (
    <>
      <HelloWorld></HelloWorld>
      <Mensagem texto="HelloWorld"></Mensagem>
      <Frase></Frase>
      <Calculadora/>
    </>
  )
}

export default App