function changeLanguage(lang){

    if (lang==="es"){
        var language = {
            homeMenu: " INICIO",
            aboutMenu: " ACERCA DE",
            servicesMenu: " COMPETENCIAS",
            contactMenu: " CONTACTO",

            aboutText1: " Rubén Bernal Blay es un Ingeniero Técnico Industrial, rama Mecánica, especializado en máquinas y automóviles (Universidad de Zaragoza). Además, ha realizado un Máster de Especialización Técnica en Competición Automovilística (Epsilon Euskadi). Posee experiencia en el mundo de la automoción, habiendo trabajado para fabricantes, tales como Opel, Jaguar | Land Rover o BMW. También ha trabajado o trabaja como diseñador en proyectos de motorsport como Fórmula 1, Formula E, DTM y carreras de resistencia, incluyendo las 24 horas de Le Mans.",
            aboutText2: " En 2018, trabajando para BMW Motorsport decide, paralelamente, ofrecer servicios de consultoría bajo demanda a pequeñas y medianas empresas.",
            aboutText3: "  ",
            keyFeatures: "Características clave:",
            keyDesign: " Diseño: transformado ideas en realidad.",
            keyMethodology: " Metodología: camino óptimo para llevar a cabo el diseño.",
            keyAutomation: " Automatización: diseño eficiente.",

            whatOffer: "OFREZCO",

            servicesDesign: "Diseño",
            servicesDesign1: "- Generación de conceptos y configuraciones.",
            servicesDesign2: "- Ingeniería inversa.",
            servicesDesign3: "- Diseño de sólidos, superficies y materiales compuestos.",
            servicesDesign4: "- Diseño de modelos modulares para su uso en túneles de viento.",

            serviceMethodology: "Metodología",
            serviceMethodology1: "- Definición de procesos específicos de diseño.",
            serviceMethodology2: "- Plantillas.",
            serviceMethodology3: "- Mejores prácticas de diseño.",
            serviceMethodology4: "- Catálogo de piezas.",

            serviceAutomation: "Automatización",
            serviceAutomation1: "- Macros para tareas repetitivas.",
            serviceAutomation2: "- Características comunes diseño",
            serviceAutomation3: "- Reglas, comprobaciones y reacciones de diseño",
            serviceAutomation4: " ",

            workplace: "DONDE TRABAJO",

            workingTogether: "¿Estás interesado en trabajar juntos? ¿Tienes alguna pregunta? Contacta conmigo usando uno de los siguientes métodos:",

            legalNotice: "Aviso legal"

        }
    }

    else if (lang==="de"){
        var language = {
            homeMenu: " STARTSEITE",
            aboutMenu: " IMPRESSUM",
            servicesMenu: " FÄHIGKEITEN",
            contactMenu: " KONTAKT",

            aboutText1: " Rubén Bernal Blay hat das Diplom als Ingeneur in Maschinenbau mit der Vertiefung in Maschinen und Kraftwagen an der Universität Saragossa erworben. Seinen Master, spezialisiert auf Rennwagen, hat er bei der Firma Epsilon Euskadi in Spanien erlangt. Erfahrungen in der Automobilebranche erstrecken sich auf eine Vielfalt von bekannten Automarken wie Opel, Jaguar | Land Rover und BMW. Seine Arbeit als Konstrukteur weiten seine Kenntnisse im Motorsportbereich aus. Projekte wie Formel 1, Formel E, DTM oder Langstreckenrennen, einschließlich das 24-Stunden-Rennen von Le Mans, runden sein Profil ab.",
            aboutText2: " Parallel zu seiner Arbeit bei BMW trifft Rubén Bernal Blay im Jahr 2018 die Entscheidung, Ingeneurberatungsdienste für kleine und mittlere Unternehmen anzubieten.",
            aboutText3: "  ",
            keyFeatures: "Schlüsselqualifikationen:",
            keyDesign: " Konstruktion: Umsetzung innovativer Ideen in die Realität",
            keyMethodology: " Konstruktionsmethodik: Optimale Lösung zur Konstruktion",
            keyAutomation: " Automatisierung: effizientes Design.",

            whatOffer: "ICH BIETE AN",

            servicesDesign: "Konstruktion",
            servicesDesign1: "- Konzeptentwicklung, Architektur und Package.",
            servicesDesign2: "- Reverse Engineering.",
            servicesDesign3: "- Volumenkörper, Freiformflächen und CFK Konstruction.",
            servicesDesign4: "- Konstruktion von modularen Windkanalmodellen.",

            serviceMethodology: "Konstruktionsmethodik",
            serviceMethodology1: "- Erstellung von spezifischen Konstruktionsprozesse.",
            serviceMethodology2: "- Vorlagen.",
            serviceMethodology3: "- Beste Design-Build-Praktiken und Implementierungstechniken .",
            serviceMethodology4: "- Teilekatalog.",

            serviceAutomation: "Automatisierung",
            serviceAutomation1: "- Makros für monotone Arbeit.",
            serviceAutomation2: "- Benutzerfreundliche Funktionen",
            serviceAutomation3: "- Erstellung von Regeln, Prufüngen und Reaktionen",
            serviceAutomation4: " ",

            workplace: "WO ICH ARBEITE",

            workingTogether: "Haben Sie Interesse an einer Zusammenarbeit? Haben Sie Fragen? Dann kontaktieren Sie mich über folgende Kanäle:",

            legalNotice: "Impressum"
        }
    }

    else // English 
    {
        var language = {
            homeMenu: " HOME",
            aboutMenu: " ABOUT",
            servicesMenu: " CAPABILITIES",
            contactMenu: " CONTACT",

            aboutText1: "Rubén Bernal Blay is a Mechanical Engineer, specialized in machines and automobiles (University of Saragossa). In addition to his degree, he also studied a Motorsport master (Epsilon Euskadi). He possesses experience in the auto industry, having worked for auto makers like Opel, Jaguar | Land Rover or BMW. He has also worked or is working as designer for motorsport projects like Formula 1, Formula E, DTM and endurance racing, including the 24 hours of Le Mans.",
            aboutText2: " In 2018, while working for BMW Motorsport decides, in parallel, to offer under demand consultancy services to small and medium-sized businesses.",
            aboutText3: " ",
            keyFeatures: "Key features:",
            keyDesign: " Design: turning innovative ideas into reality.",
            keyMethodology: " Methodology: optimum path to carry out the design.",
            keyAutomation: " Automation: efficient design.",

            whatOffer: "WHAT I OFFER",

            servicesDesign: "Design",
            servicesDesign1: "- Concept generation and packaging studies.",
            servicesDesign2: "- Reverse engineering.",
            servicesDesign3: "- Surface, solid and composites design.",
            servicesDesign4: "- Design of modular wind tunnel models.",

            serviceMethodology: "Methodology",
            serviceMethodology1: "- Design procedures.",
            serviceMethodology2: "- Templates.",
            serviceMethodology3: "- Best design-built practices.",
            serviceMethodology4: "- Standard parts catalogs",

            serviceAutomation: "Automation",
            serviceAutomation1: "- Macros for repetitive tasks.",
            serviceAutomation2: "- Common user defined features.",
            serviceAutomation3: "- Design rules, checks and reactions",
            serviceAutomation4: " ",

            workplace: "WHERE I WORK",

            workingTogether: "Interested in working together? Have a question? Get in touch using one of the following methods:",

            legalNotice: "Legal notice"
        }
    }
    
    // Top navigation bar
    setContent("homeMenu", language.homeMenu)
    setContent("aboutMenu", language.aboutMenu)
    setContent("servicesMenu", language.servicesMenu)
    setContent("contactMenu", language.contactMenu)

    setContent("homeMenuSmall", language.homeMenu)
    setContent("aboutMenuSmall", language.aboutMenu)
    setContent("servicesMenuSmall", language.servicesMenu)
    setContent("contactMenuSmall", language.contactMenu)

    // About section
    setContent("aboutTitle", language.aboutMenu)

    setContent("aboutText1", language.aboutText1)
    setContent("aboutText2", language.aboutText2)
    setContent("aboutText3", language.aboutText3)

    setContent("keyFeatures", language.keyFeatures)
    setContent("keyDesign", language.keyDesign)
    setContent("keyMethodology", language.keyMethodology)
    setContent("keyAutomation", language.keyAutomation)
    
    // Services section
    setContent("servicesTitle", language.servicesMenu)

    setContent("whatOffer", language.whatOffer)

    setContent("servicesDesign", language.servicesDesign)
    setContent("servicesDesign1", language.servicesDesign1)
    setContent("servicesDesign2", language.servicesDesign2)
    setContent("servicesDesign3", language.servicesDesign3)
    setContent("servicesDesign4", language.servicesDesign4)

    setContent("serviceMethodology", language.serviceMethodology)
    setContent("serviceMethodology1", language.serviceMethodology1)
    setContent("serviceMethodology2", language.serviceMethodology2)
    setContent("serviceMethodology3", language.serviceMethodology3)
    setContent("serviceMethodology4", language.serviceMethodology4)

    setContent("serviceAutomation", language.serviceAutomation)
    setContent("serviceAutomation1", language.serviceAutomation1)
    setContent("serviceAutomation2", language.serviceAutomation2)
    setContent("serviceAutomation3", language.serviceAutomation3)
    setContent("serviceAutomation4", language.serviceAutomation4)

    // Contact section
    setContent("contactTitle", language.contactMenu)

    setContent("workplace", language.workplace)

    setContent("workingTogether", language.workingTogether)

    setContent("legalNotice", language.legalNotice)
}

function setLanguageStart(){
    var userLang = navigator.language || navigator.userLanguage;
    changeLanguage(userLang.substring(0,2))
}

function setContent(id, value){
    document.getElementById(id).textContent = value
}