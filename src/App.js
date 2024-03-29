import './App.css';
import CollectionCard from './components/CollectionCard';
import Main from './components/Main';
import Header from './components/Header';
import { useState, useEffect} from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const[selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x727BfD0ebb09Fdc8AbAEc831617A2349f6BE4AE6&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])
  return( 
    <div className="app">
  <Header />
  {punkListData.length > 0 && (
    <>
    <Main punkListData={punkListData} selectedPunk={selectedPunk} />
  
  <PunkList punkListData={punkListData } setSelectedPunk={setSelectedPunk} />
  </>
  )}
  </div>
  );
}

export default App;
