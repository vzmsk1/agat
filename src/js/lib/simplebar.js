import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

Array.prototype.forEach.call(
    document.querySelectorAll('[data-simplebar]'),
    (el) =>
        new SimpleBar(el, {
            autoHide: false
        })
);
