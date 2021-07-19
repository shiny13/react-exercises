import {
  _getUsers,
  _getQuestions,
  _saveQuestion, 
  _saveQuestionAnswer
} from "./_DATA";


export function getData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({ users, questions })
  );
}
export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}
export function saveQuestion(question) {
  return _saveQuestion(question);
}
