import React from 'react';

class Q4 extends React.Component{
    constructor() {
        super();
        this.state={
            detalles:""
        }
    }

    onKeyPress=(e)=>{
        this.props.setVar(2,this.state.detalles)
    }
    enterPressed(e) {
        var code = e.keyCode || e.which;
        if(code === 13) {
            this.onKeyPress()
        }
    }
    render() {
        const myOnChange=(e)=>{
            this.setState({detalles: e.target.value})
        }
        const OnSubmit=(e)=>{
            this.props.setVar(1,this.state.detalles)
        }
        return(
            <div>

                <form action="" className="fluidForm">
                    <span className="sub-text">4.&#8594; Ok, {this.state.nombre} platícanos un poco más sobre tu proyecto. </span>
                    <div>
                        <div className="borderBottom">
                            <input type="text" className="answer" onChange={myOnChange}
                                   value={this.state.detalles} onKeyPress={this.enterPressed.bind(this)}
                                   placeholder="Escribe tu respuesta aqui..." /></div>
                    </div>
                </form>
            </div>

        )
    }

}

export default Q4
