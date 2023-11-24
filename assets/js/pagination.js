const acordeonBtt = document.querySelectorAll(".modal__header__button")
const modalContent = document.querySelector(".body__modal__content")
const bodyModal = document.querySelector(".body__modal")


acordeonBtt.forEach((target) => {
    target.addEventListener("click", () => {
        target.parentElement.nextElementSibling.classList.toggle("body__modal__content_active");
        target.classList.toggle("modal__header__button_active")
        target.parentElement.parentElement.classList.toggle("body__modal_active")
    })
})


