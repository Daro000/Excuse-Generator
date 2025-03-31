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

    function generateExuse(){
        const newExcuse = `${name}, niestety ${reason}, ponieważ ${details}. Poziom wiarygodności: ${credibility}, data: ${date}, kreatywność: ${creativity}, ${urgent ? "pilne" : "niepilne"}.`;
        const updatedList = [...excuseList,newExcuse];
        setExcuseList(updatedList)
        localStorage.setItem("wymowki", JSON.stringify(updatedList))
    }



}

export default ExcuseGenerator