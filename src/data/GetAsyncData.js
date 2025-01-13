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

export function GetAsyncDataById(id){
    const promiseData= new Promise((resolve, reject)=>{
        const error = false;

        setTimeout(()=>{
            if (error) reject("Error de conexión")
            const itemRequested = products.find((item)=> item.id === parseInt(id));
            resolve(itemRequested);
        },2000) 
    })
    return promiseData;
}

export function GetAsyncItemsByCategory(catId) {    
    const promiseData = new Promise( (resolve) => {    
      setTimeout( () => {      
        const requestedProduct = products.filter( (item) => item.category.toLowerCase() === catId.toLowerCase())
        resolve(requestedProduct)
      }, 2000)     
    })
    return promiseData;
  }
