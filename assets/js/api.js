const url = "https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json"

const fetchApi = async function (url) {
const response = await fetch(url);
const bodyJson = await response.json()
console.log(bodyJson)
}

fetchApi(url)

