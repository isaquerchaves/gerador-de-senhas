"use client"

import { useState } from 'react';
import Input from './components/input';

export default function Home() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ''
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-5xl">Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          className='ml-3' 
          type="checkbox" 
          id='showInput'
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
          />
      </div>
      {showInput ? 
        <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input
          passwordSize={customSize}
          setPasswordSize={setCustomSize} />
      </div> : null}
      <div className="flex flex-row gap-8">
        <button onClick={generate} className="rounded-lg p-2 border border-transparent bg-zinc-800 hover:border-purple-500">Gerar senha de {showInput ? passwordSize : 8} caracteres</button>
        <button onClick={copyToClipboard} className="rounded-lg p-2 border border-transparent bg-zinc-800 hover:border-purple-500">{copyText}</button>
      </div>
      <div>{password}</div>
    </div>
  )
}
