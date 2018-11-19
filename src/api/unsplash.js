import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID 68055bf6f199dedeb726f6e33548dbdc3e68858c741baf581852a0c77f4d309c"
    }
});
