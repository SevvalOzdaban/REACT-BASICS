import React from 'react'
import { StateType } from '../Store'
import { useDispatch, useSelector } from 'react-redux'
import { NoteAction } from '../actions/NoteAction'
import { NoteType } from '../types/NoteType'
import { Note } from '../models/Note'
import { Helmet } from 'react-helmet'

function Profile() {
    const noteData = useSelector((obj: StateType) => obj.NoteReducer)
    const dispatch = useDispatch()

    const deleteItem = (item: Note) => {
        const deleteObj: NoteAction = {
            type: NoteType.NOTE_DELETE,
            payload: item
        }
        dispatch(deleteObj)
    }
    const updateItem = (item: Note) => {
        //const newItem = {...state, item}  Assign ile aynı işi yapar
        const newItem = Object.assign({}, item)
        newItem.title = "I'm Update Title"
        newItem.detail = "I'm Update Detail"

        const updatedItem: NoteAction = {
            type: NoteType.NOTE_UPDATE,
            payload: newItem
        }
        dispatch(updatedItem)
    }
    return (
        <div>
            <Helmet>
                <title>You are in Profile..</title>
            </Helmet>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {noteData.map((item, index) =>
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.detail}</td>
                            <button className='btn btn-primary' onClick={() => updateItem(item)}>UPDATE</button>
                            <button className='btn btn-danger' onClick={() => deleteItem(item)}>DELETE</button>
                        </tr>
                    )}



                </tbody>
            </table></div>
    )
}

export default Profile