
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

        
    }

    insertHeaderContent()

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
    }
    insertSkillsContent()


})()