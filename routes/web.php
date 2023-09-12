<?php

use Illuminate\Support\Facades\Route;

Route::get('{path}',"HomeController@index")->where( 'path', '([A-z\d\-\/_.]+)?' );
