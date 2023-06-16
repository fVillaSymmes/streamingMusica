$(function () {
    $("button").click(function() {
        if ($("#artista").val() && $("#cancion").val()) {
            $.get(`https://private-3fcf9a-lyricsovh.apiary-mock.com/v1/${$("#artista").val()}/${$("#cancion").val()}`, function(data, status){
            console.log(`Estatus: ${status}
                        \nContenido: ${data.lyrics}
                        `);
            $("#letras").text(data.lyrics)
            })
        } else {
            alert('Rellene todos los campos antes de buscar.')
        }
    })
})

$("#artista").keypress(function() {
    $("#letras").text("")
})

$("#cancion").keypress(function() {
    $("#letras").text("")
})


// fetch("https://api.lyrics.ovh/v1/Coldplay/Yellow", {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     }})    
// .then(res => {
//     if (res.ok) {
//         console.log('¡Éxito!');
//         console.log(res.status)
//         console.log(JSON.stringify(res.lyrics));
//     } else {
//         console.log('Falló');
//     }
// }).then(data => console.log(data));