import React, { useEffect, useState } from 'react';
import NotesComponent from '../components/NotesComponent';
import toast from 'react-hot-toast';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async() => {
            try {
                const res = await fetch("http://localhost:5000/notes",{
                    "method":"GET"
                });
                const data = await res.json();
                if(res.ok){
                    setNotes(data); 
                }
                
            } catch (error) {
                console.error(error);
            }
                       
        }

        fetchNotes();
    },[]);

    const removeNote = async(id) =>{
        try {
            const res = await fetch(`http://localhost:5000/notes/${id}`, {
                method: "DELETE"});  

            if(res.ok){
                toast.success("Note Deleted");
                const updatedNotes = notes.filter(note=>note._id !==id);
                setNotes(updatedNotes);
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Notes
                </h1>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
                { 
                    notes.length === 0 ? <p>Nothing to Display</p> : notes.map((note) => {
                        return <NotesComponent key={note._id} note={note} removeNote={removeNote}/>;
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Notes
