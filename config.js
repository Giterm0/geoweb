var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibWFwZ3VpMTEzIiwiYSI6ImNreWJxMzFjeDA5MXAyd3F2dGt4cGF3emUifQ.8udZrNyXjXZ74xnPtPL_og',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Volcanes',
    subtitle: 'Los principales volcanes activos del mundo',
    byline: 'M2B ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'Eyjafjallajökull, Islandia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eyjafjallaj%C3%B6kull_first_crater_20100329.jpg',
            description: 'También conocido como Eyjafjöll,2​ o Eyjafjalla,3​ es un volcán situado al norte de Skógar, en la región de Suðurland, al sur de Islandia.4​ Tiene entre 1651 m y 1666 m de altitud,​ y ha estado moderadamente activo en los últimos 8000 años.',
            location: {
                center: [-19.62, 63.63],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'volcan2',
            alignment: 'right',
            hidden: false,
            title: 'Monte Vesubio, Italia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [14.42555555, 40.82138888],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan3',
            alignment: 'left',
            hidden: false,
            title: 'Volcán Chimborazo, Ecuador',
            image: 'https://media.istockphoto.com/photos/chimborazo-volcano-and-sheep-picture-id480698816?k=20&m=480698816&s=612x612&w=0&h=H3B5R9ogPZxIKWkf0TD6SXm2bZi_2XUVRZWfUTP6oO4=',
            description: 'El Chimborazo es el volcán y la montaña más alta en el Ecuador, y su cumbre es el punto del planeta más alejado de su centro​ con una altitud de 6263,47 metros sobre el nivel del mar. Su última erupción conocida se cree que se produjo alrededor de 550 d.C.',
            location: {
                center: [-78.80777, -1.46777],
                zoom: 13.51,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan4',
            alignment: 'right',
            hidden: false,
            title: 'Volcán Kilimanjaro, Tanzania',
            image: '',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/61hkC0wTzzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [37.25562, -3.08950],
                zoom: 11.00,
                pitch: 60.00,
                bearing: 61.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
