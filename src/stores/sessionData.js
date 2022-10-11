import { defineStore } from "pinia"
import { playersAndTeamsStore } from "./playersAndTeams"

export const sessionDataStore = defineStore({
    id: "sessionDataStore",
    state: () => ({
        myID: "f41f047b-fd63-4af0-9f89-1976153fb3aa", //Musimy to ustawiac przy starcie apki
        myTeamID: "8048ede5-77dd-4098-bb29-91f5436a078c", //To tak samo
        myPlayers: [],
        currentFixture: 0,
        rivalID: ""
    }),
    getters: {},
    actions: {}
})