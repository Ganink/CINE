var id = JSON.parse(localStorage.getItem('idFilm'));
var ar = [];
var chairOcuped = [];
var ocuped = [];
var reserv = [];
var tooltip = $('[data-toggle="tooltip"]');

window.onload = function () {
    ar = JSON.parse(localStorage.getItem('peliculas'));
    chairOcuped = JSON.parse(localStorage.getItem('ocupado'));
    loadSite();
    posiRandom();
    comprobation();
    $(tooltip).tooltip();

    $('svg').click(function () {
        let mId = parseInt($(this).attr('id'));
        $('svg').each(element => {
            if (mId == element) {
                //chairOcuped = ocuped;
                chairOcuped.push(mId);
                $(`#${mId}`).removeClass('is-normal').addClass('is-mine');
            }
        });
        buy();
    });

    $('#moreInfo').click(function () {
        $('.gTitle').empty();
        $('.gTitle').text(`LEYENDA WEB`);
        $('#m-body').empty();
        $('#m-body').append(`
                  <h3 id="subtitle">COMO RESRVAR SU SITIO</h3>
                  <P>PARA PODER RESERVAR SU SITIO EN LA SALA DEBERÁ ELEGIR LAS BUTACAS QUE SE ENCUENTREN EN NEGRO.</P>
                  <P>LAS BUTACAS SELECCIONADAS POR USTED APARECERAN EN COLOR VERDE, PUDIENDO ELEGIR TODAS LAS QUE QUIERA, SIEMPRE Y CUANDO ESTÉN DISPONIBLES.</P>
                  <P>LAS BUTACAS EN ROJO ESTÁ OCUPADAS, POR LO TANTO ESAS NO PODRÁN SER ELEGIDAS.</P>
                  <P>UNA VEZ SELECCIONADAS LAS BUTACAS DESEADAS, APARECERÁ UN BOTÓN QUE LO REDIRIGIRÁ A LA PÁGINA DONDE REALIZARÁ LA RESERVA DE LA PELÍCULA</P>`);
    });

    $('.is-active').click(function (i, element){
        alert('Esta butaca está ocupada, por favor, seleccione otra.');
        $(this).removeClass().addClass('is-active');
    })
}

function loadSite() {
    var count = 0;
    let f = 1;
    for (i = 0; i < 19; i++) {
        for (let j = 0; j < 2; j++) {
            $('.article').append(`
            
                <svg version="1.1" id="${count}"  class="is-normal" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 199.334 199.334" xml:space="preserve">
                <path d="M161.974,199.334H150.4c-1.104,0-2-0.896-2-2v-36.459H50.933v36.459c0,1.104-0.896,2-2,2H37.36c-1.104,0-2-0.896-2-2
                v-36.459h-7.251c-4.429,0-8.032-3.604-8.032-8.032v-27.389c0-7.408,5.239-13.615,12.207-15.111v-7.171H8.854c-1.104,0-2-0.896-2-2
                V87.506H2.687c-1.104,0-2-0.896-2-2v-7.667c0-1.104,0.896-2,2-2h29.596V41.014C32.283,18.398,50.682,0,73.297,0h52.74
                c22.615,0,41.014,18.398,41.014,41.014v34.825h2.495l-0.856-12.353c-0.039-0.554,0.155-1.098,0.533-1.503
                c0.378-0.405,0.908-0.636,1.462-0.636h7.108l1.427-13.275c0.063-0.587,0.382-1.115,0.872-1.445l10.823-7.286
                c0.917-0.617,2.159-0.373,2.776,0.542c0.617,0.917,0.374,2.159-0.542,2.776l-10.05,6.767l-1.282,11.922h6.678
                c0.555,0,1.084,0.23,1.462,0.636s0.571,0.949,0.533,1.503l-0.856,12.353h7.016c1.104,0,2,0.896,2,2v7.667c0,1.104-0.896,2-2,2
                h-4.167v13.666c0,1.104-0.896,2-2,2h-23.43v7.171c6.967,1.496,12.207,7.703,12.207,15.111v27.389c0,4.429-3.603,8.032-8.032,8.032
                h-7.251v36.459C163.974,198.438,163.079,199.334,161.974,199.334z M152.4,195.334h7.574v-34.459H152.4V195.334z M39.36,195.334
                h7.573v-34.459H39.36V195.334z M161.974,156.875h9.251c2.223,0,4.032-1.809,4.032-4.032V147H24.077v5.843
                c0,2.224,1.809,4.032,4.032,4.032H161.974z M24.077,143h151.181v-17.546c0-6.315-5.138-11.454-11.454-11.454H35.53
                c-6.315,0-11.454,5.139-11.454,11.454V143z M36.283,110h126.768V87.506h-4.07c-1.104,0-2-0.896-2-2v-7.667c0-1.104,0.896-2,2-2h4.07
                V41.014C163.051,20.604,146.446,4,126.037,4h-52.74C52.888,4,36.283,20.604,36.283,41.014v34.825h4.153c1.104,0,2,0.896,2,2v7.667
                c0,1.104-0.896,2-2,2h-4.153V110z M167.147,99.172h21.333V87.506h-21.333V99.172z M10.854,99.172h21.333V87.506H10.854V99.172z
                M161.063,83.506h33.583v-3.667h-33.583V83.506z M34.187,83.506h4.167v-3.667H4.687v3.667H34.187z M173.555,75.839h12.066
                l0.728-10.491h-6.733c-0.017,0-0.033,0-0.05,0h-6.738L173.555,75.839z"/>
                </svg>
            `);
            count++;
        }
        f++;
    }
    $('.article').append(`
    <div class="screen">
        <img src="../img/screen.png" alt="pantalla" title="pantalla"/>
    </div>`);
}

