//--------------------Stars validating functionality-------------
const messages = [

    "We'are sorry to hear that you had a bad experience.We would like to learn more about what happened andand how we can make things right",
    
    "We appologised for the inconvenience you experience.We appreciate your feedback and would like to work with you to address any issues",
    
    "Thanks for your feedback.We are sorry to hear that your experince wasn't perfect.We would like more about your concerns to see how wee can improve",

    "Thanks for your positive feedback!We are glad to know that you that you had a great experience and we appreciiate your support",

    "Excellent! we are thrilled to hear that you had such a positive experience.Thank you for choosing our platform"
]


const stars = document.querySelectorAll(".stars-container .star-span i");
const message = document.querySelector(".message");

stars.forEach((element , index) => {

    element.addEventListener("click" , function(){

        for (let i = 0 ; i <= index ; i++)
        {
            stars[i].style.color = "#f9ce56";
        }
        message.textContent = messages[index];
      });
})





















