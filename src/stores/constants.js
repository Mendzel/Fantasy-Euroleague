import { defineStore } from "pinia"

export const constantsStore = defineStore({
  id: "constantsStore",
  state: () => ({
    fetchURL: "",
    courtPositions: ["PG", "SG", "SF", "PF", "C"],
    nationalities: [
      "Brazil",
      "Croatia",
      "Canada",
      "France",
      "Germany",
      "Lithuania",
      "Latvia",
      "Poland",
      "Serbia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Turkey",
      "USA"
    ],
    realClubs: [],
    FAQquestions: [
      {
        title: "How does Fantasy Euroleague work?",
        text: "In the Fantasy Euroleague, you built your team of real-life Premier League footballers. You draft players before the season starts."
      },
      {
        title: "Can I change players in my team during the season?",
        text: "Yes. Each player is allowed four free transfers. Although if your player gets sacked from his real-life team you can exchange him for any free agent without worrying about the limit."
      },
      {
        title: "How do you determine each player score?",
        text: "Score is 100% match performance based. Score is determined by players EVAL, team performance and minutes spent on the court."
      },
      {
        title: "Is Fantasy Euroleague free?",
        text: "Playing Fantasy Euroleague is completely free to play. You only need an email address to register and log in."
      },
      {
        title: "How many Fantasy players are there?",
        text: "Currently there are 12 places in the league, however we are planning on expanding the league in the near future."
      },
      {
        title: "What is Fantasy Euroleague draft?",
        text: "Fantasy Euroleague Draft is a type of league where managers cannot have the same players in their team. It means that each player in the game can be selected by only one manager."
      }
    ],
    rounds: ["Round 1", "Kolejka 2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "P1", "P2", "P3", "R1 - Game 1", "R1 - Game 2"],
    //real round {id: x, name: "1"} etc.
    fixtures: [
      {
        roundID: 0,
        roundName: "Round 1",
        dateOfStart: "26.11.2022",
        dateOfEnd: "",
        matches: [1,2,3,4,5,6]
      },
      {
        roundID: 1,
        roundName: "Kolejka 2",
        dateOfStart: "",
        dateOfEnd: "",
        matches: [7,8,9,10,11,12]
      }
    ],
    matches: [
      {
        matchID: 1,
        homeTeamID: "8048ede5-77dd-4098-bb29-91f5436a078c",
        awayTeamID: "4e83c81e-438d-4f99-ae4a-bdd4b50da1fa",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: false,
        winnerID: 1,
        looserID: 2
      },
      {
        matchID: 2,
        homeTeamID: "edec9e33-3b2c-4fa3-b766-f6a28d94ac78",
        awayTeamID: "0675aeb5-4ae0-48cd-aa20-5fe5e5da53b4",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: false,
        winnerID: 3,
        looserID: 4
      },
      {
        matchID: 3,
        homeTeamID: "564430e3-57d1-4d18-886b-ee37c623c341",
        awayTeamID: "20328a3e-85c1-4e76-99ac-93f815ad20a1",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: false,
        winnerID: 5,
        looserID: 6
      },
      {
        matchID: 4,
        homeTeamID: "88cc7510-c789-4370-b448-4c3aaeb207ca",
        awayTeamID: "1f282201-de36-49b3-a7ce-272c72f7e446",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: false,
        winnerID: 7,
        looserID: 8
      },
      {
        matchID: 5,
        homeTeamID: "83bdc420-ce5e-49fc-9320-9d22fcf499ac",
        awayTeamID: "b7349873-55b3-4eaf-804d-6b9bb0e1cf34",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: false,
        winnerID: 9,
        looserID: 10
      },
      {
        matchID: 6,
        homeTeamID: "229e8e37-65d5-493f-a064-4e2d6e57ef77",
        awayTeamID: "bb6addef-00e2-4189-befb-c0ced020db73",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: false,
        winnerID: 11,
        looserID: 12
      },
      {
        matchID: 7,
        homeTeamID: "564430e3-57d1-4d18-886b-ee37c623c341",
        awayTeamID: "88cc7510-c789-4370-b448-4c3aaeb207ca",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: true,
        winnerID: null,
        looserID: null
      },
      {
        matchID: 8,
        homeTeamID: "20328a3e-85c1-4e76-99ac-93f815ad20a1",
        awayTeamID: "1f282201-de36-49b3-a7ce-272c72f7e446",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: true,
        winnerID: null,
        looserID: null
      },
      {
        matchID: 9,
        homeTeamID: "0675aeb5-4ae0-48cd-aa20-5fe5e5da53b4",
        awayTeamID: "83bdc420-ce5e-49fc-9320-9d22fcf499ac",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: true,
        winnerID: null,
        looserID: null
      },
      {
        matchID: 10,
        homeTeamID: "edec9e33-3b2c-4fa3-b766-f6a28d94ac78",
        awayTeamID: "b7349873-55b3-4eaf-804d-6b9bb0e1cf34",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: true,
        winnerID: null,
        looserID: null
      },
      {
        matchID: 11,
        homeTeamID: "4e83c81e-438d-4f99-ae4a-bdd4b50da1fa",
        awayTeamID: "229e8e37-65d5-493f-a064-4e2d6e57ef77",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: true,
        winnerID: null,
        looserID: null
      },
      {
        matchID: 12,
        homeTeamID: "bb6addef-00e2-4189-befb-c0ced020db73",
        awayTeamID: "8048ede5-77dd-4098-bb29-91f5436a078c",
        homeScore: 0,
        awayScore: 0,
        homeTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        awayTeamSelection: {
          PG: 1, //playerID
          SG: 2, //etc
          captain: 1,
          sixthMan: 2,
          defender: 1,
        },
        isMatchActive: true,
        winnerID: null,
        looserID: null
      }
    ]
  }),
  getters: {
    realClubsNames(state) {
      return state.realClubs.map((club) => {
        return club.name
      })
    }
  },
  actions: {
    findMatch(matchID) {
      return this.matches.find(singleMatch => singleMatch.matchID === matchID)
    },
    findClub(clubName) {
      return this.realClubs.find(singleClub => singleClub.name === clubName)
    },
    findClubByID(clubID) {
      return this.realClubs.find(singleClub => singleClub.id === clubID)
    },
    assignFlagShortcut(nationality) {
      switch(nationality) {
        case 'Brazil':
          return 'br'
        case 'Croatia':
          return 'hr'
        case 'Canada':
          return 'ca'
        case 'France':
          return 'fr'
        case 'Germany':
          return 'de'
        case 'Lithuania':
          return 'lt'
        case 'Latvia':
          return 'lv'
        case 'Poland':
          return 'pl'
        case 'Serbia':
          return 'rs'
        case 'Slovenia':
          return 'si'
        case 'Spain':
          return 'es'
        case 'Sweden':
          return 'se'
        case 'Turkey':
          return 'tr'
        case 'USA':
          return 'us'
      }
    }
  }
})
