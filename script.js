
  document.addEventListener("DOMContentLoaded", function () {
    let ratings = document.querySelectorAll(".rating");
    const sendButton = document.getElementById("send");
    const panel = document.getElementById("panel");
    const feedbackResult = document.createElement("div"); 
    feedbackResult.classList.add("feedback-result"); 
    panel.appendChild(feedbackResult); 

    let selectedRating = null;

    
    ratings.forEach((rating) => {
      rating.addEventListener("click", function () {
       
        ratings.forEach((r) => r.classList.remove("active"));
        
        
        rating.classList.add("active");

        
        selectedRating = rating.querySelector("small").textContent;
      });
    });

    
    sendButton.addEventListener("click", function () {
      if (selectedRating) {
       
        panel.innerHTML = `
          
          <strong>Thank You!</strong>
          <strong>For your positive feedback</strong>
          <br>
          <strong>Feedback: ${selectedRating}</strong>`;
      } else {
     
        alert("Please select a rating before submitting feedback.");
      }
    });
});

