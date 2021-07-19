import { getData } from "../utils/api";
import { loadUsers } from "./users";
import { loadQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const handleInitialData = () => dispatch => {
  dispatch(showLoading());
  return getData().then(({ users, questions }) => {
    dispatch(loadUsers(users));
    dispatch(loadQuestions(questions));
    dispatch(hideLoading());
  });
};
