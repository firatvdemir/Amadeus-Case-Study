import { useContext, useEffect, useState } from "react";
import { FlightContext } from "../App";

import flights from "../data/flights.json";

function FlightResults({type}) {
    const{flightInfo, setFlightInfo} = useContext(FlightContext);
    const[oneWayResults, setOneWayResults] = useState(flights.filter((flight) => flight.departure_date.includes(flightInfo.departureDate) ? true : false));
    const[twoWayResults, setTwoWayResults] = useState(type === "twoWay" ? flights.filter((flight) => flight.departure_date.includes(flightInfo.returnDate) ? true : false) : []);

    return(
        <>
            <p>
                {oneWayResults.map((result) => result.departure_date)}
            </p>
        </>
    )
};

export default FlightResults;