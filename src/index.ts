const news = document.querySelector('#news');

type TNews = {
    title: string;
    author: string;
    description: string;
    urlToImage: string;
    sourse: TSourse;
};
type TSourse = {
    id: string;
    name: string;
};
let apiKey = '624cb0479c384b22a941ce7812fd2e26';
async function fetchArticle() {
    let response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=624cb0479c384b22a941ce7812fd2e26');
    let obj = await response.json();
    renderNews(obj.articles);
}
fetchArticle();
function renderNews(newsArr: TNews[]) {
    newsArr.forEach((newItem) => {
        const listItem = document.createElement('div');
        listItem.className = 'news__item';
        news?.appendChild(listItem);
        const imgItem = document.createElement('img');
        imgItem.src = newItem.urlToImage;
        listItem.appendChild(imgItem);

        const titleItem = document.createElement('h2');
        titleItem.innerHTML = newItem.title;
        listItem.appendChild(titleItem);

        const descriptionItem = document.createElement('p');
        descriptionItem.innerHTML = newItem.description;
        listItem.appendChild(descriptionItem);

        const authorItem = document.createElement('h3');
        authorItem.innerHTML = newItem.author;
        listItem.appendChild(authorItem);
    });
}
