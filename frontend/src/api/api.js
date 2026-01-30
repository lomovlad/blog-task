const BASE_URL = 'http://localhost:8000/api';

export function getArticles() {
    return fetch(`${BASE_URL}/articles`)
        .then(res => res.json());
}

export function getArticle(id) {
    return fetch(`${BASE_URL}/articles/${id}`)
        .then(res => res.json());
}

export function addComment(articleId, data) {
    return fetch(`${BASE_URL}/articles/${articleId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

export function addArticle(data) {
    return fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}
