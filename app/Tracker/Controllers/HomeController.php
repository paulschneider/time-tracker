<?php Namespace Tracker\Controllers;

Class HomeController extends Controller {
	public function index() {
		return View("home.index");
	}
}