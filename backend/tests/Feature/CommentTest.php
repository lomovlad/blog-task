<?php

namespace Tests\Feature;

use App\Models\Article;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CommentTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Проверка на отправвку комментария к посту
     *
     * @return void
     */
    public function test_it_creates_a_comment_for_an_article(): void
    {
        $article = Article::factory()->create();
        $data = [
            'author_name' => 'Иван Иванов',
            'content' => 'Тестовый коммент',
        ];
        $response = $this->postJson("api/articles/{$article->id}/comments", $data);
        $response->assertStatus(201)->assertJsonFragment([
            'author_name' => 'Иван Иванов',
        ]);
        $this->assertDatabaseHas('comments', [
            'article_id' => $article->id,
            'author_name' => 'Иван Иванов',
        ]);
    }

    /**
     * Проверка валидации на пустые поля комментария
     *
     * @return void
     */
    public function test_it_requires_author_name_and_content_when_creating_comment(): void
    {
        $article = Article::factory()->create();
        $response = $this->postJson("/api/articles/{$article->id}/comments", []);
        $response->assertStatus(422)->assertJsonValidationErrors(['author_name', 'content']);
    }
}
