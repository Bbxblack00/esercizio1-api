function addClickListener() {
    const btn = $('#btn');
    btn.click(boxGenerator);
}
function boxGenerator() {
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/boolean',
        method: 'GET',
        success: function(data) {
            const res = data.response;
            generateBox(res);
        },
        error: function() {
            console.log('error');
        }
    });
}
function generateBox(type) {
    const target = $('#target');
    if (type) {
        target.append('<div class="box bg-red"></div>');
    } else {
        target.append('<div class="box bg-green"></div>');
    }
}
function init() {
   addClickListener();
}
document.addEventListener('DOMContentLoaded', init);

