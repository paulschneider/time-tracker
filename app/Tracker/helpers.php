<?php

# return a URL to be used at the base of each path call
function baseUrl() {
	return "http://" . $_SERVER['SERVER_NAME'] . "/";
}

# Debug function Show Data (sd)
function sd($data) {
	echo "<pre>";
	print_r($data);
	echo "</pre>";

	exit;
}