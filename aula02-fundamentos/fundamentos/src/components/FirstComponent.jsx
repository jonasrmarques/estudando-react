const FirstComponent = () => {
    const name = "Jonas Rafael"
    const usuario = {
        nome: 'Jonas',
        sobrenome: 'Rafael',
        idade: 22
    }

    function horario(){
        const hora = new Date().getHours()
        if(hora < 12){
            return "boa dia"
        }else
            return "boa tarde"
        
    }
    
    return(
        <div>
            <h1>Meu Pirmeiro Componente!</h1>
            <h1>Meu nome é {name}</h1>
            <p>A soma de dois mais dois: {2+2}</p>
            <h1>{horario()}</h1>
            <p>Meu nome é {usuario.nome} e tenho {usuario.idade}</p>
        </div>
    )
}

export default FirstComponent;