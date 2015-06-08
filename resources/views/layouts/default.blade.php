<!DOCTYPE html>
<html class="">

    <head>
	    <title>Time Tracker</title>

	    <!-- Meta -->
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <meta name="description" content="">

	    <link rel=stylesheet href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
		<link rel=stylesheet href="css/app.css" />

	</head>

	<body>

	    <div class="container">
	        @yield('header')

	            @yield('content')

	        @yield('footer')
	    </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/0.11.10/vue.min.js"></script>
		<script src="js/all.js"></script>
    </body>
</html>