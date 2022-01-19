import 'core-js/stable';

import ReactDOM from 'react-dom';
import { App } from './App';

const app = document.getElementById('app')!;
const root = ReactDOM.createRoot(app);
root.render(<App />);
