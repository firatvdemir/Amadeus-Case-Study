import { useContext, useState } from "react";
import { FlightContext } from "../App";
import Table from 'react-bootstrap/Table';

import flights from "../data/flights.json";

function FlightResults({type}) {
    const{flightInfo, setFlightInfo} = useContext(FlightContext);
    const[oneWayResults, setOneWayResults] = useState(flights.filter((flight) => flight.departure_date.includes(flightInfo.departureDate) ? true : false));
    const[twoWayResults, setTwoWayResults] = useState(type === "twoWay" ? flights.filter((flight) => flight.departure_date.includes(flightInfo.returnDate) ? true : false) : []);

    const tableHeader = ['Departure Airport', 'Arrival Airport', 'Departure Date', 'Departure Hour', 'Flight Time', 'Flight Price($)'];

    return(
        <>
            {type === "twoWay" && <h2 style={{marginTop: "20px"}}>OUTBOUND FLIGHT</h2>}
            <Table striped>
                <thead>
                    <tr>
                        {tableHeader.map((header) => <th> {header} </th>)}
                    </tr>
                </thead>
                <tbody>
                    {oneWayResults.map((result) => (
                        <tr>
                            <td>{flightInfo.departureAirport}</td>
                            <td>{flightInfo.arrivalAirport}</td>
                            <td>{result.departure_date}</td>
                            <td>{result.departure_hour}</td>
                            <td>{result.flight_time}</td>
                            <td>{result.flight_price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
            {type === "twoWay" && <h2 style={{marginTop: "20px"}}>INBOUND TRIP</h2>}
            {type === "twoWay" && 
            <Table striped>
                <thead>
                    <tr>
                        {tableHeader.map((header) => <th> {header} </th>)}
                    </tr>
                </thead>
                <tbody>
                    {twoWayResults.map((result) => (
                        <tr>
                            <td>{flightInfo.arrivalAirport}</td>
                            <td>{flightInfo.departureAirport}</td>
                            <td>{result.departure_date}</td>
                            <td>{result.departure_hour}</td>
                            <td>{result.flight_time}</td>
                            <td>{result.flight_price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            }
        </>

    )
};

export default FlightResults;