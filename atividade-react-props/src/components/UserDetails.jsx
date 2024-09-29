function UserDetails(props){
    const {nome, idade, profissao} = props

    const maiorIdade = idade >= 18
    
   
    return(
        <>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        <p>{maiorIdade ? 'Pode tirar sua Habilitação' : 'Não pode tirar sua habilitação'}</p>
        </>
    )
    
}

export default UserDetails