var ar = [];
var id = [];
var mId;
window.onload = function () {
    localStorage.removeItem('precompra');
    ar = JSON.parse(localStorage.getItem('peliculas'));
    allFilms();
    $('.reserv').click(function () {
        id = mId;
        console.log(id);
        ar.push(id);
        localStorage.setItem('idFilm', JSON.stringify(id));
    });
    $('.mInfo').click(function () {
        mId = $(this).attr('id')
        console.log(mId)
        $(ar).each(function (id, element) {
            if (mId == element.id) {
                $('.gTitle').empty();
                $('.gTitle').text(`${element.nombre}`);
                $('#m-body').empty();
                $('#m-body').append(`
                <img src="${element.img}" class="img-fluid img-thumbnail" alt="${element.nombre}">
              <h3 id="subtitle">${element.nombre}</h3>
              <p id="dur-anio">Duracion: ${element.duracion} - año: ${element.anio}</p>
              <P id="gDescription">${element.descripcion}</P>`);
            }
        })
    });
    carousel();
}

function allFilms() {
    var count = 0;
    let dt = ar;
    dt.forEach(element => {
        var c = 'c' + count;
        var ct2 = 'ct' + count;
        let film = 'pelicula' + count
        let col = 'col' + count;
        let collapse = 'collapse' + count;
        let well = 'well' + count;
        $('.row').append(`<div class="col-lg-4 col-sm-6 portfolio-item ${c}">`);
        $(`.c` + count).append(`<div class="card h-100 ${ct2}">`);
        $(`.ct` + count).append(`<a name="${element.id}"><img src="${element.img}" alt="${element.nombre}" class="card-img-top mInfo"/></a>`);
        $('.ct' + count).append(`<div class="card-body ${film}">`);
        $('.pelicula' + count).append(`<h5>${element.nombre}</h5><br/>`);
        $('.pelicula' + count).append(`<button type="button" class="btn btn-outline-success mInfo" id="${element.id}" data-toggle="modal" data-target=".bd-example-modal-lg">Más información</button>`);
        count++;
    });
}

function carousel() {
    $(ar).each(function (i, element) {
        let c = $('.carousel-inner');
        if (i == 0) {
            c.append(`
            <div class="carousel-item active">
                <img class="d-block w-100" src="${element.img}" alt="${element.nombre}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${element.nombre}</h5>
                </div>
              
            </div>`);
        } else {
            c.append(`
            <div class="carousel-item">
              <img class="d-block w-100" src="${element.img}" alt="${element.nombre}">
              <div class="carousel-caption d-none d-md-block">
                <h5>${element.nombre}</h5>
                </div>
            </div>`);
        }

    })
}