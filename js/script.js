//about tabs
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");
const aboutText = document.querySelector(".about-text");
const contactSection = document.querySelector(".contact-section");
const portfolioSection = document.querySelector(".portfolio-section");

tabsContainer.onclick = (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
}
document.querySelector(".btn-contact").onclick = (e) => {
    returnHome(true, false)
}
document.querySelector(".btn-portfolio").onclick = () => {
    returnHome(false, false)
}

//portfolio item popup
document.onclick = (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
    }
}
function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.querySelector(".main-container").classList.toggle("hidden");
    document.body.classList.toggle("hide-scroll");
}
document.querySelector(".pp-close").onclick = togglePortfolioPopup;
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
})
//set item details
function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerText = portfolioItem.querySelector("h3").innerText;
    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
//close portfolio
document.querySelector(".portfolio-close").onclick = () => {
    returnHome(false, true);
}
//contact
//close contact
document.querySelector(".section-close").onclick = () => {
    returnHome(true, true);
}
function returnHome(isContact, returnAbout) {
    if (isContact) {
        contactSection.classList.toggle("hidden");
        if (!portfolioSection.classList.contains("hidden")) {
            portfolioSection.classList.toggle("hidden");
        }
    }
    else {
        portfolioSection.classList.toggle("hidden");
        if (!contactSection.classList.contains("hidden")) {
            contactSection.classList.toggle("hidden");
        }
    }
    if (aboutText.classList.contains("hidden")) {
        if (returnAbout) {
            aboutText.classList.toggle("hidden");
        }
    } else {
        aboutText.classList.toggle("hidden");
    }

    if (aboutText.classList.contains("hidden") && portfolioSection.classList.contains("hidden") && contactSection.classList.contains("hidden")) {
        if (isContact) {
            contactSection.classList.toggle("hidden");
        } else {
            portfolioSection.classList.toggle("hidden");
        }
    }
}