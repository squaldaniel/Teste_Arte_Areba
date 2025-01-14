<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LDAP\Result;

class PlaceHolderController extends Controller
{
    public $urlBase = 'https://jsonplaceholder.typicode.com/';
    public function getUrl($path = '')
    {
        $url = $this->urlBase . $path ?? '';
        $curl = curl_init();

        curl_setopt_array($curl, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => [
            "Content-Type: application/json"
        ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            return  ["cURL Error #:"=> $err];
            } else {
                return $response;
            }
    }
}
