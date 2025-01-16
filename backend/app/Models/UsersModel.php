<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsersModel extends Model
{
    public $table = 'users';
    public $fillable = [
        'id',
        'origin_id',
        'name',
        'username',
        'email',
        'phone',
        'website',
        'address',
        'company',
    ];
}
