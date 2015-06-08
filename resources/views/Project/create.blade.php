@extends('layouts.default')

@include('layouts.header')

@section('content')

	<div class="container" id="project">
		<h1>Create a new project</h1>
		<form method="POST">
			<div class="form-group">
				<input type="text" class="form-control" name="project" placeholder="Enter a project name" v-model="newProject" />
			</div>
			<div class="form-group">
				<button name="submit" class="btn btn-success">Submit</button>
			</div>
		</form>
	</div>

@endsection

@include('layouts.footer')