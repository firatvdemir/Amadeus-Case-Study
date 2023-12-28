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
            ) {
                return true
            } else {
                return false
            }
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
            {searchResult.length > 0 ? ListItem(searchResult) : "Sonuç Bulunamadı!"}
        </ListGroup>
    </div>
    )
}

function ListItem(airport) {

    const dataFormatter = (item) => {

        return(
            <>
                <p> {item.name}<b> ({item.code})</b>, <i> {item.city} </i> </p>
            </>
        )
    }

    return(
    <>
        {airport.map((result, index) => (
            <ListGroup.Item key={index} > { dataFormatter(result) } </ListGroup.Item>
        ))}
    </> 
    )
}

export default Airports;

{/* <Button
variant="outline-secondary"
type="submit"
id="button-addon2"
onClick={HandleSubmit}> Search
</Button> */}