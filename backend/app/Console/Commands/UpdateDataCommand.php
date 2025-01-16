<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
// use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
// use Symfony\Component\Console\Formatter\OutputFormatter;

class UpdateDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'updatedata';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Comando para atuazlizar informações diretamente no site: https://jsonplaceholder.typicode.com/';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $url = env('APP_URL').'/';
        $this->info("buscando informações em:");
        $this->warn('https://jsonplaceholder.typicode.com/');
        $endpoints = [
            'getallusers',
            'getallpost',
            'getallalbums',
            'getalltodos',
            'getallcomments',
            'getallphotos'
        ];
        foreach ($endpoints as $endpoint) {
            // $response = Http::get($url.$endpoint);
            $response = str_replace(['[', ']', '"'], '', file_get_contents($url.$endpoint));
            $this->line($response);
            //gravando log das informações
            Log::info($response);
        }
    }
}
