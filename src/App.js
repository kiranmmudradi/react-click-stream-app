import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class App extends Component {

    constructor () {
        super() 
        this.handleClick = this.handleClick.bind(this)
      }
      
      handleDateTime(){
        let date_ob = new Date();

        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);
        
        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        
        // current year
        let year = date_ob.getFullYear();
        
        // current hours
        let hours = date_ob.getHours();
        
        // current minutes
        let minutes = date_ob.getMinutes();
        
        // current seconds
        let seconds = date_ob.getSeconds();

        let finalDataTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

        return finalDataTime
      };
      
      handleClick= (e) => {
        const eventData = { 
            eventId: 'button'+e.target.id+'clicked',
            userId:uuidv4(),
            timestamp:this.handleDateTime(),
            browser:'google.com'
        };  
        axios.post('http://localhost:8095/api/version/',eventData)
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
        })
            .catch(function (error) {
                console.log(error);
        });
        console.log(eventData);
        //console.log(e.currentTarget.id);
      }
   
    render() {
      return (
        <div className='button__container'>
        <button className='button' id="1" onClick={this.handleClick}>
            Click Me
        </button>
        <br/>
        <button className='button' id="2" onClick={this.handleClick}>
            Click Me
        </button>
        <br/>
        <button className='button' id="3" onClick={this.handleClick}>
            Click Me
        </button>
        
      </div>
      );
    }
}

export default App;
