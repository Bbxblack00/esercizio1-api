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
        },
        error: function() {
            console.log('error');
        }
    });
    console.log('hello');
}
function applyBg(type) {
    const target = $('#target');
    // console.log(target, type);
    if (type) {
        target.addClass('bg-red');
    } else {
        target.addClass('bg-green');
    }
}
document.addEventListener('DOMContentLoaded', init);