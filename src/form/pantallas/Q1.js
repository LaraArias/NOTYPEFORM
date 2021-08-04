import React from 'react';

class Q1 extends React.Component{
    constructor() {
        super();
        this.state={
            nombre:""
        }
    }

    onKeyPress=(e)=>{
        this.props.setVar(2,this.state.nombreEmpresa)
    }
    enterPressed(e) {
        var code = e.keyCode || e.which;
        if(code === 13) {
            this.onKeyPress()
        }
    }
    render() {
        const myOnChange=(e)=>{
            this.setState({nombre: e.target.value})
        }
        const OnSubmit=(e)=>{
            this.props.setVar(1,this.state.nombre)
        }
        return(
            <div>

                <form action="" className="fluidForm">
                    <span className="sub-text">1.&#8594;¿Cómo te llamas?</span>
                    <div>
                        <div className="borderBottom">
                        <input type="text" className="answer" onChange={myOnChange}
                               value={this.state.name} onKeyPress={this.enterPressed.bind(this)}
                               placeholder="Escribe tu respuesta aqui..." /></div>
                    </div>
                </form>
            </div>

        )
    }

}

export default Q1
