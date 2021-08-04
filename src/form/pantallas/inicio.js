import React, {useLayoutEffect} from 'react';
import logoWhite from '../../assets/logoPointWhite.png'
class Inicio extends React.Component{

    componentDidMount () {
        document.addEventListener("keydown", (e) =>{
          if  (e.code === "Enter")
               this.props.next()
        })
    }
    onKeyPress=(e)=>{
        this.props.setVar(2,this.state.portada)
    }
    enterPressed(e) {
        var code = e.keyCode || e.which;
        if(code === 13) {
            this.onKeyPress()
        }
    }
     onSubmit (e) {
        e.preventDefault()
         console.log("onsubmit")
        this.props.setVar(1,this.state.nombre)
        this.props.next()
    }
    render() {
        const myOnChange=(e)=>{
            this.setState({portada: e.target.value})
        }

        return(
            <div>

                <form onSubmit={this.onSubmit.bind(this)} className="fluidForm">
                    <span className="top-text"><img src={logoWhite}/></span>
                    <span className="sub-text">Déjanos ayudarte con tu proyecto.</span>

                    <input type="submit" className="btn" value="Empezar" onClick={this.props.next} onChange={myOnChange}
                           onKeyPress={this.enterPressed.bind(this)}/> <span
                    className="note" >press <b> Enter </b>&#8629;</span>


                </form>
            </div>

        )
    }

}

export default Inicio
