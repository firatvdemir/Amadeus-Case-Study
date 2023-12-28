import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from "react";
import airports from "../data/airports.json";

function Airports() {
    const[searchQuery, setSearchQuery] = useState('');
    const[searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const results = airports.filter((airport) => {
            if(airport.name.toLowerCase().includes(searchQuery.toLowerCase())
            || airport.code.toLowerCase().includes(searchQuery.toLowerCase())
            || airport.city.toLowerCase().includes(searchQuery.toLowerCase())
            || airport.country.toLowerCase().includes(searchQuery.toLowerCase())
            ) {return true}
        })
        if(results.length > 0) {
            setSearchResult(results);
        } else {
            setSearchResult([]);
        };

    }, [searchQuery]);  

    const handleSeachChange = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
    <div id='searchBar'>
        <InputGroup className="mb-3">
            <Form.Control
                type="text"
                value={searchQuery}
                onChange={handleSeachChange}
                aria-describedby="basic-addon2"
                placeholder="Search Airports&Codes, Cities, Countries..." />
        </InputGroup>
        <ListGroup variant="flush">
            {searchResult.length > 0 ? 
            searchResult.map((result) => (
                <ListGroup.Item> {result.name} </ListGroup.Item>
            )) : "Sonuç Bulunamadı!"}
        </ListGroup>
    </div>
    )
}

export default Airports;

{/* <Button
variant="outline-secondary"
type="submit"
id="button-addon2"
onClick={HandleSubmit}> Search
</Button> */}