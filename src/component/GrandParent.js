import React, { Component } from "react";
import Parent from "./Parent";
import Child from "./Child";
import "../App.css"
export default class GrandParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Bob"
        }
    }
    newName = (newName) => {
        this.setState({
            name: newName
        })
    }


    render() {
        return (
            <div className="App">
                <h1>Grand Parent: {this.state.name}</h1>
                <Parent name={this.state.name} />
                <Child changeGrandParentName={this.newName} title={this.props.name} />
            </div>
        )
    }
}




