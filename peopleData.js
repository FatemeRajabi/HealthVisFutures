
//json data for professors and students
/*description of json object:

Professor-
name-name of professor
designation-desgination of professor
degree-all degrees in a line
imgsrc-img address 
link-link name for every person

Student(UnderGrad,graduates,RA,alumni)-
name-name of the person
course- Course name
extraInfo- lab/designation(for RAs)
imgsrc-source of image from folder
link-link name for every person

Student(postdoc)-
name-name of the person
university- university name
info- details about them
imgsrc-source of image from folder
link-link name for every person


 */
jsonData={
    "professors":[
        {
            "name":"Prof. Fateme Rajabiyazdi",
            "designation":"Assistant Professor",
            "degree":"B.Eng, M.Sc, Ph.D.",
            "imgsrc":"images/profImages/Fateme.jpg",
            "link":"fateme"        
        },

    ],
    "undergrads":[
        {
            "name":"Esosa Ohangbon",
            "course":"Software Engineering",
            "imgsrc":"images/studentImages/esosa.png",
            "extraInfo":"I-CUREUS",
            "link":"esosa-ohangbon"   
        },


    ],
    "grads":[
        {
            "name":"Darwin Jull",
            "course":"MASc - Biomedical Engineering",
            "imgsrc":"images/studentImages/Darwin1.jpeg",
            "extraInfo":"",
            "link":"darwin-jull"   
        },
        {
            "name":"Matteo Sotelo",
            "course":"MASc - Information technology",
            "imgsrc":"images/studentImages/dummy.png",
            "extraInfo":"",
            "link":"matteo"   
        },
        {
            "name":"Connor Haberl",
            "course":"PhD – Biomedical Engineering",
            "imgsrc":"images/studentImages/Connor.jpg",
            "extraInfo":"",
            "link":"connor-haberl"
        },
        {
            "name":"Shri Harini Ramesh",
            "course":"PhD – Biomedical Engineering",
            "imgsrc":"images/studentImages/Shri2.jpg",
            "extraInfo":"",
            "link":"shri-Harini"
        },
        {   
            "name":"Mahsa Sinaei",
            "course":"PhD – Systems and Computer Engineering",
            "imgsrc":"images/studentImages/Mahsa3.png",
            "extraInfo":"",
            "link":"mahsa-sinaei"
        },

        
    ],
    "postdocs":[
        {
            "name":"Dr. Elahe Khorasani",
            "info":"Co-supervised with Dr. Julio Fiore",
            "university":"McGill University",
            "imgsrc":"images/studentImages/Elaheh2.jpg",
            "link":"elaheh-khorasani"
            
        },

    ],
    "ras":[
        {
            "name":"Daniil Kulik",
            "course":"Master of computer science",
            "extraInfo":"Web Developer",
            "imgsrc":"images/studentImages/dummy.png",
            "link":"abhishek-mayurbhai-patel"
            
        },
    ],
    "alumni":[
        {
            "name":"Roshan Faisal Zaki",
            "course":"Masters in Electrical and Computer Engineering",
            "imgsrc":"images/studentImages/Roshan.jpeg",
            "extraInfo":"",
            "link":"roshan"
        },
        {
            "name":"Mariana Perez Rodriguez",
            "course":"Master of Design",
            "imgsrc":"images/studentImages/Mariana.jpg",
            "extraInfo":"",
            "link":"mariana-perez-rodriguez"
        },
        
        {
            "name":"Darwin Jull",
            "course":"Biomedical Engineering",
            "imgsrc":"images/studentImages/Darwin1.jpeg",
            "extraInfo":"I-CUREUS",
            "link":"darwin-jull"   
        },

        {
            "name":"Connor Haberl",
            "course":"MASc – Biomedical Engineering",
            "imgsrc":"images/studentImages/Connor.jpg",
            "extraInfo":"",
            "link":"connor-haberl"
        },
        {
        "name":"Abhishek Ahuja",
        "course":"Software Engineering",
        "imgsrc":"images/studentImages/AbhishekAhuja.jpg",
        "extraInfo":"",
        "link":"abishekahuja"
        },

        {
            "name":"Beck Langstone",
            "course":"MASc – Human-Computer Interaction",
            "imgsrc":"images/studentImages/Beck2.jpg",
            "extraInfo":"",
            "link":"beck-langstone"
        },
        {
            "name":"Alicia Ouskine",
            "course":"MASc – Human-Computer Interaction",
            "imgsrc":"images/studentImages/Alicia.jpg",
            "extraInfo":"",
            "link":"alicia-ouskine"
        },
    
        {
            "name":"Alaa Alsatari",
            "course":"Neuroscience and Mental Health",
            "imgsrc":"images/studentImages/Alaa2.png",
            "extraInfo":"I-CUREUS",
            "link":"alaa-alsatari"
            
        },
        {
            "name":"Paddy Greene",
            "course":"Biomedical Engineering",
            "imgsrc":"images/studentImages/Paddy2.jpg",
            "extraInfo":"USRA",
            "link":"paddy-greene"
        },
        {
            "name":"Erin Lui-Hing",
            "course":"Biomedical Engineering",
            "imgsrc":"images/studentImages/Erin.jpeg",
            "extraInfo":"I-CUREUS",
            "link":"erin-lui-hing"
        },
        {
            "name":"Sam Serdah",
            "course":"MASc – Data Science",
            "imgsrc":"images/studentImages/Sam2.jpeg",
            "extraInfo":"",
            "link":"sam-serdah"
        },
      {
            "name":"Arsh Saleem",
            "course":"Biomedical Engineering",
            "extraInfo":"Co-Op",
            "imgsrc":"images/studentImages/Arsh.jpg",
            "link":"arsh"
            
        },
        {
            "name":"Rahel Gunaratne",
            "course":"Software Engineering",
            "extraInfo":"I-CUREUS",
            "imgsrc":"images/studentImages/Rahel.jpg",
            "link":"rahel"
            
        },
        
    ],
    "past":[
        {
            "name":"Abhishek Mayurbhai Patel",
            "course":"Master of Engineering",
            "extraInfo":"Web Developer",
            "imgsrc":"images/studentImages/Abhishek2.png",
            "link":"abhishek-mayurbhai-patel"
            
        },
        {
            "name":"Sanhita Paluskar",
            "course":"Master of Engineering",
            "extraInfo":"Software Engineer",
            "imgsrc":"images/studentImages/Sanhita.png",
            "link":"sanhita"
            
        },
        {
            "name":"Ali Shajari",
            "course":"Bachelor of Arts",
            "imgsrc":"images/studentImages/Ali.jpg",
            "extraInfo":"SaPP",
            "link":"ali-shajari"  

        }
    ],
};

