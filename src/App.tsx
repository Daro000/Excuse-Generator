
import './App.css'
import ExcuseGenerator from "./ExcuseGenerator.tsx";
import {useState} from "react";
import ExcuseList from "./ExcuseList.tsx";



function App() {



    const [listaWym, setListaWym] = useState<Array<string>>(() => {
        const savedExcuses = localStorage.getItem("wymowki");
        return savedExcuses ? JSON.parse(savedExcuses) : [];
    });


    function onButtonClick2(msg:string) {
        const updatedList=([...listaWym, msg]);
        setListaWym(updatedList);
        localStorage.setItem("wymowki", JSON.stringify(updatedList));
    }


    function clearExcuses() {
        setListaWym([]);
        localStorage.removeItem("wymowki");
    }


  return (
    <>
        <ExcuseGenerator onButtonClick={onButtonClick2}/>
        <ExcuseList listaWymowek={listaWym}/>
        <button onClick={clearExcuses}>Clear Excuses</button>
    </>
  )
}

export default App
