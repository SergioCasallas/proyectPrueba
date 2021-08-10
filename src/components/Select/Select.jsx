import React from 'react';
import { useParams } from 'react-router-dom';
import Capitales from '../../json/capitales.json';
import Paises from '../../json/paises.json';
import Code from '../../json/listadeCodigos.json';

const Select = ({ uploadData }) => {

  const { name } = useParams();
  
  const sendDataFecht = async (url) => {
    try {
      const response = await fetch(url);
      const dataJson = await response.json();
      const data = await dataJson;
      console.log(await data);
      uploadData(await data);
    } catch (e) {
      console.log(e);
    }
  };
  
  const sendFecht = (e) => {
    const item = e.target.value;
    const urlPaises = `https://restcountries.eu/rest/v2/name/${item}`;
    const urlCode = `https://restcountries.eu/rest/v2/alpha?codes=${item}`;
    const urlCapitales = `https://restcountries.eu/rest/v2/capital/${item}`;
    if (name === 'pais') {
      sendDataFecht(urlPaises);
    } else if (name === 'code') {
      sendDataFecht(urlCode);
    } else if (name === 'capital') {
      sendDataFecht(urlCapitales);
    }
    // console.log(e.target.value);
  };
  return (
    <div className='select'>
      <h1 className='select__title'>
        Buscar por <span>{name}</span>
      </h1>
      <select className='select__input-select' name={name} onChange={sendFecht}>
        {name === 'pais'
          ? Paises.map((item, index) => (
              <option className='select__option' key={index} value={item}>
                {item}
              </option>
            ))
          : name === 'code'
          ? Code.map((item, index) => (
              <option className='select__option' key={index} value={item}>
                {item}
              </option>
            ))
          : name === 'capital'
          ? Capitales.map((item, index) => (
              <option className='select__option' key={index} value={item}>
                {item}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default Select;
