@extends('layouts.app') 
 @section('title','Show') 
 @section('content') 
  
 <div class='container'>
 <div class='row'>
 <div class='col-md-10 col-md-offset-1'>
 <div class='panel panel-default'>
 <div class='panel-body'>
 <div class='col-md-12'><!-- --------------------------------teste-------------------------------- -->
 <div class='form-group{{ $errors->has("teste") ? " has-error" : "" }}'>
 	<label for='teste' class='col-md-4 control-label'>Teste</label>
 	<div class='col-md-6'>
 		<label id='teste' type='text' class='form-control' name='teste'>{{$usuario->teste}}<label>
 		@if ($errors->has("teste"))
 			<span class='help-block'>
 				 <strong>{{ $errors->first("teste") }}</strong>
 			 </span>
 		@endif 
 	</div>
 </div>
 <!-- --------------------------------/teste-------------------------------- -->
 
 <div class='form-group'>
 <label for='' class='col-md-4 control-label'></label>
 <div class='col-md-6'>
 <a href='{{route('cruds.usuario.index')}}' class='btn btn-info'>Voltar</a>
 <br><br>
 <a href='{{route('cruds.usuario.show',$previous)}}' class='glyphicon glyphicon-chevron-left'></a>
 <span class='badge'>{{$id}}</span>
 <a href='{{route('cruds.usuario.show',$next)}}' class='glyphicon glyphicon-chevron-right'></a>
 </div>
 </div>
 </div> 
 </div> 
 </div> 
 </div> 
 </div> 
 </div> 
 @endsection