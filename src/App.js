import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import StarshipTable from './components/StarshipTable';
import { fetchStarships } from './components/APIComponents/fetchStarships';
import Spinner from './components/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [starshipTable, setStarshipTable] = useState([]);
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    async function fetchData() {
      const res = await fetchStarships()
      if(res){
        setStarshipTable(res.results);
        setLoading(false);
      }
      console.log(res)
    }
    fetchData();
  }, []);

  const Table = () => (
    <center>
      <StarshipTable
        starshipTable={starshipTable} />
    </center>
  )

  const UserInterface = () => (
    <center id="starships">
        <Table />
    </center>
  )

  return (
    <div id="app-div">
      <Header />
      <Hero/>
      {loading ? <Spinner /> :
        <UserInterface />
      }
      <Footer/>
    </div>
  );
}

export default App;