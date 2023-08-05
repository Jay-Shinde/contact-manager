import './App.css';
import Header from './compo/Header';
import Addcon from './compo/Addcon';
import Conlist from './compo/Conlist';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Jay",
  //     email: "jay@gmail.com"

  //   },
  //   {
  //     id: "2",
  //     name: "Yash",
  //     email: "yash@gmail.com"
  //   }
  // ];
  const LOCAL_STORAGE_KEY = "CONTACTS"
  const [contact, setcontact] = useState([]);
  const addConHandler = (con) => {

    setcontact([...contact, { id: uuidv4(), ...con }]);
  }
  useEffect(() => {
    const Storedcon=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(Storedcon){
      setcontact(Storedcon);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact))
  }, [contact]);
  
  return (
    <div>
      <Header />
      <Addcon addConHandler={addConHandler} />
      <Conlist contact={contact} />

    </div>
  );
}

export default App;
