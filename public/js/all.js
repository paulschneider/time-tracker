!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function r(e){e.url=n(4)(e),e.http=n(2)(e),e.resource=n(3)(e)}window.Vue&&Vue.use(r),e.exports=r},function(e,t,n){e.exports=function(e){function t(e,r,o){for(var s in r)o&&(n.isPlainObject(r[s])||n.isArray(r[s]))?(n.isPlainObject(r[s])&&!n.isPlainObject(e[s])&&(e[s]={}),n.isArray(r[s])&&!n.isArray(e[s])&&(e[s]=[]),t(e[s],r[s],o)):void 0!==r[s]&&(e[s]=r[s])}var n=e.util.extend({},e.util);return n.options=function(e,t,r){var o=t.$options||{};return n.extend({},o[e],r)},n.each=function(e,t){var r,o;if("number"==typeof e.length)for(r=0;r<e.length;r++)t.call(e[r],e[r],r);else if(n.isObject(e))for(o in e)e.hasOwnProperty(o)&&t.call(e[o],e[o],o);return e},n.extend=function(e){var n,r=[],o=r.slice.call(arguments,1);return"boolean"==typeof e&&(n=e,e=o.shift()),o.forEach(function(r){t(e,r,n)}),e},n.isFunction=function(e){return e&&"function"==typeof e},n.Promise=window.Promise,n.Promise||(n.Promise=function(e){e(this.resolve.bind(this),this.reject.bind(this)),this._thens=[]},n.Promise.prototype={then:function(e,t,n){this._thens.push({resolve:e,reject:t,progress:n})},"catch":function(e){this._thens.push({reject:e})},resolve:function(e){this._complete("resolve",e)},reject:function(e){this._complete("reject",e)},progress:function(e){for(var t,n=0;t=this._thens[n++];)t.progress&&t.progress(e)},_complete:function(e,t){this.then="resolve"===e?function(e,n){e&&e(t)}:function(e,n){n&&n(t)},this.resolve=this.reject=this.progress=function(){throw new Error("Promise already completed.")};for(var n,r=0;n=this._thens[r++];)n[e]&&n[e](t);delete this._thens}}),n}},function(e,t,n){e.exports=function(e){function t(n,a){var c,u,p=this;return a=a||{},i.isPlainObject(n)&&(a=n,n=""),c=i.extend({},t.headers.common,t.headers[a.method.toLowerCase()]),a=i.extend(!0,{url:n,headers:c},t.options,i.options("http",this,a)),i.isObject(a.data)&&/FormData/i.test(a.data.toString())&&delete a.headers["Content-Type"],u=new i.Promise(("jsonp"==a.method.toLowerCase()?o:r).bind(this,this.$url||e.url,a)),i.extend(u,{success:function(e){return this.then(function(t){e.apply(p,s(t))},function(){}),this},error:function(e){return this["catch"](function(t){e.apply(p,s(t))}),this},always:function(e){var t=function(t){e.apply(p,s(t))};return this.then(t,t),this}}),a.success&&u.success(a.success),a.error&&u.error(a.error),u}function r(t,n,r,o){var s=new XMLHttpRequest;i.isFunction(n.beforeSend)&&n.beforeSend(s,n),n.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(n.method)&&(n.headers["X-HTTP-Method-Override"]=n.method,n.method="POST"),n.emulateJSON&&i.isPlainObject(n.data)&&(n.headers["Content-Type"]="application/x-www-form-urlencoded",n.data=e.url.params(n.data)),i.isPlainObject(n.data)&&(n.data=JSON.stringify(n.data)),s.open(n.method,t(n),!0),i.each(n.headers,function(e,t){s.setRequestHeader(t,e)}),s.onreadystatechange=function(){4===this.readyState&&(this.status>=200&&this.status<300?r(this):o(this))},s.send(n.data)}function o(e,t,n,r){var o,s,a="_jsonp"+Math.random().toString(36).substr(2);i.extend(t.params,t.data),t.params[t.jsonp]=a,i.isFunction(t.beforeSend)&&t.beforeSend({},t),o=document.createElement("script"),o.src=e(t.url,t.params),o.type="text/javascript",o.async=!0,window[a]=function(e){s=e};var c=function(e){delete window[a],document.body.removeChild(o),"load"!==e.type||s||(e.type="error");var t=s?s:e.type,i="error"===e.type?404:200;(200===i?n:r)({responseText:t,status:i})};o.onload=c,o.onerror=c,document.body.appendChild(o)}function s(e){var t;try{t=JSON.parse(e.responseText)}catch(n){t=e.responseText}return[t,e.status,e]}var i=n(1)(e),a={"Content-Type":"application/json;charset=utf-8"};return t.options={method:"GET",params:{},data:"",jsonp:"callback",beforeSend:null,emulateHTTP:!1,emulateJSON:!1},t.headers={put:a,post:a,patch:a,"delete":a,common:{Accept:"application/json, text/plain, */*"}},["get","put","post","patch","delete","jsonp"].forEach(function(e){t[e]=function(t,n,r,o){return i.isFunction(n)&&(o=r,r=n,n=void 0),this(t,i.extend({method:e,data:n,success:r},o))}}),Object.defineProperty(e.prototype,"$http",{get:function(){return i.extend(t.bind(this),t)}}),t}},function(e,t,n){e.exports=function(e){function t(n,s,i){var a=this,c={};return i=o.extend({},t.actions,i),o.each(i,function(t,i){t=o.extend(!0,{url:n,params:s||{}},t),c[i]=function(){return(a.$http||e.http)(r(t,arguments))}}),c}function r(e,t){var n,r,s,i=o.extend({},e),a={};switch(t.length){case 4:s=t[3],r=t[2];case 3:case 2:if(!o.isFunction(t[1])){a=t[0],n=t[1],r=t[2];break}if(o.isFunction(t[0])){r=t[0],s=t[1];break}r=t[1],s=t[2];case 1:o.isFunction(t[0])?r=t[0]:/^(POST|PUT|PATCH)$/i.test(i.method)?n=t[0]:a=t[0];break;case 0:break;default:throw"Expected up to 4 arguments [params, data, success, error], got "+t.length+" arguments"}return i.url=e.url,i.data=n,i.params=o.extend({},e.params,a),r&&(i.success=r),s&&(i.error=s),i}var o=n(1)(e);return t.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},remove:{method:"DELETE"},"delete":{method:"DELETE"}},Object.defineProperty(e.prototype,"$resource",{get:function(){return t.bind(this)}}),t}},function(e,t,n){e.exports=function(e){function t(e,n){var r,s={},a={},c=e;return i.isPlainObject(c)||(c={url:e,params:n}),c=i.extend({},t.options,i.options("url",this,c)),e=c.url.replace(/:([a-z]\w*)/gi,function(e,t){return c.params[t]?(s[t]=!0,o(c.params[t])):""}),!e.match(/^(https?:)?\//)&&c.root&&(e=c.root+"/"+e),e=e.replace(/([^:])[\/]{2,}/g,"$1/"),e=e.replace(/(\w+)\/+$/,"$1"),i.each(c.params,function(e,t){s[t]||(a[t]=e)}),r=t.params(a),r&&(e+=(-1==e.indexOf("?")?"?":"&")+r),e}function r(e,t,n){var o,s=i.isArray(t),a=i.isPlainObject(t);i.each(t,function(t,c){o=i.isObject(t)||i.isArray(t),n&&(c=n+"["+(a||o?c:"")+"]"),!n&&s?e.add(t.name,t.value):o?r(e,t,c):e.add(c,t)})}function o(e){return s(e,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function s(e,t){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,t?"%20":"+")}var i=n(1)(e);return t.options={url:"",root:"",params:{}},t.params=function(e){var t=[];return t.add=function(e,t){i.isFunction(t)&&(t=t()),null===t&&(t=""),this.push(o(e)+"="+o(t))},r(t,e),t.join("&")},t.parse=function(e){var t=new RegExp("^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?"),n=e.match(t);return{url:e,scheme:n[1]||"",host:n[2]||"",path:n[3]||"",query:n[4]||"",fragment:n[5]||""}},Object.defineProperty(e.prototype,"$url",{get:function(){return i.extend(t.bind(this),t)}}),t}}]);
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
var user = new Vue({
	el : '#new-user',

	data : {

	},

	methods: {
		
	},

	ready: function(){
		
	}
});
var project = new Vue({
	el : '#project',

	data : {
		newProject: "Test Project"
	},

	methods: {
	},

	ready: function(){
	}
});