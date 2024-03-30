import axios from 'axios';
import profileIcon from "../../assets/images/profile.jpg";
import {  UserGetDetails} from '../common/api';

const baseUrl = 'http://localhost:5000/'; 

export const fetchUserDatasApi = async (token) => {
    try {
        const response = await axios.get(UserGetDetails, {
            headers: {
                Authorization: `${token}`
            }
        });
        
        if (response.status === 200) {
            const userData = response.data;
                       
            if (userData) {
                const email = userData.email || '';
                const phone = userData.phone || '';
                const image = `http://localhost:5000/${userData.profileImage}`

                return {
                    email: email,
                    phone: phone,
                    image: image
                };
            } else {
                return {
                    email: '',
                    phone: '',
                    image: profileIcon
                };
            }
        } else {
            throw new Error('Failed to fetch user data');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        return {
            email: '',
            phone: '',
            image: profileIcon
        };
    }
};
