
import { initializeApp } from "firebase/app";
import products from "./data";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, query, where} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAEPFgrx6w1TjV9L6P6OgmdwuL_5LC9y2Q",
  authDomain: "react-ecommerce-e4e03.firebaseapp.com",
  projectId: "react-ecommerce-e4e03",
  storageBucket: "react-ecommerce-e4e03.firebasestorage.app",
  messagingSenderId: "269301123238",
  appId: "1:269301123238:web:42f8ca3480d30e6d938c67"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default async function GetAsyncData(){
    const collectionRef = collection(db, "products");
    const productsSnapshot = await getDocs(collectionRef);
    const documentsData = productsSnapshot.docs.map( doc => { return {...doc.data(), id: doc.id}; } );
    return documentsData;
    }

export async function GetAsyncDataById(itemID) { 
    const docRef = doc(db, "products",itemID )
    const docSnapshot = await getDoc(docRef);
    const docData = {...docSnapshot.data(), id: docSnapshot.id};
    return docData;
    }

    export async function GetAsyncItemsByCategory(catID) {
      const productsColRef = collection(db, "products");
      const q = query(productsColRef, where("category", "==", catID))
      const productsSnapshot = await getDocs(q) 
      const documentsData = productsSnapshot.docs.map( doc => { return {...doc.data(), id: doc.id}; });  
      return documentsData; 
     }

    export async function exportProductsToDB(){
      for(let item of products){    
          delete item.id;
          const docID = await addDoc( collection(db, "products"), item)
          console.log("Creado documento", docID.id)
      }
   }

   export async function createBuyOrder(orderData){
    const newOrderDoc = await addDoc(collection(db, "orders"), orderData); 
    return newOrderDoc.id
  }