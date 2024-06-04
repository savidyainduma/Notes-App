 import React, { useState } from 'react'
 import { CiSearch } from 'react-icons/ci'
 import dummyNotes from '../dummy_notes'
 import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import NoteItem from '../components/NoteItem'
 
 const Notes = ({notes}) => {
  const [showSearch, setShowsearch] = useState(false);
   return (
     <section>
        <header className='notes__header'>
          {!showSearch && <h2 >Notes</h2>}
          {showSearch && <input type='text' autoFocus placeholder='Keyword...' />}
          <button className='btn'onClick={() => setShowsearch(prevState => !prevState)}><CiSearch/></button>
        </header>
        <div className='notes__container'>
        {
          notes.map(note => <NoteItem key={note.id} note={note} />)
        }
        </div>
        <Link to={'/create-note'} className='btn add__btn'><BsPlusLg/></Link>
     </section>
   )
 }
 
 export default Notes