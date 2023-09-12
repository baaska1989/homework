<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
    public function getNews()
    {
        $data =  DB::table('news')->get();
        return response()->json(['data' => $data]);
    }

    public function newsDetail($id)
    {
        $data = DB::table('news')->where('id', $id)->first();
        return response()->json(['data' => $data]);
    }

    public function newsCreate(Request $request)
    {
        try {

        } catch (\Exception $exception)
        {

        }
    }
}
