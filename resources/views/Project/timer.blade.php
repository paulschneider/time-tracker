<section id="timer1">
	<input type="text" v-model="hours: hours"><span class="seperator">:</span>
	<input type="text" v-model="minutes: minutes"><span class="seperator">:</span>
	<input type="text" v-model="seconds: seconds">

	<button class="start btn btn-info btn-lg" v-on="click: start('timer1')">Start</button>
	<button class="start btn btn-danger btn-lg" v-on="click: stop('timer1')">Stop</button>
</section>
<pre>@{{ $data | json }}</pre>