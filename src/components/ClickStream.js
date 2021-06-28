import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class ClickStream extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Data:[
                {
                    "event" : "button1clicked",
                    "user" : "1234-4567-2222-5676",
                    "timestamp": new Date().toLocaleString(),
                    "url":"yahoo.com",
                    "browser_details":"chrome"
                },
                {
                    "event" : "button2clicked",
                    "user" : "1234-4567-2222-3333",
                    "timestamp": new Date().toLocaleString(),
                    "url":"google.com",
                    "browser_details":"chrome"
                }
            ]

        }
    }

    clickme(item){
        alert('test');
        console.log(item);

    }
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo">
                        <h1 className="App-title">
                                Welcome to Click Stream Application
                        </h1>
                    </img>
                </header>
                {
                    this.state.Data.map((item,index)=>
                        <p>
                            <a onClick={this.clickme.bind(this,item)}>
                             {item.event}
                            </a>
                            
                        </p>
                    )
                }
            </div>
        );
    }
}
export default ClickStream;