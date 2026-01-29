<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Article::create([
            'title' => 'Первая статья',
            'content' => 'Это тестовая статья номер один.',
        ]);

        Article::create([
            'title' => 'Вторая статья',
            'content' => 'Тестовая статья номер два.',
        ]);

        Article::create([
            'title' => 'Третья статья',
            'content' => 'Тестовая статья номер три.',
        ]);

        Article::create([
            'title' => 'Четвертая статья',
            'content' => 'Тестовая статья номер четыре.',
        ]);
    }
}
