<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostsModel extends Model
{
    public $table = 'posts';
    public $fillable = [
        "userId",
        "id",
        'origin_id',
        "title",
        "body"
    ];
}
