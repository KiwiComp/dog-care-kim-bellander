import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router'
import HeaderComponent from './COMPONENTS/HeaderComponent'
import FooterComponent from './COMPONENTS/FooterComponent'

function App() {

  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    if(dogList.length === 0) {
      fetchDogsFromApi();
    }
  }, [])

  const fetchDogsFromApi = async () => {
    console.log("1. Function executed.")
    const baseUrl = "https://api.jsonbin.io/v3/b/";
    const binId = "68cd197eae596e708ff3bcf1";
    // const apiKey = import.meta.env.VITE_API_KEY.trim();
    // const apiKey = `${process.env.REACT_APP_API_KEY}`
    
    // console.log("API Key:", apiKey);
    console.log("[" + apiKey + "]");

    const response = await fetch(`${baseUrl}${binId}`, {
      method: 'GET',
      headers: {
         "X-Master-Key": apiKey
      }
    })
    console.log("2. Response", response)

    const data = await response.json();
    console.log("3. Data", data)

    setDogList(data.record.record);
    console.log("4. Dog list", dogList)

  }
  

  return (
    <main className='mainGrid'>

      <header>
        <HeaderComponent />
      </header>

      <section className='mainContent'>
        <Outlet />
      </section>

      <footer className="footer">
        <FooterComponent />
      </footer>
      
    </main>
  )
}

export default App
