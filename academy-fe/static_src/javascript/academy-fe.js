import '../sass/academy-fe.scss';
import SkipLink from './components/skip-link';

function initComponent(ComponentClass) {
    const items = document.querySelectorAll(ComponentClass.selector());
    items.forEach((item) => new ComponentClass(item));
}

document.addEventListener('DOMContentLoaded', () => {
    initComponent(SkipLink);
});
