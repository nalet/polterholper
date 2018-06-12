export enum Step {
    BLANK,
    INTRO,
    GAME1,
    GAME2,
    GAME3,
    GAME4,
    GAME5,
    GAME6,
    GAME7,
    GAME8,
    SCORE
}

export interface GameItem {
    id: number;

    pointsMarco: number;
    pointsTeam: number;

    step: Step;
    navStatus: NavStatus;

    game1: Game1;
    game2: Game2;
    game3: Game3;
    game4: Game4;
    game5: Game5;
    game6: Game6;
    game7: Game7;
    game8: Game8;
}

export interface NavStatus {
    blank: boolean;
    intro: boolean;
    game1: boolean;
    game2: boolean;
    game3: boolean;
    game4: boolean;
    game5: boolean;
    game6: boolean;
    game7: boolean;
    game8: boolean;
    score: boolean;
}

export interface Game1 {
    id: number;

    pointsMarco: number;
    pointsTeam: number;
    current: number;
    showResult: boolean;

    q1s: number;
    q1m: number;
    q1t: number;

    q2s: number;
    q2m: number;
    q2t: number;

    q3s: number;
    q3m: number;
    q3t: number;

    q4s: number;
    q4m: number;
    q4t: number;

    q5s: number;
    q5m: number;
    q5t: number;

    q6s: number;
    q6m: number;
    q6t: number;

    q7s: number;
    q7m: number;
    q7t: number;

    q8s: number;
    q8m: number;
    q8t: number;

    q9s: number;
    q9m: number;
    q9t: number;

    q10s: number;
    q10m: number;
    q10t: number;

    q11s: number;
    q11m: number;
    q11t: number;


    q12s: number;
    q12m: number;
    q12t: number;


    q13s: number;
    q13m: number;
    q13t: number;

    q14s: number;
    q14m: number;
    q14t: number;
}

export interface Game2 {
    id: number;

    pointsMarco: number;
    pointsTeam: number;
    current: number;
    showResult: boolean;
    count: number;
}

export interface Game3 {
    id: number;

    pointsMarco: number;
    pointsTeam: number;
    current: number;
    showResult: boolean;
}

export interface Game4 {
    id: number;

    pointsMarco: number;
    pointsTeam: number;
    current: number;
    showResult: boolean;
}

export interface Game5
{
    id: number;
    pointsMarco: number;
    pointsTeam: number;
    current: number;
    currentPlayer: string;
    showResult: boolean;
    lastTime: Date | string;
    guessItems: GuessItem[];
}

export interface GuessItem {
    id: number;
    step: number;
    content: string;
    visible: boolean;
}

export interface Game6 {
    id: number;
    startTime: Date | string;
    stopTime: Date | string;
    pointsMarco: number;
    pointsTeam: number;
    current: number;
    showResult: boolean;
}

export interface Game7 {
    id: number;
    startTime: Date | string;
    stopTime: Date | string;
    pointsMarco: number;
    pointsTeam: number;
    current: number;
    showResult: boolean;
}

export interface Game8 {
    id: number;
    startTime: Date | string;
    stopTime: Date | string;
    pointsMarco: number;
    pointsTeam: number;
    current: number;
    showResult: boolean;
}

export interface Message {
    command?: string;
    params?: string;
    content?: any;
}