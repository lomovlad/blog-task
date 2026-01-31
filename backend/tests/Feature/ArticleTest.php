<?php

namespace Tests\Feature;

use App\Models\Article;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ArticleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Проверка на получение списка статей
     *
     * @return void
     */
    public function test_it_returns_list_of_articles()
    {
        Article::factory()->count(3)->create();
        $response = $this->getJson('api/articles');
        $response->assertStatus(200)->assertJsonCount(3);
    }

    /**
     * Проверка на создание статьи
     *
     * @return void
     */
    public function test_it_creates_an_article()
    {
        $data = [
            'title' => 'Test article',
            'content' => 'Test content',
        ];

        $response = $this->postJson('api/articles', $data);
        $response->assertStatus(201)->assertJsonFragment([
            'title' => 'Test article',
        ]);
        $this->assertDatabaseHas('articles', [
            'title' => 'Test article',
        ]);
    }
}
