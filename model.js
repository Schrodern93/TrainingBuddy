const model = {

        signedInPerson:"",
        signedInId:1,

        pageSelected:"availableTraining",

        loggedInUser:1,

        inputs:{
            dateAndTime: "",
            date:null,

            frontpage:{
                filtervalue:"",
            }

        },
        
        style:{btn1:"", btn2:"", btn3:"", btn4:"X"},
        filteredValue: "Dag",
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
                email: "schrodern93@gmail.com",
                treningsnivå: "3til5nivåerher", 
                kjønn: "mann",
                // rating:[{motivasjon: 4},{treningsglede: 4},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                // rating2:{motivasjon:[], treningsglede:[],  },
                rating3:[3,3,5,3,4],
                
            },
            {   
                id:2,
                fornavn: "Linn" ,
                etternavn: "Eidsten",
                treningsnivå: "3til5nivåerher", 
                kjønn: "kvinne",
                rating:[{motivasjon: 3},{treningsglede: 3},{inspirasjon:5},{kommunikasjon:3},{tips:4}],
                
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
                etternavn: "Johansen",
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

            {linkedId:1, userId:1, createdBy: "Joakim Schrøder", date: "16.11.21", time:"12:00 - 13:00",trainingtype:"Styrke", place:"SisSportssenter" },
            {linkedId:2, userId:1, createdBy: "Joakim Schrøder", date: "16.11.21", time:"12:00 - 13:00",trainingtype:"Styrke", place:"SisSportssenter" },
            {linkedId:3, userId:1, createdBy: "Joakim Schrøder", date: "16.11.21", time:"12:00 - 13:00",trainingtype:"Styrke", place:"SisSportssenter" },
            {linkedId:4, userId:1, createdBy: "Joakim Schrøder", date: "16.11.21", time:"12:00 - 13:00",trainingtype:"Styrke", place:"SisSportssenter" },
            {linkedId:5, userId:1, createdBy: "Joakim Schrøder", date: "16.11.21", time:"12:00 - 13:00",trainingtype:"Styrke", place:"SisSportssenter" },
            {linkedId:6, userId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"13:00 - 15:30",trainingtype:"Unknown", place:"LA-rvik" },
            {linkedId:7, userId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"tester", place:"LA-rvik" },
            {linkedId:8, userId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"Unknown", place:"LA-rvik" },
            {linkedId:9, userId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"noeannet", place:"LA-rvik" },
            {linkedId:10, userId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"Unknown", place:"LA-rvik" },
            {linkedId:11, userId:2, createdBy: "Linn Eidsten", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"Unknown", place:"LA-rvik" },
            {linkedId:12, userId:5, createdBy: "Bjørnar Johansen", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"Chess", place:"TBG" },
            {linkedId:13, userId:5, createdBy: "Bjørnar Johansen", date: "17.11.21", time:"14:00 - 15:30",trainingtype:"TrainTheBrain", place:"TBG" },
            
        ],

        signedUpforTraining:[
            {personId: 1, trainingId: [7,9,11,12,13]},
            {personId: 2, trainingId: [1,2,3,4]},


        ],






}