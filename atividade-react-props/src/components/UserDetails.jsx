function UserDetails({nome, idade, profissao}){
    let maiorIdade;
    if(idade >= 18){
        maiorIdade = "Você é maior idade, logo, pode tirar sua habilitação"
    } else
        maiorIdade = "Você é menor idade e tem que estudar"
    
   
    return(
        <>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        <p>{maiorIdade}</p>
        </>
    )
    
}

export default UserDetails