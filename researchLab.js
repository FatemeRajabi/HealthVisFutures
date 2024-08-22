/**
 *json data consist of research_desc and projects arrays
 * 
 * object description of research_desc-
 * {
 *  line: line description related to lab
 * }
 * 
 * object description of projects-
 * {
 *  name:title of the project
 *  imgsrc: image address to be displayed in the tile
 *  id:prject id
 * }
 */
 
 jsonData={
    "research_desc":[
        { 
            "line":"The Positive Technology Lab is an interdisciplinarity initiative that aims at bringing together faculty, students, and industry to creatively design, build and study digital experiences to improve and strengthen people’s well-being at the individual collective, and organizational levels. "
        },
        {
            "line":"This lab acknowledges the importance of human experience, values, and ethical concerns in the design and evaluation of technological solutions."
        },
        {
            "line":"It serves as a common ground for industrial design, interaction design, human-computer interaction, user experience, and social science fields to address social issues."
        },
    ],
    "projects":[
        {
            "name":"MUZE: Multisensory Music Sharing to Foster Emotional Regulation and Social",
            "imageSrc":"images/projectImages/MUZE3.png",
            "id":"1",
        },
        {
            "name":"A behaviour-assessing toy that supports ADHD children",
            "imageSrc":"images/projectImages/KITA-PCB.jpg",
            "id":"2",
        },
        {
            "name":"Designing reflective healthcare informatics",
            "imageSrc":"images/projectImages/ESTHER_1.webp",
            "id":"3",
        },
        {
            "name":"The Memory Cache",
            "imageSrc":"images/projectImages/CACHE1.png",
            "id":"4",
        },
        {
            "name":"Better Sanitation Practices",
            "imageSrc":"images/projectImages/sanitation.jpg",
            "id":"5",
        }
    ]
       
};

labName="positiveTech"
document.getElementById("research_desc").innerHTML = `${jsonData.research_desc.map(function(lines){
    return `
    <span style="margin:0">${lines.line}
    </span>`
}).join(' ')}`;

document.getElementById("projects").innerHTML = `${jsonData.projects.map(function(project){
    return `
    <article>
		<span class="image">
			<img src="${project.imageSrc}" alt="" />
		</span>
		<a href="project-details.html?lab=${labName}&project=${project.id}">
			<h3>${project.name}</h3>
		</a>
	</article>`
}).join(' ')}`;

//function for navigating to a specific section on people tab
function selectPeople(loc){
    //setting path parameter as the choice selected in the dropdown
    link='people.html?people='+loc;
    window.location=link;
    
}


