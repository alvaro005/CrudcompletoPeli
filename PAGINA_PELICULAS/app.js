

function actualizar() {
    const movie = {
        imdbID: document.getElementById('postImdbID').value,
        Title: document.getElementById('Title').value,
        Year: document.getElementById('Year').value,
        Type: document.getElementById('Type').value,
        Poster: document.getElementById('Poster').value,
        description: document.getElementById('Description').value,
        Ubication: document.getElementById('Ubication').value,
        Estado: parseInt(document.getElementById('Estado').value)
    };

    document.getElementById('jsonResult').textContent = JSON.stringify(movie);

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    };

    //fetch('https://movie.azurewebsites.net/api/cartelera', options)
    fetch('https://movie.azurewebsites.net/api/cartelera?imdbID=' + movie.imdbID, options)
        .then(response => {
            // Aquí la promesa se cumplió, obtuvimos una respuesta
            return response.json(); // Convertimos la respuesta a JSON
        })
        .then(data => {
            // Aquí tenemos los datos que pedimos
            console.log(data);
            alert("Pelicula Actualizada: " + data.Title);
        })
        .catch(error => {
            // Aquí la promesa falló, manejamos el error
            console.error('Error:', error);
        });
}

function buscar() {
    const imdbID = document.getElementById('postImdbID').value;

    fetch('https://movie.azurewebsites.net/api/cartelera?imdbID=' + imdbID)
        .then(response => {
            // Aquí la promesa se cumplió, obtuvimos una respuesta
            return response.json(); // Convertimos la respuesta a JSON
        })
        .then(data => {
            // Aquí tenemos los datos que pedimos
            console.log(data);
            document.getElementById('Title').value = data.Title;
            document.getElementById('Year').value = data.Year;
            document.getElementById('Type').value = data.Type;
            document.getElementById('Poster').value = data.Poster;
            document.getElementById('Description').value = data.description;
            document.getElementById('Ubication').value = data.Ubication;
            document.getElementById('Estado').value = data.Estado;
        })
        .catch(error => {
            // Aquí la promesa falló, manejamos el error
            console.error('Error:', error);
        });
}

function guardar() {
    const movie = {
        imdbID: document.getElementById('postImdbID').value,
        Title: document.getElementById('Title').value,
        Year: document.getElementById('Year').value,
        Type: document.getElementById('Type').value,
        Poster: document.getElementById('Poster').value,
        description: document.getElementById('Description').value,
        Ubication: document.getElementById('Ubication').value,
        Estado: parseInt(document.getElementById('Estado').value)
    };

    document.getElementById('jsonResult').textContent = JSON.stringify(movie);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    };

    fetch('https://movie.azurewebsites.net/api/cartelera', options)
        .then(response => {
            // Aquí la promesa se cumplió, obtuvimos una respuesta
            return response.json(); // Convertimos la respuesta a JSON
        })
        .then(data => {
            // Aquí tenemos los datos que pedimos
            console.log(data);
            alert("Pelicula Guardada: " + data.Title);
        })
        .catch(error => {
            // Aquí la promesa falló, manejamos el error
            console.error('Error:', error);
        });
}

function eliminar() {
    const imdbID = document.getElementById('postImdbID').value;

    fetch('https://movie.azurewebsites.net/api/cartelera?imdbID=' + imdbID, { method: 'DELETE' })
        .then(response => {
            // Aquí la promesa se cumplió, obtuvimos una respuesta
            return response.json(); // Convertimos la respuesta a JSON
        })
        .then(data => {
            // Aquí tenemos los datos que pedimos
            console.log(data);
            alert("Pelicula Eliminada: " + data.Title);
        })
        .catch(error => {
            // Aquí la promesa falló, manejamos el error
            console.error('Error:', error);
        });
}
