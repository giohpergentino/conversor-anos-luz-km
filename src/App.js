import React, { useState } from 'react';
import './App.css'; // Importar o arquivo CSS

function Converter() {
  const [kmInput, setKmInput] = useState('');
  const [lightYearsInput, setLightYearsInput] = useState('');
  const [conversionLog, setConversionLog] = useState([]);

  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const convertToLightYears = () => {
    if (isNaN(kmInput) || kmInput < 1) {
      alert('O valor deve ser maior ou igual a 1.');
      return;
    }

    const lightYears = kmInput / 9.461e12; // Fator de conversão aproximado
    const newLog = [...conversionLog, { date: getCurrentDate(), km: kmInput, lightYears: lightYears.toFixed(10) }];
    setConversionLog(newLog);
    setKmInput('');
  };

  const convertToKm = () => {
    if (isNaN(lightYearsInput) || lightYearsInput < 1) {
      alert('O valor deve ser maior ou igual a 1.');
      return;
    }

    const km = lightYearsInput * 9.461e12; // Fator de conversão aproximado
    const newLog = [...conversionLog, { date: getCurrentDate(), km: km.toFixed(2), lightYears: lightYearsInput }];
    setConversionLog(newLog);
    setLightYearsInput('');
  };

  return (
    <div>
      <div className="container">
        <div className="input-group">
          <h2>Converter de KM para Anos-luz</h2>
          <input type="number" value={kmInput} onChange={(e) => setKmInput(e.target.value)} placeholder="Insira a distância em KM" />
          <button onClick={convertToLightYears}>Converter</button>
          {kmInput && !isNaN(kmInput) && kmInput >= 1 && (
            <p>{(kmInput / 9.461e12).toFixed(10)} Anos-luz</p>
          )}
        </div>

        <div className="input-group">
          <h2>Converter de Anos-luz para KM</h2>
          <input type="number" value={lightYearsInput} onChange={(e) => setLightYearsInput(e.target.value)} placeholder="Insira a distância em Anos-luz" />
          <button onClick={convertToKm}>Converter</button>
          {lightYearsInput && !isNaN(lightYearsInput) && lightYearsInput >= 1 && (
            <p>{(lightYearsInput * 9.461e12).toFixed(2)} KM</p>
          )}
        </div>

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
  );
}

export default Converter;
