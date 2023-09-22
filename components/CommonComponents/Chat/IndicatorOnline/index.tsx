import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Indicator = ()=>{

    return(
        <div className="OnlineClass">
            <FontAwesomeIcon className='inlineIndicatorDown' icon={faCircle} />
            <FontAwesomeIcon className='inlineIndicator' icon={faCircle} />
        </div>
    )
}

export default Indicator;