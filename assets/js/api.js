const url = "https://raw.githubusercontent.com/EduardoDeOliveira99/Portfolio/main/data/profile.json"

function getProfileData() {
    return fetch(url)
        .then((response) => (response.json()))
        .then((bodyJson) => (bodyJson))
}

