//IN CASE USE TRADITIONAL FETCH API : USE 2 AWAIT 
// export const fetchUsers = async () => {
//     const res = await fetch('https://dummyjson.com/users');
//     const data = await res.json();
//     return data.users; // BECAUSE API RETRIVE AS { users: [...] }
// }; 

import axios from "axios"

/// USE AXIOS TO FECTH DATA API
export const fetchUsers = async () => {
    const res = await axios.get('https://dummyjson.com/users')
    // console.log('res', res);
    return res.data.users
}

/// CALL TO USE AT App.tsx