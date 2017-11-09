import * as React from "react";
import { CardPicker, CardPickerProps } from './CardPicker';
import { default as Card, MyCard, Suit, Rank } from '../models/card';

export interface HelloProps { compiler: string; framework: string; }

interface HelloState { card: null | Card }
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.

export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: any) {
        super(props);
        this.state = {card: null};
    }

    render() {
        const props = {
            onSelectionChange: (c: Card) => {
                this.setState({ card: c });
                return `selected ${Rank[c.rank]} of ${c.suit}`
            }
        }

        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                {
                    this.state.card === null ? (<div> Pick a card any card! </div>) :
                        <div>
                            You selected the {Rank[this.state.card.rank]} of {this.state.card.suit}
                            <button onClick={this.clearSelection}>Clear</button>
                        </div>
                }
                <CardPicker {...props} />
            </div>
        );
    }

    clearSelection = () => {
        this.setState({ card: null });
    }
}