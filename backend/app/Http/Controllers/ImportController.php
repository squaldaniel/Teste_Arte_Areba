<?php

/**
 * Classe para importação de informações
 * do site https://jsonplaceholder.typicode.com/
 * @author Daniels Hogans <daniel.santos.ap@gmail.com>
 */
namespace App\Http\Controllers;

use App\Models\PostsModel;
use App\Models\UsersModel;
use App\Models\CommentsModel;
use app\Models\AlbumsModel;
use App\Models\PhotosModel;
use App\Models\TodosModel;
use Illuminate\Http\Request;

class ImportController extends PlaceHolderController
{
    public function getNewPosts() //ok
        {
            $newData = $this->updateData('posts', 'PostsModel');
            if (count($newData) != 0){
                /**
                 *  Agota vou inserir registros novos
                 */
                $quant = 0;
                foreach ($newData as $key => $arrPost) {
                    /**
                     * Gosto de transformar em objetos, fica mais elegante o código
                     */
                    $objPost = (object) $arrPost;
                    PostsModel::create([
                        'userId' => $objPost->userId,
                        'origin_id' => $objPost->id,
                        'title' => $objPost->title,
                        'body' => $objPost->body
                    ]);
                    $quant++;
                }
                return response()->json(["$quant registros novos adicionados."], 201);
            }
            $quant = 0;
            return response()->json(["$quant registros novos adicionados."], 209);
        }
    /**
     * @param void não precisa de parâmetros
     * @return array
     */
    public function getNewComments() //ok
        {
            $newData = $this->updateData('comments', 'CommentsModel');
            if(count($newData) != 0){
                $quant = 0;
                foreach ($newData as $key => $arrComment) {
                    $objComment = (object) $arrComment;
                    CommentsModel::create([
                        'postId' => $objComment->postId,
                        'origin_id' => $objComment->id,
                        'name' => $objComment->name,
                        'email' => $objComment->email,
                        'body' => $objComment->body
                    ]);
                    $quant++;
                }
                return response()->json(["$quant registros novos adicionados."], 201);
            }
            $quant = 0;
            return response()->json(["$quant registros novos adicionados."], 209);
        }
    /**
     * @param void não precisa de parâmetros
     * @return array
     */
    public function getNewAlbums() //ok
        {
            $newData = $this->updateData('albums', 'AlbumsModel');
            if(count($newData) !=0){
                $quant = 0;
                foreach ($newData as $key => $albums) {
                    $objAlbum = (object) $albums;
                    AlbumsModel::create([
                        'userId' => $objAlbum->userId,
                        'origin_id' => $objAlbum->id,
                        'title' => $objAlbum->title
                    ]);
                    $quant++;
                }
                return response()->json(["$quant registros novos adicionados."], 201);
            }
            $quant = 0;
            return response()->json(["$quant registros novos adicionados."], 209);
        }
    /**
     * @param void não precisa de parâmetros
     * @return array
     */
    public function getNewPhotos() //ok
        {
            $newData = $this->updateData('photos', 'PhotosModel');
            if(count($newData) != 0){
                $quant = 0;
                foreach ($newData as $key => $arrPhotos) {
                    $photos = (object) $arrPhotos;
                    PhotosModel::create([
                        'origin_id'=> $photos->id,
                        'albumId'=> $photos->albumId,
                        'title'=> $photos->title,
                        'url'=> $photos->url,
                        'thumbnailUrl'=> $photos->thumbnailUrl
                    ]);
                    $quant++;
                }
                return response()->json(["$quant registros novos adicionados."], 201);
            }
            $quant = 0;
            return response()->json(["$quant registros novos adicionados."], 209);
        }
    public function getNewTodos() //ok
        {
            $newData = $this->updateData('todos', 'TodosModel');
            if(count($newData) != 0){
                $quant = 0;
                foreach ($newData as $key => $arrTodos) {
                    $todos = (object) $arrTodos;
                    TodosModel::create([
                        'userId'=> $todos->userId,
                        'origin_id'=> $todos->id,
                        'title'=> $todos->title,
                        'completed'=> $todos->completed
                    ]);
                    $quant++;
                }
                return response()->json(["$quant registros novos adicionados."], 201);
            }
            $quant = 0;
            return response()->json(["$quant registros novos adicionados."], 209);
        }
    public function getNewUsers() //ok
        {
            //verificar se tem dados novos
            $newdata = $this->updateData('users', "UsersModel");
            if(count($newdata) != 0){
                $users = ( object ) $newdata;
                $quant = 0;
                foreach ($users as $key => $row) {
                    $user = ( object ) $row;
                    UsersModel::create([
                        'origin_id' =>$user->id,
                        'name' => $user->name,
                        'username' => $user->username,
                        'email' => $user->email,
                        'phone' => $user->phone,
                        'website' => $user->website
                    ]);
                    $quant++;
                }
                return response()->json(["$quant registros novos adicionados."], 201);
            };
            $quant = 0;
            return response()->json(["$quant registros novos adicionados."], 209);
        }
}
