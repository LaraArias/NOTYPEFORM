import React from 'react';

class Q3 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const myOnChange = (e) => {
            this.setState({objetivo: e.target.value})
        }

        const setAnswerCotizacion = () => {
            this.props.next()
        }

        const setAnswerAlianza = () => {
            this.props.next()

        }

        const setAnswerEquipo = () => {
            this.props.next()
        }
        return (
            <div className="fluidForm">
                <h1> 3.&#8594; ¿Cómo podemos ayudarte?</h1>

                <div className="formCont">
                    <button className="bloque" onClick={setAnswerCotizacion}>
                        ¡Quiero una cotización!
                    </button>

                    <button className="bloque" onClick={setAnswerAlianza}>
                        ¡Quiero generar una alianza!
                    </button>

                    <button className="bloque" onClick={setAnswerEquipo}>
                        ¡Quiero unirme al equipo!
                    </button>

                </div>
            </div>
        )
    }

}
export default Q3
