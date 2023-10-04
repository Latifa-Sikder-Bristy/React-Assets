import CountrySpec from "../CountrySpec/CountrySpec";

const CountryDetail = (props) => {
    // const { country, handleVisitedCountry, handleVisitedFlags } = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/*     if 2/3 props write like below
                    or use destucture method for props drilling  */}
            {/* <CountrySpec
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountrySpec> */}
            <CountrySpec {...props}></CountrySpec>
        </div>
    );
};

export default CountryDetail;