document.getElementById("profData").innerHTML = `${jsonData.professors.map(function(prof){
    return `
    <section class="col-6 col-12-narrower peopleData">
    <div class="box post">
        <img class="image left" src="${prof.imgsrc}" alt="" />
        <div class="inner">
        <a href="peopleDetails.html?type=${'prof'}&people=${prof.link}"><h3>${prof.name}</h3></a>
            <p style="margin: 0">${prof.designation}</p>
            <p style="margin: 0">${prof.degree}</p>
        </div>
    </div>
</section>`
}).join(' ')}`;

document.getElementById("ugData").innerHTML = `${jsonData.undergrads.map(function(undergrad){
    if(undergrad.extraInfo==""){
        return `
        <section class="col-6 col-12-narrower peopleData">
        <div class="box post">
            <img class="image left" src="${undergrad.imgsrc}" alt="" />
            <div class="inner">
            <a href="peopleDetails.html?type=${'stud'}&people=${undergrad.link}"><h3>${undergrad.name}</h3></a>
                <p style="margin: 0">${undergrad.course}</p>
            </div>
        </div>
    </section>`
    }
    else{
        return `
        <section class="col-6 col-12-narrower peopleData">
        <div class="box post">
            <img class="image left" src="${undergrad.imgsrc}" alt="" />
            <div class="inner">
            <a href="peopleDetails.html?type=${'stud'}&people=${undergrad.link}"><h3>${undergrad.name}</h3></a>
                <p style="margin: 0">${undergrad.extraInfo}</p>
                <p style="margin: 0">${undergrad.course}</p>
            </div>
        </div>
    </section>`
    }
   
}).join(' ')}`;

