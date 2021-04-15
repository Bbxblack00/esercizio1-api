function init() {
    const min = 50;
    const max = 200;
    const items = 10;
    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/boolean",
        method: 'GET',
        success: function(data) {
            const res = data.response;
            applyBg(res);
            console.log(res);
        },
        error: function() {
            console.log('error');
        }
    });
}
function applyBg(type) {
    const target = $('.box');
    const newBox = documet.getElementById('target');
    newBox.innerHTML += '<div class="box"></div>';
    if (type) {
        target.addClass('bg-red');
    } else {
        target.addClass('bg-green');
    }
}
function blockOnClick() {
    init();
}
document.addEventListener('DOMContentLoaded', init);