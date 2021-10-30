import { Switch, Route } from 'react-router-dom';
import { PatientsProvider } from './context/patients';
import Home from './pages/Home';

function App() {
  return (
    <PatientsProvider>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </PatientsProvider>
  );
}

export default App;
