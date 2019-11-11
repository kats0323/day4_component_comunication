import React, { Component } from "react";
import Child from "./Child"
import "../App.css";


export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "React 101"
        }

    }
    changeTitle = (newTitle) => {
        this.setState({
            title: newTitle
        })
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <h1>PARENT</h1>
                <p>{this.state.title}</p>
                <Child changeParentTitle={this.changeTitle} title={this.props.title} {...this.props} />
            </div>
        )
    }
}