import QuestionType from "../types/QuestionType";
import AnswerType from "../types/AnswerType";
import Option from "./Option";

export default interface Question {
    type: QuestionType;
    pointsValue: number;
    question: string;
    hasAttachments: boolean;
    options: Option | Option[];
    answer: AnswerType | AnswerType[];
}