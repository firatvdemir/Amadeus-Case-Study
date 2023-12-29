import { useState, useEffect, useContext} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';

import airports from "../data/airports.json";
import { FlightContext } from "../App";

function Airports({type}) {
    const[searchQuery, setSearchQuery] = useState('');
    const[searchResult, setSearchResult] = useState([]);
    const[airportSelection, setAirportSelection] = useState({});
    const[searchBarPlaceholder, setSearchBarPlaceholder] = useState("Search Airports, Codes, Cities...");
    
    const {flightInfo, setFlightInfo} = useContext(FlightContext);

    useEffect(() => {
        const results = airports.filter((airport) => (airport.name.toLowerCase().includes(searchQuery.toLowerCase())
            || airport.code.toLowerCase().includes(searchQuery.toLowerCase())
            || airport.city.toLowerCase().includes(searchQuery.toLowerCase())
            || airport.country.toLowerCase().includes(searchQuery.toLowerCase())
            ) ? true : false 
        );
        results.length > 0 ? setSearchResult(results) : setSearchResult([]);
    }, [searchQuery]);  

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        console.log(flightInfo);
    }

    const ListItem = (airport) => {

        return(
        <>
            {airport.map((result, index) => (
                <ListGroup.Item
                    key={index}
                    action
                    onClick={() => {
                        setFlightInfo({
                            ...flightInfo,
                            [type]: result.name
                        });
                        setSearchBarPlaceholder(result.name)
                        setSearchQuery(result.name)
                    }}
                    variant="light"
                > <p> {result.name}<b> ({result.code})</b>, <i> {result.city} </i> </p> </ListGroup.Item>
            ))}
        </> 
        )
    };

    return (
    <div id='searchBar'>
    <Accordion>
        <Accordion.Item eventKey="0">

            <Accordion.Header>
                <InputGroup className="mb-3">
                        <Form.Control
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            aria-describedby="basic-addon2"
                            placeholder={searchBarPlaceholder} />
                </InputGroup>
            </Accordion.Header>

            <Accordion.Body>
                <ListGroup id="airportList" >
                    {searchResult.length > 0 ? ListItem(searchResult) : "Sonuç Bulunamadı!"}
                </ListGroup>
            </Accordion.Body>

        </Accordion.Item>
    </Accordion>
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