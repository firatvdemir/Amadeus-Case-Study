import { useState, useEffect, useContext} from "react";

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import airports from "../data/airports.json";
import { FlightContext } from "../App";

function Airports({type}) {
    const[searchQuery, setSearchQuery] = useState('');
    const[searchResult, setSearchResult] = useState([]);   
    const[searchBarPlaceholder, setSearchBarPlaceholder] = useState("Search Airports, Codes, Cities...");
    const {flightInfo, setFlightInfo} = useContext(FlightContext);
    const header = type === "departureAirport" ? "Departure" : "Arrival"; 

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
                <Container>
                    <Row>
                        <h4> {header} </h4>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    aria-describedby="basic-addon2"
                                    placeholder={searchBarPlaceholder} />
                        </InputGroup>
                    </Row>
                </Container>


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