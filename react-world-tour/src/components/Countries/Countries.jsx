import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    //States
    const [countries, setCountries] = useState([]);
    const [visitCountries, setVisitedCountries] = useState([]);
    const [visitedCountryFlags, setVisitedCountryFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    //Event handlers
    const handleVisitedCountry = (country) => {
        console.log('add this to visited country');
        const newVisitedCountries = [...visitCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags = flag => {
        console.log('flag adding');
        const newVisitedFlags = [...visitedCountryFlags, flag];
        setVisitedCountryFlags(newVisitedFlags);
    }

    //remove item from an array in a state
    //use filter to select all the elements except the one you want



    return (
        <div>
            <h3>Countries {countries.length}</h3>
            {/* Visited country*/}
            <div>
                <h4>Visited Countires:  {visitCountries.length}</h4>
                <ul style={{ listStyle: "none" }}>
                    {
                        visitCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedCountryFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            {/* Display countries*/}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.ccn3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div >
    );
};

export default Countries;