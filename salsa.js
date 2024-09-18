// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
    {
        name: "Qué Precio Tiene el Cielo",
        artist: "Marc Anthony",
        image: "markpic1.jpg",
        path: "Marc Anthony - Qué Precio Tiene el Cielo.mp3"
    },
    {
        name: "Se Me Sigue Olvidando",
        artist: "Marc Anthony",
        image: "markpic222.jpg",
        path: "Mark Anthony-Se Me Sigue Olvidando.mp3"
    },  
    {
        name: "Tu Amor Me Hace Bien",
        artist: "Marc Anthony",
        image: "markpic1.jpg",
        path: "Mark Anthony-Tu Amor Me Hace Bien.mp3"
    }, 
    {
        name: "Fabricando Fantasías",
        artist: "Tito Nieves",
        image: "fabricandopicc.jpg",
        path: "Tito Nieves - Fabricando Fantasías.mp3"
    }, 
    {
        name: "Valió la Pena",
        artist: "Marc Anthony",
        image: "markpic222.jpg",
        path: "Marc Anthony - Valió la Pena.mp3"
    }, 
    {
        name: "De Mi Enamorate",
        artist: "Tito Nieves",
        image: "titonievespiccc.jpg",
        path: "Tito Nieves-De Mí Enamórate.mp3"
    }, 
    {
        name: "Ahora Quien",
        artist: "Marc Anthony",
        image: "markpic222.jpg",
        path: "Mark Anthony-Ahora Quien.mp3"
    }, 
    {
        name: "La Cita",
        artist: "Galy Galiano",
        image: "galypicc.jpg",
        path: "Galy GalianoLa Cita.mp3"
    },
    {
        name: "Me Mata La Soledad",
        artist: "Tito Rojas",
        image: "titopic44.jpg",
        path: "Tito Rojas-Me Mata La Soledad.mp3"
    }, 
    {
        name: "Mirándote",
        artist: "Frankie Ruiz",
        image: "frankiepic3.jpg",
        path: "Frankie Ruiz-Mirándote.mp3"
    },    
    {
        name: "Lloro",
        artist: "Tito Rojas",
        image: "TITORPIC.jpg",
        path: "Tito Rojas-Lloro.mp3"
    },     
    {
        name: "Hablame",
        artist: "Frankie Ruiz",
        image: "frankiepic2.jpg",
        path: "Frankie Ruiz-Hablame.mp3"
    },
    {
        name: "Quien Entiende Este Amor",
        artist: "Galy Galiano",
        image: "galypicc.jpg",
        path: "gary-Quien Entiende Este Amor.mp3"
    }, 
    {
        name: "Para Darte Fuego",
        artist: "Frankie Ruiz",
        image: "Frankiepic444.jpg",
        path: "Frankie Ruiz-Para Darte Fuego.mp3"
    },   
    {
        name: "Tú Eres",
        artist: "Frankie Ruiz",
        image: "frankiepic555.jpg",
        path: "Frankie Ruiz-Tú Eres.mp3"
    },   
    {
        name: "Tú Con Él",
        artist: "Frankie Ruiz",
        image: "frankiepic3.jpg",
        path: "Frankie Ruiz-Tú Con Él.mp3"
    },   
    {
        name: "Pequeñas Cosas",
        artist: "Willie Gonzalez",
        image: "williepic111.jpg",
        path: "Willie Gonzalez-Pequeñas Cosas.mp3"
    },   
    {
        name: "Amor Pirata",
        artist: "Willie Gonzalez",
        image: "williepic22.jpg",
        path: "Willie Gonzalez-Amor Pirata.mp3"
    },   
    {
        name: "He Vuelto",
        artist: "Willie Gonzalez",
        image: "williepic33.jpg",
        path: "Willie Gonzalez-He Vuelto.mp3"
    },   
    {
        name: "Aquel Lugar",
        artist: "Adolescentes Orquesta",
        image: "adolescentespic1.jpg",
        path: "Adolescent's Orquesta - Aquel Lugar.mp3"
    }, 
    {
        name: "Es Mi Mujer",
        artist: "Tito Rojas",
        image: "titopic33.jpg",
        path: "Tito Rojas-Es Mi Mujer.mp3"
    },        
    {
        name: "Se Acabó el Amor",
        artist: "Adolescentes Orquesta",
        image: "adolescentespic2.jpg",
        path: "Adolescent's Orquesta - Se Acabó el Amor.mp3"
    }, 
    {
        name: "Me Voy O Me Quedo",
        artist: "Tito Rojas",
        image: "TITORPIC.jpg",
        path: "Tito Rojas-Me Voy O Me Quedo.mp3"
    },     
    {
        name: "Ella Se Hizo Deseo",
        artist: "Tito Rojas",
        image: "titopic222.jpg",
        path: "Tito Rojas-Ella Se Hizo Deseo.mp3"
    },        
    {
        name: "Persona Ideal",
        artist: "Adolescentes Orquesta",
        image: "adolescentespic3.jpg",
        path: "Adolescent's Orquesta - Persona Ideal.mp3"
    },
    {
        name: "Este Amor",
        artist: "Tito Rojas",
        image: "titopic44.jpg",
        path: "Tito Rojas-Este Amor.mp3"
    },      
    {
        name: "Clase Social",
        artist: "Adolescentes Orquesta",
        image: "adolescentespic2.jpg",
        path: "Adolescentes Orquesta - Clase Social.mp3"
    },
    {
        name: "Porque Este Amor",
        artist: "Tito Rojas",
        image: "TITORPIC.jpg",
        path: "Tito Rojas-Porque Este Amor.mp3"
    },     
    {
        name: "Anhelo",
        artist: "Adolescentes Orquesta",
        image: "adolescentespic1.jpg",
        path: "Adolescent's Orquesta - Anhelo.mp3"
    },
    {
        name: "Como Te Hago Entender",
        artist: "Roberto Roena",
        image: "COMOTEHAGOPIC.jpg",
        path: "Como Te Hago ENTENDER  - Roberto Roena [Video Lyric].mp3"
    },      
    {
        name: "Virgen",
        artist: "Adolescentes Orquesta",
        image: "adolescentespic3.jpg",
        path: "Adolescentes Orquesta - Virgen.mp3"
    }, 
    {
        name: "La Cura",
        artist: "Frankie Ruiz",
        image: "frankieCurapic.jpg",
        path: "Frankie Ruiz-La Cura.mp3"
    },     
    {
        name: "Hoy Aprendí",
        artist: "Adolescentes Orquesta",
        image: "adolepic444.jpg",
        path: "Adolescentes Orquesta - Hoy Aprendí.mp3"
    },                      
    {
        name: "Hola",
        artist: "Hildemaro",
        image: "holapic.jpg",
        path: "Hola - Hildemaro (.mp3"
    },
    {
        name: "Probablemente",
        artist: "Yiyo Sarante",
        image: "YiyoPic.jpg",
        path: "Yiyo Sarante - Probablemente (Audio Oficial).mp3"
    },
    {
        name: "Deseandote",
        artist: "Frankie Ruiz",
        image: "frankiepic2.jpg",
        path: "Frankie Ruiz-Deseandote.mp3"
    },
    {
        name: "Me Hubieras Dicho",
        artist: "Yiyo Sarante",
        image: "YIYOPIC2222.jpg",
        path: "Yiyo Sarante - Me Hubieras Dicho (Video Oficial).mp3"
    },
    {
        name: "El Camionero",
        artist: "Frankie Ruiz",
        image: "frankiepic3.jpg",
        path: "Frankie Ruiz-El Camionero.mp3"
    },
    {
        name: "Se Pareció Tanto a Ti",
        artist: "Grupo Niche",
        image: "NICHEPIC.jpg",
        path: "Se Pareció Tanto a Ti.mp3"
    },
    {
        name: "Por Mujeres Como Tú",
        artist: "Tito Rojas",
        image: "titopic222.jpg",
        path: "Tito Rojas-Por Mujeres Como Tú.mp3"
    },
    {
        name: "Haremos el Amor",
        artist: "Tony Vega",
        image: "tonyharemospic.jpg",
        path: "Tony Vega-Haremos el Amor.mp3"
    },
    {
        name: "Hasta Que Me Olvides",
        artist: "Raulin Rosendo",
        image: "ROSENDOPIC.jpg",
        path: "Raulin Rosendo-Hasta Que Me Olvides.mp3"
    },
    {
        name: "Siempre Sere",
        artist: "Tito Rojas",
        image: "titopic222.jpg",
        path: "Tito Rojas-Siempre Sere.mp3"
    },
    {
        name: "No podras escapar",
        artist: "Willie Gonzalez",
        image: "WILLIE2PIC.jpg",
        path: "No Podrás ESCAPAR De Mi  - Willie Gonzalez [Video Oficial].mp3"
    },    
    {
        name: "Algo Facil De Olvidar",
        artist: "VICTOR WAILL",
        image: "VICTORWPICCC.jpg",
        path: "VICTOR WAILL - Algo Facil De Olvidar.mp3"
    },
    {
        name: "Que voy hacer",
        artist: "Raulin Rosendo",
        image: "ROSENDOPIC.jpg",
        path: "Que Voy Hacer.mp3"
    },
    {
        name: "Como da vuelta la vida",
        artist: "La Franquicia",
        image: "COMODAVUELTASPIC.jpg",
        path: "Como da Vueltas la Vida.mp3"
    },
    {
        name: "Deseo",
        artist: "Raulin Rosendo",
        image: "ROSENDOPIC.jpg",
        path: "Deseo.mp3"
    },
    {
        name: "Ironia",
        artist: "Frankie Ruiz",
        image: "ironiapic.jpg",
        path: "Ironía.mp3"
    },
    {
        name: " Quiero ser tuyo",
        artist: "Tito Rojas",
        image: "titoamarmepic.jpg",
        path: "QUIERO Ser Tuyo  - Tito Rojas [Lyric Video].mp3"
    },
];


