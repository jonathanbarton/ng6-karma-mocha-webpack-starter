import angular from 'angular';

class ResistanceCalculatorService {
  constructor() {}

  getCurrent(voltage, resistance) {
    return voltage / resistance;
  }

  getResistance(voltage, current) {
    return voltage / current;
  }

  getVoltage(current, resistance) {
    return current * resistance;
  }
}

export default ResistanceCalculatorService;
