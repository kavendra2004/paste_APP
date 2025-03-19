import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../features/paste/pasteSlice";
import { ToastContainer } from "react-toastify";
import { useId } from 'react';



const Home = () => {
  const [title, setTitle] = useState("");
  const [value,setValue] =useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPaste= useSelector((state) => state.paste.pastes);

  function ClickHandler(){
    createPaste();
  }

  const passwordHintId = useId();

  function createPaste(){
    const date = Date()
  
    const paste = {
      title: title,
      content: value,
      pasteId: pasteId || passwordHintId,
      createdAt: date,
    }
    if(pasteId){
      //Update the paste
      dispatch(updateToPastes(paste))
    }else{
      //Create the paste
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({})

  }

  useEffect(() => {

    if(pasteId){
      const paste = allPaste.find((item) => item.pasteId === pasteId); 
      setTitle(paste.title);
      setValue(paste.content);
    }
    }, [pasteId])

  return (

    

    <div className="mt-8 flex flex-col gap-8">
      <div className="flex  gap-4 justify-between">
        <input
          className="bg-neutral-900 w-full rounded-2xl px-4 py-2"
          placeholder="Enter title here"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
        />
        <button className="bg-neutral-900 min-w-[150px] rounded-2xl py-2 px-4 "
        
        onClick={ClickHandler}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
        <ToastContainer />
      </div>
      <div>
        <textarea
        className="bg-neutral-900 p-4 rounded-2xl min-w-[500px]"
        onChange = { (e) => setValue(e.target.value) }
        value={value}
        placeholder="Enter content here..." 
        rows="20"></textarea>
      </div>
    </div>
  );
};

export default Home;
