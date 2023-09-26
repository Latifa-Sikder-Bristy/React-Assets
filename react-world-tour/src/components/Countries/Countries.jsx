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
        console.log(country);
    }
    return (
        <div>
            <h3>Countries {countries.length}</h3>
            <div>
                <h5>Visited Countires</h5>
                <ul>

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
        </div>
    );
};

export default Countries;