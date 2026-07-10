import axios from "axios";

const baseUrl = "https://word-api-hmlg.vercel.app"

export const getValidateWord = async (wordToVerify) => {
        await axios.get(`${baseUrl}/api/validate?word=${wordToVerify}`,{})
        .then((data) => console.log(data))
        .catch((error) => error);

}
