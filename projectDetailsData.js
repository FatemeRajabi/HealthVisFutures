/**
 * json data for healthVislab's  and positiveTechLba's projects
 * 
 * object description-
 * healthVisprojects and positiveTechProjects are arrays
 * 
 * object of healthVisprojects
 * {
 *  name: name of project
 *  description: information about project
 *  videosrc: array containing link is present
 *  publicaitions: array containing title and link for the publications related to the project
 *  link:project number
 * 
 *  object of positiveTechProjects
 * {
 *  title: name of project
 *  description: information about project
 *  imageSrc: address of project image
 *  id:project number
 * }
 */
jsonData={
    "healthVisprojects":[

        {
            "title":"A Data Visualization Tool for Patients and Healthcare Providers to Communicate during Inpatient Stroke Rehabilitation",
            "description":"Stroke is one of the leading causes of disability worldwide. The efficacy of stroke recovery is determined by various factors, including patient adherence to their rehabilitation program. Effective communication between healthcare providers and patients is crucial for promoting patients’ adherence to rehabilitation programs. Aiming to support patient-healthcare provider communication during inpatient stroke rehabilitation, we (1) conducted semi-structured interviews with healthcare providers with expertise in inpatient stroke recovery to extract design requirements for visualizing stroke recovery progress. Using these design requirements, we (2) designed a data visualization tool representing stroke recovery. We (3) sought feedback on the visualization designs from healthcare providers and patients and integrated their feedback into the designs. Informed by the results of our studies, we provided several considerations for designing future visualization tools for patients and providers to communicate during inpatient stroke rehabilitation.",
            "videosrc":[],
            "publications":[
                {"title":"S. H. Ramesh, A. Ouskine, E. Khorasani, M. Ebrahimipour, H. Finestone, A. D. C. Chan, and F. Rajabiyazdi, A Data Visualization Tool for Patients and Healthcare Providers to Communicate during Inpatient Stroke Rehabilitation, In Graphics Interface 2024 (GI 2024), Halifax, Canada.",               
                "link":"https://openreview.net/pdf?id=HSPRA1VW9l", 
                "award": "🏆 Best Student Paper Award",
                },
            ],
            "link":"project12"
            
        },
        {
            "title":"TextVista: NLP-Enriched Time-Series Text Data Visualizations",
            "description":"There is a vast amount of unstructured text data generated every day analyzing and making sense of these text-based datasets is a complex, cumbersome task. The existing visualization tools that analyze text data leveraging Natural Language Processing (NLP) techniques, are often tailored for structured text-based data. They also fail to support reading, a crucial analysis task to validate the output of NLP techniques. We designed and developed TextVista, an NLP-enriched visualization tool that supports analysts during their analysis of unstructured text with temporal references. Our tool combines techniques including clustering, sentiment analysis, and threat detection with three views that visualize high-level patterns in the data to encourage reading. We report on TextVista’s iterative design process, which included a focus group to distill design requirements, a think-aloud interview study with data analysts to understand their impressions of the tool, and a diary study to assess its long-term usage. Through this process, we identified how TextVista supported the analysis of unstructured text with temporal references using NLP techniques and fostered methods to promote reading in situ. TextVista also encouraged serendipity when analyzing data via its question-focused overviews and flexible avenues to explore data","videosrc":[
		{"link": "https://www.youtube.com/embed/P5ViwXQS3dY?si=2uXwQ-MLkyLGaCp6"}],
            "publications":[
                {"title":"M. F. Rajabiyazdi, S. H. Ramesh, B. Langstone, D. Kulik, and J. Pontalba. TextVista: NLP-Enriched Time-Series Text Data Visualizations. In Graphics Interface 2024, Halifax, Canada",
                "link":"https://openreview.net/pdf?id=CX4uT5cauk", 
                },
            ],
            "link":"project11"
            
        },
        {
            "title":"A 4D Therapy Planning Tool for Cardiac Radioablation of Ventricular Tachycardia",
            "description":"Cardiac radioablation is a completely non-invasive therapy for the treatment of ventricular tachycardia and other cardiac arrhythmias. Conventional therapy planning methods lack image integration which complicates targeting, delaying treatment and risking error. We have developed a software tool which aims to facilitate therapy planning by accurately combining information from multiple imaging modalities including CT, PET, and electroanatomic mapping (EAM or ECGi). 2D slice-views, 3D views, and polar map views all allow interactive target selection to facilitate therapy planning of cardiac radioablation.",
            "videosrc":[],
            "publications":[
                {"title":"C. Haberl, A. Crean, K. Lekx-Toniolo, E. Ali, P. B. Nery, G. M. Nair, G. Cook, F. Rajabiyazdi, C. Redpath and R. deKemp, A 4D visualization tool for treatment planning of non-invasive radioablation in patients with ventricular tachycardia, Proceedings Volume 12466, Medical Imaging 2023: Image-Guided Procedures, Robotic Interventions, and Modeling; 124660V (2023) ",
                "link":"https://doi.org/10.1117/12.2654482",
                },
            ],
            "link":"project13"

        },
        {
            "title":"Visualizing Blood Pressure Data",
            "description":"We designed and developed a mobile app that visualizes blood pressure data in a manner that is easy to comprehend for users. The app includes graphs that visualize the users’ blood pressure measurements along with additional notes which could enhance users blood pressure management by supplying more details regarding their health status. We conducted a literature review to pinpoint key design requirements and used them to create a low-fidelity prototype. After consulting two experts for feedback, we iteratively improved it to mid-fidelity and then high-fidelity prototypes. A user evaluation study confirmed that our high-fidelity prototype effectively visualizes blood pressure measurements over time.",
            "videosrc":[
		{"link": "https://www.youtube.com/embed/viNRMBo8pJM?si=z30vTbSLf7rkY2o2"}],
            "publications":[
                {"title":"M. S. Hamed, L. Reid, A. Olorunnife, D. Casciano, F. Rajabiyazdi. Designing and Developing a Mobile Application for Monitoring & Visualizing Blood Pressure Data. In 2023 IEEE Sensors Applications Symposium (SAS), pages 1-6, 2023, IEEE.",
                 "link":"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10253972", 
                },
            ],
            "link":"project10"
            
        },
        {
            "title":"Patient-Generated Data Visualization Designs",
            "description":"Patients with chronic conditions are usually advised or are self-motivated to track their health data at home and present this data to the healthcare providers during clinical visits. However, often these patient-generated data collections are large, complex and individual. It makes it challenging and time-consuming for providers to understand this data during a short clinical visit. We interviewed four diabetes patients and obtained a sample of their data collections to understand their personal lifestyle and perspectives on the process of tracking, recording, and presenting their data. Based on the information we gathered from patients in our study, we designed various personal visualizations tailored to the patients.",
            "videosrc":[
                {"link":"https://youtube.com/embed/dncbUMUA5aM"},
                {"link":"https://player.vimeo.com/video/290329578"}],
            "publications":[
                {"title":"F. Rajabiyazdi, C. Perin , L. Oehlberg, S. Carpendale. Exploring the Design of Patient-Generated Data Visualizations, To appear in the Proceedings of Graphics Interface, May 2020, ACM.",
                 "link":"https://openreview.net/pdf?id=B4wNq9Rx8F", 
                },
                {"title":"F. Rajabiyazdi, C. Perin , L. Oehlberg, S. Carpendale. Exploring the Design of Patient-Generated Data Visualizations, To appear in the Proceedings of Graphics Interface, May 2020, ACM.",
                 "link":"https://openreview.net/pdf?id=B4wNq9Rx8F", 
                },
                {"title":"F. Rajabiyazdi. Exploring the Design of Visualizations to Facilitate Patient-Provider Communication, PhD Thesis, University of Calgary, December 2018",
                 "link":"https://prism.ucalgary.ca/handle/1880/109237", 
                },
                {"title":"F. Rajabiyazdi, C. Perin, L. Oehlberg, S. Carpendale. Personal Patient-Generated Data Visualizations for Diabetes Patients, Presented at the IEEE Information Visualization Conference, VIS'18, Berlin, Germany, 2018.",
                 "link":"https://fatemerajabiyazdi.github.io//Files/Publications/VISPoster-PGD.pdf", 
                },
            ],
            "link":"project1"
    
        },
        {
            "title":"Tracking Patient Recovery After Surgery",
            "description":"We track patients' recovery progress after abdominal surgery using a self-reported questionnaire. We are developing this questionnaire around the domains of recovery that are identified as important from both patients' and physicians' perspectives. Finally, we will use modern psychometric methods to ensure interpretability, precision, and sensitivity to the change of patients' score.",
            "videosrc":[],
            "publications":[
                {"title":"F. Rajabiyazdi, A. Pal, R. Alam, J. Montanez, S. Law, L. Lee, N. Pecorelli, W. Yusuke, C. D. Luciana, M. Falconi, H. Satoshi, N. E. Mayo, L. S. Feldman, and J. F. Fiore Jr. What Does ‘Recovery’ Mean To Patients Undergoing Abdominal Surgery? An International Qualitative Study. Accepted for poster presentation at the Society of American Gastrointestinal and Endoscopic Surgeons, Cleveland, OH, USA, April 1-4 2020.",
                 "link":"", 
                },
            ],
            "link":"project2"
            
        },
        {
            "title":"Doctor Patient Communication",
            "description":"We provide an integrated view of patients' and clinicians' perspectives on the communication challenges faced when patients present their medical issues to the clinicians. By combining the results of a literature review from both the HCI and medical literature with the results of clinician interviews explicitly about in-clinic communication issues, we are able to offer a more complete picture of these crucial in-clinic communication challenges. We discuss similarities and subtle but important differences between patients’ and clinicians’ perspectives. While patients and clinicians are often talking about the same issue, we found that they differ considerably in opinion and attitude. Drawing upon these subtle yet significant differences and ideas raised by the interviewed clinicians, we offer research suggestions for the design of future in-clinic communication tools.",
            "videosrc":[],
            "publications":[
                {"title":"F. Rajabiyazdi, C. Perin , J. Vermeulen, H. MacLeod, D. Gromala, S. Carpendale. Differences That Matter: In-Clinic Communication Challenge, In Proceedings of the 11th EAI International Conference on Pervasive Computing Technologies for Healthcare, pages 251–260, 2017, ACM.",
                 "link":"https://fatemerajabiyazdi.github.io//Files/Publications/Differences-2017.pdf", 
                },
                {"title":"F. Rajabiyazdi. Designing and Developing Technologies to Facilitate Clinician-Patient Communication, In Proceedings of the 2016 International Conference on Interactive Surfaces and Spaces, pages 19-24, 2016, ACM.",
                 "link":"https://fatemerajabiyazdi.github.io//Files/Publications/DC-ISS.pdf", 
                },
            ],
            "link":"project3"
            
        },
        {
            "title":"WEST: Visualizing BC Surgery Wait Times",
            "description":"We present WESt, a visualization for surgery waiting times applied to the province of British Columbia (BC) in Canada. This project is motivated by the long waiting time for surgeries in BC, which has the potential to put patients in danger and put extra pressure on clinicians. WESt helps patients select a hospital and a physician, and to explore their options in order to get their surgery as soon as possible.",
            "videosrc":[{"link":"https://player.vimeo.com/video/137219337"},],
            "publications":[
                {"title":"F. Rajabiyazdi, C. Perin, S. Carpendale. WEST: Visualizing non-Emergency Surgery Waiting Times, Presented at the IEEE Information Visualization Conference, VIS'15, Chicago, USA, 2015.",
                 "link":"https://fatemerajabiyazdi.github.io//Files/Publications/WEST-FatemeRajabiyazdi.pdf", 
                },
                ],
            "link":"project4"
            
        },
        {
            "title":"Measuring Quality of Health Goal In HIV Patients",
            "description":"This project is under development in collaboration with a McGill PhD student, Maryam Mozafarinia and Dr. Nancy Mayo. Chronic conditions require day-to-day management and goal setting occupies a pivotal place in this process. Clinically, goals are set collaboratively with the patient and a clinician because achieving a goal that is not SMART is difficult and will not produce the desired effect on health outcomes. However, patient self-defined goals lack the structure and format of clinically SMART goals. In this project, we are using text-mining techniques to measure patient self-defined goals and give patients feedback based on the results of our measurement.",
            "videosrc":[],
            "publications":[
                {"title":"S. M. Mozafarinia, F. Rajabiyazdi, and N. Mayo. Measuring quality of health outcome goals using text mining techniques. Poster presentation at International Society for Quality of Life research, 26th annual conference, San Diego, USA, 2019.",
                 "link":"", 
                },
                {"title":"S. M. Mozafarinia, F. Rajabiyazdi, and N. Mayo. Text mining application for measuring quality of health outcome goals. Poster presentation at Centre for Outcome Research & Evaluation Research Day, Montreal, Canada, 2019.",
                 "link":"", 
                },
                ],
            "link":"project5"
            
        },
        {
            "title":"High Resolution Large Displays",
            "description":"A driving force behind the design of increasingly large and high resolution displays (LHRDs) has been the need to support the explosion of data in the natural sciences such as physics, chemistry, and biology. However, our experience with a LHRD accessible to researchers across multiple disciplines has shown that they are useful for a wide range of research activities outside the natural sciences. We conducted in-context, semi-structured interviews with researchers from a variety of disciplines about their experiences using the LHRD with their own data. Notably, it became apparent that the size and resolution of the LHRD supported a multitude of activities related to observation, for which zooming or other enlargement methods on standard resolution screens were not sufficient. The interview findings lead to implications for further research into supporting a broader range of disciplines in using large, high-resolution displays.",
            "videosrc":[],
            "publications":[
                {"title":"F. Rajabiyazdi, J. Walny, C. Mah, J. Brosz, S. Carpendale. Understanding Researchers’ Use of a Large High-Resolution Display Across Disciplines, In Proceedings of the International Conference on Interactive Tabletops and Surfaces, pages 107-116, 2015, ACM.",
                 "link":"https://fatemerajabiyazdi.github.io//Files/Publications/FatemeBigImages.pdf", 
                },
                ],
            "link":"project6"
            
        },
        {
            "title":"NeckLan: Language Visualization",
            "description":"We present NeckLan, a physical visualization in form of a decorative pendant for a necklace. The encoded data consists of the languages a person can speak, their corresponding language families and the person's proficiency for each language. This project is motivated by internationality and globalization of research laboratories and conferences. In an iterative design process we drew sketches and designed NeckLan. Furthermore, we explore the possible usages of NeckLan for different purposes.",
            "videosrc":[],
            "publications":[
                {"title":"F. Rajabiyazdi, C. Perin, S. Carpendale. WEST: Visualizing non-Emergency Surgery Waiting Times, Presented at the IEEE Information Visualization Conference, VIS'15, Chicago, USA, 2015.",
                 "link":"https://fatemerajabiyazdi.github.io//Files/Publications/WEST-FatemeRajabiyazdi.pdf", 
                },
                ],
            "link":"project7"
            
        },
        {
            "title":"17-inch BackPad Mobile Device",
            "description":"What will a truly large iPad be like? Will it have a touchscreen at the front, or will some other changes be forced by the sheer sizeof the device? We mocked up a working device using a 17-inch Macbook laptop screen. The device size was too large for us to comfortably hold with one hand while using the other hand for touch input, so we placed the touch pad at the back. Hence, wecall our device a BackPad. In the first experiment, we compared user performance with our 17-inch BackPad and a normal iPad in game and typing tasks. The results on the game completion time and score were similar, and users liked our large screen, while time but not spelling errors were different in the BackPad versus the iPad. For the second experiment, we compared the front touchscreen versus the back trackpad user performance on same sized devices. Similar results to the first experiment were found on game completing time and score.",
            "videosrc":[],
            "publications":[
                {"title":"F. Rajabiyazdi, Interface for iPads with different screen sizes, Master Thesis, School of Computer Science, Australian National University, 2012.",
                 "link":"https://fatemerajabiyazdi.github.io//Files/Publications/MasterThesis.pdf", 
                },
                {"title":"F. Rajabiyazdi, T. Gedeon. Comparing User Performance on an iPad to a 17-inch BackPad, In Proceedings of the Complex, Intelligent and Software Intensive Systems (CISIS), pages 469-474, 2012, IEEE. ",
                 "link":"https://ieeexplore.ieee.org/document/6245644", 
                },
                {"title":"F. Rajabiyazdi, T. Gedeon. Hand Grip Strength on a Large PDA: Holding While Reading Is Different from a Functional Task, In Proceedings of the Complex, Intelligent and Software Intensive Systems (CISIS), 2012, pages 475-480, 2012, IEEE.",
                 "link":"https://ieeexplore.ieee.org/document/6245645", 
                },
                ],
            "link":"project8"
            
        },
        {
            "title":"Leitner System App",
            "description":"Leitner app is designed to help people memorize flashcards bearing information as words or numbers, on either or both sides. One writes a question on a card and an answer overleaf. Flashcards can bear vocabulary, historical dates, formulas or any subject matter that can be learned via a question and answer format. This app using Leitner system which is a widely used method to efficiently use flashcards that was proposed by the German science journalist Sebastian Leitner in the 1970s. It is a simple implementation of the principle of spaced repetition, where cards are reviewed at increasing interval.",
            "videosrc":[],
            "publications":[],
            "link":"project9"
            
        },

        
    ],
    "positiveTechProjects":[
        {
            "title":"MUZE: Multisensory Music Sharing to Foster Emotional Regulation and Social",
            "description":"Muze is an interactive device to facilitate social connection and mood regulation, through music. informatic framework. The device utilizes music creation to externalize feelings and emotions, supports self-expression, especially when verbal communication is limited or less comfortable, and promotes collaboration and turn-taking. ",
            "imageSrc":"images/projectImages/MUZE3.png",
            "id":"1",
        },
        {
            "title":"A behaviour-assessing toy that supports ADHD children",
            "description":"Kinesiofeedback play-based toy for ADHD children (KITA) is a behavioural technology device that aims to improve self-monitoring and self-control of kinetic behaviour for children between 4-7 years old. KITA explores the design of a Tangible User Interface that 1) measures kinetic activity by means of an accelerometer and 2) promotes behaviour control in ADHD children during class time by displaying body behaviour information in form of a smiley face. The final prototype is inspired by the design of a creature-like Tangible User Interface (TUI). The creature becomes a friend that helps the child to improve his/her self-control.",
            "imageSrc":"images/projectImages/KITA-PCB.jpg",
            "id":"2",
        },
        {
            "title":"Designing reflective healthcare informatics",
            "description":"ESTHER, an Experience Sampling tool for Total Hip Replacement (THR) addresses the challenge to design tools that fit in the user’s home context and recovery process. ESTHER is an in-situ ecological design tool that aims to capture an acute view of the life of THR patients during recovery at home. It samples and assesses two types of data: a) Objective (quantitative) data collected from sensors and b) subjective (qualitative) data collected from patients’ events of sequences in daily life and moods. The tool determined their needs regarding hip recovery and their variations over time by integrating these data and providing rich information to take informed actions. The value of this tool is to facilitate reflective mechanisms to support patients’ empowerment, with the potential to support physiotherapists and caregivers in the recovery process with the collected data.",
            "imageSrc":"images/projectImages/ESTHER_1.webp",
            "id":"3",
        },
        {
            "title":"The Memory Cache",
            "description":"The impact of losing a close friend and grief due to the natural process of death is something that is universal among all populations on Earth. Different cultures' families and groups deal with death differently, but common among all groups is the fact that the process of mourning the death of a family or friend can cause significant bouts of mental and physical stress on an individual. Bereavement, which is the sadness caused to an individual after the loss of a close friend or family due to their death, is universal across the world. This is an assistive storytelling device designed to help users feel more socially connected through the collection and sharing of stories and memorabilia.",
            "imageSrc":"images/projectImages/CACHE1.png",
            "id":"4",
        },
        {
            "title":"Better Sanitation Practices",
            "description":"Designing a tool to support female adolescents in Mozambique to have better personal/community sanitation and hygiene practices. The project undertakes the challenge to design localized technology for sensitive communities. Waterlution, a non-profit organization, collaborates in this project. ",
            "imageSrc":"images/projectImages/sanitation.jpg",
            "id":"5",
        }
    ]
}; 

