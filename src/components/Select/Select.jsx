import React from 'react';
import { useParams } from 'react-router-dom';
import Capitales from '../../json/capitales.json';
import Paises from '../../json/paises.json';
import Code from '../../json/listadeCodigos.json';

const Select = ({uploadData}) => {
  const { name } = useParams();


  const sendDataFecht = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>
        Buscar por <span>{name}</span>
      </h1>
      <select name='' id='' onChange={sendDataFecht}>
        {name === 'pais'
          ? Paises.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : name === 'code'
          ? Code.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : name === 'capital'
          ? Capitales.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default Select;
