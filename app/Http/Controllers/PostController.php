<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;



class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        // Post::latest()->get();
        return response()->json(['posts' =>$posts]);
    }

    public function getUserPosts(Request $request)
    {
    $userId = $request->input('user_id');
    $userPosts = Post::where('user_id', $userId)->get();

    return response()->json($userPosts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
        //On valide les données récupérés du formulaire
        $validation = $request-> validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'tag'=> 'required|string',
            
            // 'image' =>'required|image|mimes:jpeg,jpg,png,gif|max:2048',
        ]);
       
        $validation['title'] = strip_tags($validation['title']);
        $validation['content'] = strip_tags($validation['content']);
        $validation['tag'] = strip_tags($validation['tag']);
        $validation['user_id'] = auth()->id();
       
        $post = Post::create($validation);
        return response()->json(['post' => $post], 200);
        }
        
        catch (ValidationException $e){
            return response()->json(['error' => $e->errors()], 400);
        }

    }
       
   
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
