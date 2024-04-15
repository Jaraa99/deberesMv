import {FC} from "react";
import './OompaLoompa.css';

interface OompaLoompaProps {
    orders: string;
    onOrderChange: () => void;
}

// OompaLoompa is the child component that receives the event handler via props
    export const OompaLoompaEvent = ({ orders, onOrderChange }) => {
        const handleOrderChange = () => {
            // Aquí se llama al manejador de eventos para cambiar las órdenes
            onOrderChange("New Orders from Oompa Loompa");
        };
        return (
            <div className="backgroundOompaLoompa">
                <h1 className="oompaLoompa">{orders}</h1>
                <button onClick={handleOrderChange}>Change Orders</button>
                <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
            </div>
        );
};
