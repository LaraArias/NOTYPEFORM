import React from 'react';
import Inicio from "./pantallas/inicio";
import Q1 from "./pantallas/Q1";
import Q2 from "./pantallas/Q2";
import Q3 from "./pantallas/Q3";
import Q4 from "./pantallas/Q4";
import Fin from "./pantallas/fin";


class Notypeform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portada: "",
            nombre: "",
            nombreEmpresa: "",
            objetivo: "",
            detalles: "",
            step: 0,
        }
    }

    nextStep = () => {
        this.setState(prevState => ({
            step: prevState.step + 1
        }));
    }
    prevStep = () => {
        this.setState(prevState => ({
            step: prevState.step - 1
        }));
    }
    setVar = (caso, res) => {
        switch (caso) {
            case 0:
                this.setState({portada: res})
                break;
            case 1:
                this.setState({nombre: res})
                break;
            case 2:
                this.setState({nombreEmpresa: res})
                break;
            default:
                break;

        }
        this.nextStep()
    }

    render(){
        let screen = (<h1>Error</h1>)
        if (this.state.step === 0) {
            screen = (<Inicio next={this.nextStep}/>)
        }
        else if (this.state.step === 1) {
            screen = (<Q1 setVar={this.setVar}/>)
        }
        else if (this.state.step === 2) {
            screen = (<Q2 setVar={this.setVar}/>)
        }
        else if (this.state.step === 3){
            screen = (<Q3 setVar={this.setVar} next={this.nextStep}/>)
        }
        else if (this.state.step === 4){
            screen = (<Q4 setVar={this.setVar} nombre={this.state.nombre}/>)
        }
        else if (this.state.step === 5){
            screen = (<Fin />)
        }
        return (
            <div>
                <button onClick={this.prevStep}>&#8701;</button>
                <button onClick={this.nextStep}>&#8702;</button>
                {screen}
            </div>
        )
    }
}

export default Notypeform
