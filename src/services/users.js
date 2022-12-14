import Axios from "axios"

const userCreate = () =>{
    Axios.post(`${process.env.VUE_BASE_API}`)
}



const userFunctions = () =>{
    return{
        userCreate
    }
}

export default userFunctions