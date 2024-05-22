
import { delay } from 'lodash';
import axios from './Callapi';
const postCreateNewUser = (email, password, username, role, image) => {
    const form = new FormData();
    form.append('email', email)
    form.append('password', password)
    form.append('username', username)
    form.append('role', role)
    form.append('userImage', image)

    return axios.post('api/v1/participant', form)

}


const getAllUser = () => {
    return axios.get('api/v1/participant/all')
}

const putUpdateUser = (id, username, role, image) => {
    const form = new FormData();
    form.append('id', id);
    form.append('username', username)
    form.append('role', role)
    form.append('userImage', image)

    return axios.put('api/v1/participant', form)

}


const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } })
}


const getUserwithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}
const postLogin = (email, password) => {
    return axios.post(`api/v1/login`, { email, password, delay: 2000 })
}

const postRegister = (email, password, username) => {
    return axios.post(`api/v1/register`, { email, password, username })
}

const getQuizByUser = () => {
    return axios.get('api/v1/quiz-by-participant')
}


const getDataQuiz = (QuizId) => {
    return axios.get(`api/v1/questions-by-quiz?quizId=${QuizId}`)
}
export { postCreateNewUser, getAllUser, putUpdateUser, deleteUser, getUserwithPaginate, postLogin, postRegister, getQuizByUser, getDataQuiz }