function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
    
    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    
    // Update details of the track
    track_art.style.backgroundImage = 
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = 
        "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
    
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
    
    // Apply a random background color
    random_bg_color();
    }
    
    function random_bg_color() {
    // Get a random number between 64 to 256
    // (for getting lighter colors)
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    
    // Construct a color with the given values
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    // Set the background to the new color
    document.body.style.background = bgColor;
    }
    
    // Function to reset all values to their default
    function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

    function playpauseTrack() {
        // Switch between playing and pausing
        // depending on the current state
        if (!isPlaying) playTrack();
        else pauseTrack();
        }
        
        function playTrack() {
        // Play the loaded track
        curr_track.play();
        isPlaying = true;
        
        // Replace icon with the pause icon
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        }
        
        function pauseTrack() {
        // Pause the loaded track
        curr_track.pause();
        isPlaying = false;
        
        // Replace icon with the play icon
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
        }
        
        function nextTrack() {
        // Go back to the first track if the
        // current one is the last in the track list
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }
        
        function prevTrack() {
        // Go back to the last track if the
        // current one is the first in the track list
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length - 1;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }

        function seekTo() {
            // Calculate the seek position by the
            // percentage of the seek slider 
            // and get the relative duration to the track
            seekto = curr_track.duration * (seek_slider.value / 100);
            
            // Set the current track position to the calculated seek position
            curr_track.currentTime = seekto;
            }
            
            function setVolume() {
            // Set the volume according to the
            // percentage of the volume slider set
            curr_track.volume = volume_slider.value / 100;
            }
            
            function seekUpdate() {
            let seekPosition = 0;
            
            // Check if the current track duration is a legible number
            if (!isNaN(curr_track.duration)) {
                seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                seek_slider.value = seekPosition;
            
                // Calculate the time left and the total duration
                let currentMinutes = Math.floor(curr_track.currentTime / 60);
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_track.duration / 60);
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
            
                // Add a zero to the single digit time values
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
            
                // Display the updated duration
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
            }
            }

            // Load the first track in the tracklist
loadTrack(track_index);
