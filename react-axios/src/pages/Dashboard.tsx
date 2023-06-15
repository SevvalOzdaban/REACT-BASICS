import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { AllProduct, Products } from '../models/Products';
import { allProduct } from '../services/DummyService';
import ProductItem from '../components/ProductItem';
import { Jwt } from '../models/Jwt';
import { Product } from '../models/Product';


function Dashboard() {
    const [products, setProducts] = useState<Products>()
    const [addedProduct, setAddedProduct] = useState<Product>()

    const validationSchema = Yup.object({
        title: Yup.string()
            .required("Empty title !!")
            .min(3, "Minumum title can be 3 character !!")
            .max(75, "Maximum title can be 75 character !!"),
        price: Yup.number()
            .required("Empty Price !!")
            .min(1, "Minumum price can be 1 dollar !!")
            .max(1000000, "Maximum price can be 1000000 dollar !!"),
        detail: Yup.string()
            .required("Empty title !!")
    })
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            title: "",
            price: 1,
            detail: ""
        },
        onSubmit(values, formikHelpers) {
            setAddedProduct(values)
        },
        validationSchema: validationSchema
    })

    useEffect(() => {
        allProduct().then(res => {
            setProducts(res.data)
        })
    }, [])
    const errorToast = (message: string) => {
        return <span>{message}</span>
    }
    return (
        <>
            <div className='row'>
                <div className='col-sm-4 m-3'>
                    <form onSubmit={handleSubmit}>
                        <h5>Product Add</h5>
                        <div className='mb-3'>
                            <input name='title' onChange={handleChange} placeholder='Title' className='form-control' />
                        </div>
                        {errors.title && errorToast(errors.title)}
                        <div className='mb-3'>
                            <input name='price' onChange={handleChange} placeholder='Price' className='form-control' type='number' />
                        </div>
                        {errors.price && errorToast(errors.price)}
                        <div className='mb-3'>
                            <input name='detail' onChange={handleChange} placeholder='Detail' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <button type="submit" className='btn btn-success'>Send</button>
                        </div>
                    </form>
                </div>
                <div className='col-sm-4 m-5'>
                    <h4>Added Product Values</h4>
                    <p>{addedProduct?.title}</p>
                    <p>{addedProduct?.price}</p>
                    <p>{addedProduct?.detail}</p>
                </div>
            </div>

            <div className='row'>
                <div>
                    <h5>Product List Count:
                        <span className="badge text-bg-primary">{products?.limit}</span>
                    </h5>
                </div>
                {
                    products?.products.map((item, index) =>
                        <div key={index} className='col-sm-4'><ProductItem product={item} /></div>
                    )
                }
            </div>
        </>
    )
}

export default Dashboard