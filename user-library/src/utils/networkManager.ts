import axios from "axios";

const Axios = axios.create();

Axios.defaults.baseURL = "https://randomuser.me/api/";

export default Axios;
