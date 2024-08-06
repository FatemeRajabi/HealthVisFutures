/**
 * json data consist og courses array
 * 
 * description of object-
 * 
 * title: course name
 * imgsrc:image source
 * outlinelink:link for the course outline
 * description:small info for the course
 */
jsonData={
    "courses":[
        {
            "title":"SYSC 5807/BIOM 5403 Data Visualization",
            "imgsrc":"images/coursesImages/SYSC5807.png",
            "outlineLink":"https://carleton.ca/rajabiyazdi/cu-files/227/",
            "description":"In this course we focus on how to design, develop, and evaluate data visualization. We discuss visualization use cases, including the medical and biomedical domains."
    
        },
        {
            "title":"SYSC 4906 Introduction to Data Science & Data Visualization",
            "imgsrc":"images/coursesImages/SYSC4906B.png",
            "outlineLink":"https://carleton.ca/rajabiyazdi/cu-files/sysc4906courseoutline/",
            "description":"In this course, we will introduce a wide overview of the main concepts in data science and data visualizations for beginners. We will introduce a set of preliminary tools and techniques for analyzing and visualizing data."
    
        },
        {
            "title":"SYSC 4201 Ethics, Research Methods and Standards for Biomedical Engineering",
            "imgsrc":"images/coursesImages/SYSC4201.png",
            "outlineLink":"https://carleton.ca/rajabiyazdi/cu-files/sysc4201courseoutline/",
            "description":"Ethical theories, ethical decision-making, biomedical research ethics: informed consent, confidentiality, privacy, research ethics boards; research methods: hypothesis formulation, data collection, sampling bias, experimental design, statistical literacy; regulations for design, manufacture, certification of medical devices; impact of technology and research (social, political, financial)"
    
        },
        {
            "title":"SYSC 2006 Foundations of Imperative Programming",
            "imgsrc":"images/coursesImages/SYSC2006.png",
            "outlineLink":"https://carleton.ca/sce/wp-content/uploads/SYSC-2006-CourseDescription-04-2020.pdf",
            "description":"The imperative programming paradigm has been widely used in practice for various applications. The objective of this course is to understand the concepts that underlie most imperative programming languages and to be able to use this knowledge to learn new languages. The course will deal with designing and implementing small-scale programs, in particular the use of C programming language."
            
        },   
    ]
}; 

document.getElementById("courses").innerHTML = `${jsonData.courses.map(function(course){
    return `
    <div class="row courses">
			<div class="col-3 courseImg">
            <img src="${course.imgsrc}" alt="img">					
			</div>
			<div class="col-9" style="padding-top:0">
				<section id="roles">
					<p></p>
                    <a href="${course.outlineLink}">
					<h3 style="text-decoration: underline;">
                     ${course.title}
					</h3>
                    </a>
                    <p>${course.description}</p>
				</section>						
			</div>	
								
		</div>`
}).join(' ')}`;

//function for navigating to a specific section on people tab
function selectPeople(loc){
    //setting path parameter as the choice selected in the dropdown
    link='people.html?people='+loc;
    window.location=link;
    
}
