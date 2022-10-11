import { defineStore } from "pinia"

export const useNavigationStore = defineStore({
  id: "navigation",
  state: () => ({
    mobileNavDrawer: false,
    navDrawerLinksList: [
      {
        icon: "https://i.imgur.com/ylX2oiB.png",
        label: "Home",
        path: "/home"
      },
      {
        icon: "https://i.imgur.com/LcMrQg2.png",
        label: "Team",
        path: "/squad"
      },
      {
        icon: "https://i.imgur.com/H09CRkh.png",
        label: "Competitions",
        path: "/competitions"
      },
      {
        icon: "https://i.imgur.com/PP6V2im.png",
        label: "Stats",
        path: "/stats"
      },
      {
        icon: "https://i.imgur.com/ABROXwA.png",
        label: "Transfers",
        path: "/transfers"
      },
      {
        icon: "https://i.imgur.com/IMnNmXP.png",
        label: "Draft",
        path: "/draft"
      },
      {
        icon: "https://i.imgur.com/PcZ1Jop.png",
        label: "Admin",
        path: "/admin"
      },
      {
        icon: "https://i.imgur.com/qsheIz7.png",
        label: "Settings",
        settings: true
      },
      {
        icon: "https://i.imgur.com/UEugXaj.png",
        label: "Settings",
        logout: true
      }
    ],
    tabs: {
      competitions: [
        { label: "Table", to: "/competitions/league-table" },
        { label: "Fixture", to: "/competitions/schedule" },
        { label: "Fantasy Cup", to: "/competitions/cup", disabled: true },
        { label: "Playoff", to: "/competitions/playoff", disabled: true }
      ],
      stats: [
        { label: "Team Stats", to: "/stats/teams" },
        { label: "Player Stats", to: "/stats/players" },
        { label: "MVP Race", to: "/stats/mvp" }
      ],
      transfers: [
        { label: "Auction House", to: "/transfers/auctions" },
        { label: "Free Agents", to: "/transfers/free-agents" }
      ],
      draft: [
        { label: "Draft", to: "/draft/draft" },
        { label: "Order", to: "/draft/pick-order" },
        { label: "My List", to: "/draft/draft-list" }
      ],
      admin: [
        { label: "Alerts", to: "/admin/announcements" },
        { label: "Players", to: "/admin/players" },
        { label: "Teams", to: "/admin/teams" },
        { label: "Users", to: "/admin/users" },
        { label: "Match Scores", to: "/admin/match-scores" }
      ]
    }
  }),
  getters: {},
  actions: {
    toggleDrawer() {
      this.mobileNavDrawer
        ? (this.mobileNavDrawer = false)
        : (this.mobileNavDrawer = true)
    }
  }
})
