/* eslint-disable react/jsx-key */
import {  useState } from "react";

function FormComponent() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Criar um novo objeto com os dados do formulário
        const newEntry = {
            name: name,
            age: age
        };

        // Adicionar o novo objeto ao JSON/array existente
        setData(prevData => [...prevData, newEntry]);

        // Limpar os inputs se necessário
        setName('');
        setAge('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Age:
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>

            <pre>{JSON.stringify(data, null, 2)}</pre>  {/* Mostra os dados em formato JSON */}
        </div>
    );
}

export default FormComponent;
