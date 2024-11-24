"use strict"
window.addEventListener("DOMContentLoaded", ()=> {
    const elFormLink = document.querySelector(".form__link"),
        elInput = document.querySelector(".form__input"),
        elGroups = document.querySelector(".groups"),
        alert = document.querySelector(".message"),
        elRegister = document.querySelector(".register");


    const groups = ["gryffindor","hufflepuff","ravenclaw","slytherin"];
    const random = Math.floor(Math.floor(Math.random() * 100 % 10)/3);

    elFormLink.addEventListener("click", (e)=> {
        if(elInput.value) {
            elGroups.style.display = "flex";
            elRegister.style.display = "none";
            elGroups.classList.add("loading");
            alert.innerHTML = `${elInput.value} siz ... ✨`;
            setTimeout(() => {
                elGroups.classList.remove("loading");
                elGroups.classList.add(`${groups[random]}`);
                alert.innerHTML = `🎉 Tabriklaymiz ${elInput.value} siz ${groups[random]}ga qabul qilindingiz!!! 🎉`;
            }, 5000);

            elInput.value = "";
        } else {
            elInput.classList.add("error")
            setTimeout(() => {
                elInput.classList.remove("error")
            }, 2000);
        };

    })

})