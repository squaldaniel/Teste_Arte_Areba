<?php

use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Request;
use Illuminate\Http\Request as Reqiest2;;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';
//importação de novos dados
Route::get('getallpost', [App\Http\Controllers\ImportController::class, 'getNewPosts']);
Route::get('getallusers', [App\Http\Controllers\ImportController::class, 'getNewUsers']);
Route::get('getallalbums', [App\Http\Controllers\ImportController::class, 'getNewAlbums']);
Route::get('getallphotos', [App\Http\Controllers\ImportController::class, 'getNewPhotos']);
Route::get('getalltodos', [App\Http\Controllers\ImportController::class, 'getNewTodos']);
Route::get('getallcomments', [App\Http\Controllers\ImportController::class, 'getNewComments']);
// retorno de dados
Route::get('users', [App\Http\Controllers\PlaceHolderController::class, 'getusers']);
Route::get('users/{id}', [App\Http\Controllers\PlaceHolderController::class, 'getusersdetail']);
Route::get('items', [App\Http\Controllers\PlaceHolderController::class, 'getItems']);
Route::post('items', [App\Http\Controllers\PlaceHolderController::class, 'postItems']);
// post de informações
Route::post('users', [App\Http\Controllers\PlaceHolderController::class, 'postUsers'])
    ->withoutMiddleware(
        [Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]
    );
