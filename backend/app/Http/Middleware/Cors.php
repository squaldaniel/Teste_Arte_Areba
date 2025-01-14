<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        // dd(new Response);
        // $response->headers->set('Access-Control-Allow-Origin', '*');
        // $response->headers->set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
        return $next($request)->headers->set('Access-Control-Allow-Origin','*');
            // ->set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
        //Acrescente as 3 linhas abaixo
        // ->header('Access-Control-Allow-Origin', "*")
        // ->header('Access-Control-Allow-Methods', "PUT, POST, DELETE, GET, OPTIONS")
        // ->header('Access-Control-Allow-Headers', "Accept, Authorization, Content-Type");
    }
}
