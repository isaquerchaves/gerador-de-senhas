"use client"

import { useState } from 'react';

export default function Home() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassord = ''
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassord += characters[position]
    }
    setPassword(newPassord)
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
        <label htmlFor="passwordSize">Tamanho:</label>
        <input 
          type="number" 
          id="passwordSize" 
          className=' ml-3 rounded-lg p-2 border border-transparent bg-zinc-800 hover:border-purple-500' 
          min={1}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
          />
      </div>
      <div className="flex flex-row gap-8">
        <button onClick={generate} className="rounded-lg p-2 border border-transparent bg-zinc-800 hover:border-purple-500">Gerar senha de {passwordSize} caracteres</button>
        <button onClick={copyToClipboard} className="rounded-lg p-2 border border-transparent bg-zinc-800 hover:border-purple-500">{copyText}</button>
      </div>
      <div>{password}</div>
    </div>
  )
}
