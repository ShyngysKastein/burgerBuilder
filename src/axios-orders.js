import axios from "axios";

const instance = axios.create({
    baseURL:'https://homework64-shyngys-default-rtdb.firebaseio.com/'
})

export default instance;