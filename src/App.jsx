import Input from "./componets/Input"
import Box from "./componets/Box"
import { useState, useEffect } from "react"

function App() {
  const [toDos, setToDos] = useState([]);

  const removeToDo = (id) => {
    console.log(id);
    const newTodos = toDos.filter(
       (d,index) => {
          if(index !== id){
            return true;
          }else{
            return false;
          }
       }
    )
    setToDos(newTodos); // state update
  }


  const addToDoHandler = (item) => {
    setToDos(
      [
        ...toDos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  return (
    <div className="bg-black h-screen p-3">
      <div className="max-w-[750px] min-h-[550px] shadow-xl bg-white mx-auto rounded">
        <Input handler = {addToDoHandler}/>
        <Box data={toDos} removeHandler={removeToDo}/>
      </div>
    </div>
  )
}

export default App