function loading() {
    id_ = parseInt(id);
    $(ar).each(function (id, element) {
        if (id_ == element.id) {
            $('.article').append(`<p> id: ${element.id}</p>`);
            $('.article').append(`<p> nombre: ${element.nombre}</p>`);
            $('.article').append(`<img src=" ${element.img}"/>`);
            $('.article').append(`<p> duracion: ${element.duracion}</p>`);
            $('.article').append(`<p> año: ${element.anio}</p>`);
            $('.article').append(`<p> descripcion: ${element.descripcion}</p>`);
            $('.article').append(`<p> horarios: ${element.horario}</p>`);
        }
    });
}

function posiRandom() {
    for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * 41);
        ocuped.push(x);
    }
}

function comprobation() {
    if (chairOcuped == null) {
        chairOcuped = [];
    }
    if (ocuped != null) {
        ocuped.sort(function (a, b) {
            return a - b;
        });
        console.log(ocuped);
        let j = 0;
        $('svg').each(function (i, element) {
            if (ocuped[j] == element.id) {
                $(`#${ocuped[j]}`).removeClass('is-normal').addClass('is-active');
                j++;
            }
        })
    }
    if (chairOcuped != null) {
        chairOcuped.sort(function (a, b) {
            return a - b;
        });
        console.log(ocuped);
        let j = 0;
        $('svg').each(function (i, element) {
            if (chairOcuped[j] == element.id) {
                $(`#${chairOcuped[j]}`).removeClass('is-normal').addClass('is-active');
                j++;
            }
        })
    }
}

function buy() {
    $('.article').find('a').remove();
    $('.article').append('<a type="button" href="comprar.html" class="btn btn-success reserv" data-toggle="modal" data-target=".bd-example-modal-lg">Comprar entrada</a>');
    $('.is-mine').click(function () {
        let mId = parseInt($(this).attr('id'));
        if ($(this).attr('class') == 'is-mine')
            $(`#${mId}`).removeClass('is-mine').addClass('is-normal');
    })
    $('.reserv').click(function () {
        $('svg').each(function (i, element) {
            if ($(this).hasClass('is-mine')) {
                reserv.push(i);
            }
        });
        $('.gTitle').empty();
        $('.gTitle').text(`¿DESEA COMPRAR LAS SIGUIENTES ENTRADAS?`);
        $('#m-body').empty();
        $('#m-body').append(`
                  <h3 id="subtitle">¿ESTÁ SEGURO DE SU RESERVA?</h3>
                  <P>SI DESEA REALIZAR LA COMPRA PULSE CONTINUAR, EN CASO CONTRARIO PULSE CANCELAR.</P>
                  <P>UNA VEZ LE HAYA DADO A CONTINUAR SERÁ REDIRECCIONADO A UNA NUEVA PÁGINA DONDE REALIZARÁ EL PAGO.</P>
                  <P>EN CASO CONTRARIO, PULSE CANCELAR Y VUELVA A ELEGIR LAS BUTACAS QUE DESEE.</P>`);
    });
}

$('#comprar').click(function () {
    localStorage.setItem('precompra', JSON.stringify(reserv));
})

