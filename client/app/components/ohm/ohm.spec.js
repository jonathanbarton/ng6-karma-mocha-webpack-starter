
describe("ohm", function () {
  var $compile, $rootScope;

  beforeEach(inject(
    ['$compile','$rootScope', function($c, $r) {
      $compile = $c;
      $rootScope = $r;
    }]
  ));

  it("should calculate the voltage from current and resistance", function() {
    var element = $compile('<ohm-calculator></ohm-calculator>')($rootScope);
    expect(element.html()).to.equal('');
  });

  xit("should calculate the resistance from voltage and current", function() {

  });

  xit("should calculate the current from voltage and resistance", function() {

  });

  xit("should prevent calculation of current when resistance or voltage is zero", function() {

  });

  xit("should prevent calculation of resistance when current or voltage is zero", function() {

  });

  xit("should prevent calculation of voltage when current or resistance is zero", function() {

  });

  xit("should prevent calculation when any value is undefined", function() {

  });
});
