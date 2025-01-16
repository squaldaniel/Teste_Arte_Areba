<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AlbumsModel extends Model
{
    public $table = 'albums';
    public $fillable = [
        'origin_id',
        'userId',
        'title',
    ];
}
