import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const getLocalStoragePastes = () => {
    try {
      const data = localStorage.getItem("pastes");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      localStorage.removeItem("pastes");  // Clear invalid data
      return [];
    }
  };

const initialState = {
  pastes: getLocalStoragePastes(),
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {

        const paste = action.payload;
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        console.log(JSON.stringify(state.pastes))
        toast("paste created succesfully")

      
    },
    updateToPastes: (state, action) => {
        const paste = action.payload;
        const index = state.pastes.findIndex((item) => paste.pasteId === item.pasteId)

        if(index>=0){
            state.pastes[index] = paste;
            localStorage.setItem("pastes" , JSON.stringify(state.pastes))
            toast("updated successfully")
        }else{
            addToPastes(paste);
        }
    },
    deleteFromPastes: (state, action) => {
        const pasteId = action.payload;
        const index = state.pastes.findIndex((item) => item.pasteId===pasteId);
        if(index>=0){
            state.pastes.splice(index,1);
            localStorage.setItem("pastes" , JSON.stringify(state.pastes))

            toast("deleted");
        }
        
    },
    resetAllPastes: (state) => {
        state.pastes = [];
        localStorage.removeItem("pastes");
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, deleteFromPastes, updateToPastes,resetAllPastes } = pasteSlice.actions

export default pasteSlice.reducer