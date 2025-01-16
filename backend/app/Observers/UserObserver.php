<?php

namespace App\Observers;

use App\Models\UsersModel;

class UserObserver
{
    public function creating(UsersModel $userModel): void
    {
        if (empty($userModel->origin_id)) {
            $userModel->origin_id = $userModel->id;
        }
    }
    /**
     * Handle the UserModel "created" event.
     */
    public function created(UsersModel $userModel): void
    {
        if (empty($userModel->origin_id)) {
            $userModel->origin_id = $userModel->id;
            $userModel->save();
        }
    }

    /**
     * Handle the UserModel "updated" event.
     */
    public function updated(UsersModel $userModel): void
    {
        //
    }

    /**
     * Handle the UserModel "deleted" event.
     */
    public function deleted(UsersModel $userModel): void
    {
        //
    }

    /**
     * Handle the UserModel "restored" event.
     */
    public function restored(UsersModel $userModel): void
    {
        //
    }

    /**
     * Handle the UserModel "force deleted" event.
     */
    public function forceDeleted(UsersModel $userModel): void
    {
        //
    }
}
