"use client"

interface InputProps {
  passwordSize: number;
  setPasswordSize: (value: number) => void;
}

const Input = (props: InputProps) => {
  // Sua lógica assíncrona aqui, se necessário.

  return (
    <input
      type="number"
      id="passwordSize"
      className="ml-3 rounded-lg p-2 border border-transparent bg-zinc-800 hover:border-purple-500"
      min={1}
      value={props.passwordSize}
      onChange={(ev) => props.setPasswordSize(parseInt(ev.target.value))}
    />
  );
};

export default Input;