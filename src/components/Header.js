import React from 'react';

//Quando queremos colocar js dentro do html que está dentro do js, colocar com {}

//posso passar como parâmetro o props (propriedades ou a desestruturação com o nome da propriedade { title })
//o parâmetro children é todo conteúdo que o componente recebeu
export default function Header({ title }) {
    return (
        <header>
            <h1>
                {title}
            </h1>
        </header>
    );
}