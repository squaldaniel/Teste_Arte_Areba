<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AddressModel extends Model
{
    public $table = 'address';
    public $fillable = [
        'userId',
        'street',
        'suite',
        'city',
        'zipcode',
        'geo'
    ];
}
