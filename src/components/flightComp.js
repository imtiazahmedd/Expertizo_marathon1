import React, { Component } from 'react';
import flightDataComponent from './flightDateComponent'
import axios from 'axios';
import moment from 'moment'
export  default class Comp extends Component{
    constructor(){
        super();
        this.state = {
            data : '',
            day : new Date()
        }

    }

    componentDidMount(){

        var date=this.state.day.toLocaleDateString();
        date=date.split("/")
        var date1=date[2]+"-"+date[0]+"-"+date[1]

        console.log("date1",date1)
        console.log("https://api.schiphol.nl/public-flights/flights?app_id=736271b6&app_key=92b67b61a7e5ed55211ef7584a05d618&scheduledate="+date1)


        axios.get("https://api.schiphol.nl/public-flights/flights?app_id=736271b6&app_key=92b67b61a7e5ed55211ef7584a05d618&scheduledate="+date1,
            {
                headers:{
                    Accept: 'application/json', ResourceVersion: 'v3'
                }
            }
        )

            .then((data) => {
                this.setState({
                    data : data
                })
            })
            .catch((err) => console.log(err));


    }


    render(){

        console.log(this.state.data);

        return(
            <div>

            <div style={{textAlign : 'center'}}>

                <span>
                    <input style={{width : 200}} type = "text"/>
                </span>
                <br/>
                <div>
                    <br/>
                    <button style={{width : 100, color : 'white' , backgroundColor : 'blue'}}>Get Flight</button>
                </div>
                <h5>{
                    this.state.data ?
                        this.state.data.data.flights.map((data,index)=>{

                                return <table style={{borderBottom : '1px solid black', paddingLeft: 40, justifyContent: 'center', width : 1300}}>
                                    <td style={{padding : 30}}>{data.flightName}</td>
                                    <td style={{padding : 30}}><input type="checkbox"/> {data.flightName}</td>
                                    <td style={{padding : 30}}>Date :{data.scheduleDate}{"\n"}Time:{data.scheduleTime}</td>
                                    <td style={{padding : 30}}>Date :{new Date(data.estimatedLandingTime).toLocaleDateString()}{"\n"}Time :{new Date(data.estimatedLandingTime).toLocaleTimeString()}</td>
                                </table>
                            }
                        ) : ''

                }</h5>

            </div>
            </div>
            )
    }
}