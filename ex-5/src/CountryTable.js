import React, { Component } from "react";
import CountryFactory from './CountryFactory';
const dataStore = new CountryFactory();

class CountryTable extends Component {
  constructor(){
      super();
      this.store = dataStore;
      this.state = { _labels: [], _countries: []};
 
      this.store.loadLabels(function (json) {
          this.setState({ _labels: json });
      }.bind(this));

      this.store.loadCountries(function (json) {
          this.setState({ _countries: json });
      }.bind(this));
	  this.generalPart = this.generalPart.bind(this);
  }
  
  generalPart(){
	  console.log("1. Describe the term Single Page Application and why it has become so popular for modern web-applications\n"
	   + "\nit is a web application that dynamically rewrites the current page, whereas the old way would be to load new pages from a server,"
	   + " the main reason it has become so popular is because it is faster (the page loads only once, only the data is being transmitted back and forth)\n\n" + 
	   "2. Explain the “recommended” React way of passing data into Components (at the top, or at the bottom or..)\n"
	   + "\n there are many ways to do this, but in contrast to the most recommended way i would have to shoot for this:" 
	   + " make a constructor, call super() and make a this.state. inside here you can give some data for example {name: 'per'}, if you want to "
	   + " get this data all you have to do is in the render method call this.state.name. Do the render at bottom, do the constructor at top, and do the reactdom at the very bottom\n\n\n" + 
	   "3. Explain how JavaScript array methods, like filter, map and (reduce) can be used to generate dynamic HTML structures (tables, ul's etc.)\n" 
	   + "\nSo filter, map and so on do something to an array, and then they return a new array. Map gives an array depending on what ruleset you gave it, and filter gives an array depending on which index you wish to remove. In react we can do the same with html elements such as <ul></ul> and then we can put the value inside the tags with curley brackets. So if we have an array with ul tags all we have to do is call the array in the render method and the tags should show up. (no need for a loop)\n\n" + 
	   "4. Explain about the Observer pattern, and where you have used it, both with Java and JavaScript.\n"
	   + "\nAn observer pattern is an object that maintains a list of dependents. In javascript i have used this everytime i have done a fetch method, where i have to specify a url, and if it's a get or post method and so on." +
	   ", in java i've mostly used this in arraylists and hashmaps"
	  );
  }

  render() {

      const headerLabels = this.state._labels.map(function (label) { return(<th>{label}</th>)});
      const bodyCountries = this.state._countries.map(function (country) {
          return(
              <tr>
                  <td>{country.name}</td>
                  <td>{country.capital}</td>
                  <td>{country.region}</td>
                  <td>{country.population}</td>
                  <td>{country.area}</td>
                  <td>{country.timezones}</td>
                  <td>{country.borders}</td>
                  <td>{country.topLevelDomain}</td>
                  <td>{country.currencies}</td>
                  <td>{country.languages}</td>
              </tr>)
      });
	  
      return (
	  <div><button onClick={this.generalPart}>General part, click and check console</button>          
      <table className="table">
              <thead>
                  <tr>{headerLabels}</tr>
        </thead>
        
              <tbody>
                  {bodyCountries}
        </tbody>
      </table></div>
    );
  }
}
export default CountryTable;