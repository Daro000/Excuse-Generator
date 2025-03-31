import {useState} from "react";

const ExcuseGenerator: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [reason, setReason] = useState<string>("spóźnienie");
    const [credibility, setCredibility] = useState<number>(5);
    const [date, setDate] = useState<string>("");
    const [creativity, setCreativity] = useState<string>("Średnia");
    const [details, setDetails] = useState<string>("");
    const [urgent, setUrgent] = useState<boolean>(false);
}

export default ExcuseGenerator