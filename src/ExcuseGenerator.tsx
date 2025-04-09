import {useState} from "react";

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




    function handleInputChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) {
        const { name, value, type, checked } = e.target as HTMLInputElement;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "reason":
                setReason(value);
                break;
            case "credibility":
                setCredibility(Number(value));
                break;
            case "date":
                setDate(value);
                break;
            case "creativity":
                setCreativity(value);
                break;
            case "details":
                setDetails(value);
                break;
            case "urgent":
                setUrgent(checked);
                break;
            default:
                console.warn(`Nieobsługiwane pole: ${name}`);
        }
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
        <div>
            <h2>Excuse Generator</h2>
            <input type="text" name="name" placeholder="imie" value={name} onChange={handleInputChange}/>

            <select name="reason" value={reason} onChange={handleInputChange}>
                    <option>spoznienie</option>
                    <option>brak pracy domowej</option>
                    <option>brak odpowiedzi na wiadomosc</option>
                    <option>udawanie ze zna sie kod</option>
                    <option>nagly wypadek</option>
            </select>
            <label>Wiarygodnosc {credibility}</label>
                <input type="range" min="1" max="10" name="credibility" value={credibility} onChange={handleInputChange}/>


            <input type="date" name="date" value={date} onChange={handleInputChange}/>
            <select name="creativity" value={creativity} onChange={handleInputChange}>
                <option>Mała</option>
                <option>Średnia</option>
                <option>Duża</option>
                <option>Ogromna</option>
                <option>Ekstremalna</option>
            </select>

            <textarea name="details" placeholder="Może podasz jakies szczegóły??" value={details} onChange={handleInputChange}/>
            <label>
                pilne?: <input name="urgent" type="checkbox" checked={urgent} onChange={handleInputChange}/>
            </label>
            <button onClick={generateExcuse}>Generuj wymowke</button>

        </div>


    )
}


export default ExcuseGenerator