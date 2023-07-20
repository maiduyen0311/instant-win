<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth:api', ['except' => ['login', 'register']]);
  }

  public function login(Request $request)
  {
    $request->validate([
      'email' => 'required|string|email',
      'password' => 'required|string',
    ]);
    $credentials = $request->only('email', 'password');
    $token = Auth::attempt($credentials);

    if (!$token) {
      return response()->json([
        'message' => 'Email or password is incorrect!',
      ], 401);
    }

    $user = Auth::user();
    $user['accessToken'] = 'bearer ' . $token;
    return response()->json($user);
  }

  public function register(Request $request)
  {
    $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|email|max:255|unique:users',
      'password' => 'required|string|min:6',
    ]);

    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => Hash::make($request->password),
    ]);

    return response()->json([
      'message' => 'User created successfully',
      'user' => $user
    ]);
  }

  public function logout()
  {
    Auth::logout();
    return response()->json([
      'status' => true,
      'message' => 'Successfully logged out',
    ]);
  }

  public function refresh()
  {
    return response()->json([
      'user' => Auth::user(),
      'authorisation' => [
        'token' => Auth::refresh(),
        'type' => 'bearer',
      ]
    ]);
  }

  public function getUserLogin()
  {
    return response()->json([]);
    // return response()->json(Auth::user());
  }
}