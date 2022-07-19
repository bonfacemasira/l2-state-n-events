import React from "react";

export class CountDown extends React.Component{

    constructor(props){
        super(props)
        this.state = {count: 10}
    }

    componentDidMount(){
        // this.update()
    }

    update(){
        setInterval(() => {
            if (this.state.count > 0) {
                let currentCount = this.state.count;
                this.setState({count: currentCount - 1})
            }
        }, 1000)
    }


    render(){
        return(
            <div>
                <center>
                    <h4 className="time-text">{this.state.count}</h4>
                </center>
            </div>
        )
    }

}