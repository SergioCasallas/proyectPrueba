import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className='inicio'>
      <h1 className='inicio__title'>Selecciona una Option</h1>
      <div className='inicio__options'>
        <Link className='inicio__option-link' to='/select/pais'>Pais</Link>
        <Link className='inicio__option-link' to='/select/code'>Code</Link>
        <Link className='inicio__option-link' to='/select/capital'>Capital</Link>
      </div>
    </div>
  );
};

export default Inicio;
