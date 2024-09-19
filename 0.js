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
        name: "La Chancleta",
        artist: "Carin León, Carlos Vives, Chimbala",
        image: "carinleonchimbacarlospic.jpg",
        path: "Carin León, Carlos Vives, Chimbala - La Chancleta.mp3"
    },
    {
        name: "Aquí Abajo",
        artist: "Christian Nodal",
        image: "CHRISTIANNODALPIC.jpg",
        path: "Christian Nodal - Aquí Abajo.mp3"
    },
    {
        name: "Drip",
        artist: "Luar La L & Sinfonico",
        image: "LUALLPICCC1111.jpg",
        path: "Luar La L & Sinfonico - Drip.mp3"
    },
    {
        name: "El Final",
        artist: "Baby Rasta y Gringo",
        image: "babygringopic2.jpg",
        path: "Baby Rasta y Gringo - El Final.mp3"
    },
    {
        name: "Lo Caro y Lo Bueno",
        artist: "Chencho Corleone",
        image: "chnchocaroybuenopic.jpg",
        path: "Chencho Corleone - Lo Caro y Lo Bueno.mp3"
    },
    {
        name: "ADIVINO",
        artist: "Myke Towers x Bad Bunny",
        image: "mykebadadivinopic.jpg",
        path: "Myke Towers, Bad Bunny - ADIVINO.mp3"
    },
    {
        name: "Si antes te hubiera conocido",
        artist: "Karol G",
        image: "MECUROPIC.jpg",
        path: "KAROL G - Si Antes Te Hubiera Conocido.mp3"
    },
    {
        name: "CON SONIDO",
        artist: "BULIN 47 X CEKY VICINY",
        image: "CONSONIDOPIC.jpg",
        path: "BULIN 47 X CEKY VICINY - CON SONIDO (PROD BREYCO).mp3"
    },
    {
        name: "Gallery Dept",
        artist: "Myke Towers",
        image: "mykepic2.jpg",
        path: "Myke Towers - Gallery Dept.mp3"
    },
    {
        name: "Por Mi Lau",
        artist: "Miky Woodz",
        image: "mikypic5555.jpg",
        path: "Miky Woodz - Por Mi Lau.mp3"
    },
    {
        name: "Que Loquera",
        artist: "Nino Freestyle x Yomel El Meloso",
        image: "ninoyomelPic.jpg",
        path: "Nino Freestyle x Yomel El Meloso - Que Loquera.mp3"
    },
    {
        name: "BACK TO BACK",
        artist: "BRAULIO FOGON X LUIS BROWN",
        image: "fogobackPic.jpg",
        path: "BRAULIO FOGON X LUIS BROWN - BACK TO BACK.mp3"
    },
    {
        name: "Batman en Can Am",
        artist: "Arcángel",
        image: "ARCANGELPIC2.jpg",
        path: "Arcángel - Batman en Can Am.mp3"
    },
    {
        name: "Drip",
        artist: "Luar La L & Sinfonico",
        image: "LUALLPICCC1111.jpg",
        path: "Luar La L & Sinfonico - Drip.mp3"
    },
    {
        name: "No te contaron mal",
        artist: "Christian Nodal",
        image: "notecontaronmal.jpg",
        path: "Christian Nodal - No Te Contaron Mal (Audio).mp3"
    },
    {
        name: "De Los Besos Que Te Di",
        artist: "Christian Nodal",
        image: "CHRISTIANNODALPIC.jpg",
        path: "Christian Nodal - De Los Besos Que Te Di.mp3"
    },
    {
        name: "Probablemente",
        artist: "Christian Nodal",
        image: "CHRISTIANNODALPIC.jpg",
        path: "Christian Nodal-Probablemente.mp3"
    },
    {
        name: "La gloria eres tu",
        artist: "Luis Miguel",
        image: "lusimiguel2.jpg",
        path: "Luis Miguel - La Gloria Eres Tú (Video Con Letra).mp3"
    },
    {
        name: "Adios Amor",
        artist: "Chistian Nodal",
        image: "notecontaronmal.jpg",
        path: "Christian Nodal - Adiós Amor (Audio).mp3"
    },
    {
        name: "Este o Este",
        artist: "El alfa ft Nfasis(mil virtudes)",
        image: "este_pic.jpg",
        path: "El Alfa El Jefe x Nfasis - ESTE (Video Oficial).mp3"
    },
    {
        name: "Ma Buena",
        artist: "Yasiel La Melodia",
        image: "mabuenapic.jpg",
        path: "Yaisel LM - Ma Buena (Video Oficial).mp3"
    },
    {
        name: "Alto Riesgo",
        artist: "Myke Towers",
        image: "MYKEPIC3333.jpg",
        path: "Myke Towers - Alto Riesgo.mp3"
    },
    {
        name: "PUESTO PA' GUERRIAL",
        artist: "Bad Bunny x Myke Towers",
        image: "BADMYKEPIC.jpg",
        path: "Bad Bunny x Myke Towers - PUESTO PA' GUERRIAL.mp3"
    },
    {
        name: "Joven Leyenda",
        artist: "Myke Towers",
        image: "MYKEPIC3333.jpg",
        path: "Myke Towers - Joven Leyenda.mp3"
    },
    {
        name: "Mi Santa",
        artist: "Romeo Santos",
        image: "ROMEOPICCCCCC.jpg",
        path: "Romeo Santos - Mi Santa.mp3"
    },
    {
        name: "Soberbio",
        artist: "Romeo Santos",
        image: "ROMEO222PICCC.jpg",
        path: "Romeo Santos - Soberbio.mp3"
    },
    {
        name: "Dígitos",
        artist: "Arcangel X Myke Towers",
        image: "MIKEARCPICCC.jpg",
        path: "Arcangel, Myke Towers -Dígitos.mp3"
    },
    {
        name: "DON & TEGO",
        artist: "Myke Towers & Arcangel",
        image: "MIKEARCPICCC.jpg",
        path: "Myke Towers & Arcangel - DON & TEGO.mp3"
    },
    {
        name: "Los Angeles",
        artist: "Myke Towers",
        image: "MYKEPIC3333.jpg",
        path: "Myke Towers - Los Angeles.mp3"
    },
    {
        name: "MAYOR",
        artist: "Myke Towers x Yandel",
        image: "MIKEYANDELP[IC.jpg",
        path: "MAYOR - Myke Towers & Yandel.mp3"
    },
    {
        name: "Nadie Se Meta",
        artist: "Ala Jaza",
        image: "ALAJAPICCCC.jpg",
        path: "Ala Jaza - Nadie Se Meta.mp3"
    },
    {
        name: "Los Últimos",
        artist: "Romeo Santos X Luis Vargas",
        image: "VARGASROMEOOOPICCCCC.jpg",
        path: "Romeo Santos, Luis Vargas - Los Últimos.mp3"
    },
    {
        name: "Amor  A Medio Tiempo",
        artist: "Yoskar Sarante",
        image: "YOSKARPICG.jpg",
        path: "Amor  A Medio TIEMPO  - Yoskar Sarante.mp3"
    },
    {
        name: "El Fracaso",
        artist: "Richie Ortega",
        image: "RICHIORTEGAPICCC.jpg",
        path: "Richie Ortega - El Fracaso.mp3"
    },
    {
        name: "Algo Facil De Olvidar",
        artist: "VICTOR WAILL",
        image: "VICTORWPICCC.jpg",
        path: "VICTOR WAILL - Algo Facil De Olvidar.mp3"
    },
    {
        name: "Porsche Carrera",
        artist: "Jhayco, Yandel",
        image: "JHAYPICCCCC.jpg",
        path: "JHAYCO, Yandel - Porsche Carrera.mp3"
    },
    {
        name: "Guatauba",
        artist: "Cosculluela",
        image: "COSCUPIC222.jpg",
        path: "Guatauba - Cosculluela.mp3"
    },    
    {
        name: "Celos",
        artist: "Myke Towers & J Balvin",
        image: "CELOSPIC.jpg",
        path: "Myke Towers & J Balvin - Celos.mp3"
    },
    {
        name: "Caramelo(Remix)",
        artist: "Ozuna ft Myke Towers, Karol G",
        image: "carameloRPIC.jpg",
        path: "Ozuna - Caramelo Remix (LetraLyrics) ft. Karol G, Myke Towers.mp3"
    },
    {
        name: "LolliPoP",
        artist: "Darell",
        image: "darrellolpic.jpg",
        path: "Darell - Lollipop (Audio).mp3"
    },
    {
        name: "Piensan",
        artist: "Myke Towers",
        image: "mikepiensanpi.jpg",
        path: "Myke Towers - Piensan (Video Oficial).mp3"
    },
    {
        name: "Tiene Novio",
        artist: "Sech ft Manuel Turizo",
        image: "sechManuel.jpg",
        path: "Sech - Tiene Novio Ft. Manuel Turizo [Audio Oficial].mp3"
    },
    {
        name: "Hey mor",
        artist: "Ozuna Ft Feid",
        image: "morpic.jpg",
        path: "Ozuna, Feid - Hey Mor (Visualizer Oficial)  Ozutochi.mp3"
    },
    {
	    name: "Humo",
	    artist: "Chencho Corleone, Peso Pluma",
	    image: "humopic.jpg",
	    path:"Chencho Corleone, Peso Pluma - HUMO (Official Video).mp3"
    },
    {
        name: "SEXO DESENFRENADO",
        artist: "Myke Towers",
        image: "MIKEPIC22222.jpg",
        path: "Myke Towers - SEXO DESENFRENADO.mp3"
    },
    {
        name: "Inocente",
        artist: "Myke Towers",
        image: "INOCENTEMIKEPIC.jpg",
        path: "Myke Towers - Inocente.mp3"
    },
    {
        name: "TU NO CORRE",
        artist: "SUJETO ORO 24",
        image: "SUJETOPICCCC222222.jpg",
        path: "TU NO CORRE - SUJETO ORO 24.mp3"
    },
    {
        name: "Con Quién Te Olvido",
        artist: "Ala Jaza",
        image: "ALAJAPICCCC.jpg",
        path: "Ala Jaza - Con Quién Te Olvido.mp3"
    },
    {
        name: "Nace Un Borracho",
        artist: "Christian Nodal",
        image: "CHRISTIANNODALPIC.jpg",
        path: "Christian Nodal - Nace Un Borracho.mp3"
    },
    {
        name: "Ya No Somos Ni Seremos",
        artist: "Christian Nodal",
        image: "CHRISTIANNODALPIC.jpg",
        path: "Christian Nodal - Ya No Somos Ni Seremos.mp3"
    },
    {
        name: "Ajedrez",
        artist: "Myke Towers",
        image: "1MYKEPIC1.jpg",
        path: "Myke Towers - Ajedréz (Lyric Video) (1).mp3"
    },
    {
        name: "Cuando me Ven",
        artist: "Myke Towers",
        image: "1MYKEPIC1.jpg",
        path: "Myke Towers - Cuando Me Ven (Lyric Video).mp3"
    },
    {
        name: "Atras del Peso",
        artist: "Mozart La Para x Black Jonas Point",
        image: "ATRASDELPESOPICCCCC.jpg",
        path: "Atras del Peso - Mozart La Para x Black Jonas Point.mp3"
    },
    {
        name: "34.PFA",
        artist: "Myke Towers",
        image: "1MYKEPIC1.jpg",
        path: "Myke Towers - PFA (Lyric Video).mp3"
    },
    {
        name: "Jugador Franquicia",
        artist: "Myke Towers",
        image: "1MYKEPIC1.jpg",
        path: "Myke Towers - Jugador Franquicia (Lyric Video).mp3"
    },
    {
        name: "9 Dias",
        artist: "Lapiz Conciente",
        image: "lapizPi.jpg",
        path: "Lapiz Conciente - 9 Dias.mp3"
    },
    {
        name: "La Mejor Versión De Mi",
        artist: "Natti Natasha X Romeo Santos",
        image: "ROMENATIPIC.jpg",
        path: "Natti Natasha X Romeo Santos - La Mejor Versión De Mi (LetraLyrics) Remix.mp3"
    },
    {
        name: "La Diabla",
        artist: "Romeo Santos",
        image: "ROMEOPICCCCCC.jpg",
        path: "Romeo Santos - La Diabla (Audio).mp3"
    },
    {
        name: "Yo Quisiera Amarla",
        artist: "Romeo Santos",
        image: "ROMEOPICCCCCC.jpg",
        path: "Aventura - Yo Quisiera Amarla.mp3"
    },
    {
        name: "Guitarra",
        artist: "Yoskar Sarante",
        image: "YoskarPIC.jpg",
        path: "Guitarra - Yoskar Sarante [Video Oficial].mp3"
    },
    {
        name: "Probablemente",
        artist: "Yiyo Sarante",
        image: "YiyoPic.jpg",
        path: "Yiyo Sarante - Probablemente (Audio Oficial).mp3"
    },
    {
        name: "Me Hubieras Dicho",
        artist: "Yiyo Sarante",
        image: "YIYOPIC2222.jpg",
        path: "Yiyo Sarante - Me Hubieras Dicho (Video Oficial).mp3"
    },
    {
        name: "Quizás Si, Quizás No",
        artist: "Hector Acosta(Torito)",
        image: "TORITOPIC.jpg",
        path: "Quizás Si, Quizás No.mp3"
    },
    {
        name: "Perdóname la Vida",
        artist: "Hector Acosta(Torito)",
        image: "TORITOPIC.jpg",
        path: "Perdóname la Vida.mp3"
    },
    {
        name: "Amorcito Enfermito",
        artist: "Hector Acosta(Torito)",
        image: "TORITOPIC.jpg",
        path: "Hector Acosta - Amorcito Enfermito (Official Video).mp3"
    },
    {
        name: "Asi te Amo",
        artist: "Elvis Martinez",
        image: "ELVISMODAPIC.jpg",
        path: "Elvis Martinez Así te Amo 2003  Audio (1).mp3"
    },
    {
        name: "Si no te tengo",
        artist: "Raulin Rodriguez",
        image: "RAULINPIC.jpg",
        path: "Raulin Rodriguez-Si No Te Tengo.mp3"
    },
    {
        name: "Tu sabes bien",
        artist: "Elvis Martinez",
        image: "ELVISMODAPIC.jpg",
        path: "Tu Sabes.mp3"
    },
    {
        name: "Maestra",
        artist: "Elvis Martinez",
        image: "ELVISMODAPIC.jpg",
        path: "Elvis martinez Maestra.mp3"
    },
    {
        name: "No podras escapar",
        artist: "Willie Gonzalez",
        image: "WILLIE2PIC.jpg",
        path: "No Podrás ESCAPAR De Mi  - Willie Gonzalez [Video Oficial].mp3"
    },    
    {
        name: "Amor Pirata",
        artist: "Grupo Niche",
        image: "NICHEPIC.jpg",
        path: "Se Pareció Tanto a Ti.mp3"
    },
    {
        name: "Carta de Verano",
        artist: "Joe Veraz",
        image: "JOEPIC.jpg",
        path: "Joe Veras - Carta De Verano.mp3"
    },
    {
        name: "Tres Veces",
        artist: "Yoskar Sarante",
        image: "YoskarPIC.jpg",
        path: "Tres Veces - Yoskar Sarante (Audio Bachata).mp3"
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
        name: "Que Esta Pasando",
        artist: "El Jincho",
        image: "JINCHOPIC.jpg",
        path: "El Jincho - Que Esta Pasando (VIDEOCLIP OFICIAL).mp3"
    },
    {
        name: "EL NUEVO PAPA",
        artist: "QUIMICO ULTRA MEGA",
        image: "QUIMICOPIC.jpg",
        path: "QUIMICO_NUEVO_PAPA.mp3"
    },
    {
        name: "Demasiado Yagala",
        artist: "QUIMICO ULTRA MEGA",
        image: "QUIMICOPIC.jpg",
        path: "Quimico Ultra Mega - Demasiado Yagala (Official Music Video).mp3"
    },
    {
        name: "La Tranza",
        artist: "Bulin47 X myke towers",
        image: "TRABULINMIKEPIC.jpg",
        path: "Bulin 47 x Myke Towers - La Tranza (Video Oficial).mp3"
    },
    {
        name: "Living Life",
        artist: "Miky Woodz",
        image: "MIKYWOODS.jpg",
        path: "Miky Woodz  - Living Life (Video Oficial).mp3"
    },
    {
        name: "Rest in Peace",
        artist: "Darell, Ñengo Flow",
        image: "NENGODARPIC.jpg",
        path: "Darell, Ñengo Flow - Rest in Peace (Official Video).mp3"
    },
    {
        name: "Madura",
        artist: "Cosculluela FT Bad Bunny",
        image: "MADURAPIC.jpg",
        path: "Cosculluela, Bad Bunny - Madura (Video Oficial).mp3"
    },
    {
        name: "Active",
        artist: "BigXthaPlug",
        image: "BigXactivePic.jpg",
        path: "BigXthaPlug - Active (Official Music Video).mp3"
    },
    {
        name: "Mr.Trouble",
        artist: "BigXThaPlug",
        image: "BIGXPICC.jpg",
        path: "BigXThaPlug _Mr.Trouble.mp3"
    },
    {
        name: "Whip It",
        artist: "BigXThaPlug",
        image: "BigXactivePic.jpg",
        path: "BigXthaPlug - Whip It (Official Audio).mp3"
    },
    {
        name: "Back on my Bs",
        artist: "BigXthaPlug",
        image: "backbspic.jpg",
        path: "BigXthaPlug  - Back On My BS [Official Lyric Video].mp3"
    },
    {
        name: "Estamos bien",
        artist: "Darell ft Cosculluela",
        image: "ESTAMOSBIENPIC.jpg",
        path: "Darell x Cosculluela - Estamos Bien [Official Video].mp3"
    },
    {
        name: "VAMO A DALE",
        artist: "Myke Towers ft Cosculluela",
        image: "1COCUMIKEPIC.jpg",
        path: "Myke Towers & Cosculluela - VAMO A DARLE (Visualizer).mp3"
    },
    {
        name: "DIABLITA",
        artist: "Myke Towers ft Youngchimi",
        image: "DIABLITAPIC.jpg",
        path: "Myke Towers & Yovngchimi - DIABLITA (Visualizer).mp3"
    },
    {
        name: "TA TO SALDO",
        artist: "Miky Woodz ft Myke Towers",
        image: "TATOSALDOPIC.jpg",
        path: "Miky Woodz , Myke Towers - Ta To Saldo (Video Oficial).mp3"
    },
    {
        name: "Jovenes Millonarios",
        artist: "Eladio Carrion ft Myke Towers",
        image: "JMILLONARIOSPIC.jpg",
        path: "Eladio Carrión, Myke Towers - Jóvenes Millonarios (Video Oficial).mp3"
    },
    {
        name: "Una Locura",
        artist: "Ozuna FT J Balvin, Chencho Corleone",
        image: "LOCURAPIC.jpg",
        path: "Ozuna x J Balvin x Chencho Corleone - Una Locura (Video Oficial).mp3"
    },
    {
        name: "Fast Money",
        artist: "Ñengo Flow ft Myke Towers",
        image: "FASTMONEYPC.jpg",
        path: "Ñengo Flow x Myke Towers - Fast Money [Official Video].mp3"
    },
    {
        name: "512",
        artist: "Mora Ft Jhay Cortez",
        image: "Mora-JhayPIC.jpg",
        path: "Mora x Jhay Cortez - 512 (Video Oficial).mp3"
    },
    {
        name: "OBVIO",
        artist: "Myke Towers",
        image: "MykeObvioPIC.jpg",
        path: "Myke Towers - OBVIO (Visualizer).mp3"
    },
    {
        name: "Como se siente",
        artist: "Jhay Cortez",
        image: "jhayPic.jpg",
        path: "Como se siente jhay cortez (audio oficial).mp3"
    },
    {
        name: "Quien Va a Frontiar",
        artist: "Ozuna ft Young Chimi",
        image: "OZUCHIMIPIC.jpg",
        path: "Ozuna, YOVNGCHIMI - Quien Va a Frontiar (Video Oficial).mp3"
    },
    {
        name: "Trending",
        artist: "Dei V ft Myke Towers",
        image: "TrendiDeiviTowerPic.jpg",
        path: "Dei V, Myke Towers - Trending Remix (LetraLyrics).mp3"
    },
    {
        name: "BOBO",
        artist: "Sujeto",
        image: "sujetoPic.jpg",
        path: "SUJETO ORO 24 - BOBO.mp3"
    },
    {
        name: "Sabor a Mi",
        artist: "Luis Miguel",
        image: "luismiguel.jpg",
        path: "Sabor a Mi.mp3"
    },
    {
        name: "La Música No Miente",
        artist: "Lapiz Conciente",
        image: "lapizPi.jpg",
        path: "Lapiz Conciente - La Música No Miente.mp3"
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
    {
        name: "Million Dollar Baby",
        artist: "Tommy Richman",
        image: "milliondollarpic.jpg",
        path: "Tommy Richman - MILLION DOLLAR BABY (Official Music Video).mp3"
    },
    {
        name: "Respeten o Respeten",
        artist: "Maiky el antivirus musical",
        image: "maikyima3.jpg",
        path: "Maiky El Antivirus Musical-Respeten o Respeten(H M-2018).mp3"
    },
    {
        name: "Mi Progreso",
        artist: "Maiky el antivirus musical",
        image: "miprogresopic.jpg",
        path: "Mi progreso-Maiky el antivirus musical .mp3"
    },
    {
        name: "Megvtron",
        artist: "YoungChimi",
        image: "younChimmi.jpg",
        path: "YOVNGCHIMI - Megvtron (Official Visualizer).mp3"
    },
    {
        name: "Quienes son",
        artist: "C-Dobleta",
        image: "quieneson.jpg",
        path: "QUIENES SON- CDOBLETA.mp3"
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
