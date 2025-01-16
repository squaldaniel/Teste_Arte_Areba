<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class AtualizarDadosjob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // getallpost
        // getallusers
        // getallalbums
        // getallphotos
        // getalltodos
        // getallcomments
        echo env('APP_URL').'/';
    }
}
