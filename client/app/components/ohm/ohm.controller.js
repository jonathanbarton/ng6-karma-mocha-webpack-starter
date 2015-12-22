class OhmController {

  constructor(){
    this.name = 'ohm';
    this.current = 0;
    this.resistance = 0;
    this.voltage = 0;
    this.solveFor = 'v';
  }

  calculate () {
    if(this.solveFor === 'i') {
      this.current = this.voltage / this.resistance;
    }else if (this.solveFor === 'r') {
      this.resistance = this.voltage / this.current;
    } else {
      this.voltage = this.current * this.resistance;
    }

  }

  clearValues () {
    this.current = 0;
    this.resistance = 0;
    this.voltage = 0;
  }
}


export default OhmController;