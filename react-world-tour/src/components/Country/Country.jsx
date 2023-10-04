import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country || {};

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    // const passWithParams = () => handleVisitedCountry(country)
    // console.log(handleVisitedFlags);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>{name?.common}</h3>
            <img className='flag-height' src={flags?.png} alt="" />
            <p>Population: {population}</p>
            {/* <p>Population: {population?.toString().split("").join(",")}</p> */}
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? '  I have visited this country' : '  I want to visit'}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;