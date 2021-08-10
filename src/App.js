import './scss/main.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from './views/Inicio/Inicio.jsx';
import Select from './components/Select/Select';
import Card from './components/Card/Card';
import { useState } from 'react';

function App() {
  const [datos,setDatos]=useState("no existe dato")
  const uploadData = (dataApi)=>{
    setDatos(dataApi)
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Inicio />
        </Route>
        <Route path='/select/:name'>
          <Select uploadData={uploadData} />
          <Card datos={datos}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
