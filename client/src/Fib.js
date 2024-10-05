import {useEffect, useState} from "react";
import axios from "axios";

function Fib() {
    const [seenIndex, setSeenIndex] = useState([]);
    const [values, setValues] = useState({});
    const [index, setIndex] = useState('');
    useEffect(() => {
        fetchValues()
        fetchIndexes()
    }, []);

    async function fetchIndexes() {
        const values = await axios.get('/api/values/current')
        setValues(values.data)
    }

    async function fetchValues() {
        const seenIndex = await axios.get('/api/values/all')
        setSeenIndex(seenIndex.data)
    }

    async function handleSubmit(event) {
        event.preventDefault();

        await axios.post('/api/values', {
            index
        })
        setIndex('')
    }

    function renderSeenIndexes() {
        return seenIndex.map(({number}) => number).join(', ')
    }

    function renderValues() {
        const entries = [];
        for (let key in values) {
            entries.push(
                <div key={key}>
                    For index {key} I calculated {values[key]}
                </div>
            );
        }
        return entries;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter your index:</label>
                <input
                    type="text"
                    value={index}
                    onChange={e => setIndex(e.target.value)}
                />
                <button>Submit</button>
            </form>
            <h3>Indexes i have seen:</h3>
            {renderSeenIndexes()}
            <h3>Calculated values:</h3>
            {renderValues()}
        </div>
    )
}

export default Fib