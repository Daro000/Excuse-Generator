
import './App.css'
import ExcuseGenerator from "./ExcuseGenerator.tsx";
import {useState} from "react";
import ExcuseList from "./ExcuseList.tsx";



function App() {

    const [listaWym, setListaWym] = useState<Array<string>>([]);


    function onButtonClick2(msg:string) {
        setListaWym([...listaWym, msg]);
    }


  return (
    <>
        <ExcuseGenerator onButtonClick={onButtonClick2}/>
        <ExcuseList listaWymowek={listaWym}/>
    </>
  )
}

export default App
