import { defineStore } from "pinia"

export const useModalStore = defineStore({
  id: "modal",
  state: () => ({
    showSettings: false,
    showPlayerDetails: false,
    showTeamDetails: false,
    showMatchDetails: false,
    showScoreValidator: false,
    playerData: {},
    teamData: {},
    matchData: {},
    dataToValidate: {},
    wasTeamModalOpen: false,
    wasMatchModalOpen: false
  }),
  getters: {},
  actions: {
    showModal(selection) {
      switch (selection) {
        case "settings":
          this.showSettings = true
          break
        case "player":
          this.showPlayerDetails = true
          break
        case "team":
          this.showTeamDetails = true
          break
        case "match":
          this.showMatchDetails = true
          break
        case "validator":
          this.showScoreValidator = true
          break
        default:
          break
      }
    },
    setPlayerData(player) {
      this.playerData = player
    },
    setTeamData(team) {
      this.teamData = team
    },
    setMatchData(match) {
      this.matchData = match
    },
    setDataToValidate(matchData, homeTeam, awayTeam) {
      this.dataToValidate = {
        matchData: matchData,
        homeTeamName: homeTeam,
        awayTeamName: awayTeam
      }
    }
  }
})
