import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';
import { deleteFromPastes } from '../features/paste/pasteSlice';



const Paste = () => {
  

  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm,setSearchTerm] = useState('');
  const filterData = pastes.filter(
    item => item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const dispatch = useDispatch();

  function handleDelete(pasteId){
    dispatch(deleteFromPastes(pasteId));
  }
  
  return (
    <div>
      <div className='my-8'>
        <input
        className='bg-neutral-900 min-w-[500px] rounded-2xl px-4 py-2'
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      
      <div className='flex flex-col gap-4'>
          {filterData.map(
            item => (
            <div key={item.pasteId} className='flex flex-col gap-0.5'>
              <div className='bg-neutral-900 py-1 rounded-t-xl flex px-4 text-yellow-500 justify-between'>    {item.title}
                <div className='flex gap-4 text-blue-500'>
                  <button>
                    <a href={`/?pasteId=${item?.pasteId}`}>Edit</a></button>

                  <button>
                    <a href={`/pastes/${item.pasteId}`}>
                    View
                    </a>
                  </button>

                  <button
                  onClick={() => handleDelete(item?.pasteId)}
                  >Delete</button>
                  <button
                  onClick={() => {navigator.clipboard.writeText(item.content);
                    toast("successfully copied to clipboard");
                  }}
                  >Copy</button>

                  <ToastContainer />

                  <button>Share</button>
                </div>
              
              </div>
              <div className='bg-neutral-900 py-1 rounded-b-xl flex px-4 text-zinc-300 relative'>{item.content}
                <div className='absolute right-2 bottom-2 text-[12px] text-zinc-600'>
                  {item.createdAt}
                </div> 
              </div>
            </div>
          )
          )}
        </div>
    </div>
  )
}

export default Paste