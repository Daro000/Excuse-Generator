
import './App.css'
import ExcuseGenerator from "./ExcuseGenerator.tsx";
import {useState} from "react";

function App() {

    const [listaWym, setListaWym] = useState<Array<string>>([]);


    function onButtonClick2(msg:string) {
        setListaWym([...listaWym, msg]);
    }



  return (
    <>
        <ExcuseGenerator onButtonClick={onButtonClick2}/>
        {/*<2 listWymowek={listaWym}>/>*/}
    </>
  )
}

export default App
