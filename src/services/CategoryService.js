import axios from "axios";

const CATEGORY_API_POST_URL = "http://localhost:8080/misha-wealth-management-api/v1/categories/new-category"
const CATEGORY_API_GET_ALL_CATEGORIES_URL = "http://localhost:8080/misha-wealth-management-api/v1/categories/all-categories"

class CategoryService{
    addCategory(category_info){
        return axios.post(CATEGORY_API_POST_URL,category_info);
    }
    getCategoryList(category_info){
        return axios.get(CATEGORY_API_GET_ALL_CATEGORIES_URL)
    }
}

export default new CategoryService;