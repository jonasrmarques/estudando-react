function Body( {products, handleEdit, handleDelete, name, price, setName, setPrice, editMode, submit} ){
    return(
        <main className="body">
            <div className="container">
                {/* Card List */}
                <div className="products-card">
                    <h2>Lista de Produtos</h2>
                    <ul className="product-list">
                        {products.map((product) =>{
                            <li key={product.id} className="product-item">
                                <div className="product-details" >
                                    <h3>{product.name}</h3>
                                    <p>R$ {product.price}</p>
                                </div>
                                <div className="product-actions">
                                    <button onClick={()=>handleEdit(product)}>Editar</button>
                                    <button onClick={()=>handleDelete(product)}>Deletar</button>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>

                {/* Card Form */}
                <div className="form-card" >
                        <h2>{editMode ? "Editar Produto" : "Adicionar Produto"}</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Nome:
                                <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                minLength="3"
                                />
                            </label>
                            <label>
                                Preço:
                                <input
                                type="number"
                                value={price}
                                name="price"
                                onChange={(e) => setName(e.target.value)}
                                required
                                minLength="0.01"
                                />
                            </label>
                            <input type="submit" value={editMode ? "Atualizar" : "Criar"}/>
                        </form>
                </div>





            </div>
        </main>
    )
}

export default Body