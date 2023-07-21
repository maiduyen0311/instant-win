<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserLineChannel;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function getLineChannelSetting(Request $request, $id)
  {
    $chanelSetting = UserLineChannel::where('user_id', $id)->first();
    return response()->json($chanelSetting);
  }
  public function changeLineChannelSetting(Request $request)
  {
    $data = $request->all();
    $isset = UserLineChannel::where('user_id', $data['user_id'])->first();
    if ($isset) {
      UserLineChannel::where('user_id', $data['user_id'])->update($data);
    } else {
      UserLineChannel::insert($data);
    }
    return response()->json([
      'status' => true,
      'message' => 'Line Chanel update successfully',
    ]);
  }

  public function changeUserPassword(Request $request, $id)
  {
    $data = $request->all();
    $user = User::find($id);
    if (!Hash::check($data['old'], $user->password)) {
      return response()->json([
        'status' => false,
        'message' => 'Incorrect password',
      ]);
    } else {
      $user->password = Hash::make($data['new']);
      $user->save();
      return response()->json([
        'status' => true,
        'message' => 'Password update successfully',
      ]);
    }
    // return response()->json($request);
  }
}