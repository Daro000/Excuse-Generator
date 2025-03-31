import {useState} from "react";

const ExcuseGenerator: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [reason, setReason] = useState<string>("spóźnienie");
    const [credibility, setCredibility] = useState<number>(5);
    const [date, setDate] = useState<string>("");
    const [creativity, setCreativity] = useState<string>("Średnia");
    const [details, setDetails] = useState<string>("");
    const [urgent, setUrgent] = useState<boolean>(false);
    const [excuseList, setExcuseList] = useState<Array<string>>(() => {
        const savedExcuses = localStorage.getItem("wymowki");
        return savedExcuses ? JSON.parse(savedExcuses) : [];
    });

    function generateExuse() {
        const newExcuse = `${name}, niestety ${reason}, ponieważ ${details}. Poziom wiarygodności: ${credibility}, data: ${date}, kreatywność: ${creativity}, ${urgent ? "pilne" : "niepilne"}.`;
        const updatedList = [...excuseList, newExcuse];
        setExcuseList(updatedList)
        localStorage.setItem("wymowki", JSON.stringify(updatedList))
    }

    function clearExcuses() {
        localStorage.removeItem("wymowki");
        setExcuseList([]);
    }


    return(
        <div>
            <h2>Excuse Generator</h2>
            <input type="text" placeholder="imie" value={name} onChange/>

            <select value={reason} onChange={}>
                    <option>spoznienie</option>
                    <option>brak pracy domowej</option>
                    <option>brak odpowiedzi na wiadomosc</option>
                    <option>udawanie ze zna sie kod</option>
                    <option>nagly wypadek</option>
            </select>

            <input type="range" min="1" max="10" value={credibility} onChange={}/>
            <input type="date" value={date} onChange={}/>
            <select value={creativity}>
                <option>Mała</option>
                <option>Średnia</option>
                <option>Duża</option>
                <option>Ogromna</option>
                <option>Ekstremalna</option>
            </select>
        </div>
    )
}

export default ExcuseGenerator