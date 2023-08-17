import axios from "axios";

// const axios = require('axios');

 axios.defaults.headers.common = {
    'X-CSRF-TOKEN': `('meta[name="csrf-token"]').attr('content')`
 };

export default axios.create({
    baseURL:"http://localhost:8000",
    withCredentials:true,
});
