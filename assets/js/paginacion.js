function showNews(newsNumber) {
    // Ocultar todas las noticias
    var noticias = document.querySelectorAll('.noticia');
    for (var i = 0; i < noticias.length; i++) {
        noticias[i].classList.remove('active');
    }

    // Mostrar la noticia seleccionada
    var selectedNews = document.getElementById('news-' + newsNumber);
    selectedNews.classList.add('active');

    // Actualizar la clase activa en los enlaces de paginación
    var links = document.querySelectorAll('.link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    var selectedLink = document.querySelector('.link[href="#news-' + newsNumber + '"]');
    selectedLink.classList.add('active');
}
