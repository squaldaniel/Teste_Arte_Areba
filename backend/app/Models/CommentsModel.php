<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommentsModel extends Model
{
    public $table = 'comments';
    public $fillable = [
            'postId',
            'name',
            'email',
            'body',
            'origin_id'
    ];
}
