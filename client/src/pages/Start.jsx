import React from "react"
import { useNavigate } from "react-router-dom";

const Start = (props) => {
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        navigate("/home")
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            This is the start page.
        </div>
        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Enter"} />
        </div>


    </div>
}

export default Start