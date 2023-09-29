import { States } from "../../enums/states";
import "./StateSelection.css";

export const StateSelection = (props: {
    currentState: States;
    onStateChange: (newState: States) => void
}) => {
    const handleClick = (state: States) => {
        props.onStateChange(state);
    };

    return (
        <div>
            <div className="button-group">
                <button type="button" onClick={() => handleClick(States.pooping)}>Pooping</button>
                <button type="button" onClick={() => handleClick(States.sleeping)}>Sleeping</button>
                <button type="button" onClick={() => handleClick(States.working)}>Working</button>
            </div>
        </div>
    );
};
