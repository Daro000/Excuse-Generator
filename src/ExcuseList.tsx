import React from 'react';

interface PropsExcuseList {
    listaWymowek: Array<string>;
}

const ExcuseList: React.FC<PropsExcuseList> = ({ listaWymowek }) => {
    return (
        <div>
            <h3>Wymówki:</h3>
            <ul>
                {listaWymowek.map((wymowka, index) => (
                    <li key={index}>{wymowka}</li>
                    ))}
            </ul>
        </div>
    );
};

export default ExcuseList;