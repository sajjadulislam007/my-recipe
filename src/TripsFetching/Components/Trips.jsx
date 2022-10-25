import React, { useState } from "react";
import FetchTrips from "../../Hooks/useFetch";
import { FaTrashAlt } from "react-icons/fa";
import Loading from "../../Components/Loading";
import "../Styles/_TripList.scss";
import ErrorMessage from "../../Components/ErrorMessage";
const Trips = () => {
    const [url, setUrl] = useState("http://localhost:3000/trips");
    const { data, setData, isLoading, error } = FetchTrips(url);

    const handleDelete = (id) => {
        const filteredTrips = data.filter((item) => {
            if (id === item.id) {
                return false;
            } else {
                return true;
            }
        });
        setData(filteredTrips);
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
                    <small
                        className={
                            !data
                                ? ".text-success"
                                : data.length > 1
                                ? ".text-danger"
                                : ""
                        }
                    >
                        {!data
                            ? data
                            : data.length <= 1
                            ? `There Are  ${data.length} Trip`
                            : data.length === 0
                            ? `There Are No Trip`
                            : `There Are ${data.length} Trips`}
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
                {isLoading && <Loading />}
                {error && <ErrorMessage message={error} />}
                {data &&
                    data.map((trip) => (
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
