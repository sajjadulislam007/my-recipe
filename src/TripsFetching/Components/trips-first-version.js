import React, { useEffect, useState, useCallback } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "../Styles/_TripList.scss";
const Trips = () => {
    const [trips, setTrips] = useState([]);
    const [loading, setloading] = useState(false);
    const [url, setUrl] = useState("http://localhost:3000/trips");

    const fetchTrips = useCallback(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setTrips(data);
    }, [url]);

    useEffect(() => {
        fetchTrips();
        // fetch(url)
        //     .then((Response) => Response.json())
        //     .then((json) => setTrips(json));
    }, [fetchTrips]);

    const handleDelete = (id) => {
        const filteredTrips = trips.filter((item) => {
            if (id === item.id) {
                return false;
            } else {
                return true;
            }
        });
        setTrips(filteredTrips);
    };

    const handleBangladeshiTrips = () => {
        setUrl("http://localhost:3000/trips?location=Bangladesh");
    };
    const handleFranceTrips = () => {
        setUrl("http://localhost:3000/trips?location=europe");
    };
    const handleAllTrips = () => {
        setUrl("http://localhost:3000/trips");
    };

    return (
        <div className="container">
            <ul className="tripList">
                <div className="heading">
                    <h1>Trip List</h1>
                    <small className={`${trips.length >= 1 ? "green" : "red"}`}>
                        {trips.length === 0
                            ? "Trip List is Empty"
                            : `${
                                  trips.length > 1 && trips.length < 9
                                      ? `There are 0${trips.length} Trips`
                                      : `There are ${trips.length} Trip`
                              }`}
                    </small>
                    <div className="filter">
                        <button onClick={handleAllTrips}>All Trips</button>
                        <button onClick={handleBangladeshiTrips}>
                            Bangladeshi Trips
                        </button>
                        <button onClick={handleFranceTrips}>
                            Europian Trips
                        </button>
                    </div>
                </div>
                {trips.map((trip) => (
                    <li key={trip.id}>
                        <h2>
                            <span>Time & Place:</span> {trip.title}
                        </h2>
                        <h3>
                            <span>Location:</span> {trip.location}
                        </h3>
                        <p>
                            <strong>Price:</strong> {trip.price}
                        </p>
                        <button
                            onClick={() => {
                                handleDelete(trip.id);
                            }}
                            className="delete"
                        >
                            <FaTrashAlt />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Trips;
