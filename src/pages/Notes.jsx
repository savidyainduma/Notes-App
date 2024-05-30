 import React from 'react'
 import { CiSearch } from 'react-icons/ci'
 import dummyNotes from '../dummy_notes'
 import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import NoteItem from '../components/NoteItem'
 
 const Notes = ({notes}) => {
   return (
     <section>
        <header>
            <h2 className='notes__header'>Notes</h2>
            { /*<input type='text' autoFocus placeholder='Keyword...' />*/}
            <button className='btn'><CiSearch/></button>
        </header>
        <div className='notes__container'>
        {
          notes.map(note => <NoteItem key={note.id} note={note} />)
        }
        </div>
        <Link className='btn add__btn'><BsPlusLg/></Link>
     </section>
   )
 }
 
 export default Notes