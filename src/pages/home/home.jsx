import './home.css';
import { useState } from 'react';

export default function Home() {
  const [kmInput, setKmInput] = useState('');
  const [lightYearsInput, setLightYearsInput] = useState('');
  const [conversionLog, setConversionLog] = useState([]);

  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const convertToLightYears = () => {
    if (isNaN(parseFloat(kmInput)) || parseFloat(kmInput) < 1) {
      alert('O valor deve ser maior ou igual a 1.');
      return;
    }

    const lightYears = parseFloat(kmInput) / 9.461e12;
    const newLog = [...conversionLog, { date: getCurrentDate(), km: kmInput, lightYears: lightYears.toFixed(10) }];
    setConversionLog(newLog);
    setKmInput('');
  };

  const convertToKm = () => {
    if (isNaN(parseFloat(lightYearsInput)) || parseFloat(lightYearsInput) < 1) {
      alert('O valor deve ser maior ou igual a 1.');
      return;
    }

    const km = parseFloat(lightYearsInput) * 9.461e12;
    const newLog = [...conversionLog, { date: getCurrentDate(), km: km.toFixed(2), lightYears: lightYearsInput }];
    setConversionLog(newLog);
    setLightYearsInput('');
  };

  return (
    <div>
      <div className="container">
        <div className='content'>

          <div className='form'>
            <div className="input-group">
              <h2>Converter de KM para Anos-luz</h2>
              <input type="number" value={kmInput} onChange={(e) => setKmInput(e.target.value)} placeholder="Insira a distância em KM" />
              <button onClick={convertToLightYears}>Converter</button>
              {kmInput && !isNaN(parseFloat(kmInput)) && parseFloat(kmInput) >= 1 && (
                <p>{(parseFloat(kmInput) / 9.461e12).toFixed(10)} Anos-luz</p>
              )}
            </div>

            <div className="input-group">
              <h2>Converter de Anos-luz para KM</h2>
              <input type="number" value={lightYearsInput} onChange={(e) => setLightYearsInput(e.target.value)} placeholder="Insira a distância em Anos-luz" />
              <button onClick={convertToKm}>Converter</button>
              {lightYearsInput && !isNaN(parseFloat(lightYearsInput)) && parseFloat(lightYearsInput) >= 1 && (
                <p>{(parseFloat(lightYearsInput) * 9.461e12).toFixed(2)} KM</p>
              )}
            </div>

            <div className="table-container" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <table>
                <caption>Conversões Anteriores</caption>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>KM</th>
                    <th>Anos-luz</th>
                  </tr>
                </thead>
                <tbody>
                  {conversionLog.map((conversion, index) => (
                    <tr key={index}>
                      <td>{conversion.date}</td>
                      <td>{conversion.km}</td>
                      <td>{conversion.lightYears}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
