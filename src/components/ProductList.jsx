

const ProductList = ( {productsData, deleteProductAction , selectProduct, open} ) => {

 


    return (
        <ul className="list-product">
            {
                productsData?.map(product => (
                <li className="product-card" key={product.id}>
                    <div className="card">
                    <h4><span>Nombre:</span> {product.name} </h4>
                    <h4><span>Categoria:</span> {product.category} </h4>
                    <h4><span>Precio:</span> {product.price} </h4>
                    <h4><span>Disponibilidad:</span> {product.isAvailable} </h4>

                    <button onClick={ () => deleteProductAction(product.id) }><i className='bx bx-message-square-x'></i></button>
                    <button onClick={ () => selectProduct(product)}><i className='bx bxs-edit'></i></button>
                    </div>
                </li>

                ))
            }
          

        </ul>
    );
};

export default ProductList;