document.getElementById("gradData").innerHTML = `${jsonData.grads.map(function(grad){
    if(grad.extraInfo==""){
        return `
        <section class="col-6 col-12-narrower peopleData">
        <div class="box post">
            <img class="image left" src="${grad.imgsrc}" alt="" />
            <div class="inner">
            <a href="peopleDetails.html?type=${'stud'}&people=${grad.link}"><h3>${grad.name}</h3></a>
                <p style="margin: 0">${grad.course}</p>
            </div>
        </div>
    </section>`
    }
    else{
        return `
        <section class="col-6 col-12-narrower peopleData">
        <div class="box post">
            <img class="image left" src="${grad.imgsrc}" alt="" />
            <div class="inner">
            <a href="peopleDetails.html?type=${'stud'}&people=${grad.link}"><h3>${grad.name}</h3></a>
                <p style="margin: 0">${grad.extraInfo}</p>
                <p style="margin: 0">${grad.course}</p>
            </div>
        </div>
    </section>`
    }
   
}).join(' ')}`;

document.getElementById("alumniData").innerHTML = `${jsonData.alumni.map(function(alumni){
    return `
    <section class="col-6 col-12-narrower peopleData">
    <div class="box post">
        <img class="image left" src="${alumni.imgsrc}" alt="" />
        <div class="inner">
        <a href="peopleDetails.html?type=${'stud'}&people=${alumni.link}"><h3>${alumni.name}</h3></a>
            <p style="margin: 0">${alumni.course}</p>
        </div>
    </div>
</section>`
}).join(' ')}`;

document.getElementById("postdocData").innerHTML = `${jsonData.postdocs.map(function(postdoc){
    return `
    <section class="col-6 col-12-narrower peopleData">
    <div class="box post">
        <img class="image left" src="${postdoc.imgsrc}" alt="" />
        <div class="inner">
        <a href="peopleDetails.html?type=${'stud'}&people=${postdoc.link}"><h3>${postdoc.name}</h3></a>
            <p style="margin: 0">${postdoc.info}</p>
            <p style="margin: 0">(${postdoc.university})</p>
        </div>
    </div>
</section>`
}).join(' ')}`;


document.getElementById("raData").innerHTML = `${jsonData.ras.map(function(ra){
    return `
    <section class="col-6 col-12-narrower peopleData">
    <div class="box post">
        <img class="image left" src="${ra.imgsrc}" alt="" />
        <div class="inner">
            <a href="peopleDetails.html?type=${'stud'}&people=${ra.link}"><h3>${ra.name}</h3></a>
            <p style="margin: 0">${ra.course}</p>
        </div>
    </div>
</section>`
}).join(' ')}`;
document.getElementById("pastData").innerHTML = `${jsonData.past.map(function(past){
    return `
    <section class="col-6 col-12-narrower peopleData">
    <div class="box post">
        <img class="image left" src="${past.imgsrc}" alt="" />
        <div class="inner">
            <a href="peopleDetails.html?type=${'stud'}&people=${past.link}"><h3>${past.name}</h3></a>
            <p style="margin: 0">${past.course}</p>
        </div>
    </div>
</section>`
}).join(' ')}`;



const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const selection = urlParams.get('people')
console.log(selection);
if(selection=='professors'){
    document.getElementById("professors").scrollIntoView({behavior: 'smooth'});
}
else if(selection=='undergrad'){
    document.getElementById("undergrad").scrollIntoView({behavior: 'smooth'});
}
else if(selection=='grad'){
    document.getElementById("grad").scrollIntoView({behavior: 'smooth'});
}
else if(selection=='alumni'){
    document.getElementById("alumni").scrollIntoView({behavior: 'smooth'});
}
else if(selection=='postdoc'){
    document.getElementById("postdoc").scrollIntoView({behavior: 'smooth'});
}
else if(selection=='ra'){
    document.getElementById("ra").scrollIntoView({behavior: 'smooth'});
}
else if(selection=='past'){
    document.getElementById("past").scrollIntoView({behavior: 'smooth'});
}

//function for navigating to a specific section on people tab
function selectPeople(loc){
    //setting path parameter as the choice selected in the dropdown
    link='people.html?people='+loc;
    window.location=link;
    
}
