import axios from "axios"
export const getData = ()=> {
    axios.get('https://reqres.in/api/users?page=2').then((res) => console.log(res.data.data.map(data=>data.first_name)))
}