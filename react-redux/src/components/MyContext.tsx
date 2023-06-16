import React, { useState, useContext } from 'react'
import { DataContext, IContext } from '../context/DataContext'
import { Helmet } from 'react-helmet'

function MyContext() {
    const { getItem, setItem } = useContext(DataContext)
    const [contextData, setContextData] = useState<IContext>(getItem)

    const contextChange = () => {
        const item: IContext = {
            title: 'Site Title',
            color: "#00ff00"
        }
        setItem(item)
        setContextData(item)
    }
    return (
        <div className='m-4'>
            <Helmet>
                <title>You are in MyContext..</title>
            </Helmet>
            <h5>{contextData.title}</h5>
            <h5>{contextData.color}</h5>
            <button className='btn btn-primary' onClick={contextChange}>CHANGE</button>
        </div>
    )
}

export default MyContext