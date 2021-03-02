import React, {useState,useRef} from 'react';
import '../Estilos/Style.css';

function Element(props){
    const [setActive, setActiveState] = useState(" ");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toogleAcordeon(){
        setActiveState(setActive === " "?"active":" ");
        setHeightState(setActive === "active"? `${content.current.scrollHeight}px`:"0px");

        console.log(setActive);
        console.log(setHeight);
    }

    return(
        <div className="item">
        <div className= {`element ${setActive}`}>
            <p className="title">{props.title}</p>
            <i class={`fas fa-chevron-up ${setActive}`} onClick={toogleAcordeon}></i>
        </div>
        <div ref={content} className='contenido' style={{maxHeight:`${setHeight}`}}>
            <p>{props.text}</p>
        </div>
        </div>
    )
}

export default Element;