import {useEffect, useState} from "react";
import {getArticle, addComment} from "../api/api";
import "../App.css";

function ArticlePage({articleId}) {
    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        getArticle(articleId).then(data => {
            setArticle(data);
            setComments(data.comments || []);
        });
    }, [articleId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(articleId, {author_name: author, content})
            .then(newComment => {
                setComments(prev => [...prev, newComment]);
                setAuthor('');
                setContent('');
            });
    }

    if (!article) return <p>Загрузка...</p>;

    return (
        <div className="article-page">
            <h1>{article.title}</h1>
            <p>{new Date(article.created_at).toLocaleDateString()}</p>
            <p>{article.content}</p>

            <div className="comments">
                <h3>Комментарии</h3>
                {comments.map(c => (
                    <div key={c.id} className="comment">
                        <p><b>{c.author_name}</b> ({new Date(c.created_at).toLocaleDateString()}):</p>
                        <p>{c.content}</p>
                    </div>
                ))}
            </div>

            <div className="comment-form">
                <h3>Добавить комментарий</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Имя"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Комментарий"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        required
                    />
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default ArticlePage;