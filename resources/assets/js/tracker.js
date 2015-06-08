var Tracker = function(options) {

	this.seconds = 0;
	this.minutes = 0;
	this.hours = 0;
	this.timer = null;
	this.id = options.id;
	this.clockRunning = false;
	this.totalSeconds = 0;
	this.alarmsAt = [];

	this.start = function() {	
		if(!this.clockRunning) {
			this.clockRunning = true;
			this.count();	
		}				
	}

	this.stop = function() {
		clearInterval(this.timer);
		this.clockRunning = false;
	}

	this.count = function() {		
		var that = this;
		clearInterval(this.timer);		

		this.timer = setInterval(function(){
			that.seconds++;
			that.totalSeconds++;

			if(that.seconds == 60) {
				that.addMinute();
				that.seconds = 0;
			}
			that.isAlarm();
			that.count();
		}, 1000);				
	}

	this.addMinute = function() {
		this.minutes++;

		if(this.minutes == 60) {
			this.addHours();
		}
	}

	this.addHours = function() {
		this.hours++;
	}

	this.getId = function() {
		return this.id;
	}

	this.getSeconds = function()
	{
		return this.seconds >= 10 ? this.seconds : '0' + this.seconds;
	}

	this.getMinutes = function()
	{
		return this.minutes >= 10 ? this.minutes : '0' + this.minutes;
	}

	this.getHours = function()
	{
		return this.hours >= 10 ? this.hours : '0' + this.hours;
	}

	this.addAlarms = function(alarms)
	{
		for (var i = alarms.length - 1; i >= 0; i--) {
			this.alarmsAt.push(alarms[i]);
		}
	}

	this.isAlarm = function() {
		var alarms = this.alarmsAt;
		for (var i = alarms.length - 1; i >= 0; i--) {
			if(alarms[i] == this.seconds) {
				console.log('Alarm goes off!!');
				this.alarmsAt.splice(i, 1);
			}		
		}
	}

	return this;
}