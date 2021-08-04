import React from 'react';

class Q2 extends React.Component{
    constructor() {
        super();
        this.state={
            nombreEmpresa:""
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
            this.setState({nombreEmpresa:e.target.value})
        }

        return(
            <div>

                <form action="" className="fluidForm">
                    <span className="sub-text">2.&#8594;¿Cuál es el nombre de tu empresa? {this.props.nombre}</span>
                    <div>
                      <div className="borderBottom"> <input type="text" className="answer" onChange={myOnChange}  value={this.state.name}
                                                            onKeyPress={this.enterPressed.bind(this)} placeholder='Escribe tu respuesta aqui'/></div>
                    </div>

                </form>
            </div>

        )
    }

}

export default Q2
