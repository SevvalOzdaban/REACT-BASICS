import React from 'react'
import { AllProduct } from '../models/Products'

function ProductItem(props: { product: AllProduct }) {
    return (
        <div className="card m-2" style={{height:"25rem"}}>
            <img src={props.product.thumbnail} className="card-img-top" style={{height:"40%"}} />
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.product.category}</h6>
                <p className="card-text">{props.product.description}</p>
                <a href="#" className="card-link">Card link</a>
            </div>
        </div>
    )
}

export default ProductItem