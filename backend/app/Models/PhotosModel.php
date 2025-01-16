<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhotosModel extends Model
{
    public $table = 'photos';
    public $fillable = [
        'origin_id',
        'albumId',
        'title',
        'url',
        'thumbnailUrl'
    ];
}
