
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/daisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/pricing_options/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

//fetch data
const pricingPromise = fetch('/pricingData.json')
  .then(res => res.json());

//fetch data using axios

const marksPromise = axios.get('/marksData.json');


function App() {


  return (
    <>



      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>
        }>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>

      <footer>

      </footer>




    </>
  )
}

export default App
