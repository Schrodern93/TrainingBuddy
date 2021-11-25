const model = {

        pageSelected:"availableTraining",

        inputs:{
            dateAndTime: "",
            date:"",


        },
        filteredValue: "",
        selectedValueInFilter:"Dag",
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
            {   
                id:3,
                fornavn: "Erlend" ,
                etternavn: "",
                treningsnivå: "3til5nivåerher", 
                kjønn: "mann",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },
            {   
                id:4,
                fornavn: "Therese" ,
                etternavn: "Kjær",
                treningsnivå: "3til5nivåerher", 
                kjønn: "kvinne",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },
            {   
                id:5,
                fornavn: "Bjørnar" ,
                etternavn: "",
                treningsnivå: "3til5nivåerher", 
                kjønn: "mann",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },
            {   
                id:6,
                fornavn: "Marie" ,
                etternavn: "",
                treningsnivå: "3til5nivåerher", 
                kjønn: "kvinne",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },
            {   
                id:7,
                fornavn: "Terje" ,
                etternavn: "",
                treningsnivå: "3til5nivåerher", 
                kjønn: "mann",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },
            {   
                id:8,
                fornavn: "Elin" ,
                etternavn: "",
                treningsnivå: "3til5nivåerher", 
                kjønn: "kvinne",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },
            {   
                id:9,
                fornavn: "Eskil" ,
                etternavn: "",
                treningsnivå: "3til5nivåerher", 
                kjønn: "mann",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },
            {   
                id:10,
                fornavn: "Anita" ,
                etternavn: "",
                treningsnivå: "3til5nivåerher", 
                kjønn: "kvinne",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },
            {   
                id:11,
                fornavn: "Geir" ,
                etternavn: "",
                treningsnivå: "3til5nivåerher", 
                kjønn: "mann",
                rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
            },


        ],


        listOfAvailableTrainings:[

            {linkedId:1, createdBy: "Joakim Schrøder", date: "16.11.21", time:"12:00 - 13:00",trainingtype:"Styrke", place:"SisSportssenter" },
            {linkedId:1, createdBy: "Joakim Schrøder", date: "16.11.21", time:"12:00 - 13:00",trainingtype:"Styrke", place:"SisSportssenter" },
            {linkedId:1, createdBy: "Joakim Schrøder", date: "16.11.21", time:"12:00 - 13:00",trainingtype:"Styrke", place:"SisSportssenter" },
            {linkedId:1, createdBy: "Joakim Schrøder", date: "16.11.21", time:"12:00 - 13:00",trainingtype:"Styrke", place:"SisSportssenter" },
            {linkedId:1, createdBy: "Joakim Schrøder", date: "16.11.21", time:"12:00 - 13:00",trainingtype:"Styrke", place:"SisSportssenter" },
            {linkedId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"Unknown", place:"LA-rvik" },
            {linkedId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"Unknown", place:"LA-rvik" },
            {linkedId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"Unknown", place:"LA-rvik" },
            {linkedId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"Unknown", place:"LA-rvik" },
            {linkedId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"Unknown", place:"LA-rvik" },
            {linkedId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"Unknown", place:"LA-rvik" },
            
        ],






}