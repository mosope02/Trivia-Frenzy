import axios from "axios"
const url = 'https://the-trivia-api.com/api/questions'
export const Apicall =async (categories, difficulty, limit) => {
    const categoriesString = String(categories)
    try {
        const response = await axios(`${url}?categories=${categoriesString}&limit=${limit}&difficulty=${difficulty}`)
        return response
    } catch (error) {
        console.log(error.response);
    }
}