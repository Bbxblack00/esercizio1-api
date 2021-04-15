function addClickListener() {
    const btn = $('.btn');
    btn.click(numberGenerator);
}

function numberGenerator() {
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(data) {
            const res = data.response;
            console.log(res);
            generateBox(res);
        },
        error: function() {
            console.log('error');
        }
    });
}
function generateBox(type) {
    const target = $('#target');

    console.log(' ciao');

    target.innerHTML += '<div class="box bg-red"><h1>' + type + '</h1></div>';

   // target.append('<div class="box bg-red"><h1>' + type + '</h1></div>');
   // if (type % 2 == 0) {
   //     target.append('<div class="box bg-red">' + type + '</div>');
   // } else {
   //     target.append('<div class="box bg-green">' + type + '</div>');
   // }
}
function init() {
   addClickListener();
}
document.addEventListener('DOMContentLoaded', init);

