window.ticketToRideMap =  {
    nodes: [
        {
            data: {
                id: "Edinburgh"
            }
        },
        {
            data: {
                id: "London"
            }
        },
        {
            data: {
                id: "Dieppe"
            }
        },
        {
            data: {
                id: "Brest"
            }
        },
        {
            data: {
                id: "Lisboa"
            }
        },
        {
            data: {
                id: "Madrid"
            }
        },
        {
            data: {
                id: "Cadiz"
            }
        },
        {
            data: {
                id: "Barcelona"
            }
        },
        {
            data: {
                id: "Pamplona"
            }
        },
        {
            data: {
                id: "Paris"
            }
        },
        {
            data: {
                id: "Amsterdam"
            }
        },
        {
            data: {
                id: "Bruxelles"
            }
        },
        {
            data: {
                id: "Essen"
            }
        },
        {
            data: {
                id: "Zurich"
            }
        },
        {
            data: {
                id: "Marseille"
            }
        },
        {
            data: {
                id: "Roma"
            }
        },
        {
            data: {
                id: "Frankfurt"
            }
        },
        {
            data: {
                id: "Munchen"
            }
        },
        {
            data: {
                id: "Kobenhavn"
            }
        },
        {
            data: {
                id: "Palermo"
            }
        },
        {
            data: {
                id: "Brindisi"
            }
        },
        {
            data: {
                id: "Venezia"
            }
        },
        {
            data: {
                id: "Wien"
            }
        },
        {
            data: {
                id: "Zagrab"
            }
        },
        {
            data: {
                id: "Berlin"
            }
        },
        {
            data: {
                id: "Stockholm"
            }
        },
        {
            data: {
                id: "Budapest"
            }
        },
        {
            data: {
                id: "Sarajevo"
            }
        },
        {
            data: {
                id: "Athina"
            }
        },
        {
            data: {
                id: "Smyrna"
            }
        },
        {
            data: {
                id: "Angora"
            }
        },
        {
            data: {
                id: "Erzurum"
            }
        },
        {
            data: {
                id: "Constantinople"
            }
        },
        {
            data: {
                id: "Bucuresti"
            }
        },
        {
            data: {
                id: "Sochi"
            }
        },
        {
            data: {
                id: "Sevastopol"
            }
        },
        {
            data: {
                id: "Kharkov"
            }
        },
        {
            data: {
                id: "Kyiv"
            }
        },
        {
            data: {
                id: "Warszawa"
            }
        },
        {
            data: {
                id: "Danzig"
            }
        },
        {
            data: {
                id: "Riga"
            }
        },
        {
            data: {
                id: "Wilno"
            }
        },
        {
            data: {
                id: "Petrograd"
            }
        },
        {
            data: {
                id: "Moskva"
            }
        },
        {
            data: {
                id: "Rostov"
            }
        },
        {
            data: {
                id: "Smolensk"
            }
        },
        {
            data: {
                id: "Sofia"
            }
        }
    ],
    edges: [
        {
            data: {
                id: "Lisboa <-> Cadiz",
                source: "Lisboa",
                target: "Cadiz",
                length: 2,
                color: "blue",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Lisboa <-> Madrid",
                source: "Lisboa",
                target: "Madrid",
                length: 3,
                color: "purple",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Madrid <-> Cadiz",
                source: "Madrid",
                target: "Cadiz",
                length: 3,
                color: "orange",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Madrid <-> Pamplona",
                source: "Madrid",
                target: "Pamplona",
                length: 3,
                color: "black",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Madrid <--> Pamplona",
                source: "Madrid",
                target: "Pamplona",
                length: 3,
                color: "white",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Madrid <-> Barcelona",
                source: "Madrid",
                target: "Barcelona",
                length: 2,
                color: "yellow",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Pamplona <-> Barcelona",
                source: "Pamplona",
                target: "Barcelona",
                length: 2,
                color: "grey",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Barcelona <-> Marseille",
                source: "Barcelona",
                target: "Marseille",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Marseille <-> Pamplona",
                source: "Marseille",
                target: "Pamplona",
                length: 4,
                color: "red",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Pamplona <-> Paris",
                source: "Pamplona",
                target: "Paris",
                length: 4,
                color: "blue",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Pamplona <--> Paris",
                source: "Pamplona",
                target: "Paris",
                length: 4,
                color: "green",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Pamplona <-> Brest",
                source: "Pamplona",
                target: "Brest",
                length: 4,
                color: "purple",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Brest <-> Paris",
                source: "Brest",
                target: "Paris",
                length: 3,
                color: "black",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Brest <-> Dieppe",
                source: "Brest",
                target: "Dieppe",
                length: 2,
                color: "orange",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Dieppe <-> London",
                source: "Dieppe",
                target: "London",
                length: 2,
                color: "grey",
                bridge: 1,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Dieppe <-> Paris",
                source: "Dieppe",
                target: "Paris",
                length: 1,
                color: "purple",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Dieppe <-> Bruxelles",
                source: "Dieppe",
                target: "Bruxelles",
                length: 2,
                color: "green",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Paris <-> Bruxelles",
                source: "Paris",
                target: "Bruxelles",
                length: 2,
                color: "red",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Paris <--> Bruxelles",
                source: "Paris",
                target: "Bruxelles",
                length: 2,
                color: "yellow",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Bruxelles <-> Amsterdam",
                source: "Bruxelles",
                target: "Amsterdam",
                length: 1,
                color: "black",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Amsterdam <-> London",
                source: "Amsterdam",
                target: "London",
                length: 2,
                color: "grey",
                bridge: 2,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Edinburgh <-> London",
                source: "Edinburgh",
                target: "London",
                length: 4,
                color: "black",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Edinburgh <--> London",
                source: "Edinburgh",
                target: "London",
                length: 4,
                color: "orange",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Paris <-> Marseille",
                source: "Paris",
                target: "Marseille",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Paris <-> Zurich",
                source: "Paris",
                target: "Zurich",
                length: 3,
                color: "grey",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Paris <-> Frankfurt",
                source: "Paris",
                target: "Frankfurt",
                length: 3,
                color: "white",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Paris <--> Frankfurt",
                source: "Paris",
                target: "Frankfurt",
                length: 3,
                color: "orange",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Bruxelles <-> Frankfurt",
                source: "Bruxelles",
                target: "Frankfurt",
                length: 2,
                color: "blue",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Amsterdam <-> Frankfurt",
                source: "Amsterdam",
                target: "Frankfurt",
                length: 2,
                color: "white",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Amsterdam <-> Essen",
                source: "Amsterdam",
                target: "Essen",
                length: 3,
                color: "yellow",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Zurich <-> Marseille",
                source: "Zurich",
                target: "Marseille",
                length: 2,
                color: "purple",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Frankfurt <-> Munchen",
                source: "Frankfurt",
                target: "Munchen",
                length: 2,
                color: "purple",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Essen <-> Frankfurt",
                source: "Essen",
                target: "Frankfurt",
                length: 2,
                color: "green",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Zurich <-> Munchen",
                source: "Zurich",
                target: "Munchen",
                length: 2,
                color: "yellow",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Zurich <-> Venezia",
                source: "Zurich",
                target: "Venezia",
                length: 2,
                color: "green",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Marseille <-> Roma",
                source: "Marseille",
                target: "Roma",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Roma <-> Venezia",
                source: "Roma",
                target: "Venezia",
                length: 2,
                color: "black",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Venezia <-> Munchen",
                source: "Venezia",
                target: "Munchen",
                length: 2,
                color: "blue",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Frankfurt <-> Berlin",
                source: "Frankfurt",
                target: "Berlin",
                length: 3,
                color: "red",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Frankfurt <-> Berlin",
                source: "Frankfurt",
                target: "Berlin",
                length: 3,
                color: "black",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Essen <-> Berlin",
                source: "Essen",
                target: "Berlin",
                length: 2,
                color: "blue",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Essen <-> Kobenhavn",
                source: "Essen",
                target: "Kobenhavn",
                length: 3,
                color: "grey",
                bridge: 1,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Essen <--> Kobenhavn",
                source: "Essen",
                target: "Kobenhavn",
                length: 3,
                color: "grey",
                bridge: 1,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Kobenhavn <-> Stockholm",
                source: "Kobenhavn",
                target: "Stockholm",
                length: 3,
                color: "white",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Kobenhavn <--> Stockholm",
                source: "Kobenhavn",
                target: "Stockholm",
                length: 3,
                color: "yellow",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Stockholm <-> Petrograd",
                source: "Stockholm",
                target: "Petrograd",
                length: 8,
                color: "grey",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Berlin <-> Danzig",
                source: "Berlin",
                target: "Danzig",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Danzig <-> Warszawa",
                source: "Danzig",
                target: "Warszawa",
                length: 2,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Berlin <-> Warszawa",
                source: "Berlin",
                target: "Warszawa",
                length: 4,
                color: "yellow",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Berlin <--> Warszawa",
                source: "Berlin",
                target: "Warszawa",
                length: 4,
                color: "purple",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Berlin <-> Wien",
                source: "Berlin",
                target: "Wien",
                length: 3,
                color: "green",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Munchen <-> Wien",
                source: "Munchen",
                target: "Wien",
                length: 3,
                color: "orange",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Venezia <-> Zagrab",
                source: "Venezia",
                target: "Zagrab",
                length: 2,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Wien <-> Zagrab",
                source: "Wien",
                target: "Zagrab",
                length: 2,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Zagrab <-> Budapest",
                source: "Zagrab",
                target: "Budapest",
                length: 2,
                color: "orange",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Wien <-> Budapest",
                source: "Wien",
                target: "Budapest",
                length: 1,
                color: "red",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Wien <--> Budapest",
                source: "Wien",
                target: "Budapest",
                length: 1,
                color: "white",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Wien <-> Warszawa",
                source: "Wien",
                target: "Warszawa",
                length: 4,
                color: "blue",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Danzig <-> Riga",
                source: "Danzig",
                target: "Riga",
                length: 3,
                color: "black",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Riga <-> Petrograd",
                source: "Riga",
                target: "Petrograd",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Riga <-> Wilno",
                source: "Riga",
                target: "Wilno",
                length: 4,
                color: "green",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Warszawa <-> Wilno",
                source: "Warszawa",
                target: "Wilno",
                length: 3,
                color: "red",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Wilno <-> Petrograd",
                source: "Wilno",
                target: "Petrograd",
                length: 4,
                color: "blue",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Wilno <-> Smolensk",
                source: "Wilno",
                target: "Smolensk",
                length: 3,
                color: "yellow",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Petrograd <-> Moskva",
                source: "Petrograd",
                target: "Moskva",
                length: 4,
                color: "white",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Moskva <-> Smolensk",
                source: "Moskva",
                target: "Smolensk",
                length: 2,
                color: "orange",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Smolensk <-> Kyiv",
                source: "Smolensk",
                target: "Kyiv",
                length: 3,
                color: "red",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Wilno <-> Kyiv",
                source: "Wilno",
                target: "Kyiv",
                length: 2,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Warszawa <-> Kyiv",
                source: "Warszawa",
                target: "Kyiv",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Kyiv <-> Budapest",
                source: "Kyiv",
                target: "Budapest",
                length: 6,
                color: "grey",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Moskva <-> Kharkov",
                source: "Moskva",
                target: "Kharkov",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Kyiv <-> Kharkov",
                source: "Kyiv",
                target: "Kharkov",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Kyiv <-> Bucuresti",
                source: "Kyiv",
                target: "Bucuresti",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Budapest <-> Bucuresti",
                source: "Budapest",
                target: "Bucuresti",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Kharkov <-> Rostov",
                source: "Kharkov",
                target: "Rostov",
                length: 2,
                color: "green",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Rostov <-> Sevastopol",
                source: "Rostov",
                target: "Sevastopol",
                length: 4,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Sevastopol <-> Bucuresti",
                source: "Sevastopol",
                target: "Bucuresti",
                length: 4,
                color: "white",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Rostov <-> Sochi",
                source: "Rostov",
                target: "Sochi",
                length: 2,
                color: "grey",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Sochi <-> Sevastopol",
                source: "Sochi",
                target: "Sevastopol",
                length: 2,
                color: "grey",
                bridge: 1,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Sevastopol <-> Erzurum",
                source: "Sevastopol",
                target: "Erzurum",
                length: 4,
                color: "grey",
                bridge: 2,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Sochi <-> Erzurum",
                source: "Sochi",
                target: "Erzurum",
                length: 3,
                color: "red",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Sevastopol <-> Constantinople",
                source: "Sevastopol",
                target: "Constantinople",
                length: 4,
                color: "grey",
                bridge: 2,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Erzurum <-> Angora",
                source: "Erzurum",
                target: "Angora",
                length: 3,
                color: "black",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Constantinople <-> Angora",
                source: "Constantinople",
                target: "Angora",
                length: 2,
                color: "grey",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Bucuresti <-> Constantinople",
                source: "Bucuresti",
                target: "Constantinople",
                length: 3,
                color: "yellow",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Constantinople <-> Sofia",
                source: "Constantinople",
                target: "Sofia",
                length: 3,
                color: "blue",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Bucuresti <-> Sofia",
                source: "Bucuresti",
                target: "Sofia",
                length: 2,
                color: "grey",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Budapest <-> Sarajevo",
                source: "Budapest",
                target: "Sarajevo",
                length: 3,
                color: "purple",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Zagrab <-> Sarajevo",
                source: "Zagrab",
                target: "Sarajevo",
                length: 3,
                color: "red",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Roma <-> Palermo",
                source: "Roma",
                target: "Palermo",
                length: 4,
                color: "grey",
                bridge: 1,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Roma <-> Brindisi",
                source: "Roma",
                target: "Brindisi",
                length: 2,
                color: "white",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Brindisi <-> Palermo",
                source: "Brindisi",
                target: "Palermo",
                length: 3,
                color: "grey",
                bridge: 1,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Brindisi <-> Athina",
                source: "Brindisi",
                target: "Athina",
                length: 4,
                color: "grey",
                bridge: 1,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Athina <-> Sarajevo",
                source: "Athina",
                target: "Sarajevo",
                length: 4,
                color: "green",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Palermo <-> Smyrna",
                source: "Palermo",
                target: "Smyrna",
                length: 6,
                color: "grey",
                bridge: 2,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Athina <-> Smyrna",
                source: "Athina",
                target: "Smyrna",
                length: 2,
                color: "grey",
                bridge: 1,
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Sofia <-> Athina",
                source: "Sofia",
                target: "Athina",
                length: 3,
                color: "Purple",
                bridge: "false",
                tunnel: "false"
            }
        },
        {
            data: {
                id: "Smyrna <-> Angora",
                source: "Smyrna",
                target: "Angora",
                length: 3,
                color: "orange",
                bridge: "false",
                tunnel: "true"
            }
        },
        {
            data: {
                id: "Constantinople <-> Smyrna",
                source: "Constantinople",
                target: "Smyrna",
                length: 2,
                color: "grey",
                bridge: "false",
                tunnel: "true"
            }
        },
        
        
        
        
    ]
};

