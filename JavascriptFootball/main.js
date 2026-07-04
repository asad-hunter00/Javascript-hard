import { storageConsole, teamStorage } from "./stoage.js";

const editBtn = document.querySelector(".edit-team");
const modal = document.querySelector(".modal");
const teamInput = document.querySelector("#teamName");
const cancelBtn = document.querySelector("#cancel-btn");
const title = document.querySelector(".team-title");
const saveBtn = document.getElementById("saveBtn")
const addPlayerBtn = document.querySelector(".premier");
const playerModal = document.querySelector(".player-modal");
const playerCancel = document.querySelector("#playerCancel");
const playerName = document.querySelector("#player-name");
const playerNum = document.querySelector("#player-num");
const playerPosition = document.querySelector("#player-position");
const avatarUrl = document.querySelector("#avatar-url");
const logoUrl = document.querySelector("#logo-url");
const playerSave = document.querySelector("#playerSave");
const field = document.querySelector(".players-icon");
const playerDelete = document.querySelector("#playerDelete");
const playerModalTitle = document.querySelector("#playerModalTitle");


let editId = null

const team = teamStorage();

title.textContent = team.name;




editBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    teamInput.value = team.name;
});

addPlayerBtn.addEventListener("click", () => {
    playerModal.classList.remove("hidden");
    console.log("Add Player");
});

playerCancel.addEventListener("click", () => {
    playerModal.classList.add("hidden");
});





playerSave.addEventListener("click", () => {
    if (editId) {
        const currentPlayer = team.players.find(
            p => p.id === editId
        );

        currentPlayer.name = playerName.value;
        currentPlayer.number = playerNum.value;
        currentPlayer.positionId = playerPosition.value;
        currentPlayer.avatarUrl = avatarUrl.value;
        currentPlayer.clubLogoUrl = logoUrl.value;

        storageConsole(team);

        return;
    }


    const player = {
        id: crypto.randomUUID(),
        name: playerName.value,
        number: playerNum.value,
        positionId: playerPosition.value,
        avatarUrl: avatarUrl.value,
        clubLogoUrl: logoUrl.value
    }

    playerName.value = "";
    playerNum.value = "";
    playerPosition.value = "";
    avatarUrl.value = "";
    logoUrl.value = "";

    team.players.push(player);
    storageConsole(team);

    const div = document.createElement("div");
    div.classList.add("player-border");
    div.classList.add(player.positionId);


    let avatarHtml = "";
    let clubHtml = "";

    if (player.avatarUrl) {
        avatarHtml = `<img src="${player.avatarUrl}" class="avatar-img">`;
    }

    if (player.clubLogoUrl) {
        clubHtml = `<img src="${player.clubLogoUrl}" class="club-badge">`;
    }



    div.innerHTML = `
        <div class="player">
            <div class="avatar-circle">
                ${avatarHtml}
            </div>
            <span class="number-badge">${player.number}</span>
            ${clubHtml}
        </div>
        <p>${player.name}</p>
    `;

    div.onclick = () => {
        editId = player.id;

        playerName.value = player.name;
        playerNum.value = player.number;
        playerPosition.value = player.positionId;
        avatarUrl.value = player.avatarUrl;
        logoUrl.value = player.clubLogoUrl;



    };




    field.append(div);

});




cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

saveBtn.addEventListener("click", () => {
    team.name = teamInput.value;



    storageConsole(team);

    title.textContent = team.name;

    teamInput.value = "";

    modal.classList.add("hidden");
});

playerDelete.onclick = () => {
    team.players = team.players.filter(player => player.id !== editId)


    storageConsole(team)
    playerModal.classList.add("hidden");

    console.log(team.players);
}


