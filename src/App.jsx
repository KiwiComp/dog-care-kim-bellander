import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./CSS/display-dogs-grid.css"
import { Outlet } from 'react-router'
import HeaderComponent from './COMPONENTS/HeaderComponent'
import FooterComponent from './COMPONENTS/FooterComponent'

function App() {

  const [dogList, setDogList] = useState([]);
  const [fourDogsList, setFourDogsList] = useState([]);

  useEffect(() => {
    if(dogList.length === 0) {
      fetchDogsFromApi();
    }
  }, [])

  const fetchDogsFromApi = async () => {
    const baseUrl = "https://api.jsonbin.io/v3/b/";
    const binId = "68cd197eae596e708ff3bcf1";

    const apiKey1 = import.meta.env.VITE_API_KEY1
    const apiKey2 = "$HulJZZ"
    const apiKey3 = import.meta.env.VITE_API_KEY3
    const apiKey = `${apiKey1}${apiKey2}${apiKey3}`

    const response = await fetch(`${baseUrl}${binId}`, {
      method: 'GET',
      headers: {
         "X-Master-Key": apiKey
      }
    })
    const data = await response.json();
    setDogList(data.record.record);
    generateFourRandomIndexes(data.record.record);
  }

  const generateFourRandomIndexes = (dogList) => {
    const currentDogs = dogList.filter(dog => dog.present);
    const shuffled = [...currentDogs].sort(() => 0.5 - Math.random());
    const listOfFourDogs = shuffled.slice(0,4);
    setFourDogsList(listOfFourDogs);
  }
  

  return (
    <main className='mainGrid'>

      <header>
        <HeaderComponent />
      </header>

      <section className='mainContent'>
        <Outlet context={{dogList, fourDogsList}}/>
      </section>

      <footer className="footer">
        <FooterComponent />
      </footer>
      
    </main>
  )
}

export default App
