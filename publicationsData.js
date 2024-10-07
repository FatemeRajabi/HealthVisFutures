const publications = [
    // Year : 2024
    
    {
        imgSrc: "images/research/hci/elephantLargeDisplay.png",
        event: "PACM HCI'24",
        award: "",
        title: "The Elephant in the Room: Expert Experiences Designing, Developing and Evaluating Data Visualizations on Large Displays",
        downloadLink: 'https://carleton.ca/rajabiyazdi/cu-files/iss-2024-challenges-of-designing-and-developing-vis-on-large-displays/',
        abstract: 'Large displays can provide the necessary space and resolution for comprehensive explorations of data visualizations. However, designing and developing visualizations for such displays pose distinct challenges. Identifying these challenges is essential for data visualization designers and developers creating data visualizations on large displays. In this study, we aim to identify the challenges designers and developers encounter when creating data visualizations for large displays. We conducted semi-structured interviews with 13 experts experienced in creating data visualizations for large displays and, through affinity diagramming, categorized the challenges. We identified several challenges in designing, developing, and evaluating data visualizations on large displays, as well as building infrastructure for large displays. Design challenges included scaling visual encodings, limited design tools, and adopting design guidelines for large displays. In the development phase, developers faced difficulties working away from large displays and dealing with insufficient tools and resources. During the evaluation phase, researchers encountered issues with individuals’ unfamiliarity with large display technology, interaction interruptions by technical limitations such as cursor visibility issues, and limitations in feedback gathering. Infrastructure challenges involved environmental constraints, technical issues, and difficulties in relocating large display setups. We share the lessons learned from our study and provide future directions along with research project examples to address these challenges.',
        authors: [
            
            { name: "Mahsa Sinaei Hamad", imgSrc: "images/studentImages/Mahsa3.png", url: "peopleDetails.html?type=stud&people=mahsa-sinaei" },
            { name: "Pak Kwan", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Matthew Klich", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Jillian Aurisano", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" }
        ],
        additionalDetails: "Proceedings of the ACM on Human-Computer Interaction 2024, Pages 1-18",
        category:"human"
    },
    {
        imgSrc: "images/research/ai/textvista.png",
        event: "GI '24",
        award: "",
        title: "TextVista: NLP-Enriched Time-Series Text Data Visualizations",
        downloadLink: 'https://doi.org/10.1145/3670947.3670971',
        abstract: 'There is a vast amount of unstructured text data generated every day analyzing and making sense of these text-based datasets is a complex, cumbersome task. The existing visualization tools that analyze text data leveraging Natural Language Processing (NLP) techniques, are often tailored for structured text-based data. They also fail to support reading, a crucial analysis task to validate the output of NLP techniques. We designed and developed TextVista, an NLP-enriched visualization tool that supports analysts during their analysis of unstructured text with temporal references. Our tool combines techniques including clustering, sentiment analysis, and threat detection with three views that visualize high-level patterns in the data to encourage reading. We report on TextVistas iterative design process, which included a focus group to distill design requirements, a think-aloud interview study with data analysts to understand their impressions of the tool, and a diary study to assess its long-term usage. Through this process, we identified how TextVista supported the analysis of unstructured text with temporal references using NLP techniques and fostered methods to promote reading in situ. TextVista also encouraged serendipity when analyzing data via its question-focused overviews and flexible avenues to explore data.',
        authors: [
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Shri Harini Ramesh", imgSrc: "images/studentImages/Shri2.jpg", url: "peopleDetails.html?type=prof&people=shri-Harini" },
            { name: "Beck Langstone", imgSrc: "images/studentImages/Beck2.jpg", url: "peopleDetails.html?type=prof&people=beck-langstone" },
            { name: "Daniil Kulik", imgSrc: "images/studentImages/dummy.png", url: "peopleDetails.html?type=stud&people=daniil" },
            { name: "Justin Pontalba", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "Proceedings of Graphics Interface 2024, Pages 1-14",
        category:"ai"
    },
    {
        imgSrc: "images/research/vis/strokevis.png",
        event: "GI '24",
        award: "Best Student Paper Award",
        title: "A Data Visualization Tool for Patients and Healthcare Providers to Communicate during Inpatient Stroke Rehabilitation",
        downloadLink: 'https://doi.org/10.1145/3670947.3670978',
        abstract: 'Stroke is one of the leading causes of disability worldwide. The efficacy of stroke recovery is determined by various factors, including patient adherence to their rehabilitation program. Effective communication between healthcare providers and patients is crucial for promoting patients adherence to rehabilitation programs. Aiming to support patient-healthcare provider communication during inpatient stroke rehabilitation, we 1. conducted semi-structured interviews with healthcare providers with expertise in inpatient stroke recovery to extract design requirements for visualizing stroke recovery progress. Using these design requirements, we 2. designed a data visualization tool representing stroke recovery. We 3. sought feedback on the visualization designs from healthcare providers and patients and integrated their feedback into the designs. Informed by the results of our studies, we provided several considerations for designing future visualization tools for patients and providers to communicate during inpatient stroke rehabilitation.',
        authors: [
            { name: "Shri Harini Ramesh", imgSrc: "images/studentImages/Shri2.jpg", url: "peopleDetails.html?type=stud&people=shri-Harini" },
            { name: " Alicia Ouskine", imgSrc: "images/studentImages/Alicia.jpg", url: "peopleDetails.html?type=stud&people=alicia-ouskine" },
            { name: " Elahe Khorasani", imgSrc: "images/studentImages/Elaheh2.jpg", url: "peopleDetails.html?type=stud&people=elaheh-khorasani" },
            { name: "Mona Ebrahimipour", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Hillel Finestone", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: " Adrian D. C. Chan", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" }
        ],
        additionalDetails: "Proceedings of Graphic Interface 2024, Pages 1-14",
        category: "data"
    },
    {
        imgSrc: "images/research/handm/codi24.png",
        event: "Colorectal Dis. '24",
        award: "",
        title: "Exploring patients' needs and expectations for information on sexual dysfunction after rectal cancer treatment: A qualitative study",
        downloadLink: 'https://onlinelibrary.wiley.com/doi/10.1111/codi.17048',
        abstract: 'Sexual dysfunction is an important, and often overlooked, sequela of rectal cancer treatment with significant implications for patients quality of life. This study explores patients and surgeons perspectives on information needs related to sexual health following rectal cancer treatment and highlights important gaps in survivorship care, as well as future avenues to address these gaps.',
        authors: [
            { name: "Vincent Brissette", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Olivia Monton", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Marie Demian", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Nasra Al Busaidi,", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Jeongyoon Moon", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Sarah Sabboobeh", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Carol-Ann Vasilevsky", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Marylise Boutros", imgSrc: "images/studentImages/dummy.png", url: "" },

        ],
        additionalDetails: "Colorectal Dis. 2024; 26: 1535–1543.",
        category:"health"
    },
    {
        imgSrc: "images/research/vis/visteach.png",
        event: "TVCG '24",
        award: "",
        downloadLink: 'https://www.computer.org/csdl/journal/tg/2024/01/10310184/1RSX6ov9qgg',
        abstract: 'This paper is a call to action for research and discussion on data visualization education. As visualization evolves and spreads through our professional and personal lives, we need to understand how to support and empower a broad and diverse community of learners in visualization. Data Visualization is a diverse and dynamic discipline that combines knowledge from different fields, is tailored to suit diverse audiences and contexts, and frequently incorporates tacit knowledge. This complex nature leads to a series of interrelated challenges for data visualization education. Driven by a lack of consolidated knowledge, overview, and orientation for visualization education, the 21 authors of this paper—educators and researchers in data visualization—identify and describe 19 challenges informed by our collective practical experience. We organize these challenges around seven themes People, Goals & Assessment, Environment, Motivation, Methods, Materials, and Change. Across these themes, we formulate 43 research questions to address these challenges. As part of our call to action, we then conclude with 5 cross-cutting opportunities and respective action items: embrace DIVERSITY+INCLUSION, build COMMUNITIES, conduct RESEARCH, act AGILE, and relish RESPONSIBILITY. We aim to inspire researchers, educators and learners to drive visualization education forward and discuss why, how, who and where we educate, as we learn to use visualization to address challenges across many scales and many domains in a rapidly changing world: viseducationchallenges.github.io.',
        title: "Challenges and opportunities in data visualization education: A call to action",
        authors: [
            { name: "Benjamin Bach", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Mandy Keck", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Tatiana Losev", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Isabel Meirelles", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Jason Dykes", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Robert S. Laramee", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Mashael AlKadi", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Christina Stoiber", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Samuel Huron", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Charles Perin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Luiz Morais", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Wolfgang Aigner", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Doris Kosminsky", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Magdalena Boucher", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Søren Knudsen", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Areti Manataki", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Jan Aerts", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Uta Hinrichs", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Jonathan C. Roberts", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: " Sheelagh Carpendale", imgSrc: "images/studentImages/dummy.png", url: "" },

        ],
        additionalDetails: "IEEE Transactions on Visualization & Computer Graphics, vol. 30, no. 01, pp. 649-660, 2024.",
        category: "data"
    },

    // Year : 2023
    {
        imgSrc: "images/research/vis/4dvisheart.png",
        event: "SPIE '23",
        award: "",
        downloadLink: 'https://doi.org/10.1117/12.2654482',
        abstract: 'Non-invasive cardiac radioablation is an emerging therapy for the treatment of ventricular tachycardia (VT). Electrophysiologic, anatomic and molecular imaging studies are used to localize the breakout region of the VT, but current therapy planning is tedious and prone to error due to a lack of data integration. In this work we present the design and development of a software platform and workflow to facilitate precision-targeted therapy planning, including affine non-rigid multimodality image registration and 2D-3D-4D visualization across modalities. Registration accuracy was measured using Dice Similarity and Hausdorff Distance of total left ventricle tissue volumes, which were 0.914 ± 0.013 and 2.65mm ± 0.34mm, respectively (average ± standard deviation). Electrocardiographic maps of VT parameters were registered temporally to surface electrode data to recreate familiar ECG tracings. 2D polar maps, 3D slice-views, and 4D cine-renderings were used for hybrid fusion displays of molecular and electroanatomic images. Segmentations of the cardiac-gated contrast CT blood-pool and molecular images of perfusion and glucose metabolism were used to identify regions of fibrotic scar tissue and hibernating myocardium in the 3D scene. Ablation targets were painted onto the 2D polar map, 3D slice or 4D-cine views, and exported as DICOM for import to radiotherapy planning software. We anticipate that the combination of accurate multimodality image registration and visualizations will enable more reliable therapy planning, expedite treatment and may improve understanding of the underlying pathophysiology of these lethal arrhythmias.',
        title: "A 4D visualization tool for treatment planning of non-invasive radioablation in patients with ventricular tachycardia",
        authors: [
            { name: "Connor Haberl", imgSrc: "images/studentImages/Connor.jpg", url: "peopleDetails.html?type=stud&people=connor-haberl" },
            { name: "Andrew M. Crean", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Katie Lekx-Toniolo", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Elsayed Ali", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Pablo B. Nery", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Girish M. Nair", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Graham Cook", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Calum Redpath", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Robert deKemp", imgSrc: "images/studentImages/dummy.png", url: "" }

        ],
        additionalDetails: "Proceedings Volume 12466, Medical Imaging 2023: Image-Guided Procedures, Robotic Interventions, and Modeling; 124660V (2023)",
        category: "data"
    },
    {
        imgSrc: "images/research/handm/aginginplace.png",
        event: "HCII '23",
        award: "",
        downloadLink: 'https://link.springer.com/chapter/10.1007/978-3-031-34917-1_10#citeas',
        abstract: 'This paper reports on research being conducted under the National Research Council of Canada’s Aging in Place Program. The objective of this program is to evaluate and assist in the adaptation of assistive technologies for older adults living at home. The aims are to produce guidelines and prototypes needed to design safe, usable, and affordable aging in place technology solutions for virtual care. In preparation for this initiative, relevant findings are presented from a scoping review of the literature. Additionally, we present the framework for surveying older adults’ perspectives on their lived experiences with virtual care and digital technologies during the COVID-19 pandemic, which drove uptake of virtual care, particularly in critical areas such as cardiac rehabilitation. Here we discuss the target population for surveillance and describe the survey design, validation, and sampling approach that could achieve the widest range of perspectives; identify gaps, barriers, and challenges. Additionally, we explore remote usability assessment methods available for aging in place technology co-design and evaluation efforts.',
        title: "Aging in Place Virtual Care Technology from the User Experience Perspective",
        authors: [
            { name: "Irina Kondratova", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Helene Fournier ", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
        ],
        additionalDetails: "Human Aspects of IT for the Aged Population. HCII 2023. Lecture Notes in Computer Science, vol 14043. Springer, Cham. ",
        category:"health"
    },
    {
        imgSrc: "images/research/hci/mobileappsas.png",
        event: "IEEE SAS '23",
        award: "",
        title: "Designing and Developing a Mobile Application for Monitoring & Visualizing Blood Pressure Data",
        downloadLink: 'https://ieeexplore.ieee.org/document/10253972',
        abstract: 'High blood pressure is one of the major causes of cardiovascular diseases, renal failure, and even sudden death. To avoid developing these health issues, it is important to consistently monitor blood pressure levels. Monitoring blood pressure levels regularly allows people to observe changes in their blood pressure measurements and contact their healthcare providers for guidance if needed. The aim of this paper is designing and developing a mobile application that can assist individuals to better understand the changes in their blood pressure levels by introducing a novel approach to visualizing blood pressure data and managing missing data. Employing a user-centered design approach, we designed and developed an app. To complete this study, we conducted a literature review to identify key design requirements for such apps and then, designed our low-fidelity prototype based on these design requirements. Next, we consulted with two experts to obtain their feedback on the content, presentation, and usability of our initial low-fidelity prototype. Based on these experts feedback we designed our mid-fidelity and high-fidelity prototype. Eventually, we conducted a user evaluation study to evaluate our high-fidelity prototype. The results demonstrated this app provides a clear visual representation of blood pressure measurements over time.',
        authors: [
            { name: "Mahsa Sinaei Hamed", imgSrc: "images/studentImages/Mahsa3.png", url: "peopleDetails.html?type=stud&people=mahsa-sinaei" },
            { name: "Laura Reid", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Alice Olorunnife", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "David Casciano", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" }

        ],
        additionalDetails: "2023 IEEE Sensors Applications Symposium (SAS), Ottawa, ON, Canada, 2023, pp. 1-6",
        category: "human"
    },
    {
        imgSrc: "images/research/handm/SCC23.png",
        event: "SCC '23",
        award: "",
        downloadLink: 'https://link.springer.com/article/10.1007/s00520-023-07861-w',
        abstract: 'Extended delays to cancer surgery may have significant repercussions on patients’ mental health, functional capacity, and long-term survival. As healthcare systems address the backlog of elective cases and prepare for the future, it is important that patients’ perspectives are taken into consideration to inform healthcare systems’ response to the backlog of cases and ensure preparedness for future healthcare emergencies. Therefore, the aim of this qualitative study was to understand the experiences of patients undergoing cancer surgery during the COVID-19 pandemic.',
        title: "Patients’ experiences undergoing cancer surgery during the COVID-19 pandemic: a qualitative study",
        authors: [
            { name: "Makena Pook", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "ahereh Najafi", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Maxime Lapointe-Gagner", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Philip Nguyen-Powanda,", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Hiba Elhaj", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: " Pepa Kaneva", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Lawrence Lee", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Liane S. Feldman", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Julio F. Fiore Jr", imgSrc: "images/studentImages/dummy.png", url: "" },
        ],
        additionalDetails: "Support Care Cancer 31, 400 (2023)",
        category:"health"
    },
    {
        imgSrc: "images/research/hci/onlinecare.png",
        event: "Colorectal Dis '23",
        award: "",
        title: "An online educational and supportive care application for rectal cancer survivors with low anterior resection syndrome: A mixed methods pilot study",
        downloadLink: 'https://onlinelibrary.wiley.com/doi/10.1111/codi.16665',
        abstract: 'Mobile health technologies are being used to promote self-management in chronic disease and have been shown to change health behaviours and outcomes. The online patient-centred application on low anterior resection syndrome (eLARS) fills a gap in our current rectal cancer care and we believe it has the potential to enhance the quality of life of LARS patients.',
        authors: [
            { name: "Monton Olivia", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Smith Allister", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Moon Jeongyoon", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Demian Marie", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Garfinkle Richard", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Vasilevsky Carol-Ann", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Boutros Marylise", imgSrc: "images/studentImages/dummy.png", url: "" }

        ],
        additionalDetails: "Colorectal Dis. 2023; 25: 1812–1820.",
        category: "human"
    },
    {
        imgSrc: "images/research/handm/Endosc.png",
        event: "Endosc '23",
        award: "",
        downloadLink: 'https://link.springer.com/article/10.1007/s00464-022-09472-8',
        abstract: 'Opioid-free analgesia (OFA) may mitigate opioid-related harms after outpatient general surgery; however, the comparative effectiveness of this approach should be assessed in robust randomized controlled trials (RCTs). Undertaking an RCT on OFA raises important practical concerns, including surgeon and patient hesitation regarding pain management without opioids. We conducted a qualitative study to explore patients’ and clinicians’ perspectives and experiences with a pilot trial focused on OFA after outpatient general surgery.',
        title: "S110—opioid-free analgesia after outpatient general surgery: A qualitative study focused on the perspectives of patients and Clinicians involved in a pilot trial",
        authors: [
            { name: "Uyen Do", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Makena Pook", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Tahereh Najafi", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Charbel El-Kefraoui", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Saba Balvardi", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Natasha Barone", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Hiba Elhaj", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Philip Nguyen-Powanda", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Lawrence Lee", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Gabriele Baldini", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Liane S. Feldman", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Julio F. Fiore", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "Surg Endosc 37, 2269–2280 (2023)",
        category:"health"
    },
    {
        imgSrc: "images/research/handm/eic.png",
        event: "Endosc '23",
        award: "",
        downloadLink: 'https://link.springer.com/article/10.1007/s00464-022-09580-5',
        abstract: 'Early ileostomy closure (EIC), 2 weeks from creation, is a relatively new practice. Multiple studies have demonstrated that this approach is safe, feasible, and cost-effective. Despite the demonstrated benefits, this is neither routine practice, nor has it been studied, in North America. This study aimed to assess patient and surgeon perspectives about EIC.',
        title: "Patient and surgeon preferences for early ileostomy closure following restorative proctectomy for rectal cancer: why aren’t we doing it?",
        authors: [
            { name: "Natasha G. Caminsky", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Jeongyoon Moon", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Nancy Morin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Karim Alavi", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Rebecca C. Auer", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Liliana G. Bordeianou", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Sami A. Chadi", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Sébastien Drolet", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Amandeep Ghuman", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Alexander Sender Liberman", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Tony MacLean", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Ian M. Paquette", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Jason Park", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Sunil Patel", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Scott R. Steele", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Patricia Sylla", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Steven D. Wexner", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Carol-Ann Vasilevsky", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Marylise Boutros", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "Surg Endosc 37, 669–682 (2023)",
        category:"health"
    },

    // Year : 2022
    {
        imgSrc: "images/research/vis/visguide22.png",
        event: "VisGuides '22",
        award: "",
        downloadLink: 'https://www.computer.org/csdl/proceedings-article/visguides/2022/971200a023/1Jjyv7C0wWQ',
        abstract: 'This paper draws together nine strategies for creative visualization activities. Teaching visualization often involves running learning activities where students perform tasks that directly support one or more topics that the teacher wishes to address in the lesson. As a group of educators and researchers in visualization, we reflect on our learning experiences. Our activities and experiences range from dividing the tasks into smaller parts, considering different learning materials, to encouraging debate. With this paper, our hope is that we can encourage, inspire, and guide other educators with visualization activities. Our reflections provide an initial starting point of methods and strategies to craft creative visualisation learning activities, and provide a foundation for developing best practices in visualization education.',
        title: "Reflections and considerations on running creative visualization learning activities",
        authors: [
            { name: "Jonathan C. Roberts", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Benjamin Bach", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Magdalena Boucher", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fanny Chevalier", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Alexandra Diehl", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Uta Hinrichs", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Samuel Huron", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Andy Kirk", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Søren Knudsen", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Isabel Meirelles", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Rebecca Noonan", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Laura Pelchman", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Christina Stoiber", imgSrc: "images/studentImages/dummy.png", url: "" },
        ],
        additionalDetails: "2022 IEEE 4th Workshop on Visualization Guidelines in Research, Design, and Education (VisGuides), Oklahoma City, OK, USA, 2022 pp. 23-30.",
        category: "data"
    },
    {
        imgSrc: "images/research/hci/jmir.png",
        event: "JMIR '22",
        award: "",
        downloadLink: 'https://aging.jmir.org/2022/4/e37772',
        abstract: 'This study aimed to design, develop, and evaluate an mHealth app prototype to support older adults in the self-management of postfracture acute pain using a human-centered design (HCD) approach, which involves focusing on understanding the context of use, needs, and problems of the end users to develop the technological solution [23,24]. The main focus of this app is on medication management and adherence with support for other pain management needs such as educational materials and external available resources. The novelty of our work lies in the design and development process of the mHealth app, as we established evidence-based design requirements for our prototype and included older adults and health care professionals in the process.',
        title: "Mobile app prototype in older adults for postfracture acute pain management: user-centered design approach",
        authors: [
            { name: "Kevin Tran-Nguyen", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Caroline Berger", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Roxanne Bennett", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Michelle Wall", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Suzanne N Morin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" }
        ],
        additionalDetails: "JMIR Aging 2022;5(4):e37772",
        category: "human"
    },
    {
        imgSrc: "images/research/ai/mining.png",
        event: "Qual Life '22",
        award: "",
        downloadLink: 'https://link.springer.com/article/10.1007/s11136-022-03245-5',
        abstract: 'The objective of this study was to estimate, among people living with HIV, to what extent providing feedback on their health outcomes, compared to no feedback, will affect the number and specificity of self-defined goals. A personalized feedback profile was produced for individuals enrolled in a Canadian HIV Brain Health Now study. Goal specificity was measured by total number of specific words (matched to a domain-specific developed lexicon) per person-words using text mining techniques. Of 176 participants enrolled and randomly assigned to feedback and control groups, 110 responses were received. The average number of goals was similar for both groups (3.7 vs 3.9). The number of specific words used in the goals formulated by the feedback and control group were 642 and 739, respectively. Specific nouns and actionable verbs were present to some extent and “measurable” and “time-bound” words were mainly missing. Negative binomial regression showed no difference in goal specificity among groups (RR = 0.93, 95% CI 0.78–1.10). Goals set by both groups overlapped in 8 areas and had little difference in rank. Personalized feedback profile did not help with formulation of high-quality goals. Text mining has the potential to help with difficulties of goal evaluation outside of the face-to-face setting. With more data and use of learning models automated answers could be generated to provide a more dynamic platform.',
        title: "Effectiveness of a personalized health profile on specificity of self-management goals among people living with HIV in Canada: findings from a blinded pragmatic randomized controlled trial",
        authors: [
            { name: "Maryam Mozafarinia", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Marie-Josee Brouillette", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Lesley K Fellows", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Bärbel Knäuper", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Nancy E Mayo", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "Qual Life Res 32, 413–424 (2022).",
        category:"ai"
    },
    // Year : 2021
    {
        imgSrc: "images/research/handm/jama.png",
        event: "JAMA '21",
        award: "",
        downloadLink: 'https://jamanetwork.com/journals/jamasurgery/fullarticle/2779967',
        abstract: 'In this international qualitative study of 30 patients undergoing abdominal surgery, the meaning of recovery was found to go beyond traditional clinical parameters. The elements of recovery identified (returning to habits and routines, resolution of symptoms, overcoming mental strains, regaining independence, and enjoying life) should be taken into account when developing patient-centered strategies to measure and improve recovery after abdominal surgery.',
        title: "Understanding the meaning of recovery to patients undergoing abdominal surgery",
        authors: [
            { name: "Fateme Rajabiyazdi, PhD", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Roshni Alam, MSc", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Aditya Pal, MS", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Joel Montanez, PhD", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Susan Law, MD, PhD", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Nicolò Pecorelli, MD", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Yusuke Watanabe, MD, PhD", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Luciana D. Chiavegato, PhD", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Massimo Falconi, MD", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Satoshi Hirano, MD, PhD", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Nancy E. Mayo, PhD", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Lawrence Lee, MD, PhD", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Liane S. Feldman, MD", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Julio F. Fiore, Jr, PhD", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "JAMA Surg. 2021;156(8):758-765.",
        category:"health"
    },
    {
        imgSrc: "images/research/ai/word.png",
        event: "Qual Life '21",
        award: "",
        downloadLink: 'https://link.springer.com/article/10.1007/s11136-020-02555-w',
        abstract: 'This paper presents the preparatory phase for a randomized controlled trial on a method to stimulate setting “SMART” goals in people living with HIV in Canada. The specific aims of this work were (1) to develop a personalized health outcome profile as a feedback tool to improve self-management in people living with chronic conditions such as HIV and (2) to evaluate the interpretability and usefulness of the feedback tool for setting specific goals. For clarity, these two objectives are presented as study 1 and study 2. Methods and results for each study have been presented separately followed by a general discussion on the overall results. This is an exploratory study and the data source for this paper was the Positive Brain Health Now (+BHN) cohort (details of the +BHN has been provided in study 1).',
        title: "Development and usability of a feedback tool, “My Personal Brain Health Dashboard”, to improve setting of self-management goals among people living with HIV in Canada",
        authors: [
            { name: "Maryam Mozafarinia", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Marie-Josee Brouillette", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Lesley K Fellows", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Nancy E Mayo", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "Qual Life Res 30, 3199–3211 (2021)",
        category:"ai"
    },
    {
        imgSrc: "images/research/vis/patientgeneratedvis.png",
        event: "CGA '21",
        award: "",
        downloadLink: 'https://www.computer.org/csdl/magazine/cg/2021/06/09646539/1zdLG9DEJGg',
        abstract: 'Designing patient-collected health data visualizations to support communicating patient data during clinical visits is a challenging problem due to the heterogeneity of the parties involved: patients, healthcare providers, and healthcare systems. Designers must ensure that all parties’ needs are met. This complexity makes it challenging to find a definitive solution that can work for every individual. We have approached this research problem—communicating patient data during clinical visits—as a wicked problem. In this article, we outline how wicked problem characteristics apply to our research problem. We then describe the research methodologies we employed to explore the design space of individualized patient data visualization solutions. Lastly, we reflect on the insights and experiences we gained through this exploratory design process. We conclude with a call to action for researchers and visualization designers to consider patients’ and healthcare providers’ individualities when designing patient data visualizations.',
        title: "Communicating Patient Health Data: A Wicked Problem",
        authors: [
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Charles Perin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: " Lora Oehlberg", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: " Sheelagh Carpendale", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "IEEE Computer Graphics and Applications, vol. 41, no. 06, pp. 179-186, 2021.",
        category: "data"
    },

    // Year : 2020
    {
        imgSrc: "images/research/vis/patientvis2.png",
        event: "GI '20",
        award: "",
        downloadLink: 'https://graphicsinterface.org/wp-content/uploads/gi2020-36.pdf',
        abstract: 'We were approached by a group of healthcare providers who are involved in the care of chronic patients looking for potential technologies to facilitate the process of reviewing patient-generated data during clinical visits. Aiming at understanding the healthcare providers’ attitudes towards reviewing patient-generated data, we (1) conducted a focus group with a mixed group of healthcare providers. Next, to gain the patients’ perspectives, we (2) interviewed eight chronic patients, collected a sample of their data and designed a series of visualizations representing patient data we collected. Last, we (3) sought feedback on the visualization designs from healthcare providers who requested this exploration. We found four factors shaping patient-generated data: data & context, patient’s motivation, patient’s time commitment, and patient’s support circle. Informed by the results of our studies, we discussed the importance of designing patient-generated visualizations for individuals by considering both patient and healthcare provider rather than designing with the purpose of generalization and provided guidelines for designing future patient-generated data visualizations.',
        title: "Exploring the Design of Patient-Generated Data Visualizations",
        authors: [
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Charles Perin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: " Lora Oehlberg", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: " Sheelagh Carpendale", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "Graphics Interface Conference (GI), 2020, Pages 1-12",
        category:"data"
    },
    {
        imgSrc: "images/research/ai/mining2.png",
        event: "MNI Open Res '20",
        award: "",
        downloadLink: 'https://mniopenresearch.org/articles/4-1/v1',
        abstract: 'Goal setting is a crucial element in self-management of chronic diseases. Personalized outcome feedback is needed for goal setting, a requirement for behavior change. This study contributes to the understanding of the specificity of patient-formulated self-management goals by testing the effectiveness of a personalized health outcome profile. To estimate among people living with HIV, to what extent providing feedback on their health outcomes, compared to no feedback, will affect number and specificity of patient-formulated self-management goals. A personalized health outcome profile has been produced for individuals enrolled in a Canadian HIV Brain Health Now cohort study at cohort entry and at the last recorded visit. Participants will be randomized to receive or not “My Personal Brain Health Dashboard” prior to a goal setting exercise. Self-defined goals in free text will be collected through an online platform. Intervention and control groups will receive instructions on goal setting and tips to improve brain health. A total of 420 participants are needed to detect a rate ratio (number of specific words/numbers of person-goals, intervention:control) of 1.5. Text mining techniques will be used to quantify goal specificity based on word matches with a goal-setting lexicon. The expectation is that the intervention group will set more goals and have more words matching the developed lexical than the control group. The total number of words per person-goals will be calculated for each group and Poisson regression will be used to estimate the rate ratio and 95% confidence intervals and compare rate ratios between men and women using an interaction term.',
        title: "Effectiveness of a personalized health profile on specificity of self-management goals among people living with HIV in Canada: a protocol for a blinded pragmatic randomized controlled trial",
        authors: [
            { name: "Maryam Mozafarinia", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Marie-Josee Brouillette", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Lesley K Fellows", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Bärbel Knäuper", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Nancy E Mayo", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "MNI Open Res 2020, 4:1",
        category:"ai"
    },

    // Year : 2019

    // Year : 2018
    {
        imgSrc: "images/research/vis/diabetes.png",
        event: "IEEE VIS '18",
        award: "",
        downloadLink: 'https://hal.science/hal-01910365',
        abstract: 'Patients with chronic conditions are usually advised or are selfmotivated to track their health data at home and present this data to the healthcare providers during clinical visits. However, often these patient-generated data collections are large, complex and individual. These characteristics make it challenging and time-consuming for providers to understand this data during short clinical visits. We interviewed four diabetes patients and obtained a sample of their data collections to understand their personal lifestyle and perspectives on the process of tracking, recording, and presenting their data. Based on the information we gathered from patients in our study, we designed various personal visualizations tailored to them.',
        title: "Personal Patient-Generated Data Visualizations for Diabetes Patients",
        authors: [
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Charles Perin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: " Lora Oehlberg", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: " Sheelagh Carpendale", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "IEEE VIS 2018 Electronic Conference",
        category:"data"
    },

    
    // Year : 2017

    {
        imgSrc: "images/research/hci/individuality.png",
        event: "PervasiveHealth '17",
        award: "",
        downloadLink: 'https://dl.acm.org/doi/10.1145/3154862.3154923',
        abstract: 'While patients increasing willingness to collect personal health data portends improvements in the individualization of health care, helping health care providers to effectively act upon these personal data collections poses its own challenges. In this paper, we discuss the challenges we have noticed as we work towards the creation of tools to help chronic patients present their data to their clinicians.',
        title: "The challenges of individuality to technology approaches to personally collected health data",
        authors: [
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Charles Perin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Lora Oehlberg", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Sheelagh Carpendale", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "Proceedings of the 11th EAI International Conference on Pervasive Computing Technologies for Healthcare,Pages 448 - 451",
        category: "human"
    },
    {
        imgSrc: "images/research/handm/communication.png",
        event: "PervasiveHealth '17",
        award: "",
        downloadLink: 'https://dl.acm.org/doi/10.1145/3154862.3154885',
        abstract: 'We provide an integrated view of patients and clinicians perspectives on the communication challenges faced when patients present their medical issues to the clinicians. By combining the results of a literature review from both the HCI and medical literature with the results of clinician interviews explicitly about in-clinic communication issues, we are able to offer a more complete picture of these crucial in-clinic communication challenges. We discuss similarities and subtle but important differences between patients and clinicians perspectives. While patients and clinicians are often talking about the same issue, we found that they differ considerably in opinion and attitude. Drawing upon these subtle yet significant differences and ideas raised by the interviewed clinicians, we offer research suggestions for the design of future in-clinic communication tools.',
        title: "Differences That Matter: In-Clinic Communication Challenges",
        authors: [
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Charles Perin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Jo Vermeulen", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Haley MacLeod", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Diane Gromala", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Sheelagh Carpendale", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "Proceedings of the 11th EAI International Conference on Pervasive Computing Technologies for Healthcare, Pages 251 - 260",
        category:"health"
    },

    // Year : 2016
    {
        imgSrc: "images/research/vis/stackedgraph.png",
        event: "GI '16",
        award: "",
        downloadLink: 'https://graphicsinterface.org/proceedings/gi2016/gi2016-21/',
        abstract: 'Stacked graphs are a visualization technique popular in casual scenarios for representing multiple time-series. Variations of stacked graphs have been focused on reducing the distortion of individual streams because foundational perceptual studies suggest that variably curved slopes may make it difficult to accurately read and compare values. We contribute to this discussion by formally comparing the relative readability of basic stacked area charts, ThemeRivers, streamgraphs and our own interactive technique for straightening baselines of individual streams in a ThemeRiver. We used both real-world and randomly generated datasets and covered tasks at the elementary, intermediate and overall information levels. Results indicate that the decreased distortion of the newer techniques does appear to improve their readability, with streamgraphs performing best for value comparison tasks. We also found that when a variety of tasks is expected to be performed, using the interactive version of the themeriver leads to more correctness at the cost of being slower for value comparison tasks.',
        title: "Assessing the Readability of Stacked Graphs",
        authors: [
            { name: "Alice Thudt", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Jagoda Walny", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Charles Perin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Lindsay MacDonald", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Riane Vardeleon", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Saul Greenberg", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Sheelagh Carpendale", imgSrc: "images/studentImages/dummy.png", url: "" },
        ],
        additionalDetails: "Proceedings of Graphics Interface 2016, Pages 167-174",
        category:"data"
    },
    {
        imgSrc: "images/research//handm/qual.jpg",
        event: "WISH '16",
        award: "",
        downloadLink: 'https://inria.hal.science/hal-01587993/file/2016_CHI_involving_patients-wish.pdf',
        abstract: 'In this paper, we present the results of a series of qualitative studies involving patients and care providers to explore opportunities for involving patients in their care. Empowering patients in their own care can facilitate the treatment process, increase patients’ quality of life, and support patients in reaching their goals. A cultural shift towards patient centered care is currently underway, however, at least in Canada, there is still much to be done. Through interviews and focus groups with patients and care providers, we aim to contribute to this cultural shift by identifying three areas of opportunity to involve patients in their own care and be a part of their care team. We then describe potential technology solutions to address these opportunities.',
        title: "Involving Patients in their Care Plan: Patients' and Care providers' Perspectives",
        authors: [
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Charles Perin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Julie Babione", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Maria Santana", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Jaime Kaufman", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "Proceedings of the CHI Workshop on Interactive Systems in Healthcare (WISH'16), May 2016",
        category:"health"

    },

    // Year : 2015
    {
        imgSrc: "images/research/hci/largedisplay.png",
        event: "ITS '15",
        award: "",
        downloadLink: 'https://dl.acm.org/doi/10.1145/2817721.2817735',
        abstract: 'A driving force behind the design of increasingly large and high resolution displays (LHRDs) has been the need to support the explosion of data in the natural sciences such as physics, chemistry, and biology. However, our experience with an LHRD accessible to researchers across multiple disciplines has shown that they are useful for a wide range of research activities involving large images and data. \ We conducted in-context, semi-structured interviews with researchers from a variety of disciplines about their experiences using the LHRD with their own data. Notably, it became apparent that the size and resolution of the LHRD supported a multitude of activities related to observation, for which zooming or other enlargement methods on standard resolution screens were not sufficient. The interview findings lead to implications for further research into supporting a broader range of disciplines in using large, high-resolution displays.',
        title: "Understanding researchers' use of a large, high-resolution display across disciplines",
        authors: [
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Jagoda Walny", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Carrie Mah", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "John Brosz", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: "Sheelagh Carpendale", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: "Proceedings of the 2015 International Conference on Interactive Tabletops & Surfaces, Pages 107 - 1162",
        category: "human"
    },
    {
        imgSrc: "images/research/vis/WESTProjectlarge.png",
        event: "VIS '15",
        award: "",
        downloadLink: 'https://inria.hal.science/hal-01587925/document',
        abstract: 'WESt is a visualization for surgery waiting times applied to the province of British Columbia (BC) in Canada. This project is motivated by the long waiting time for surgeries in BC, which has the potential to put patients in danger and put extra pressure on clinicians [2]. WESt helps patients select a hospital and a physician, and to explore their options to get their surgery as soon as possible.',
        title: "WESt: Visualizing non-Emergency Surgery Waiting Times",
        authors: [
            { name: "Fateme Rajabiyazdi", imgSrc: "images/profImages/Fateme.jpg", url: "peopleDetails.html?type=prof&people=fateme" },
            { name: "Charles Perin", imgSrc: "images/studentImages/dummy.png", url: "" },
            { name: " Sheelagh Carpendale", imgSrc: "images/studentImages/dummy.png", url: "" }
        ],
        additionalDetails: " IEEE Information Visualization Conference",
        category:"data"
    }
    
];
