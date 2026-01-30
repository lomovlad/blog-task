import {useEffect, useState} from "react";
import {getArticles} from "./api/api";
import ArticlesList from "./components/ArticlesList";

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

            <ArticlesList articles={articles} />
        </div>
    );
}

export default App;
