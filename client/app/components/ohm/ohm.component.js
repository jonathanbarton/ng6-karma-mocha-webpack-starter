import template from './ohm.html';
import './ohm.scss';

let ohm = () => {
  return {
    template,
    controller: 'OhmController',
    controllerAs: 'vm',
    restrict: 'E'
  };
};

export default ohm;
