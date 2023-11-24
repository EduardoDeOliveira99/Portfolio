const url = "https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json"

function getProfileData() {
    return fetch(url)
        .then((response) => (response.json()))
        .then((bodyJson) => (bodyJson))
}

