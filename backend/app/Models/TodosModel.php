<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TodosModel extends Model
{
    public $table = 'todos';
    public $fillable = [
        'origin_id',
        'userId',
        'title',
        'completed'
    ];
}
