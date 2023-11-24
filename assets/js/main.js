
(async () => {
    const profileData = await getProfileData();

    function insertHeaderContent () {
        
        const name = profileData.name;
        const job = profileData.job;
        const location = profileData.location;
        const phone = profileData.phone;
        const email = profileData.email;

        document.querySelector("#name").textContent = name;
        document.querySelector("#job").textContent = job;
        document.querySelector("#location").textContent = location;
        document.querySelector("#phone").textContent = phone;
        document.querySelector("#phone").href = `tel: ${phone}`;
        document.querySelector("#email").textContent = email;
        document.querySelector("#email").href = `mailto: ${email}`;

        
    };

    insertHeaderContent();

    function insertSkillsContent () {

        const hardSkillsGrid = document.querySelector(".content__pro-skills__grid");
        const hardSkills = profileData.skills.hardSkills;

        hardSkills.map((i) => {
            return hardSkillsGrid.innerHTML += `<img class="pro-skills__grid__icon" 
            src="${i.logo}" alt="${i.name}">`
        })

        const softSkillsGrid = document.querySelector(".content__skills__list");
        const softSkills = profileData.skills.softSkills;
        softSkills.map((value) => {
            return softSkillsGrid.innerHTML += `<li class="content__skills__list-item">
            ${value}</li>`
        })
    };

    insertSkillsContent();

    function insertLangContent () {
        const langList = document.querySelector(".content__langs__list");
        const langs = profileData.languages;
        langs.map((value) => {
            langList.innerHTML += `
            <li class="content__langs__list-item">
                <p>${value.lang}</p>
                <span>${value.level}</span>
            </li> `
        })
    };
;
    insertLangContent()

    function insertProjectsContent () {
        const projects = profileData.portfolio;
        const projectList = document.querySelector(".projects__list");
        projects.map((value) => {
            projectList.innerHTML += `
            <li class="projects__list-item">
                <div class="projects__list-item__head">
                    <img src="/Portfolio/data/images/icons8-github-32.png" alt="">
                    <h4>${value.name}</h4>
                </div>
                <a href="${value.url}" target="_blank">
                    <span>h${value.url}</span>
                </a>
            </li>`
        })
    };

    insertProjectsContent();

    function insertProfessionalExp () {
        const proExpBlock = document.querySelector(".modal__content__block");
        const proExp = profileData.professionalExperience;

        console.log(proExp)
        proExp.map((value) => {
            proExpBlock.innerHTML += `
            <div class="modal__content__pro-xp">
                <h4>${value.name}</h4>
                <span class="modal__content__date">${value.period}</span>
                <p>${value.description}
                </p>
            </div>
            `;
        });
    };

    insertProfessionalExp();
})();