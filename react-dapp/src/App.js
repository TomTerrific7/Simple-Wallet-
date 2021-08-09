
import { useState } from 'react';
import { ethers } from 'ethers';
import TomBank from './artifacts/contracts/TomBank.sol/TomBank.json'
import logo from './logo.svg';
import './App.css';

const tomBankAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/476e7137ecf94e0da1e0090f792faa33');
const signer = provider.getSigner();

function App() {
  const [contract, setContractValue] = useState()

  async function transact() {
    await signer.call();
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
