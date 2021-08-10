import React from 'react';

const Card = ({ datos }) => {
  return (
    <div className='card'>
      {datos !== 'no existe dato' ? (
        <div className='card__item'>
          <figure className='card__content-image'>
            <img className='card__image' src={datos[0].flag} alt='bandera' />
          </figure>
          <span className='card__span'>
            Pais: <b className='card__b'>{datos[0].name}</b>
          </span>
          <span className='card__span'>
            Capital: <b className='card__b'>{datos[0].capital}</b>
          </span>
          <span className='card__span'>
            Region: <b className='card__b'>{datos[0].region}</b>
          </span>
          <span className='card__span'>
            Poblacion: <b className='card__b'>{datos[0].population}</b>
          </span>
          <span className='card__span'>
            Zona Horaria: <b className='card__b'>{datos[0].timezones}</b>
          </span>
          <span className='card__span'>
            Moneda: <b className='card__b'>{datos[0].currencies[0].name}</b>
          </span>
          <span className='card__span'>
            Simbolo de Moneda: <b className='card__b'>{datos[0].currencies[0].symbol}</b>
          </span>
          <span className='card__span'>
            Lenguaje Nativo: <b className='card__b'>{datos[0].languages[0].nativeName}</b>
          </span>
        </div>
      ) : (
       <h1 className='card__title'>No hay elementos seleccionados</h1>
      )}
    </div>
  );
};

export default Card;
