import { defineStore } from "pinia"

export const playersAndTeamsStore = defineStore({
  id: "playersAndTeamsStore",
  state: () => ({
    players: [],
    teams: [],
    freeAgentObject: []
  }),
  getters: {
    listOfPlayers(state) {
      return state.players.map((player) => {
        return player.name
      })
    },
    listOfTeams(state) {
      return state.teams.map((team) => {
        return team.name
      })
    }
  },
  actions: {
    findPlayerByName(playerToFind) {
      return this.players.find((player) => player.name === playerToFind.name)
    },
    findTeam(teamID) {
      return this.teams.find((team) => team.id == teamID)
    },
    findTeamByName(teamName) {
      const teamToReturn =
        teamName === "Free Agent"
          ? this.freeAgentObject
          : this.teams.find((team) => team.name === teamName)
      return teamToReturn
    }
  }
})
