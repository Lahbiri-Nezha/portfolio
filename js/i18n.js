/* ===========================
   i18n — Translations EN/FR/AR
   =========================== */
(function() {
    var STORAGE_KEY = 'portfolio-lang';

    var translations = {
        en: {
            skipNav: 'Skip to content',
            navProjects: 'Projects',
            navAbout: 'About',
            navSkills: 'Skills',
            navExperience: 'Experience',
            navContact: 'Contact',
            heroGreeting: 'Hello,',
            heroName: "I'm Nezha Lahbiri.",
            heroBuild1: 'I build',
            heroBuild2: 'Artificial Intelligence',
            heroBuild3: 'that solves real problems.',
            heroCreating: 'creating',
            btnProjects: 'View Projects',
            btnResume: '↓ Resume',
            btnTalk: "Let's Talk →",
            projectsLabel: 'Selected Work',
            projectsHeading: 'Projects',
            badgeReal: 'Real',
            badgeVirtual: 'Concept',
            project1Title: 'AI-Powered Fashion Styling Platform',
            project1Desc: 'Led a team to design a web platform recommending personalised outfits based on weather, event type and user preferences.',
            project2Title: 'Smart Clock — IoT',
            project2Desc: 'Arduino microcontrollers and multi-sensor systems. Competed at inter-engineering-school competition.',
            project3Title: 'Smart Campus AI',
            project3Desc: 'ML-based campus optimization analyzing student flow, energy usage, and resource allocation.',
            project4Title: 'Medical Diagnosis AI',
            project4Desc: 'Deep learning image classification for detecting anomalies in medical scans, improving early diagnosis accuracy.',
            project5Title: 'Portfolio CMS',
            project5Desc: 'Full-stack CMS for developers to create and manage portfolio sites with drag-and-drop builder.',
            project6Title: 'Weather Prediction',
            project6Desc: 'Historical weather data combined with ML models to forecast local weather patterns.',
            project7Title: 'Student Analytics Dashboard',
            project7Desc: 'Interactive data visualization for analyzing student performance metrics, attendance patterns, and predictive grading.',
            project8Title: 'Emotion Detection',
            project8Desc: 'Real-time emotion detection combining computer vision and NLP for facial expressions and text sentiment.',
            project9Title: 'Moroccan Tourism AI',
            project9Desc: 'Intelligent recommendation engine suggesting personalized travel itineraries based on preferences.',
            aboutLabel: 'About',
            aboutHeading: 'A bit about<br><span class="text-highlight">myself</span>',
            aboutText1: "First-year engineering student at ENSA Agadir, specializing in Data Science, Big Data & Artificial Intelligence. I'm passionate about building intelligent systems that solve real-world problems.",
            aboutText2: 'With a strong foundation in mathematics, algorithms, and machine learning, I thrive at the intersection of data and innovation.',
            factLocation: 'Location',
            factLocationVal: 'Agadir, Morocco',
            factFocus: 'Focus',
            factFocusVal: 'Data Science & AI',
            factStatus: 'Status',
            factStatusVal: 'Open to Internships',
            skillsLabel: 'Technical Expertise',
            skillsHeading: 'Skills &<br><span class="text-highlight">Tools</span>',
            experienceLabel: 'Experience & Education',
            experienceHeading: 'My<br><span class="text-highlight">Journey</span>',
            exp1Title: 'Engineering Degree — Data Science, Big Data & AI',
            exp1Place: 'ENSA Agadir',
            exp2Title: 'Integrated Preparatory Classes',
            exp2Place: 'ENSA Agadir — Math, Physics & CS',
            exp3Title: 'Baccalaureate — Mathematics B',
            exp3Place: "Lycée Mohammed VI d'Excellence",
            exp4Title: 'AI-Powered Fashion Styling Platform',
            exp4Place: 'Injaz Al-Maghrib Programme',
            exp5Title: 'Smart Clock — Robotics & IoT',
            exp5Place: 'Inter-engineering-school Competition',
            exp6Title: 'Enactus Club Member',
            exp6Place: 'ENSA Agadir',
            certsLabel: 'Certifications',
            certsHeading: 'Learning<br><span class="text-highlight">Never Stops</span>',
            certInProgress: 'In Progress',
            contactLabel: 'Get in Touch',
            contactHeading: "Let's build something<br><span class=\"text-highlight\">meaningful</span> together.",
            btnEmail: 'Say Hello ↗',
            contactLocation: 'Agadir, Morocco',
            footerText: 'Designed & Developed by Nezha Lahbiri'
        },
        fr: {
            skipNav: 'Aller au contenu',
            navProjects: 'Projets',
            navAbout: 'À propos',
            navSkills: 'Compétences',
            navExperience: 'Parcours',
            navContact: 'Contact',
            heroGreeting: 'Bonjour,',
            heroName: 'Je suis Nezha Lahbiri.',
            heroBuild1: 'Je construis',
            heroBuild2: 'Intelligence Artificielle',
            heroBuild3: 'qui résout de vrais problèmes.',
            heroCreating: 'créer',
            btnProjects: 'Voir les projets',
            btnResume: '↓ CV',
            btnTalk: 'Contactez-moi →',
            projectsLabel: 'Travaux Sélectionnés',
            projectsHeading: 'Projets',
            badgeReal: 'Réel',
            badgeVirtual: 'Concept',
            project1Title: 'Plateforme de Styling IA',
            project1Desc: "J'ai dirigé une équipe pour concevoir une plateforme web recommandant des tenues personnalisées selon la météo, le type d'événement et les préférences.",
            project2Title: 'Horloge Intelligente — IoT',
            project2Desc: "Microcontrôleurs Arduino et systèmes multi-capteurs. Compétition inter-écoles d'ingénieurs.",
            project3Title: 'Smart Campus AI',
            project3Desc: "Système d'optimisation de campus basé sur l'ML analysant le flux d'étudiants et la consommation énergétique.",
            project4Title: 'Diagnostic Médical IA',
            project4Desc: "Classification d'images par deep learning pour détecter les anomalies dans les scans médicaux.",
            project5Title: 'Portfolio CMS',
            project5Desc: "Système de gestion de contenu full-stack pour les développeurs avec constructeur drag-and-drop.",
            project6Title: 'Prévision Météo',
            project6Desc: "Données météo historiques combinées à des modèles ML pour prévoir les conditions locales.",
            project7Title: "Tableau de Bord d'Analytique",
            project7Desc: "Visualisation de données interactive pour analyser les performances et la notation prédictive.",
            project8Title: "Détection d'Émotions",
            project8Desc: "Détection d'émotions en temps réel combinant vision par ordinateur et NLP.",
            project9Title: 'Tourisme IA Marocain',
            project9Desc: "Moteur de recommandation intelligent suggérant des itinéraires personnalisés.",
            aboutLabel: 'À propos',
            aboutHeading: 'Un peu sur<br><span class="text-highlight">moi-même</span>',
            aboutText1: "Étudiant ingénieur première année à l'ENSA Agadir, spécialisé en Data Science, Big Data & Intelligence Artificielle. Passionné par la création de systèmes intelligents.",
            aboutText2: "Avec de solides bases en mathématiques, algorithmes et apprentissage automatique, je m'épanouis à l'intersection des données et de l'innovation.",
            factLocation: 'Localisation',
            factLocationVal: 'Agadir, Maroc',
            factFocus: 'Spécialité',
            factFocusVal: 'Data Science & IA',
            factStatus: 'Statut',
            factStatusVal: 'Ouvert aux stages',
            skillsLabel: 'Expertise Technique',
            skillsHeading: 'Compétences &<br><span class="text-highlight">Outils</span>',
            experienceLabel: 'Parcours & Formation',
            experienceHeading: 'Mon<br><span class="text-highlight">Parcours</span>',
            exp1Title: 'Diplôme Ingénieur — Data Science, Big Data & IA',
            exp1Place: 'ENSA Agadir',
            exp2Title: 'Classes Préparatoires Intégrées',
            exp2Place: 'ENSA Agadir — Maths, Physique & Info',
            exp3Title: 'Baccalauréat — Mathématiques B',
            exp3Place: "Lycée Mohammed VI d'Excellence",
            exp4Title: 'Plateforme de Styling IA',
            exp4Place: 'Programme Injaz Al-Maghrib',
            exp5Title: 'Horloge Intelligente — Robotique & IoT',
            exp5Place: "Compétition inter-écoles d'ingénieurs",
            exp6Title: 'Membre du Club Enactus',
            exp6Place: 'ENSA Agadir',
            certsLabel: 'Certifications',
            certsHeading: "L'Apprentissage<br><span class=\"text-highlight\">Ne S'arrête Pas</span>",
            certInProgress: 'En cours',
            contactLabel: 'Me Contacter',
            contactHeading: "Construisons quelque chose<br><span class=\"text-highlight\">d'ensemble</span> ensemble.",
            btnEmail: 'Dire Bonjour ↗',
            contactLocation: 'Agadir, Maroc',
            footerText: 'Conçu et Développé par Nezha Lahbiri'
        },
        ar: {
            skipNav: 'انتقل إلى المحتوى',
            navProjects: 'المشاريع',
            navAbout: 'نبذة عني',
            navSkills: 'المهارات',
            navExperience: 'الخبرة',
            navContact: 'التواصل',
            heroGreeting: 'مرحباً،',
            heroName: 'أنا نزهة الحبيري.',
            heroBuild1: 'أبني',
            heroBuild2: 'الذكاء الاصطناعي',
            heroBuild3: 'الذي يحل مشاكل حقيقية.',
            heroCreating: 'إنشاء',
            btnProjects: 'عرض المشاريع',
            btnResume: '↓ السيرة الذاتية',
            btnTalk: 'تواصل معي →',
            projectsLabel: 'أعمال مختارة',
            projectsHeading: 'المشاريع',
            badgeReal: 'حقيقي',
            badgeVirtual: 'مفهوم',
            project1Title: 'منصة أزياء بالذكاء الاصطناعي',
            project1Desc: 'قادت فريقاً لتصميم منصة ويب توصي بملابس مخصصة بناءً على الطقس وتفضيلات المستخدم.',
            project2Title: 'ساعة ذكية — إنترنت الأشياء',
            project2Desc: 'أجهزة مايكرو أردوينو وأنظمة متعددة المستشعرات. مسابقة بين مدارس الهندسة.',
            project3Title: 'الحرم الجامعي الذكي',
            project3Desc: 'نظام تحسين حرم جامعي يعتمد على التعلم الآلي.',
            project4Title: 'التشخيص الطبي بالذكاء الاصطناعي',
            project4Desc: 'تصنيف صور بالتعلم العميق للكشف عن الشذوذ في الفحوصات الطبية.',
            project5Title: 'نظام إدارة المحتوى',
            project5Desc: 'نظام إدارة محتوى متكامل مع بناء سحب وإفلات.',
            project6Title: 'التنبؤ بالطقس',
            project6Desc: 'بيانات طقس تاريخية مع نماذج تعلم آلي للتنبؤ بالطقس المحلي.',
            project7Title: 'لوحة تحليلات الطلاب',
            project7Desc: 'تصور بيانات تفاعلي لتحليل أداء الطلاب والتنبؤ بالدرجات.',
            project8Title: 'كشف المشاعر',
            project8Desc: 'كشف مشاعر في الوقت الفعلي يجمع بين الرؤية الحاسوبية ومعالجة اللغات.',
            project9Title: 'السياحة المغربية بالذكاء الاصطناعي',
            project9Desc: 'محرك توصية ذكي يقترح خطط سفر مخصصة.',
            aboutLabel: 'نبذة عني',
            aboutHeading: 'قليل عن<br><span class="text-highlight">نفسي</span>',
            aboutText1: 'طالب هندسة في السنة الأولى في المدرسة الوطنية أكادير، متخصص في علم البيانات والبيانات الضخمة والذكاء الاصطناعي.',
            aboutText2: 'ب nền قوية في الرياضيات والخوارزميات والتعلم الآلي، أزدهر عند تقاطع البيانات والابتكار.',
            factLocation: 'الموقع',
            factLocationVal: 'أكادير، المغرب',
            factFocus: 'التخصص',
            factFocusVal: 'علم البيانات والذكاء الاصطناعي',
            factStatus: 'الحالة',
            factStatusVal: 'متاح للتدريب',
            skillsLabel: 'الخبرة التقنية',
            skillsHeading: 'المهارات &<br><span class="text-highlight">الأدوات</span>',
            experienceLabel: 'الخبرة والتعليم',
            experienceHeading: 'رحلة<br><span class="text-highlight">حياتي</span>',
            exp1Title: 'شهادة هندسة — علم البيانات والذكاء الاصطناعي',
            exp1Place: 'المدرسة الوطنية أكادير',
            exp2Title: 'الصفوف التحضيرية المدمجة',
            exp2Place: 'المدرسة الوطنية أكادير — رياضيات وفيزياء وحوسبة',
            exp3Title: 'بكالوريا — رياضيات ب',
            exp3Place: 'ثانوية محمد السادس للتميز',
            exp4Title: 'منصة أزياء بالذكاء الاصطناعي',
            exp4Place: 'برنامج إنجاز المغرب',
            exp5Title: 'ساعة ذكية — الروبوتات وإنترنت الأشياء',
            exp5Place: 'مسابقة بين مدارس الهندسة',
            exp6Title: 'عضو في نادي إنكتس',
            exp6Place: 'المدرسة الوطنية أكادير',
            certsLabel: 'الشهادات',
            certsHeading: 'التعلم<br><span class="text-highlight">لا يتوقف</span>',
            certInProgress: 'قيد التنفيذ',
            contactLabel: 'تواصل معي',
            contactHeading: "لنبنى شيئاً<br><span class=\"text-highlight\">جديداً</span> معاً.",
            btnEmail: 'قل مرحباً ↗',
            contactLocation: 'أكادير، المغرب',
            footerText: 'صمم وطوره نزهة لحبري'
        }
    };

    function getPreferredLang() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored && translations[stored]) return stored;
        return 'en';
    }

    function setLang(lang) {
        if (!translations[lang]) return;
        localStorage.setItem(STORAGE_KEY, lang);

        var isRTL = lang === 'ar';
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('data-lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (key.indexOf('Heading') !== -1 || key.indexOf('heading') !== -1 ||
                    key === 'heroBuild1' || key === 'heroBuild2' || key === 'heroBuild3' ||
                    key === 'heroCreating' || key === 'heroName') {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            setLang(this.getAttribute('data-lang'));
        });
    });

    setLang(getPreferredLang());
    window.setLang = setLang;
})();
