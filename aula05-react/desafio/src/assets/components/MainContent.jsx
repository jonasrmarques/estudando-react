function Challenge() {
    let valor1 = 100
    let valor2 = 150

    const soma = () => alert (valor1 + valor2)
    const subtracao = () => alert (valor1 - valor2)
    const multiplicacao = () => alert (valor1 * valor2)
    const divisao = () => alert (valor1 / valor2)
    
    return (
        <div>
        <h1>Seu primeiro valor é: {valor1} e seu segundo valor é: {valor2}</h1>
        <button onClick={soma}>Clique para somar</button>
        <button onClick={subtracao}>Clique para subtrair</button>
        <button onClick={multiplicacao}>Clique para multiplicar</button>
        <button onClick={divisao}>Clique para dividir</button>
        </div>
    )
}

export default Challenge