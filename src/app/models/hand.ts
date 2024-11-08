export interface HandModel {
    id:          number;
    deckId:      string;
    dealerCards: Card[];
    playerCards: Card[];
    dealerScore: number;
    playerScore: number;
    gameOver:    boolean;
    outcome:     string;
}

export interface Card {
    code:   string;
    image:  string;
    images: Images;
    value:  string;
    suit:   string;
}

export interface Images {
    svg: string;
    png: string;
}
