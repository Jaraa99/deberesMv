import  { FC } from 'react';
import {OompaLoompa} from "./OompaLoompa.tsx";
import './WillyWonka.css';

// WillyWonka is the parent component that passes orders to the OompaLoompas via props
export const WillyWonka: FC = () => {
    const WillyWonka = ({ orders }) => {
        return (
            <div className="willyWonka">
                <h1>Willy Wonka's Orders:</h1>
                <p>{orders}</p>
            </div>
        );
    };
};
