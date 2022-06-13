import './_button.scss';
const Button = (props) => {
    let classList = "button";
    if(props.size === "wide"){
        classList += " button-wide";
    }
    if(props.size === "md"){
        classList += " button-md";
    }
    if(props.color === "primary"){
        classList += " button-primary";
    }
    return (
        <button 
            className={classList} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    )
}
export default Button
