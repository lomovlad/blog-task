function ArticlesList({articles}) {
    return (
        <div>
            {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{new Date(article.created_at).toLocaleDateString()}</p>
                    <p>{article.content.substring(0, 100)}...</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default ArticlesList;