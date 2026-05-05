import React from "react";

class Counter extends React.Component{

    constructor()
    {
        super()
        this.state = {
            count : 0
        }
    }

    componentDidMount()
    {
        console.log("Counter Mounted")
    }

    componentWillUnmount()
    {
        console.log("Counter Unmounted")
    }

    componentDidUpdate()
    {
        console.log("State updated")
    }

    render()
    {
        return (
            <div>
                <h1>COunt is {this.state.count}</h1>


                <button onClick={() => {
                    this.setState({count : this.state.count + 1})
                }}>Increment</button>
                <button onClick={() => {
                    this.setState({count : 0})
                }}>Reset</button>
                <button onClick={() => {
                    this.setState({count : this.state.count - 1})
                }}>Decrement</button>
            </div>
        )
    }
}

export default Counter