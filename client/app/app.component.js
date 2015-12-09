import template from './app.html';
import './app.css';

let app = () => {
  return {
    template,
    restrict: 'E'
  };
};

export default app;
