(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = this.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click', function(e) {
        if(screen.value === '') {
            screen.value = "please enter something";
        }else {
            screen.value = eval(screen.value);
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = "";
    });
})();