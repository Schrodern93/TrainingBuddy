const model = {

        pageSelected:"availableTraining",

        inputs:{
            dateAndTime: "",


        },
        footerNumber: 0,
        footer:[`<div class="footer" onclick="mainView('makeTraining')">LAG NY TIME</div>`,
                `<div class="footer" onclick="mainView('availableTraining')">TILBAKE TIL FORSIDE</div>`
                ],
        users:[

            {   
                id:1,
                fornavn: "Joakim" ,
                etternavn: "Schrøder",
                treningsnivå: "3til5nivåerher", 
                kjønn: "mann",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },
            {   
                id:2,
                fornavn: "Linn" ,
                etternavn: "Eidsten",
                treningsnivå: "3til5nivåerher", 
                kjønn: "kvinne",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },


        ],


        listOfAvailableTranings:[

            {createdBy: "Joakim Schrøder", time: "16.11.21", }
        ],






}