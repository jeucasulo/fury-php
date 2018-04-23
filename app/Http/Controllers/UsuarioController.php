<?php 
namespace App\Http\Controllers; 
use Illuminate\Http\Request;
use App\Http\Requests;  

class UsuarioController extends Controller
{
	/** 
	 * Display a listing of the resource. 
	 * 
	 * @return \Illuminate\Http\Response 
 	 */ 
	public function index() 
	{
		$usuarios = \App\Models\Usuario::all();
		return view('cruds.usuario.index', compact('usuarios'));
	}
 
 	/** 
 	 * Show the form for creating a new resource. 
 	 * 
 	 * @return \Illuminate\Http\Response
 	 */
 	public function create()
 	 {
 		if(999==999){ // input your acl or condition
 			//return redirect()->route('cruds.usuarios.create');
 			return view('cruds.usuario.create');
 		}else{
 			return redirect()->route('cruds.usuarios.index');
 		}
 	}
 
 	/** 
 	 * Store a newly created resource in storage. 
 	 * 
 	 * @param  \Illuminate\Http\Request  $request 
 	 * @return \Illuminate\Http\Response
 	 */
 	public function store(\App\Http\Requests\UsuarioRequest $request)
 	{//Request $request
 		if(999==999){ // input your acl or condition
 			\App\Models\Usuario::create($request->all());
 			//$last_id = \App\Usuario::limit(1)->orderBy('usuario_id','desc')->value('usuario_id');
 			//$usuario = \App\Usuario::create(['model_column'=>$request->input('input_html'),'model_column2'=>$request->input('input_html2'),]);
 			//$usuario = new Usuario; $usuario->name = $request->input('input_html'); $usuario->save(); //insertedId = $usuario->id;
 			\Session::flash('flash_message',[
 				'msg'=>"Usuario successfully stored!", 
 				'class'=>"alert-success"
 			]);
 			return redirect()->route('cruds.usuario.index');
 		}else{
 			return redirect()->route('cruds.usuario.index');
 		}
 	}
 
 	/** 
 	 * Display the specified resource. 
 	 * 
 	 * @param  int  $id 
 	 * @return \Illuminate\Http\Response
 	 */
 	public function show($id)
 	{
 		if(999==999){ // input your acl or condition
 			$usuario = \App\Models\Usuario::find($id);
 			// get previous user id
 			$previous = \App\Models\Usuario::where('id', '<', $usuario->id)->max('id');
 			if($previous==null){
 				$previous = \App\Models\Usuario::orderBy('id','desc')->value('id');
 			}
 			// get next user id
 			$next = \App\Models\Usuario::where('id', '>', $usuario->id)->min('id');
 			if($next==0){
 				$next = \App\Models\Usuario::orderBy('id','asc')->value('id');
 			}
 			return view('cruds.usuario.show', compact('usuario','previous','next','id'));
 		}else{
 			return redirect()->route('cruds.usuario.index');
 		}
 	}
 
 	/** 
 	 * Show the form for editing the specified resource. 
 	 * 
 	 * @param  int  $id 
 	 * @return \Illuminate\Http\Response
 	 */
 	public function edit($id)
 	{
 	
 		if(999==999){ // input your acl or condition
 			$usuario = \App\Models\Usuario::find($id);
 			return view('cruds.usuario.edit', compact('usuario'));
 		}else{
 			return redirect()->route('cruds.usuario.index');
 		}
 	}
 
 	/** 
 	 * Update the specified resource in storage. 
 	 *
 	 * @param  \Illuminate\Http\Request  $request 
 	 * @param  int  $id 
 	 * @return \Illuminate\Http\Response
 	 */
 	public function update(\App\Http\Requests\UsuarioRequest $request, $id)
 	{//Request $request
 		if(999==999){ // input your acl or condition
 			\App\Models\Usuario::find($id)->update($request->all());
 			$usuario = \App\Models\Usuario::find($id);// $usuario->name=Input::get('name');usuario->save()//$request->input('input_html')
 			\Session::flash('flash_message',[
 				'msg'=>"Usuario successfully updated!", 
 				'class'=>"alert-success"
 			]);
 			return redirect()->route('cruds.usuario.index');
 		}else{
 			return redirect()->route('cruds.usuario.index');
 		}
 	}
 
 	/** 
 	 * Remove the specified resource from storage. 
 	 *
 	 * @param  int  $id 
 	 * @return \Illuminate\Http\Response
 	 */
 	public function destroy($id)
 	{
 		if(999==999){ // input your acl or condition
 			$usuario = \App\Models\Usuario::find($id);
 			$usuario->delete();
 			Session::flash('flash_message',['
 				msg'=>"Usuario successfully removed!", 
 				'class'=>"alert-success"
 			]);
 			return redirect()->route('cruds.usuario.index');
 		}else{
 			return redirect()->route('cruds.usuario.index');
 		}
 	}
 
 }