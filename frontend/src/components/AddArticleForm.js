import {useState} from "react";
import {addArticle} from "../api/api";

function AddArticleForm({onArticleAdded}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addArticle({title, content}).then(newArticle => {
            onArticleAdded(newArticle);
            setTitle("");
            setContent("");
        })
    }

    return (
        <div>
            <h2>Добавить статью</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <br/>
                <textarea
                    placeholder="Содержание"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />
                <br/>
                <button type="submit">Опубликовать</button>
            </form>
        </div>
    )
}

export default AddArticleForm;