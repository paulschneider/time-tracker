<?php

get('/', '\Tracker\Controllers\HomeController@index');
get('project/create', '\Tracker\Controllers\ProjectController@create');