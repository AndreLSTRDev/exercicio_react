import { useState } from 'react'
import './App.css'

function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [imc, setImc] = useState<number | null>(null)
  const [erro, setErro] = useState('')

  function calcularIMC(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const alturaNumerica = Number(altura)
    const pesoNumerico = Number(peso)

    if (
      altura === '' ||
      peso === '' ||
      alturaNumerica <= 0 ||
      pesoNumerico <= 0
    ) {
      setErro('Informe uma altura e um peso válidos.')
      setImc(null)
      return
    }

    setErro('')

    const resultado =
      pesoNumerico / (alturaNumerica * alturaNumerica)

    setImc(resultado)
  }

  function classificarIMC(imc: number) {
    if (imc < 18.5) {
      return 'Abaixo do peso'
    }

    if (imc < 25) {
      return 'Peso normal'
    }

    if (imc < 30) {
      return 'Sobrepeso'
    }

    if (imc < 35) {
      return 'Obesidade grau I'
    }

    if (imc < 40) {
      return 'Obesidade grau II'
    }

    return 'Obesidade grau III'
  }

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>

      <form onSubmit={calcularIMC}>
        <div className="campo">
          <label htmlFor="altura">Altura:</label>

          <input
            type="number"
            id="altura"
            placeholder="Ex: 1.75"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="peso">Peso:</label>

          <input
            type="number"
            id="peso"
            placeholder="Ex: 70"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>

        <button type="submit">
          Calcular IMC
        </button>
      </form>

      {erro && (
        <p className="erro">{erro}</p>
      )}

      {imc !== null && (
        <div className="resultado">
          <h2>Seu IMC é: {imc.toFixed(2)}</h2>

          <p>
            Classificação: {classificarIMC(imc)}
          </p>
        </div>
      )}
    </div>
  )
}

export default App