var timer = new Vue({
	el : '#timer1',

	data : {
		hours: "00",
		minutes: "00",
		seconds: "00",	
		
		trackers: [],
		timer: null
	},

	methods: {
		
		start: function(id) {
			if(!this.exists(id)) {
				tracker = new Tracker({
					"id": id
				});
				tracker.start();
				tracker.addAlarms([10, 20, 30]);

				this.trackers.push(tracker);
			}
			else {
				this.resume(id);
			}						
		},
		
		stop: function(id) {
			for (var i = this.trackers.length - 1; i >= 0; i--) {
				if(this.trackers[i].getId() == id) {
					this.trackers[i].stop();
				}
			};
		},
		
		updater: function() {
			var trackers = this.trackers;
			var that = this;

			this.timer = setInterval(function(){
				if(trackers.length) {
					for (var i = trackers.length - 1; i >= 0; i--) {
						var tracker = trackers[i];

						that.hours = tracker.getHours();
						that.minutes = tracker.getMinutes();
						that.seconds = tracker.getSeconds();
					};
				}
			}, 100);			
		},
		
		exists: function(id) {
			var trackers = this.trackers;
			for (var i = trackers.length - 1; i >= 0; i--) {
				var tracker = trackers[i];
				if(tracker.getId() == id) {
					return true;
				}
			};
		},
		
		resume: function(id) {
			var trackers = this.trackers;
			for (var i = trackers.length - 1; i >= 0; i--) {
				var tracker = trackers[i];
				if(tracker.getId() == id) {
					tracker.start();
				}
			};
		}
	},

	ready: function(){
		this.updater();
	}
});