//fetching query parameters from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
selection = urlParams.get('project')//project index
lab= urlParams.get('lab')
//displaying data on basis of lab
if(lab=="healthViz"){
    if(jsonData.healthVisprojects[selection-1].videosrc.length>0 && jsonData.healthVisprojects[selection-1].publications.length>0){
        document.getElementById("content").innerHTML =`
                <article>    
                        <h2>${jsonData.healthVisprojects[selection - 1].title}</h2>
                        <p>${jsonData.healthVisprojects[selection - 1].description}</p>
                        <h3>Videos<h3>
                        ${jsonData.healthVisprojects[selection-1].videosrc.map(function (src) {
                        return `
                            <p>
                            <iframe width="560" height="315" src="${src.link}" frameborder="0" allowfullscreen></iframe>
                            </p>`
                        }).join(' ')}    
                        <h3>Publications:</h3>
                        ${jsonData.healthVisprojects[selection-1].publications.map(function (paper) {
                            return `
                            <p style="margin:0 0 1em 0;">${paper.title}
                            <span class="links">
                                <a href="${paper.link}">PDF</a>
                            </span>
                            </p>`
                            }).join(' ')}
                          
                </article>`+
                `<div class="centerButton">
                <a href="research.html" class="button">See all projects</a>       
            </div>`;
        }
        if (jsonData.healthVisprojects[selection - 1].videosrc.length == 0 && jsonData.healthVisprojects[selection - 1].publications.length > 0) {
            document.getElementById("content").innerHTML = `
                <article>
                    <h2>${jsonData.healthVisprojects[selection - 1].title}</h2>
                    <p>${jsonData.healthVisprojects[selection - 1].description}</p>
                    <h3>Publications:</h3>
                    ${jsonData.healthVisprojects[selection - 1].publications.map(function (paper) {
                        return `
                        ${paper.award ? `<strong style="color: orange;">${paper.award}</strong>` : ''}
                        <p style="margin: 0 0 1em 0;">${paper.title}
                        <span class="links">
                            <a href="${paper.link}">PDF</a>
                        </span>
                        </p>`;
                    }).join(' ')}
                </article>
                <div class="centerButton"></div>
            `;
        }
        
        
        if(jsonData.healthVisprojects[selection-1].videosrc.length==0 && jsonData.healthVisprojects[selection-1].publications.length==0){
            document.getElementById("content").innerHTML =`
                    <article>    
                            <h2>${jsonData.healthVisprojects[selection - 1].title}</h2>
                            <p>${jsonData.healthVisprojects[selection - 1].description}</p>  
                            
                    </article>`+
                    `<div class="centerButton">
                    <a href="research.html" class="button">See all projects</a>       
                </div>`;
        }
}
else if(lab=="positiveTech"){
    document.getElementById("content2").innerHTML =`
                <div class="col-4">
                    <img style="width:100%; height: 300px;" src="${jsonData.positiveTechProjects[selection - 1].imageSrc}" alt="Logo">
                </div>
                <div class="col-8">    
                        <h2>${jsonData.positiveTechProjects[selection - 1].title}</h2>
                        <p>${jsonData.positiveTechProjects[selection - 1].description}</p>      
                </div>`+
                `<div class="centerButton">
                <a href="researchLab.html" class="button">Back</a>       
            </div>`;
        }

//function for navigating to a specific section on people tab        
function selectPeople(loc){
    //setting path parameter as the choice selected in the dropdown
    link='people.html?people='+loc;
    window.location=link;
    
}