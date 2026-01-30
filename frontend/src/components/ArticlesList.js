import {Link} from 'react-router-dom';

function ArticlesList({articles}) {
    return (
        <div className="articles-list">
            {articles.map(article => (
                <div key={article.id} className="article">
                    <h2 className="article-title">
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                    </h2>
                    <div className="article-date">
                        {new Date(article.created_at).toLocaleDateString()}
                    </div>
                    <p className="article-preview">{article.content.substring(0, 100)}...</p>
                </div>
            ))}
        </div>
    );
}

export default ArticlesList;