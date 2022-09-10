import './Codelock.css';
import { useState } from 'react';
import axios from "axios";

const Codelock = ({ setIsOpen }) => {
    const [buttons, setButtons] = useState([]);
    const [input, setInput] = useState([]);

    const generateNumPad = () => {
        // if numpad has been already generated
        if (buttons.length > 1) {
            return;
        }
        for (let i = 0; i < 10; i++) {
            buttons.push(<div className="button" key={i}><p>{i}</p></div>);
        }
        //Moves "0" button to end of button array
        buttons.push(buttons.shift());
    }
    generateNumPad();

    const handleInput = (pressedBtn) => {
        let tempInputArr = input;
        pressedBtn == 10 ? tempInputArr.push(0) : tempInputArr.push(pressedBtn);
        setInput(tempInputArr);

        // Handles resetting the code if 4 digits have been set 
        if ((input.length) == 4) {
            checkCode(tempInputArr.join(""));
            setInput([]);
        }
    }

    const checkCode = async (inputCode) => {
        axios.get("http://localhost:3001/checkCode", { params: { inputCode } }).then((response) => {
            if (inputCode == response.data[0].passcode) {
                console.log("CODE CORRECT!");
                setIsOpen(true);
            }
            else {
                console.log("incorrect code.")
                setIsOpen(false);
            }
        })
    }

    return (
        <div className="codelock-container">
            {
                // How array.map works and more: https://reactjs.org/docs/lists-and-keys.html
                buttons.map((item, id) => {
                    return (
                        <div key={id} onClick={() => handleInput((id + 1))}>
                            {item}
                        </div>
                    )
                })
            }
            <div>{input}</div>
        </div>
    )
}

export default Codelock