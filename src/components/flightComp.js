import React, { Component } from 'react';
import flightDataComponent from './flightDateComponent'
import axios from 'axios';
export  default class Comp extends Component{
    constructor(){
        super();
        this.state = {
            data : ''
        }

    }

    componentDidMount(){

        axios.get('https://api.schiphol.nl/public-flights/flights?app_id=736271b6&app_key=92b67b61a7e5ed55211ef7584a05d618&scheduledate=2017-12-22&includedelays=false&page=0&sort=%2Bscheduletime',
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
                <div>
                    <input placeholder="search" type = "text"/>
                </div>
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

                                return <table style={{}}>
                                    <td style={{padding : 20}}>{data.flightName}</td>
                                    <td style={{padding : 20}}>{data.expectedTimeOnBelt}</td>
                                    <td style={{padding : 20}}>{data.actualLandingTime}</td>
                                </table>
                            }
                        ) : ''

                }</h5>

            </div>
            </div>
            )
    }
}