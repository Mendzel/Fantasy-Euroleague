<template>
  <div class="player">
    <AutoComplete
      v-if="props.editMode"
      v-model="selectedPlayer"
      :suggestions="filteredPlayers"
      @complete="searchPlayer($event)"
      @update:modelValue="onSelectionChange($event)"
      :dropdown="true"
      optionLabel="name"
      forceSelection
      id="Edit-selection"
    >
      <label for="Edit-selection">Player to Edit</label>
      <template #item="slotProps">
        <div class="player-selection">
          <img
            class="player-selection-photo"
            :src="slotProps.item.facePhotoURL"
            :alt="slotProps.item.name"
          />
          <div class="ml-2 player-selection-name">
            {{ slotProps.item.name }}
          </div>
        </div>
      </template>
    </AutoComplete>

    <Divider v-if="props.editMode" />

    <div class="player-form" :class="{ 'add-margin': props.editMode }">
      <InputText
        type="text"
        v-model="name"
        :disabled="!selectedPlayer"
        placeholder="Player Name"
        class="player-form-input"
      />

      <InputText
        type="text"
        v-model="age"
        :disabled="!selectedPlayer"
        placeholder="Age"
        class="player-form-input"
      />

      <div>
        <Dropdown
          v-model="position"
          :options="constants.courtPositions"
          placeholder="Court position"
          :disabled="!selectedPlayer"
          class="player-form-input"
        ></Dropdown>
      </div>

      <AutoComplete
        v-model="nationality"
        :suggestions="filteredNationalities"
        @complete="searchNationality($event)"
        :dropdown="true"
        placeholder="Nationality"
        forceSelection
        id="player-nationality"
        :disabled="!selectedPlayer"
        class="player-form-input"
      >
        <template #item="slotProps">
          <div class="nation-selection">
            <div class="nation-selection-flag">
              <country-flag
                class="flag"
                :country="constants.assignFlagShortcut(slotProps.item)"
                size="small"
              ></country-flag>
            </div>
            <div class="ml-2 nation-selection-name">
              {{ slotProps.item }}
            </div>
          </div>
        </template>
      </AutoComplete>

      <div>
        <Dropdown
          v-model="club"
          :options="constants.realClubs"
          placeholder="Real Club"
          optionLabel="name"
          optionValue="id"
          :disabled="!selectedPlayer"
          class="player-form-input"
        ></Dropdown>
      </div>

      <div>
        <Dropdown
          v-model="fantasyTeam"
          :options="teams"
          placeholder="Fantasy Team"
          optionLabel="name"
          optionValue="id"
          :disabled="!selectedPlayer"
          class="player-form-input"
        ></Dropdown>
      </div>

      <InputText
        type="text"
        v-model="photoURL"
        :disabled="!selectedPlayer"
        placeholder="photoURL"
        class="player-form-input"
      />

      <InputText
        type="text"
        v-model="facePhotoURL"
        :disabled="!selectedPlayer"
        placeholder="facePhotoURL"
        class="player-form-input"
      />

      <InputText
        type="text"
        v-model="fullPhotoURL"
        :disabled="!selectedPlayer"
        placeholder="fullPhotoURL"
        class="player-form-input"
      />

      <div>
        <Button
          class="player-form-button"
          icon="pi pi-angle-left"
          label="Go back"
          @click.stop="adminData.closeTheForm()"
        ></Button>
        <Button
          class="p-button-success player-form-button"
          icon="pi pi-save"
          label="Save"
          @click.stop="sendData()"
          :disabled="!selectedPlayer"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import CountryFlag from "vue-country-flag-next"
import { adminStore } from "@/stores/adminData"
import { playersAndTeamsStore } from "@/stores/playersAndTeams"
import { constantsStore } from "@/stores/constants"

const adminData = adminStore(),
  playersAndTeamsData = playersAndTeamsStore(),
  constants = constantsStore(),
  props = defineProps(["editMode"]),
  teams = [
    ...playersAndTeamsData.teams,
    { name: "Free Agent", id: "18ccd236-a655-4a9b-88eb-0e660c70b888" }
  ]

