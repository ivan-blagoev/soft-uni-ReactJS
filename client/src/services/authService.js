import * as request from "../operations/request"
import Path from "../paths";

const baseUrl = 'http://localhost:3030/users';


export const login = async (email, password) => {
    
    
    
    try {
        const result = await request.post(`${baseUrl}/login`, {
            email,
            password,
        });
        return result;
    } catch (error) {
       
        console.error("Login failed:", error.message);
        throw error;
    }
};

export const register = async (email, password) => {
    try {

        const result = await request.post(`${baseUrl}/register`, {
            email,
            password,
        });
        return result;
    } catch (error) {
       
        console.error("Registration failed:", error.message);
        throw error;
    }
};

export const logout = async () => {
    try {
        const result = await request.get(`${baseUrl}/logout`);
        return result;
    } catch (error) {
       
        console.error("Logout failed:", error.message);
        throw error;
    }
};
