(function(){
    let pantalla = document.querySelector('.screen');
    let botones = document.querySelectorAll('.btn');
    let limpiar = document.querySelector('.btn-clear');
    let igual = document.querySelector('.btn-equal');

    botones.forEach(function(button) {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            pantalla.value += value;
        })
    });

    igual.addEventListener('click', function(e){
        if (pantalla.value === ''){
                pantalla.value = '';
        }else{
            let answer = eval (pantalla.value);
            pantalla.value = answer;
        }
    })

    limpiar.addEventListener('click', function(e){
        pantalla.value = '';
    })
})();