let name = ref(""),
  age = ref(""),
  position = ref(""),
  nationality = ref(""),
  club = ref(""),
  fantasyTeam = ref(""),
  photoURL = ref(""),
  facePhotoURL = ref(""),
  fullPhotoURL = ref(""),
  selectedPlayer = ref(""),
  filteredPlayers = ref(),
  filteredNationalities = ref()

if (!props.editMode) {
  selectedPlayer = "Selected"
}

function searchPlayer(event) {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredPlayers.value = [...playersAndTeamsData.players]
    } else {
      filteredPlayers.value = playersAndTeamsData.players.filter((player) => {
        return player.name.toLowerCase().startsWith(event.query.toLowerCase())
      })
    }
  }, 250)
}

function searchNationality(event) {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredNationalities.value = [...constants.nationalities]
    } else {
      filteredNationalities.value = constants.nationalities.filter((nation) => {
        return nation.toLowerCase().startsWith(event.query.toLowerCase())
      })
    }
  }, 250)
}

async function sendData() {
  const player = {
      name: name.value,
      age: age.value,
      position: position.value,
      nationality: nationality.value,
      clubId: club.value,
      fantasyTeamId: fantasyTeam.value,
      photoURL: photoURL.value,
      facePhotoURL: facePhotoURL.value,
      fullPhotoURL: fullPhotoURL.value
    },
    fetchURL = props.editMode
      ? constants.fetchURL + "/player/update/" + selectedPlayer.id
      : constants.fetchURL + "/player/create",
    fetchMethod = props.editMode ? "PUT" : "POST"

  return await fetch(fetchURL, {
    method: fetchMethod,
    body: JSON.stringify(player),
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      console.log(response)
      if (props.editMode) {
        adminData.closeTheForm()
      } else {
        clearForm()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function onSelectionChange(event) {
  const player = playersAndTeamsData.findPlayerByName(event)
  if (player) {
    const fantasyTeamFound = playersAndTeamsData.findTeam(player.fantasyTeamId),
      realClub = constants.findClubByID(player.clubId)

    ;(name.value = player.name),
      (age.value = player.age),
      (position.value = player.position),
      (nationality.value = player.nationality),
      (club.value = realClub.id),
      (fantasyTeam.value =
        player.fantasyTeamId === playersAndTeamsData.freeAgentObject[0].id
          ? playersAndTeamsData.freeAgentObject[0].id
          : fantasyTeamFound.id),
      (photoURL.value = player.photoURL),
      (facePhotoURL = player.facePhotoURL),
      (fullPhotoURL = player.fullPhotoURL)
  }
}

function clearForm() {
  name.value = ""
  age.value = ""
  position.value = ""
  nationality.value = ""
  club.value = ""
  fantasyTeam.value = ""
  photoURL.value = ""
  facePhotoURL = ""
  fullPhotoURL = ""
}
</script>

<style lang="scss">
#Edit-selection {
  width: 50vw !important;
  margin: 20px auto;
  display: flex;
}
.player {
  width: 100%;

  &-selection {
    display: flex;

    &-photo {
      width: 30px;
      margin-right: 5px;
    }

    &-name {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &-form {
    width: 100%;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;

    &-input {
      width: 40vw;
      margin-bottom: 15px !important;
    }

    &-button {
      margin: 0 5px !important;
    }
  }
}

.nation-selection {
  display: flex;

  &-flag {
    margin-right: 5px;
  }
}

.p-placeholder {
  font-family: "Gemunu Libre", sans-serif !important;
}

.add-margin {
  margin-top: 10vh;
}

@media screen and (max-width: 520px) {
  #Edit-selection {
    width: 80vw !important;
  }

  .player-form-input {
    width: 80vw;
  }

  .add-margin {
    margin-top: 5vh;
  }
}
</style>
