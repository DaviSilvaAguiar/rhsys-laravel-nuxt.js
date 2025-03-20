<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ColaboradorController;

Route::get('colaboradores', [ColaboradorController::class, 'index']);
Route::get('colaboradores/{id}', [ColaboradorController::class, 'show']);
Route::post('colaboradores', [ColaboradorController::class, 'store']);
Route::put('colaboradores/{id}', [ColaboradorController::class, 'update']);
Route::delete('colaboradores/{id}', [ColaboradorController::class, 'destroy']);
