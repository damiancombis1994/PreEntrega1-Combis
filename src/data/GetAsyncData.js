export default GetAsyncData;
import products from "./data"

function GetAsyncData(){
const promiseData = new Promise((resolve, reject)=>{
    const error = false

    setTimeout(()=>{
        if (error) reject("Error de conexión")
            resolve(products)
    },2000)
})
return promiseData;
}
