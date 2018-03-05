let precompra;
let ar = JSON.parse(localStorage.getItem('peliculas'));
let _id = JSON.parse(localStorage.getItem('idFilm'));
window.onload = function () {
    precompra = JSON.parse(localStorage.getItem('precompra'));
    loading();
    select();
}

function loading() {
    let id = parseInt(_id);
    $(ar).each(function (i, element) {
        if (id == element.id) {
            $('.film').append(`<img src="../${element.img}" class="img-fluid" alt="${element.nombre}">`);
            $('.film').append(`<h4 class="display-4 title">${element.nombre}</h2>`);
            $('.film').append(`<p>Duracion: ${element.duracion}</p>`);
            $('.film').append(`<p>${element.descripcion}</p>`);
        }
    });
}

$('#cancel').click(function () {
    timer = 5;
    alert('será redireccionado a la página principal');
});

$('select').change(function (){
    if($('select').val().includes('No disponible este día')){
        $('#buy').hide();
    }
    else{
        $('#buy').show('slow');
    }
})

$('#buy').click(function () {
    let _id = JSON.parse(localStorage.getItem('idFilm'));
    let ar = JSON.parse(localStorage.getItem('peliculas'));
    let id = parseInt(_id);
    let b = parseInt(precompra.sort());
    $(ar).each(element => {
        if (id == element) {
            $('.gTitle').empty();
            $('.gTitle').text(`¿DESEA COMPRAR LAS SIGUIENTES ENTRADAS?`);
            $('#m-body').empty();
            $('#m-body').append(`
                  <h3 id="subtitle">¿ESTÁ SEGURO DE SU RESERVA?</h3>
                  <img src="${ar[element].img}" class="img-fluid" alt="${ar[element].nombre}">
                  <P>Su película seleccionada: ${ar[element].nombre}</P>
                  <P>Duración: ${ar[element].duracion}</P>
                  <P>Butaca(s) seleccionada(s): Nº:${precompra} </P>
                  <P>Dia seleccionado: ${$('select').val()}</P>
                  <p>Precio: ${4 * precompra.length} €`);
        }
    })

});

$('#comprar').click(function () {
    alert('Su compra se ha realizado correctamente. Será redireccionado a la página principal');
    let ocupado = localStorage.getItem('ocupado');
    let compra = precompra.sort();
    localStorage.setItem('ocupado', JSON.stringify(compra));
})

function select() {
    let id = parseInt(_id);
    $(ar).each(i => {
        if (id == i) {
            $('#horario').append(`<option>Lunes: ${ar[i].horario.lunes}</option>`)
            $('#horario').append(`<option>Martes: ${ar[i].horario.martes}</option>`)
            $('#horario').append(`<option>Miercoles: ${ar[i].horario.miercoles}</option>`)
            $('#horario').append(`<option>Jueves: ${ar[i].horario.jueves}</option>`)
            $('#horario').append(`<option>Viernes: ${ar[i].horario.viernes}</option>`)
            $('#horario').append(`<option>Sabado: ${ar[i].horario.sabado}</option>`)
            $('#horario').append(`<option>Domingo: ${ar[i].horario.domingo}</option>`)
        }
    })
}