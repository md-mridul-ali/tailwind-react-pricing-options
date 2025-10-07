
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/daisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/pricing_options/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'

//fetch data
const pricingPromise = fetch('/pricingData.json')
.then(res =>res.json());


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

          <ResultChart></ResultChart>
      </main>

      <footer>

      </footer>




    </>
  )
}

export default App
