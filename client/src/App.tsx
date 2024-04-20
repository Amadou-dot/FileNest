import { BrowserRouter } from 'react-router-dom';

import Router from './Routes';
function App() {
  document.title = 'FileNest - File management made easy!';
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
