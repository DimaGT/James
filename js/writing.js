import docsList from '../data/docs.js';
const wrapper = document.querySelector('.writing-grid-js');
const loadMoreBtn = document.getElementById('load-more-js');

let page = 1;
const docsPerPage = 20;

const templateItem = (data) => (
    `
     <a href="${data?.src || '#'}" class="writing-grid__item" target="_blank">
        <div class="writing-grid__img_wrap">
            <img src="./images/docs/pdf-icon.png" />
        </div>
        <p class="writing-grid__title">${data?.title || ''}</p>
    </a>
    `
);

function init() {
    const start = (page - 1) * docsPerPage;
    const end = start + docsPerPage;

    docsList.slice(start, end).forEach(item => {
        const element = templateItem(item);
        wrapper.insertAdjacentHTML('beforeend', element)
    });

    if (end >= docsList.length) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.display = 'none';
    };
};

loadMoreBtn.addEventListener('click', () => {
    page++;
    init();
});

init();