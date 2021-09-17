const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");
const aboutText = document.querySelector(".about-text");
const contactSection = document.querySelector(".contact-section");
const portfolioSection = document.querySelector(".portfolio-section");
const portfolioItem = document.querySelector(".pp-item-section");

//active tabs
tabsContainer.onclick = (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
}

//go to contacts
document.querySelector(".btn-contact").onclick = () => {
    togglePopup("contact");
}
//go to portfolio
document.querySelector(".btn-portfolio").onclick = () => {
    togglePopup("portfolio");
}

//portfolio item popup
document.onclick = (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        window.scroll(0,0);
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
}
//mobile popup
document.ontouchstart = (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
        document.querySelector(".btn.back").scrollIntoView({behavior: "smooth"});
    }
}
function togglePortfolioPopup() {
    togglePopup("item");
    portfolioItem.classList.toggle("hidden");
    portfolioSection.classList.toggle("hidden");
}
//set item details
function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerText = portfolioItem.querySelector("h3").innerText;
    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

//close buttons
document.querySelectorAll(".close").forEach(btn => {
    btn.onclick = () => {
        togglePopup("close");
    }
})

//back button
document.querySelector(".back").onclick = () => {
    togglePopup("back");
}

function togglePopup(section) {
    if(section === "contact"){
        if (!aboutText.classList.contains("hidden")){
            aboutText.classList.toggle("hidden");
        }
        if (!portfolioSection.classList.contains("hidden")){
            portfolioSection.classList.toggle("hidden");
        }
        if (!portfolioItem.classList.contains("hidden")){
            portfolioItem.classList.toggle("hidden");
        }
    
        if(contactSection.classList.contains("hidden")){
            contactSection.classList.toggle("hidden")
        }
    }

    if(section === "portfolio"){
        if (!aboutText.classList.contains("hidden")){
            aboutText.classList.toggle("hidden");
        }
        if (!contactSection.classList.contains("hidden")){
            contactSection.classList.toggle("hidden");
        }
        if (!portfolioItem.classList.contains("hidden")){
            portfolioItem.classList.toggle("hidden");
        }

        if(portfolioSection.classList.contains("hidden")){
            portfolioSection.classList.toggle("hidden")
        }
    }

    if(section === "item"){
        if (!aboutText.classList.contains("hidden")){
            aboutText.classList.toggle("hidden");
        }
        if (!contactSection.classList.contains("hidden")){
            contactSection.classList.toggle("hidden");
        }
        if(portfolioSection.classList.contains("hidden")){
            portfolioSection.classList.toggle("hidden")
        }
    }

    if(section === "close"){
        if (!contactSection.classList.contains("hidden")){
            contactSection.classList.toggle("hidden");
        }
        if (!portfolioItem.classList.contains("hidden")){
            portfolioItem.classList.toggle("hidden");
        }
        if(!portfolioSection.classList.contains("hidden")){
            portfolioSection.classList.toggle("hidden")
        }

        if (aboutText.classList.contains("hidden")){
            aboutText.classList.toggle("hidden");
        }
    }

    if(section === "back"){
        portfolioSection.classList.toggle("hidden")
        portfolioItem.classList.toggle("hidden");
    }
}