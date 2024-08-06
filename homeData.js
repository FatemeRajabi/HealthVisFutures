let slideIndex = 0;
showSlides();
//function for the slideshow in home page
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
//json data for information of lab, can add line attribute to add more data to the lab
jsonData={
    "research_desc":[
        { 
            "line":"Our research focuses on addressing real-world problems by designing effective technologies and information visualization tools."
        },
        {
            "line":"In particular, our research focuses on increasing patient engagement in their medical care, including supporting patients to track their health data, improving patient-provider communication, and assisting patients in making decisions about their health."
        },
    ],
       
};

//displaying information of lab 
document.getElementById("research_desc").innerHTML = `${jsonData.research_desc.map(function(lines){
    return `
    <span style="margin:0">${lines.line}
    </span>`
}).join(' ')}`;

//function for navigating to a specific section on people tab
function selectPeople(loc){
    //setting path parameter as the choice selected in the dropdown
    link='people.html?people='+loc;
    window.location=link;
    
}


