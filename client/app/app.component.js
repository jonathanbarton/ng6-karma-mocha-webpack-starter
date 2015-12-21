import template from './app.html';
import './app.scss';

let app = () => {
  return {
    template,
    restrict: 'E'
  };
};

export default app;
