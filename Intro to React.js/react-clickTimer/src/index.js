import ReactDOM from 'react-dom';
import clickTimer from './App';
import './index.css';

const rendering = () => {
    ReactDOM.render(clickTimer(), document.getElementById('root'))
};

rendering();

setInterval(() => {
    rendering()
}, 1000);
