import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useCreateDate from '../components/useCreateDate'

const EditNote = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useCreateDate()
  const navigate = useNavigate()

  const handleform = (e) => {
    e.preventDefault();

    if(title && details) {
      const newNote = {...note, title, details, date}

      const newNotes = notes.map(item =>{
        if(item.id == id){
          item= newNote;
        }
        return item;
      })
      setNotes(newNotes);
    }
    //redirect to home page.
      navigate('/')
  }
  const handleDelete = () => {
    if(window.confirm('Delete this note?')){
    const newNotes = notes.filter(item => item.id != id);

    setNotes(newNotes);
    navigate('/');
    }
  }
  return (
    <section>
      <header className='create-note__header'>
        <Link to="/" className='btn'><IoIosArrowBack/></Link>
        <button className='btn lg primary' onClick={handleform} >Save</button>
        <button className='btn danger' onClick={handleDelete}><RiDeleteBin6Line/></button>
      </header>
      <form className='create-note__form' onSubmit={handleform}>
        <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <textarea rows="28" placeholder='Note details...' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default EditNote