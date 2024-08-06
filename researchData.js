/**json data consist of research_desc and projects arrays
 * 
 * object description of research_desc-
 * {
 *  line: line description related to lab
 * }
 * 
 * object description of projects-
 * {
 *  title:title of the project
 *  imgsrc: image address to be displayed in the tile
 *  id:prject id
 * }
 */
jsonData={
    "research_desc":[
        { 
            "line":"Our research focuses on addressing real-world problems by designing effective technologies and information visualization tools."
        },
        {
            "line":"In particular, our research focuses on increasing patient engagement in their medical care, including supporting patients to track their health data, improving patient-provider communication, and assisting patients in making decisions about their health."
        },
    ],
    "projects":[
        {
            "title":"A Data Visualization Tool for Inpatient Stroke Rehabilitation",
            "imgsrc":"images/projectImages/P12.png",
            "id":"1"
            
        },
        {
            "title":"TextVista: NLP-Enriched Time-Series Text Data Visualizations",
            "imgsrc":"images/projectImages/P11.png",
            "id":"2"
            
        },
        {
            "title":"Cardiac Arrhythmia Radioablation Planning",
            "imgsrc":"images/projectImages/radioablation.png",
            "id":"3"

        },
        {
            "title":"Visualizing Blood Pressure Data",
            "imgsrc":"images/projectImages/p10.png",
            "id":"4"
            
        },
        {
            "title":"Patient-Generated Data Visualization",
            "imgsrc":"images/projectImages/p1.png",
            "id":"5"
    
        },
        {
            "title":"Tracking Patient Recovery After Surgery",
            "imgsrc":"images/projectImages/p2.jpg",
            "id":"6"
            
        },
        {
            "title":" Doctor-Patient Communication ",
            "imgsrc":"images/projectImages/p3.png",
            "id":"7"
            
        },
        {
            "title":"WEST: Visualizing BC Surgery Wait Times",
            "imgsrc":"images/projectImages/p4.png",
            "id":"8"
            
        },
        {
            "title":"Measuring Quality of Health Goal In HIV Patients",
            "imgsrc":"images/projectImages/p5.png",
            "id":"9"
            
        },
        {
            "title":"High Resolution Large Displays",
            "imgsrc":"images/projectImages/p6.png",
            "id":"10"
            
        },
        {
            "title":"NeckLan: Language Visualization",
            "imgsrc":"images/projectImages/p7.png",
            "id":"11"
            
        },
        {
            "title":"17-inch BackPad Mobile Device",
            "imgsrc":"images/projectImages/p8.png",
            "id":"12"
            
        },
        {
            "title":"Leitner System App",
            "imgsrc":"images/projectImages/p9.png",
            "id":"13"
            
        },

    ]
}; 
labName="healthViz"
document.getElementById("projects").innerHTML = `${jsonData.projects.map(function(project){
    return `
    <div class="col-md-4 col-sm-12 article">
		<span class="image">
			<img src="${project.imgsrc}" alt="" />
		</span>
		<a href="project-details.html?lab=${labName}&project=${project.id}">
			<h3 class="projectTitle">${project.title}</h3>
		</a>
	</div>`
}).join(' ')}`;

//function for navigating to a specific section on people tab
function selectPeople(loc){
    //setting path parameter as the choice selected in the dropdown
    link='people.html?people='+loc;
    window.location=link;
    
}

//funciton to navigate to all the publications page
function gotoPublications(){
    //setting path parameter as the choice selected in the dropdown
    link='publications.html';
    window.location=link;
    
}