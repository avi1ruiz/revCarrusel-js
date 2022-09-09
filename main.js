// Class Review
import { UserReview } from "./userReview.js";

// DOM Elements
const generateBtn = document.getElementById("generate");
const imgReview = document.querySelector(".perfil");
const nameReview = document.querySelector(".name");
const jobReview = document.querySelector(".job");

const userReview = new UserReview(imgReview, nameReview, jobReview)

function generateReview () {
    
    userReview.defUser();
    userReview.renderUser();
}


generateBtn.addEventListener("click", () => generateReview())

document.addEventListener("DOMContentLoaded", generateReview())