import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      <h1>Selecciona una Option</h1>
      <Link to='/select/pais'>Pais</Link>
      <Link to='/select/code'>Code</Link>
      <Link to='/select/capital'>Capital</Link>
    </div>
  );
};

export default Inicio;
