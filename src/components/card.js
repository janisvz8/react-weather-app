import React, { Component } from 'react';
import {Card, CardText, CardMedia} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';


import '../css/card.css';


class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {}};
  }

  componentWillReceiveProps(nextProps){
    this.setState({data: nextProps.data})
  }
    
  render() {
     console.log(this.state.data.newlist);
     
      const currTime = new Date(); 
      console.log(currTime);
      
        if(this.state.data.newlist) {
            const {newlist} = this.state.data.newlist;
            
            return (
                
      <div>
            <h1>React Weather App</h1>
        {this.state.data.newlist.map((item, index) => (
         
            
            <Card
            key={index}
            className="cardWidth"
            >
            <div className="card-color">
            <h4>{this.state.data.city} , {this.state.data.country}</h4>
                <h5>{item.date}</h5>
            <CardMedia>
                <img src={require('../img/' + item.time[0].imgid)} alt="img" className="imgStyle" />
            </CardMedia>
            <CardText>
             
               <p className="temp">{item.currentTemp}</p>
            <div class="flex-container-col">
                <div class="flex-container-row">
                    <div><img src={require('../img/raindrop.png')} alt="img" className="iconStyle" /></div>
                    <div className="div_padding">{item.time[0].humidity} %</div>
                    <div><img src={require('../img/wind.png')} alt="img" className="iconStyle" /></div>
                    <div className="div_padding">{item.time[0].windspeed} mph</div>
                </div>
            </div>
           
            </CardText>
            </div>
            <div class="card-temp">
                <div class="flex-container-row">
                    {item.time.map((val, index) => (
                    <div key={index} className="hourStyle">
                    <div>{val.time}</div>
                    <img src={require('../img/' + val.imgid)} alt="img" className="hourimgStyle" />
                    <div className="smalltemp">{val.temp}</div>
                    </div>
                )) 
                }
                </div>
            </div>
            </Card>
            
        ))}


      </div>
    );
        }
    else {
        return (
        <div>
        <LinearProgress mode="indeterminate" />    
        </div>
        );
    }
      
   
    
  }
    
    
}

export default WeatherCard;