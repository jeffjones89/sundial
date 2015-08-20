module.exports = {
  hourAngle: function(hour){
    return hour * 30;
  },

  minuteAngle: function(minutes){
    return minutes * 6;
  },

  angleDifference: function(hour, minutes){
      var hrAng = this.hourAngle(hour);
      var minAng = this.minuteAngle(minutes);
      var diff = Math.abs(hrAng - minAng)
      return (diff < 180) ? diff: 360 - diff;
  }
}
