import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';



class WeatherList extends Component {
  renderWeather(cityDat){
    const name = cityDat.city.name;
    const temps = cityDat.list.map(weather => weather.main.temp);
    const pressure = cityDat.list.map(weather => weather.main.pressure);
    const humidity = cityDat.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="Celsius" /></td>
        <td><Chart data={pressure} color="blue" units="hPa" /></td>
        <td><Chart data={humidity} color="green" units="%" /></td>
      </tr>
    );
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Celsius)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
