<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;

class SongController extends Controller
{
    // Adiciona uma nova música
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
        ]);

        Song::create([
            'title' => $request->title,
        ]);

        return redirect()->back()->with('success', 'Música adicionada com sucesso!');
    }

    // Atualiza uma música existente
    public function update(Request $request, Song $song)
    {
        $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $song->update([
            'title' => $request->title,
        ]);

        return redirect()->back()->with('success', 'Música atualizada com sucesso!');
    }

    // Exclui uma música
    public function destroy(Song $song)
    {
        $song->delete();

        return redirect()->back()->with('success', 'Música excluída com sucesso!');
    }
}
