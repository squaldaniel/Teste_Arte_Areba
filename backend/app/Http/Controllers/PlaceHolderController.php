<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LDAP\Result;
use App\Models\PostsModel;
use App\Models\UsersModel;
use App\Models\AddressModel;
use App\Models\CommentsModel;
use app\Models\AlbumsModel;
use App\Models\PhotosModel;
use App\Models\TodosModel;
    /**
    * Segundo a lógica do teste, precisamoos saber se há postagens novas e
    * estamos filtrando pelo id. caso algum id seja novo inserimos no banco de .
    * Temos esse controle atraves de um campos chamado "origin_id" que é o id do
    * banco de origem.
    */
class PlaceHolderController extends Controller
{
    public $urlBase = 'https://jsonplaceholder.typicode.com/';
    /**
     * @param string $path com o recurso
     * @return string resposta d requisição
     */
    public function getUrl($path = null) //ok
        {
            $url = $this->urlBase . $path ?? '';
            $curl = curl_init();

            curl_setopt_array($curl, [
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 20,
                CURLOPT_TIMEOUT => 60,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_CAINFO => public_path('cacert.pem'),
                CURLOPT_HTTPHEADER => [
                    "Content-Type: application/json"
                ]
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
     public function getAlbums()
        {
            $newData = $this->updateData('photos', 'PhotosModel');
            dd($newData);
            if(count($newData) != 0){
                dd($newData);
            }
            // 'origin_id'
            // 'albumId'
            // 'title'
            // 'url'
            // 'thumbnailUrl'
            // return $this->getUrl('albums');
        }
    public function getPhotos()
    {
        return $this->getUrl('photos');
    }
    public function getTodos()
    {
        return $this->getUrl('todos');
    }
    public function getUsers(Request $request)
    {
        $query = $request->input('query');
        if ($query) {
            return UsersModel::where('name', 'like', "%{$query}%")
                ->paginate(10);
        }
        return UsersModel::paginate(10);
    }
    public function postUsers(Request $request)
    {
        try {
            UsersModel::create([
                'origin_id'=> \DB::raw('LAST_INSERT_ID()'),
                'name' => $request->name,
                'email' => $request->email,
            ]);
            return response()->json(["message" => "Criado com sucesso."], 201);
        } catch (\Throwable $th) {
            switch ($th->getCode()){
                case '23000':
                $message = ' Informação duplicada.';
                break;
                default:
                $message = $th->getMessage();
                break;
            };
            return response()->json(["message" => "Falha na criação:$message"], 500);
        }

    }
    public function updateData(string $route, string $model)
    {
        /**
         * Verifica se existe dados novos não registrados localmente
         */
        $rows = json_decode($this->getUrl($route), true);
        $ids = array_column($rows, 'id');
        $existsIds = "App\Models\\$model"::wherein('origin_id', $ids)->pluck('origin_id')->toArray();

        $newData = array_filter($rows, function ($item) use ($existsIds) {
            return !in_array($item['id'], $existsIds);
        });
        return $newData;
    }
    public function getusersdetail(Request $request)
    {
        $userdetail = UsersModel::where('id', $request->id)->get();
        return $userdetail;
    }
}
;
