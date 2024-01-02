import { useContext, useEffect } from "react";
import { FlightContext } from "../App";

import flights from "../data/flights.json";

function FlightResults() {
    const{flightInfo, setFlightInfo} = useContext(FlightContext);

    useEffect(() => {
        
    }, [])


    return(
        <>
            <p>
                {flightInfo.arrivalAirport} {flightInfo.departureDate}
            </p>
        </>
    )

};

export default FlightResults;