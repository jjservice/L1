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
        name: "HAY LUPITA",
        artist: "LOMIIEL",
        image: "lomielpiccc.jpg",
        path: "LOMIIEL - HAY LUPITA.mp3"
    },
    {
        name: "PARARARARA",
        artist: "El Alfa El Jefe x Chimbala",
        image: "elalfachimbalapiccc.jpg",
        path: "El Alfa El Jefe Ft. Chimbala - PARARARARA.mp3"
    },
    {
        name: "La Tranza",
        artist: "Bulin 47 x Myke Towers",
        image: "TRABULINMIKEPIC.jpg",
        path: "Bulin 47 x Myke Towers - La Tranza (Video Oficial).mp3"
    },
    {
        name: "ESTE",
        artist: "El Alfa El Jefe x Nfasis",
        image: "este_pic.jpg",
        path: "El Alfa El Jefe x Nfasis - ESTE (Video Oficial).mp3"
    },
    {
        name: "CON SONIDO",
        artist: "BULIN 47 X CEKY VICINY",
        image: "BULINCEKYPIC.jpg",
        path: "BULIN 47 X CEKY VICINY - CON SONIDO (PROD BREYCO).mp3"
    },
    {
        name: "EL SINGON (REMIX)",
        artist: "Yomel El Meloso x J One x Harrison x Mapa",
        image: "elsingonyomelremixpic.jpg",
        path: "YOMEL EL MELOSO - EL SINGON (REMIX).mp3"
    },
    {
        name: "CHE CHE",
        artist: "Chimbala",
        image: "chimbalapic111.jpg",
        path: "Chimbala - CHE CHE.mp3"
    },
    {
        name: "Ma Buena",
        artist: "Yaisel LM",
        image: "mabuenapic.jpg",
        path: "Yaisel LM - Ma Buena (Video Oficial).mp3"
    },
    {
        name: "Feliz",
        artist: "Chimbala",
        image: "chimbalapic111.jpg",
        path: "Chimbala - Feliz.mp3"
    },
    {
        name: "QUE LINDA",
        artist: "LOMIIEL FT DONATY Y PAPERA",
        image: "QUELINDAPIC.jpg",
        path: "LOMIIEL FT DONATY Y PAPERA - QUE LINDA.mp3"
    },
    {
        name: "EL CHAMAQUITO FUNDIO",
        artist: "YOMEL EL MELOSO X NFASIS",
        image: "NfasisYomelPic.jpg",
        path: "YOMEL EL MELOSO X NFASIS - EL CHAMAQUITO FUNDIO.mp3"
    },
    {
        name: "KICK CON EL BAJO",
        artist: "TIVI GUNZ",
        image: "TiviPic.jpg",
        path: "TIVI GUNZ - KICK CON EL BAJO.mp3"
    },
    {
        name: "EL DUEÑO DE LO CROKY",
        artist: "El Alfa El Jefe x Yaisel LM",
        image: "elalfayasielpic.jpg",
        path: "El Alfa El Jefe x Yaisel LM - EL DUEÑO DE LO CROKY.mp3"
    },
    {
        name: "Tuwi Tuwi",
        artist: "Jey One x Donaty",
        image: "jonedonatypiccc.jpg",
        path: "Jey One  Donaty - Tuwi Tuwi.mp3"
    },
    {
        name: "POMPOSO (Remix)",
        artist: "El Alfa El Jefe Ft. Zion, Jowell, Yomel El Meloso, Shadow Blow, Bulova ",
        image: "pomposoremixpic.jpg",
        path: "El Alfa El Jefe Ft. Zion, Jowell, Yomel El Meloso, Shadow Blow, Bulova - POMPOSO (Remix).mp3"
    },
    {
        name: "Pa Jamaica (Remix)",
        artist: "El Alfa x Farruko x Darell x Myke Towers x Big O",
        image: "pajamaicapic.jpg",
        path: "El Alfa x Farruko x Darell x Myke Towers x Big O - Pa Jamaica (Remix).mp3"
    },
    {
        name: "No Nos Parecemos",
        artist: "El Alfa El Jefe",
        image: "alfapic22.jpg",
        path: "El Alfa El Jefe - No Nos Parecemos.mp3"
    },
    {
        name: "Un Mono",
        artist: "Donaty X Angel Dior",
        image: "angeldonapic.jpg",
        path: "Donaty X Angel Dior - Un Mono.mp3"
    },
    {
        name: "Rico Feo",
        artist: "El Alfa El Jefe x Flow 28 x Polo Joa",
        image: "ricofeoalfapic.jpg",
        path: "El Alfa El Jefe x Flow 28 x Polo Joa - Rico Feo.mp3"
    },
    {
        name: "Me Arreglé",
        artist: "Bulin 47",
        image: "Bulin47Pic.jpg",
        path: "Bulin 47 - Me Arreglé.mp3"
    },
    {
        name: "CALORAZO",
        artist: "Bulin 47",
        image: "bulinPic2.jpg",
        path: "Bulin 47 - CALORAZO.mp3"
    },
    {
        name: "Po po po",
        artist: "Bulin 47 x Flow 28",
        image: "bulin28Pic.jpg",
        path: "Bulin 47 x Flow 28 - Po po po.mp3"
    },
    {
        name: "DORA",
        artist: "FARIANA x El Alfa ",
        image: "elalfadorapic.jpg",
        path: "FARIANA x El Alfa - DORA.mp3"
    },
    {
        name: "Tambora",
        artist: "Flow 28",
        image: "flow28tamborapic.jpg",
        path: "Flow 28 - Tambora.mp3"
    },
    {
        name: "500 KITIPO",
        artist: "Flow 28 x Zunna",
        image: "500kitipoPic.jpg",
        path: "Flow 28 x Zunna - 500 KITIPO.mp3"
    },
    {
        name: "SE COMENTA",
        artist: "Flow 28 x Ceky Viciny",
        image: "flow28cekiPic.jpg",
        path: "Flow 28 x Ceky Viciny - SE COMENTA.mp3"
    },
    {
        name: "Que Malo De Que",
        artist: "YOMEL EL MELOSO x Lomiiel x El Mayor Clasico",
        image: "qumalodequePic.png",
        path: "YOMEL EL MELOSO x Lomiiel x El Mayor Clasico - Que Malo De Que.mp3"
    },
    {
        name: "Mango piña",
        artist: "Braulio Fogon",
        image: "braulioPic.jpg",
        path: "Braulio Fogon - Mango piña.mp3"
    },
    {
        name: "Bagre",
        artist: "Braulio Fogon",
        image: "braulioPic.jpg",
        path: "Braulio Fogon - Bagre.mp3"
    },
    {
        name: "Un Selfie Con 3 Millones",
        artist: "El Alfa El Jefe x Angel Dior",
        image: "elalfaangelpic.jpg",
        path: "El Alfa El Jefe Ft. Angel Dior- Un Selfie Con 3 Millones.mp3"
    },
    {
        name: "Tengo Eso",
        artist: "Angel Dior x Papa Tyga",
        image: "angelpapPic.jpg",
        path: "ANGEL DIOR X PAPAA TYGA - Tengo Eso.mp3"
    },
    {
        name: "Arrebatao",
        artist: "El Alfa El Jefe",
        image: "alfapic11.jpg",
        path: "El Alfa El Jefe - Arrebatao (Video Oficial).mp3"
    },
    {
        name: "Vivela",
        artist: "Donaty",
        image: "donatypic111.jpg",
        path: "Donaty-Vivela.mp3"
    },
    {
        name: "TE LLENASTE",
        artist: "El Alfa El Jefe Ft. Yomel El Meloso, El Fother",
        image: "elalfatellenasteremixpic.jpg",
        path: "El Alfa El Jefe - TE LLENASTE (Ft. Yomel El Meloso, El Fother).mp3"
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
