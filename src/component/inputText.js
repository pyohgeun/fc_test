import { useState } from 'react';
import './_inputText.scss';
const InputText = (props) => {
    const [border, setBorder] = useState(false);
    const handleFocus = () => {
        setBorder(true);
    }
    const handleBlur = () => {
        setBorder(false);
    }
    return(
        <div className={border ? "input-wrapper on-focus" : "input-wrapper"}>
            {!!props.children ? props.children : null}
            <div className="input-border">
                <input type="text" placeholder={props.placeholder} className="input-text" onChange={props.onChange} onFocus={handleFocus} onBlur={handleBlur}/>
            </div>
        </div>
    )
}
export default InputText