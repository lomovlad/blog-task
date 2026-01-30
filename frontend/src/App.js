import {useEffect, useState} from "react";
import {getArticles} from "./api/api";

function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then(data => {
            setArticles(data);
        });
    }, []);

    return (
        <div>
            <h1>Статьи</h1>

            {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default App;
