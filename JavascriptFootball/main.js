import { storageConsole, teamStorage } from "./stoage.js";

const editBtn = document.querySelector(".edit-team");
const modal = document.querySelector(".modal");
const teamInput = document.querySelector("#teamName");
const cancelBtn = document.querySelector("#cancel-btn");
const title = document.querySelector(".team-title");
const saveBtn = document.querySelector("#saveBtn");
const addPlayerBtn = document.querySelector(".premier");
const playerModal = document.querySelector(".player-modal");
const playerCancel = document.querySelector("#playerCancel");
const playerSave = document.querySelector("#playerSave");
const playerDelete = document.querySelector("#playerDelete");
const playerName = document.querySelector("#player-name");
const playerNum = document.querySelector("#player-num");
const playerPosition = document.querySelector("#player-position");
const avatarUrl = document.querySelector("#avatar-url");
const logoUrl = document.querySelector("#logo-url");
const playerModalTitle = document.querySelector("#playerModalTitle");
const field = document.querySelector(".players-icon");

let editId = null;

const team = teamStorage();

title.textContent = team.name;

editBtn.onclick = () => {
    modal.classList.remove("hidden");
    teamInput.value = team.name;
};

addPlayerBtn.onclick = () => {





    playerModal.classList.remove("hidden");
};

playerCancel.onclick = () => {
    playerModal.classList.add("hidden");
};

cancelBtn.onclick = () => {
    modal.classList.add("hidden");
};


saveBtn.onclick = () => {
    team.name = teamInput.value;
    storageConsole(team);
    title.textContent = team.name;
    modal.classList.add("hidden");
};







const renderFunc = () => {
    team.players.forEach(player => {
        const div = document.createElement("div")

        div.classList.add("player-border")
        div.classList.add(player.positionId);


        div.innerHTML = `
            <div class="player">
                <div class="avatar-circle">
                    <img src="${player.avatarUrl}" class="avatar-img">
                </div>
                <span class="number-badge">${player.number}</span>
                <img src="${player.clubLogoUrl}" class="club-badge">
            </div>
            <p>${player.name}</p>
        `;


        div.onclick = () => {

            editId = player.id;

            playerName.value = player.name;
            playerNum.value = player.number;
            playerPosition.value = player.positionId;

            avatarUrl.value = player.avatarUrl
            logoUrl.value = player.clubLogoUrl;

            playerModalTitle.textContent = "Edit Player";

            playerDelete.classList.remove("hidden");

            playerModal.classList.remove("hidden");
        };

        field.append(div);
    });

}


playerSave.onclick = () => {

    if (editId) {



        player.name = playerName.value;
        player.number = playerNum.value;
        player.positionId = playerPosition.value;
        player.avatarUrl = avatarUrl.value;
        player.logoUrl = logoUrl.value;

        editId = null;

    } else {

        const player = {
            id: crypto.randomUUID(),
            name: playerName.value,
            number: playerNum.value,
            positionId: playerPosition.value,
            avatarUrl: avatarUrl.value,
            clubLogoUrl: logoUrl.value,
        }

        team.players.push(player);
    }

    storageConsole(team);

    field.innerHTML = "";


    renderFunc();

    playerModal.classList.add("hidden");
}

playerDelete.onclick = () => {



    field.innerHTML = ""

    renderFunc()

    playerModal.classList.add("hidden")


    storageConsole = (team)
    editId = null

}





renderFunc()