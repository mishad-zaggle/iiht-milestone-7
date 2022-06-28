import axios from "axios";

const USER_API_POST_URL = 'http://localhost:8080/misha-wealth-management-api/v1/new-user'

const USER_API_GET_URL = "http://localhost:8080/misha-wealth-management-api/v1/all-users"

class UserService{
    addUser(user){
        //console.log(user)
        return axios.post(USER_API_POST_URL,user);
    }

    getUserList(){
        return axios.get(USER_API_GET_URL);
    }
}
export default new UserService;