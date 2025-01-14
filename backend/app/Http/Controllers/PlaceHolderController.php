<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LDAP\Result;
use App\Models\PostsModel;

class PlaceHolderController extends Controller
{
    public $urlBase = 'https://jsonplaceholder.typicode.com/';
    public function getUrl($path = null)
    {
        $url = $this->urlBase . $path ?? '';
        $curl = curl_init();

        curl_setopt_array($curl, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_CAINFO => public_path('cacert.pem'),
        CURLOPT_HTTPHEADER => [
            "Content-Type: application/json"
        ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            return  ["cURL Error #:"=> $err];
            } else {
                return $response;
            }
    }
    public function getPosts()
    {
        /**
         * Segundo a lógica do teste, precisamoos saber se há postagens novas e estamos
         * filtrando pelo id. caso algum id seja novo inserimos no banco de .
         * Temos esse controle atraves de um campos chamado "origin_id" que é o id do
         * banco de origem.
         */
        $posts = json_decode($this->getUrl('posts'), true);
        $ids = array_column($posts, 'id');
        $existsIds = PostsModel::wherein('origin_id', $ids)->pluck('origin_id')->toArray();

        $newData = array_filter($posts, function ($item) use ($existsIds) {
            return !in_array($item['id'], $existsIds);
        });
        if (count($newData) != 0){
            /**
             *  Agota vou inserir registros novos
             */
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
            }
        }
        // Mostronos registros novos, caso tenha algum
        return PostsModel::paginate(10);
    }
    public function getComments()
    {
        return $this->getUrl('comments');
    }
    public function getAlbums()
    {
        return $this->getUrl('albums');
    }
    public function getPhotos()
    {
        return $this->getUrl('photos');
    }
    public function getTodos()
    {
        return $this->getUrl('todos');
    }
    public function getusers()
    {
        return $this->getUrl('users');
    }
}
