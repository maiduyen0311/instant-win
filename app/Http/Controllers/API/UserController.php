<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserLineChannel;

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
}