import { useForm } from 'react-hook-form'
import  {useEffect} from 'react'

const ProductsForm = ( {createProduct, selectedProduct, updateProduct, open, onClose}) => {

    if (!open) { return false
        
    }

    const { register, handleSubmit, formState: {errors}, reset } = useForm()

useEffect( () => {
    if (selectedProduct) {
        reset( selectedProduct)

    }else{
        resetForm()
    }
}, [ selectedProduct ]);


        const submit = data => {
       
        if ( selectedProduct ) {
            updateProduct(data)

        }else{
            createProduct(data)
            resetForm()
        }

        
    }



    const resetForm = () => {
        reset(
            {
                name: "",
                category: "",
                price: "",
                isAvailable: true
              
        }
        )}
    
    return (
        <div className='overlay'>
            <div className="modalConteiner">
        <form onSubmit={handleSubmit(submit)}>
            <div className='close-modal'>
            <p onClick={onClose}>X</p>
            </div>
            <div className='names'>
                <label htmlFor="name">Nombre</label><br />
                <input 
                    type="text" 
                    id='name'
                    name='name'
                    placeholder='Tablet, Tv, Notebook'
                    {...register("name", {required: true})}
                    
                    />

                    {errors.name?.type === 'required' && <p role="alert" style={{ color: 'tomato' }}>
                        El Nombre es requerido</p> 
                    }
            </div>

            <div className='names'>
                <label htmlFor="category">Categoria</label><br />
                <input 
                    type="text" 
                    id='category'
                    name='category'
                    placeholder='Tecnologia'
                    {...register("category", {required: true})}
                    />

                    {errors.category?.type === 'required' && <p role="alert" style={{ color: 'tomato' }}>
                        La Categoria es requerida</p> 
                    }
            </div>

            <div className='names'>
                <label htmlFor="price">Precio</label><br />
                <input 
                    type="number" 
                    id='price'
                    name='price'
                    placeholder='$120'
                    {...register("price", {required: true})}
                    />

                    {errors.price?.type === 'required' && <p role="alert" style={{ color: 'tomato' }}>
                        El Precio es requerido</p> 
                    }
            </div>

            <div className='names'>
                <label htmlFor="isAvailable">Disponibilidad</label><br />
                <input 
                    type="checkbox" 
                    id='isAvailable'
                    name='isAvailable'
                    {...register("isAvailable")}
                    
                    />
            </div>

            <button className='button-form' type='submit'><i className='bx bx-message-square-check'></i></button>
            
        </form>
        </div>
    </div>
    );
};

export default ProductsForm;