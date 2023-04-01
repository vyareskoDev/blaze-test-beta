import Statistics from "../interfaces/Statistics";


export default class StatisticsImpl implements Statistics {
    questionsAmount: number;
    rightAnswersAmount: number;
    timePassed: string;

    constructor(QuestionsAmount:number, RightAnswersAmount:number, TimePassed:string)
    {
        this.questionsAmount = QuestionsAmount;
        this.rightAnswersAmount = RightAnswersAmount;
        this.timePassed = TimePassed;
    }
}