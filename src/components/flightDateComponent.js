import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import axios from 'axios';
import Comp from './flightComp'
import 'react-day-picker/lib/style.css';


class DaySelected extends Component {
    constructor(){
        super();
        this.state={day:new Date()}
    }


    componentWillReceiveProps(props,state){
        console.log("state",state)
    }
    render() {
        return (
            <div style={{textAlign : 'center', marginTop : 30}}>
                <DayPickerInput onDayChange={day => this.setState({day : day})} />
                <Comp day={this.state.day}/>

            </div>
        );
    }
}

export default DaySelected;