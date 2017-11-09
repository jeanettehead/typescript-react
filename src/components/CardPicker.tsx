import * as React from "react";
import Card from '../models/card';

type ChangeSelection = (this: void, card: Card) => void

export interface CardPickerProps { onSelectionChange: ChangeSelection }

// 'CardPickerProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class CardPicker extends React.Component<CardPickerProps, undefined> {
    render() {

        // const range = n => Array.from({length: n}, (value, key) => key)


        return (
            <div>
                <select name="" id="">
                    <option value="hearts">Hearts</option>
                    <option value="spades">Spades</option>
                    <option value="clubs">Clubs</option>
                    <option value="diamonds">Diamonds</option>
                </select>
                <select name="" id="">
                    { 
                        // Array.range()

                    }
                    <option value="1">Hearts</option>
                    <option value="spades">Spades</option>
                    <option value="clubs">Clubs</option>
                    <option value="diamonds">Diamonds</option>
                </select>
                <button onClick={this.onClick}>pick</button>
            </div> 
        );
    }

    onClick(event : React.MouseEvent<HTMLElement>) {
        console.log(event);
    }
}