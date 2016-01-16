var higher = {};

higher.highlight = function (e) {
    if (higher.target) {
        higher.target.css('outline', '');
    }

    higher.target = $(e.target);
    higher.target.css({
        outline: '1px solid #69f',
        outlineOffset: '-1px'
    });
};

higher.getPath = function (e) {
    e.stopPropagation();
    e.preventDefault();

    var selector = uniquePath.get($(e.target));

    if (selector) {
        try {
            var els = document.querySelectorAll(selector);
            var specificity = els.length;
        } catch (err) {}

        console.log(selector);
        console.assert && console.assert(specificity === 1, 'Not a unique path');
    }

    return false;
};

$(document).on('mousemove', higher.highlight);
document.addEventListener('click', higher.getPath, true);
