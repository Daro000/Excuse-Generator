import {useState} from "react";
import './ExcuseGenerator.css';


interface PropsExcuse {
    onButtonClick: (v: string) => void;
}






    const ExcuseGenerator: React.FC<PropsExcuse> = ({onButtonClick}: PropsExcuse) => {
            const [name, setName] = useState<string>("");
            const [reason, setReason] = useState<string>("spóźnienie");
            const [credibility, setCredibility] = useState<number>(5);
            const [date, setDate] = useState<string>("");
            const [creativity, setCreativity] = useState<string>("Średnia");
            const [details, setDetails] = useState<string>("");
            const [urgent, setUrgent] = useState<boolean>(false);




        function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
            setName(e.currentTarget.value);
        }

        function handleReasonChange(e: React.ChangeEvent<HTMLSelectElement>) {
            setReason(e.currentTarget.value);
        }

        function handleCredibilityChange(e: React.ChangeEvent<HTMLInputElement>) {
            setCredibility(Number(e.currentTarget.value));
        }

        function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
            setDate(e.currentTarget.value);
        }

        function handleCreativityChange(e: React.ChangeEvent<HTMLSelectElement>) {
            setCreativity(e.currentTarget.value);
        }

        function handleDetailsChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
            setDetails(e.currentTarget.value);
        }

        function handleUrgentChange(e: React.ChangeEvent<HTMLInputElement>) {
            setUrgent(e.currentTarget.checked);
        }

        const generateExcuse = () => {
            const excuseMessage = `${name}, niestety ${reason}, ponieważ ${details}. Poziom wiarygodności: ${credibility}, data: ${date}, kreatywność: ${creativity}, ${urgent ? "pilne" : "niepilne"}.`;
            onButtonClick(excuseMessage);
            setName("");
            setReason("spóźnienie");
            setCredibility(5);
            setDate("");
            setCreativity("Średnia");
            setDetails("");
            setUrgent(false);

        };

    return(
        <div className="excuse-container">
            <h2>Excuse Generator</h2>
            <label>Podaj Imie:</label>
            <input type="text" name="name" placeholder="imie" value={name} onChange={handleNameChange}/>

            <label>Podaj Powód</label>
            <select name="reason" value={reason} onChange={handleReasonChange}>
                    <option>spoznienie</option>
                    <option>brak pracy domowej</option>
                    <option>brak odpowiedzi na wiadomosc</option>
                    <option>udawanie ze zna sie kod</option>
                    <option>nagly wypadek</option>
            </select>
            <label>Wiarygodnosc {credibility}</label>
                <input type="range" min="1" max="10" name="credibility" value={credibility} onChange={handleCredibilityChange}/>

            <label>Data:</label>
            <input type="date" name="date" value={date} onChange={handleDateChange}/>

            <label>Poziom kreatywnosci</label>
            <select name="creativity" value={creativity} onChange={handleCreativityChange}>
                <option>Mała</option>
                <option>Średnia</option>
                <option>Duża</option>
                <option>Ogromna</option>
                <option>Ekstremalna</option>
            </select>

            <label>Szczegóły:</label>
            <textarea name="details" placeholder="Może podasz jakies szczegóły??" value={details} onChange={handleDetailsChange}/>
            <label>
                pilne?: <input name="urgent" type="checkbox" checked={urgent} onChange={handleUrgentChange}/>
            </label>
            <button onClick={generateExcuse}>Generuj wymowke</button>

        </div>


    )
}


export default ExcuseGenerator