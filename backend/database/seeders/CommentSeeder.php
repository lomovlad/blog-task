<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Comment::create([
            'article_id' => 1,
            'author_name' => 'Иван',
            'content' => 'Отличная статья!',
        ]);

        Comment::create([
            'article_id' => 1,
            'author_name' => 'Мария',
            'content' => 'Согласна с автором!',
        ]);

        Comment::create([
            'article_id' => 3,
            'author_name' => 'Роман',
            'content' => 'Не соглашусь с автором',
        ]);

        Comment::create([
            'article_id' => 3,
            'author_name' => 'Петр',
            'content' => 'Полезная информация',
        ]);
    }
}
