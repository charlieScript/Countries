import React from 'react';
import { Link } from 'react-router-dom';

function Countries(props) {
  return (
    <Link
      to={`/${props.countries.alpha3Code}`}
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <div className="card">
        <div className="image">
          <img src={props.countries.flag} alt="flag" />
        </div>
        <div className="info">
          <h2 style={{ marginBottom: '0.5rem' }}>{props.countries.name}</h2>
          <p>
            <span>Population:</span>
            {props.countries.population}
          </p>
          <p>
            <span>Region:</span> {props.countries.region}
          </p>
          <p>
            <span>Capital:</span>
            {props.countries.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
export default Countries;
