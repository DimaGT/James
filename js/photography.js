import images from '../data/gallery.js';
const photographyWrapper = document.getElementById('photography-grid-js');
const loadMoreBtn = document.getElementById('load-more-js');

let page = 1;
const imagesPerPage = 20;

const templateItem = (data) => (
    `
    <div>
        <img src="${data?.src}" alt="${data?.alt || ''}" />
        <figure class="has-animation has-cover" data-delay="0" style="opacity: 0">
            <a href="${data?.src}" class="image-link">
                <img src="${data?.src}" alt="${data?.alt || ''}" style="opacity: 0">
            </a>
        </figure>
    </div>
    `
);

function init() {
    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    images.slice(start, end).forEach(item => {
        const element = templateItem(item);
        photographyWrapper.insertAdjacentHTML('beforeend', element)

        $('#photography-grid-js').justifiedGallery({ rowHeight: 360, margins: 15 });
    });

    if (end >= images.length) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.display = 'none';
    };
};

loadMoreBtn.addEventListener('click', () => {
    page++;
    init();
    LoadViaGallery();
});

init();

