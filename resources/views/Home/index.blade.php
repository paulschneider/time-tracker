@extends('layouts.default')

@include('layouts.header')

@section('content')
	<h1>Welcome to the Time Tracker App</h1>

	<div class="container">
		<p>
			<a href="/project/create">Create a new project</a>
		</p>
	</div>
@endsection

@include('layouts.footer')