import React from 'react';
interface Props {
    suit: string;
    rank: string | number;
}
const CardItem: React.FC<Props>= ({suit, rank}) => {

    const suits: {[key: string]: string} = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠'
    };

    return (
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suits[suit]}</span>
        </span>
    );
};

export default CardItem;