<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/', ['uses' => 'AppController@index', 'as' => 'index']);
Route::get('/messages', ['uses' => 'MessageController@inbox', 'as' => 'messages']);


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


# ---------- colera ---------- #
Route::get('/colera', function () {
    return view('_colera.index');
});
Route::get('/fury-install', ['uses' => 'ColeraController@furyInstall', 'as' => 'fury-install']);
Route::get('/fury-uninstall', ['uses' => 'ColeraController@furyUninstall', 'as' => 'fury-uninstall']);
Route::get('/wrath-install', ['uses' => 'ColeraController@wrathInstall', 'as' => 'wrath-install']);
Route::get('/wrath-uninstall', ['uses' => 'ColeraController@wrathUninstall', 'as' => 'wrath-uninstall']);
# ---------- colera ---------- #


# ---------- fury ---------- #
Route::get('/fury', function () {
return view('_colera.fury.index');
});
Route::get('/fury/migration', ['uses' => 'FuryController@migration', 'as' => 'fury.migration']);
Route::get('/fury/generate/{id}', ['uses' => 'FuryController@generate', 'as' => 'fury.generate']);
Route::post('/fury/create', ['uses' => 'FuryController@create', 'as' => 'fury.create']);
# ---------- fury ---------- #




# ---------- Template ---------- #
Route::get('/crud/template', ['uses' => 'TemplateController@index', 'as' => 'cruds.template.index']);
Route::get('/crud/template/show/{id}', ['uses' => 'TemplateController@show', 'as' => 'cruds.template.show']);
Route::get('/crud/template/create', ['uses' => 'TemplateController@create', 'as' => 'cruds.template.create']);
Route::post('/crud/template/store', ['uses' => 'TemplateController@store', 'as' => 'cruds.template.store']);
Route::get('/crud/template/edit/{id}', ['uses' => 'TemplateController@edit', 'as' => 'cruds.template.edit']);
Route::put('/crud/template/update/{id}', ['uses' => 'TemplateController@update', 'as' => 'cruds.template.update']);
Route::get('/crud/template/destroy/{id}', ['uses' => 'TemplateController@destroy', 'as' => 'cruds.template.destroy']);
# ---------- Template ---------- #


# ---------- Message ---------- #
Route::get('/crud/message', ['uses' => 'MessageController@index', 'as' => 'cruds.message.index']);
Route::get('/crud/message/show/{id}', ['uses' => 'MessageController@show', 'as' => 'cruds.message.show']);
Route::get('/crud/message/create', ['uses' => 'MessageController@create', 'as' => 'cruds.message.create']);
Route::post('/crud/message/store', ['uses' => 'MessageController@store', 'as' => 'cruds.message.store']);
Route::get('/crud/message/edit/{id}', ['uses' => 'MessageController@edit', 'as' => 'cruds.message.edit']);
Route::put('/crud/message/update/{id}', ['uses' => 'MessageController@update', 'as' => 'cruds.message.update']);
Route::get('/crud/message/destroy/{id}', ['uses' => 'MessageController@destroy', 'as' => 'cruds.message.destroy']);
# ---------- Message ---------- #





// apagar s3 file upload test
Route::get('s3-image-upload','S3ImageController@imageUpload');
Route::post('s3-image-upload','S3ImageController@imageUploadPost');
// apagar s3 file upload test

/*---------- BLOCK Paciente CRUD----------*/
Route::get('/crud/paciente', ['uses' => 'PacienteController@index', 'as' => 'cruds.paciente.index']);
Route::get('/crud/paciente/show/{id}', ['uses' => 'PacienteController@show', 'as' => 'cruds.paciente.show']);
Route::get('/crud/paciente/create', ['uses' => 'PacienteController@create', 'as' => 'cruds.paciente.create']);
Route::post('/crud/paciente/store', ['uses' => 'PacienteController@store', 'as' => 'cruds.paciente.store']);
Route::get('/crud/paciente/edit/{id}', ['uses' => 'PacienteController@edit', 'as' => 'cruds.paciente.edit']);
Route::put('/crud/paciente/update/{id}', ['uses' => 'PacienteController@update', 'as' => 'cruds.paciente.update']);
Route::get('/crud/paciente/destroy/{id}', ['uses' => 'PacienteController@destroy', 'as' => 'cruds.paciente.destroy']);
/*---------- BLOCK Paciente CRUD----------*/
/*---------- BLOCK Usuario CRUD----------*/
Route::get('/crud/usuario', ['uses' => 'UsuarioController@index', 'as' => 'cruds.usuario.index']);
Route::get('/crud/usuario/show/{id}', ['uses' => 'UsuarioController@show', 'as' => 'cruds.usuario.show']);
Route::get('/crud/usuario/create', ['uses' => 'UsuarioController@create', 'as' => 'cruds.usuario.create']);
Route::post('/crud/usuario/store', ['uses' => 'UsuarioController@store', 'as' => 'cruds.usuario.store']);
Route::get('/crud/usuario/edit/{id}', ['uses' => 'UsuarioController@edit', 'as' => 'cruds.usuario.edit']);
Route::put('/crud/usuario/update/{id}', ['uses' => 'UsuarioController@update', 'as' => 'cruds.usuario.update']);
Route::get('/crud/usuario/destroy/{id}', ['uses' => 'UsuarioController@destroy', 'as' => 'cruds.usuario.destroy']);
/*---------- BLOCK Usuario CRUD----------*/
