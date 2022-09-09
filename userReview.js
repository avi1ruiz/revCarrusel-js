// Clase Review
export class UserReview {

    jobsList = ["software developer", "database administrator", "computer hardware engineer", "computer systems analyst", "computer network architect", "web developer", "information security analyst", "computer and information research scientist", "computer and informations systems manager", "IT project manager" ];
    nameList = ["susan smith", "Karl johnson", "Michell williams", "Alan brown", "Matt jones", "Tony garcia", "jacob miller", "mason davis", "ethan rodriguez", "liam martinez"];
    

    constructor(imgReview, nameReview, jobReview) {
        this.imgReview = imgReview;
        this.nameReview = nameReview;
        this.jobReview = jobReview;
    }

    defUser() {
        let num = Math.floor(Math.random() * this.jobsList.length)
        this.job = this.jobsList[num]
        this.name = this.nameList[num]
        this.img = num
    }

    renderUser() {
        // Para debug
        console.log(`${this.name}/${this.job}`)

        this.imgReview.src = `https://robohash.org/robot${this.img}`
        this.nameReview.innerHTML = `${this.name}`
        this.jobReview.innerHTML = `${this.job}`
    }

    
}