<template>
    <div v-if="!squadEditionToggle" class="container">
        <h1>My Team</h1>
        <div class="squad-selection">
            <StartingFive />
            <Bench />
        </div>
        <Button @click="squadEditionToggle = true" label="Edit" color="blue" class="button"></Button>
    </div>

    <div v-if="squadEditionToggle" class="container">
        <h1>Team Editing</h1>
        <div class="squad-selection">
            <EditSquad />
        </div>
        <Button @click="saveSquad()" label="Save" color="red" class="button"></Button>
    </div>
</template>

<script setup>
import StartingFive from '../components/SquadSelection/StartingFive.vue';
import Bench from '../components/SquadSelection/Bench.vue';
import EditSquad from '../components/SquadSelection/EditSquad.vue';
import { ref } from "vue"

let squadEditionToggle = ref(false);

function saveSquad() {
    //TO DO
    window.location.reload(true)
}
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
}
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
}

.squad-selection {
    margin-bottom: 20px;
}
.button {
    width: 150px;
    height: 50px !important;
    margin-left: 10vw;
}
</style>