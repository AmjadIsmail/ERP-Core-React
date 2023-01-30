
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
import React from 'react';
import ReactDOM from 'react-dom';
  
class App extends React.Component {
    
    onInputChange(event) {
        console.log(event.target.value);
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Enter text</label>
                    <input type="text"
                        onChange={this.onInputChange}/>
                </form>
            </div>
        );
    }
}
  
ReactDOM.render(<App />,
            document.querySelector('#root'));
*/
/*
import React from 'react';
import ReactDOM from 'react-dom';
  
class App extends React.Component {
    
    state = { inputValue: '' };
    
    render() {
        return (
        <div>
            <form>
                <label> Enter text </label>
                <input type="text"
                    value={this.state.inputValue}
                    onChange={(e) => this.setState(
                    { inputValue: e.target.value })}/>
            </form>
            <br/>
            <div>
                Entered Value: {this.state.inputValue}
            </div>
        </div>
        );
    }
}
  
ReactDOM.render(<App />,
            document.querySelector('#root'));
            */
  /* API Example */
  /*
  import React from 'react';
  import ReactDOM from 'react-dom';
  class Weather extends React.Component {
  
    constructor(props) {
        super(props);
  
        this.state = {
            location: "",
            place: "",
            temp: "",
            weather: ""
        };
    }
  
    render() {
  
        return (
            <div className="weather">
                <label htmlFor="text">Enter Location</label>
                <br />
                <div id="location">
                    <input onChange={this.changeValue}
                           type="text" value={this.state.location} />
                </div>
                <div className="button">
                    <button onClick={this.getWeather}>
                      Check Weather 
                    </button>
                </div>
                <div>
                    <h1>Location: {this.state.place}</h1>
                    <h3>Temperature: {this.state.temp} C</h3>
                    <h3>Condition: {this.state.weather}</h3>
                </div>
            </div>
        );
    }
  
    changeValue = (event) => {
  
        this.setState({
            location: event.target.value
        });
    }
  
    getWeather = () => {
  
        fetch(`
https://home.openweathermap.org/weather?q=${this.state.location}&units=metric&APPID='a2a01fb16a811a73e0e07e55d2d2b405'`)
            .then(response => response.json())
            .then(data => {
              console.log(data);
                this.setState({
                    place: data.name,
                    temp: data.main.temp,
                    weather: data.weather[0].main
                });
            });
  
    }
}
  
export default class Main extends React.Component {
  
    constructor(props) {
  
        super(props);
  
        this.state = {
  
        };
    }
  
    render() {
  
        return (
            <div className="main">
                <div className="title">
                  What's the Weather?
                </div>
                <hr />
                <Weather />
            </div>
        );
    }
}

ReactDOM.render(<Main />,
            document.querySelector('#root'));

  /*
import React from 'react';
import ReactDOM from 'react-dom';
  
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        error: null,
        dataFetched: false,
        data: []
      };
    }
    
    componentDidMount() {
      fetch("https://api.toptensongs.com/data")
        .then(res => res.json())
        .then(
          (response) => {
            this.setState({
              dataFetched: true,
              data: response.data,
              isLoaded : true
            });
          },
          (error) => {
            this.setState({
              dataFetched: true,
              error,
              isLoaded : false
            });
          }
        )
    }
    
    render() {
      const { error, dataFetched, data, isLoaded } = this.state;
      
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ol>
            {data.map(value => (
              <li key={value.name}>
                {value.name} - {value.artist}
              </li>
            ))}
          </ol>
        );
      }
    }
  }
  */
 