import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { StateType } from '../src/Store'
import { NoteAction } from './actions/NoteAction';
import { NoteType } from './types/NoteType';
import { Note } from './models/Note';
import Helmet from 'react-helmet';
import { allCall, allPromiseCall, thenPromiseCall } from './Utils';

function App() {
  const dispatch = useDispatch()
  const noteData = useSelector((obj: StateType) => obj.NoteReducer)

  const addNote = () => {
    const nt: Note = {
      id: Math.random(),
      title: 'New Title',
      detail: 'New Detail'
    }
    const sendObj: NoteAction = {
      type: NoteType.NOTE_SAVE,
      payload: nt
    }
    dispatch(sendObj)
  }

  //ASYNC FUNCTION TRYING
  useEffect(() => {
   allCall()
   //allPromiseCall()
   thenPromiseCall()
  }, [])
  
  return (
    <div className="m-3">
      <Helmet>
        <title>You are in App..</title>
      </Helmet>
      <button className="btn btn-secondary" onClick={addNote}>ADD</button>
      {noteData.map((item, index) =>
        <>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.detail}</p>
          </div>
          <hr />
        </>)}
    </div>
  );
}

export default App;
