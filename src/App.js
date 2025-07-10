import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*().';

  const generatePassword = () => {
    let characterPool = '';
    if (includeUppercase) characterPool += uppercase;
    if (includeLowercase) characterPool += lowercase;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    if (characterPool.length === 0) {
      alert('Select at least one option');
      return;
    }

    let tempPassword = '';
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * characterPool.length);
      tempPassword += characterPool[randIndex];
    }

    setPassword(tempPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Copied!!!!')
  };

  return (
    <div className='passwordBox'>
      <h1 style={{ textAlign: 'center', marginBottom: '5px' }}>Password Generator</h1>

      <div className='passwordBoxInput'>
        <input type='text' value={password} readOnly />
        <button onClick={copyToClipboard}>Copy</button>
      </div>

      <div className='passwordLength'>
        <label>Password Length</label>
        <input type='number' value={length} max={20} min={8} onChange={e => setLength(e.target.value)} />
      </div>

      <div className='passwordLength'>
        <label>Include Uppercase Letters</label>
        <input type='checkbox' checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
      </div>

      <div className='passwordLength'>
        <label>Include Lowercase Letters</label>
        <input type='checkbox' checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
      </div>

      <div className='passwordLength'>
        <label>Include Numbers</label>
        <input type='checkbox' checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
      </div>

      <div className='passwordLength'>
        <label>Include Symbols</label>
        <input type='checkbox' checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
      </div>

      <button className='generatePassword' onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
}

export default App;