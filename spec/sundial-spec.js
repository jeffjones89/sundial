var sundial = require("../sundial.js");

describe("a sundial's", function(){

  describe("angle hour method", function(){
    it("should return the hour's angle", function(){

      var angle = sundial.hourAngle(6)
      expect(angle).toBe(180);

    })
  })
  describe("angle minute method", function(){
    it("should return the minute's angle", function(){
      var angle = sundial.minuteAngle(45);
      expect(angle).toBe(270);
    })
  })

  describe("angle difference method", function(){
    it("should return the angle between the hour and minute hand", function(){
      var angle = sundial.angleDifference(9, 5);
      expect(angle).toBe(120);
    })
  })
})
