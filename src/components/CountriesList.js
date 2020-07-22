import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: [],
      languages: [],
      borders: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          country: data,
          name: data.currencies[0].name,
          languages: data.languages,
          borders: data.borders,
        });
      })
      .catch((err) => console.log(err));
  }

  update = (id) => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          country: data,
          name: data.currencies[0].name,
          languages: data.languages,
          borders: data.borders,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { country, name } = this.state;
    return (
      <div className="country-info">
        <Link to="/">
          <button className='back-btn'>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
        </Link>

        <div className="grid-info">
          <img src={country.flag} alt="flag" />
          <div className="more-info">
            <h1>{country.name}</h1>
            <div className="more-info-grid">
              <div>
                <p><span>Native Name:</span>{country.nativeName}</p>
                <p><span>Population:</span> {country.population}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Subregion:</span> {country.subregion}</p>
                <p><span>Capital:</span> {country.capital}</p>
              </div>
              <div>
                <p><span>Top Level Domain:</span> {country.topLevelDomain}</p>
                <p><span>Currency:</span> {name}</p>
                <div className='language'>
                  <p>languages:</p>
                  {this.state.languages.map((lang, index) => (
                    <p key={index}>{lang.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="border">
              <p>Border Countries:</p>
              <div className='border-inner'>
                {this.state.borders.map((lang, index) => (
                <button key={index} onClick={() => this.update(lang)}>
                  <Link to={`/${lang}`}>{lang}</Link>
                </button>
              ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;
