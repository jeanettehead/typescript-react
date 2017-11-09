import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {default as Card, MyCard, Suit, Rank} from '../models/card';

type ChangeSelection = (card: Card) => String

export interface CardPickerProps { onSelectionChange: ChangeSelection }

// 'CardPickerProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class CardPicker extends React.Component<CardPickerProps, {}> {
    componentDidMount() {
    }

    render() {
        const range = (n :number) => Array.from({length: n}, (value, key) => key)
        const ranks = Object.keys(Rank).slice(-13);

        return (
            <div>
                <select name="rank" onChange={this.changeRank}>
                    { 
                        ranks.map((r) => {
                            return (
                                <option value={r} key={r}>{r}</option>
                            )
                        })
                    }
                </select>
                <select name="suit" onChange={this.changeSuit}>
                    <option value={Suit.Hearts}>Hearts</option>
                    <option value={Suit.Spades}>Spades</option>
                    <option value={Suit.Clubs}>Clubs</option>
                    <option value={Suit.Diamonds}>Diamonds</option>
                </select>
                <button onClick={this.onClick}>pick</button>
            </div> 
        );
    }

    changeSuit = (event : React.ChangeEvent<HTMLSelectElement>) => {
        // console.log('cs', event.target.value)
    }

    changeRank = (event : React.ChangeEvent<HTMLElement>) => {
        //can't access value here
        // console.log('cr', event)

    }

    onClick = (event : React.MouseEvent<HTMLElement>) => {
        const suitSelect = ReactDOM.findDOMNode(this).querySelector('[name=suit]');
        if(!(suitSelect instanceof HTMLSelectElement)) {
            throw new Error('Not a select element')
        }

        const rankSelect = ReactDOM.findDOMNode(this).querySelector('[name=rank]');
        if(!(rankSelect instanceof HTMLSelectElement)) {
            throw new Error('Not a select element')
        }
        let card = new MyCard();
        card.suit = Suit[suitSelect.value];
        card.rank = Rank[rankSelect.value];
        this.props.onSelectionChange(card);
    }
}