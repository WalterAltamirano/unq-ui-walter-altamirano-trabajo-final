import axios from "axios";

const baseUrl = "https://word-api-hmlg.vercel.app"

export const getValidateWord = async (wordToVerify) => {
    try {
        const response = await axios.get(`${baseUrl}/api/validate?word=${wordToVerify}`,{})
        return response.data;
    } catch(error) {
        return error.message
    }
}
