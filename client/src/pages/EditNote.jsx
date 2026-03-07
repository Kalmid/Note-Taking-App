import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditNote = () => {
    const initialNote = {
        title:"",
        description:""
    }
    const {id} = useParams();
    const [note, setNote] = useState(initialNote);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNote(prevNote=> (
            {
                ...note,
                [name]:value
            }
        ))
    }

    const handleSubmit =async(e) => {
        e.preventDefault()
        
        try {
          const res = await fetch(`http://localhost:5000/notes/${id}`, {
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(note)
        });

        if(res.ok){
          toast.success("Note Updated");
          setTimeout(() => {
            navigate("/notes");
          }, 1000);
        }

        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
        const fetchNote = async() =>{
            try {
                const res = await fetch(`http://localhost:5000/notes/${id}`);
                const data = await res.json();
                setNote(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchNote();
    }, [id]);
    
  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Edit Note
      </h1>
    </div>
    <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={note.title}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={note.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</section>

  )
}

export default EditNote;
