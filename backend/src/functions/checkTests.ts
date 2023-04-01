import Question from "../interfaces/Question"
import Answer from "../interfaces/Answer";

export default function checkTests(answers:Answer[], questions:Question[], rightAnswersAmount:number):number
{
    for(let i in answers)
    {
        const currentQuestionAnswer = questions[i].answer;
        const currentUserAnswer = answers[i].answer;

        if(Array.isArray(currentUserAnswer) && Array.isArray(currentQuestionAnswer))
        {
            let localScore = 0;
            for(let j in currentUserAnswer)
            {
                if(currentUserAnswer[j] === currentQuestionAnswer[j]) localScore++;
            }
            if(localScore === currentQuestionAnswer.length) rightAnswersAmount++;
        }else {
            if(currentUserAnswer === currentQuestionAnswer) rightAnswersAmount++;
        }
    }
    return rightAnswersAmount;
}