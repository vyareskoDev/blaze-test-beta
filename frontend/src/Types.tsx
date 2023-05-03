export type CreateTestFormData = {
    testName: string;
    subject: string;
    description: string;
    questions: Question[];
}

export type QuestionType = "question/multipleChoice" | "question/multipleAnswers" | "question/textEnter";
export type OptionType = "option/text" | "option/image" | "option/other";
export type AnswerType = "answer/single" | "answer/multiple";

export type Option = {
    type: OptionType;
    value: string | string[];
    attachments: string[];
}

export type Question = {
    type: QuestionType;
    pointsValue: number;
    question: string;
    hasAttachments: boolean;
    options: Option | Option[];
    answer: AnswerType | AnswerType[];
}

