import React from 'react';

class Fin extends React.Component{
    constructor() {
        super();
        this.state={
            sent:""
        }
    }

    onKeyPress=(e)=>{
        this.props.setVar(2,this.state.sent)
    }

    render() {
        const myOnChange=(e)=>{
            this.setState({sent: e.target.value})
        }
        const OnSubmit=(e)=>{
            this.props.setVar(1,this.state.sent)
        }
        return(
            <div>

                <form action="" className="fluidForm">
                    <span className="sub-text">4.&#8594; Ok, {this.state.nombre} platícanos un poco más sobre tu proyecto. </span>
                    <div>
                        <h1> Fin</h1>
                    </div>
                </form>
            </div>

        )
    }

}

export default Fin
