import "./CampoTexto.css"


const aoDigitado = (evento) =>{
    props.aoAlterado(evento.target.value)
}


const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto