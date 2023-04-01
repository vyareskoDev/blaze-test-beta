import QuestionType from "../types/QuestionType";
import Option from "./Option";

export default interface Question {
    type: QuestionType;
    question: string;
    hasAttachments: boolean;
    options: Option;
    answer: string | string[];
}