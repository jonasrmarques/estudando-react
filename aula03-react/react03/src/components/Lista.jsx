function Lista(){
    const numero = [1,2,3,4,5]
    const listItens = numero.map((num) => <li key={num}>{num}</li>)
    return(
        <>
       <ul>{listItens}</ul>
        </>
    )
}

export default Lista