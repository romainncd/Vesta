document.addEventListener('DOMContentLoaded', function () {
    const searchToggle = document.querySelector('.search-toggle');
    const searchInput = document.querySelector('.search-input');

    searchToggle.addEventListener('click', function () {
        if (searchInput.style.width === '0px' || searchInput.style.width === '') {
            searchInput.style.width = '250px';
            searchInput.style.opacity = '1';
            searchInput.style.pointerEvents = 'auto';
        } else {
            searchInput.style.width = '0';
            searchInput.style.opacity = '0';
            searchInput.style.pointerEvents = 'none';
        }
    });
});