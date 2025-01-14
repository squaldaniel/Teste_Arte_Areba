<?php

use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Request;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';

Route::get('getallpost', [App\Http\Controllers\PlaceHolderController::class, 'getPosts']);
Route::get('getallcomments', [App\Http\Controllers\PlaceHolderController::class, 'getComments']);
Route::get('getallalbums', [App\Http\Controllers\PlaceHolderController::class, 'getAlbums']);
Route::get('getallphotos', [App\Http\Controllers\PlaceHolderController::class, 'getPhotos']);
Route::get('getalltodos', [App\Http\Controllers\PlaceHolderController::class, 'getTodos']);
Route::get('getallusers', [App\Http\Controllers\PlaceHolderController::class, 'getAllUsers']);

Route::get('users', [App\Http\Controllers\PlaceHolderController::class, 'getusers']);
Route::post('users', [App\Http\Controllers\PlaceHolderController::class, 'postUsers']);
Route::get('items', [App\Http\Controllers\PlaceHolderController::class, 'getItems']);
Route::post('items', [App\Http\Controllers\PlaceHolderController::class, 'postItems']);
