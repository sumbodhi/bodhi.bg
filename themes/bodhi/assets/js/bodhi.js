const menu = document.getElementById('mobile-menu');
const nav = document.getElementById('navigation');
menu.onclick = () => {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
    } else {
        nav.classList.add('open');
    }
}

document.querySelectorAll('.audio-player').forEach((el) => {
    el.addEventListener('click', (e) => {
        const ap = e.target;
        if (ap.isPlaying) {
            return;
        }
        ap.isPlaying = true;

        const icon = ap.children.item(0);
        const anim = ap.children.item(1);

        icon.style.display = 'none';
        anim.style.display = 'flex';

        const url = `/audio/${ap.dataset.audio}`;
        const audio = new Audio(url);

        audio.onended = () => {
            setTimeout(() => {
                icon.style.display = 'inline-block';
                anim.style.display = 'none';
                ap.isPlaying = false;
            }, 100);
        };

        void audio.play();
    });
});
