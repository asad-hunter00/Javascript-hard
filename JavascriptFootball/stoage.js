const KEY = "football-team"

export function storageConsole(team) {
    localStorage.setItem(KEY, JSON.stringify(team));
}

export function teamStorage() {
    const data = localStorage.getItem(KEY)

    if (data) {
        return JSON.parse(data)
    }

    return {
        id: crypto.randomUUID(),
        name: "Uzbekistan",
        players: []
    }
}