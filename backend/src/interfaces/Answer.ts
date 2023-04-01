import AnswerType from "../types/AnswerType"

export default interface Answer {
    type: AnswerType;
    question: string;
    answer: string | string[];
}