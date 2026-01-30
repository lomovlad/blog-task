import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {getArticles} from "./api/api";
import ArticlesList from "./components/ArticlesList";
import ArticlePage from "./components/ArticlePage";
import {useParams} from 'react-router-dom';

function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then(data => {
            setArticles(data);
        });
    }, []);

    return (
        <Router>
        <div>
            <h1>Блог</h1>
            <Routes>
                {/* Страница со списком статей */}
                <Route path='/' element={<ArticlesList articles={articles} />} />
                {/* Страница одной статьи */}
                <Route path="/articles/:id" element={<ArticlePageWrapper />} />
            </Routes>
        </div>
        </Router>
    );
}

function ArticlePageWrapper() {
    const {id} = useParams();

    return <ArticlePage articleId={id} />
}

export default App;
