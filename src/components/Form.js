import React, { Component } from 'react';
import Countries from './Countries';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      selectValue: '',
      countries: [],
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((data) => data.json())
      .then((data) => {
        this.setState({ countries: data.slice(0, 30) });
      })
      .catch((err) => console.log(err));
  }

  handleSubmit = (e) => {
    const { input } = this.state;
    e.preventDefault();
    fetch(`https://restcountries.eu/rest/v2/name/${input}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.status !== 404) {
          this.setState({ countries: data });
        }
      })
      .catch((err) => console.log(err));
  };

  handleSelect = (e) => {
    this.setState({ selectValue: e.target.value }, () => {
      fetch(`https://restcountries.eu/rest/v2/region/${this.state.selectValue}`)
        .then((data) => data.json())
        .then((data) => this.setState({ countries: data }))
        .catch((err) => console.log(err));
    });
  };

  handleChange = (e) => this.setState({ input: e.target.value });

  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <i className="fas fa-search"></i>
            <input
              type="text"
              id="text"
              placeholder="Search for a country..."
              onChange={this.handleChange}
            />
          </div>
          <select id="select" onChange={this.handleSelect}>
            <option value="">Filter By region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
        <div className="grid">
          {this.state.countries ? (
            this.state.countries.map((country) => (
                <Countries countries={country} key={country.area} />
            ))
          ) : (
            <div>Not found</div>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
