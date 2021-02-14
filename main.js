window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = e.target.closest("a").getAttribute("href") 
            console.log(transition_el);

            transition_el.classList.add('is-active');

            console.log(transition_el);

            window.location.href = target;
        })
    }
}