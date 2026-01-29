<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, $id)
    {
        $article = Article::findOrFail($id);
        $validated = $request->validate([
            'author_name' => 'required|string|max:255',
            'content' => 'required|string|max:255',
        ]);

        return $article->comments()->create($validated);
    }
}
