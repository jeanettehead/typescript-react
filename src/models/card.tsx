export enum Suit {Spades, Clubs, Diamonds, Hearts}
export enum Rank {Ace = 1, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King }

export default interface Card { suit: Suit; rank: Rank;}

export class MyCard implements Card {
  suit: Suit;
  rank: Rank;
}
