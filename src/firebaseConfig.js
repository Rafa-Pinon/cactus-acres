// Importa las funciones necesarias
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Agrega esta línea

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAG-cK1JFSJJY_5oLIAHEZNU3LPbFNip9M",
  authDomain: "cactus-acres.firebaseapp.com",
  projectId: "cactus-acres",
  storageBucket: "cactus-acres.appspot.com",
  messagingSenderId: "65261688279",
  appId: "1:65261688279:web:7b5b9f64637ac13cb1a792",
  measurementId: "G-NEW8F289NN",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Exporta la conexión a Firestore
