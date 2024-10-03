import videoList from '../data/video.js';
const wrapper = document.querySelector('.video-grid-js');
const loadMoreBtn = document.getElementById('load-more-js');

let page = 1;
const docsPerPage = 10;

const templateItem = (data) => (
    `
     <div class="video-grid__item">
        <figure class="has-animation has-cover" data-delay="300">
            <a href="${data?.src}" class="video-link">
                <img src="${data?.preview}" alt="Image Title" class="video-grid__item_img">
                <div class="video-grid__item_video_btn">
                    <img src="./images/video_btn.png" class="video-grid__item_img" />
                </div>
            </a>
        </figure>
     </div>
    `
);

function init() {
    const start = (page - 1) * docsPerPage;
    const end = start + docsPerPage;

    videoList.slice(start, end).forEach(item => {
        const element = templateItem(item);
        wrapper.insertAdjacentHTML('beforeend', element)
    });

    if (end >= videoList.length) {
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