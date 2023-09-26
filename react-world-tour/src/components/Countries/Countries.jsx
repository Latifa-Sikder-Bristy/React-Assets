import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = (country) => {
        console.log('add this to visited country');
        const newVisitedCountries = [...visitCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h3>Countries {countries.length}</h3>
            <div>
                <h4>Visited Countires:  {visitCountries.length}</h4>
                <ul style={{ listStyle: "none" }}>
                    {
                        visitCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.ccn3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }
            </div>
        </div >
    );
};

export default Countries;