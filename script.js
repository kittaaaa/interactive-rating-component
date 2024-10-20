const ratingBtns = Array.from(document.querySelectorAll(".btn"));
const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.querySelector(".rating-card");
const ratingPlaceHolder = document.querySelector(".rating-holder");
const thankyouCard = document.querySelector(".thank-you-card");

let ratingSelected = null;
let prevRatingSelected = null;

function toggle(object){
    ratingSelected = object.target;
    if(ratingSelected.classList.contains("selected")) {
        ratingSelected.classList.remove("selected");
        ratingSelected.classList.add("btn");
    } else {
        ratingSelected.classList.remove("btn");
        ratingSelected.classList.add("selected");
    }  
}

function changeBtnStyle(currBtn, prevBtn) {
    if(prevBtn != null){
        currBtn.classList.remove("selected");
        currBtn.classList.add("btn");
        return;
    }

}
function rating(object) {
    if (ratingSelected == null) {
        ratingSelected = object.target;

    } else if(ratingSelected.textContent != object.target.textContent) {
        prevRatingSelected = ratingSelected;
        ratingSelected = object.target;
        console.log("previous: " + prevRatingSelected.textContent + " curr " + ratingSelected.textContent);
    }
//     changeBtnStyle(ratingSelected, prevRatingSelected);
}
function submitRating() {
    
    if(ratingSelected != null) {
        ratingPlaceHolder.textContent = ratingSelected.textContent;
        ratingCard.classList.add("hide");
        thankyouCard.classList.remove("hide");
        
    }
}



ratingBtns.forEach((btn) => {
    btn.addEventListener("click", rating)
});

submitBtn.addEventListener("click", submitRating)