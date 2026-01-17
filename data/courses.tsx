// /data/courses.ts
export type Course = {
    title: string;
    slug: string;
    featured?: boolean;
    description: string;
    heroImage: string;
    duration: string;
    softwareAndToolsCovered: string[];
    jobProfiles: string[];
    syllabus: { title: string; items: string[] }[];
};
export const courses: Course[] = [

    {
        title: "Advanced Program in Animation with Unreal Engine",
        slug: "advanced-program-in-animation-with-unreal-engine",
        featured: false,
        description:
            "AAIPP Advanced Program in Animation with Unreal Engine Step into a world where your creativity becomes reality. The Advanced Program in Animation with Unreal Engine empowers you to bring characters to life, craft stunning 3D worlds and create cinematic experiences. Master industry-leading tools and unlock your potential in animation, virtual production and Unreal Engine, launching your career to new heights.",
        heroImage: "/images/Game/01.jpg",
        duration: "576",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Storyboarder", "Adobe Premiere Pro CC", "Adobe Audition CC", "Adobe Animate CC", "Adobe After Effects CC", "Autodesk Maya", "nCloth", "XGen", "Maxon ZBrush", "Adobe Substance Painter", "Reality Capture", "Unreal Engine", "MetaHuman", "Gen AI Tools"],
        jobProfiles: ["Concept Artist", "Character Designer", "Storyboard Artist", "3D Modeler", "Texturing Artist", "Lighting Artist", "3D Animator", "Rigging Artist", "3D Generalist", "3D Designer", "3D Product Designer", "Unreal Generalist", "Real-time 3D Artist", "3D Visualizer"],
        syllabus: [
            {
                title: "Term 1 - Design & Visualization", items: ["Cinematography & Photography Basics",
                    "Color and Light Magic",
                    "Perspectives and Character Design",
                    "Mastering Digital Illustrations",
                    "Pixel Perfect Painter",
                    "Storyboard Mastery",
                    "Cinematic Edits",
                    "Digital Sound Craft",
                    "2D Animation Mastery",
                    "Motion Graphics",
                    "AI Art Innovator",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 2 - Advanced 3D Design", items: ["Understanding the CG Pipeline",
                    "Asset Creation for CGI & Games",
                    "Mastering Digital Sculpting",
                    "Texture and Details",
                    "Realistic Surface Creation",
                    "Real World Replication",
                    "Illuminating Assets",
                    "Bringing Characters to Life with Rigging",
                    "Art of 3D Animation",
                    "AI-Powered 3D Workflow",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 3 - Realtime Cinematics and FX", items: ["3D FX, Dynamics and Simulations",
                    "Introduction to Virtual Production",
                    "Cinematic Realism with Unreal",
                    "Hyperrealistic Character Creation",
                    "Portfolio Powerhouse",
                    "Career Launchpad",
                ]
            },
        ],
    },

    {
        title: "Advanced Program in Visual Effects",
        slug: "advanced-program-in-visual-effects",
        featured: true,
        description:
            "Immerse yourself in the realm of visual magic with the Advanced Program in Visual Effects. This program equips you with the skills to bring the most imaginative ideas to life through VFX. Learn to create realistic simulations, compelling composites, and breathtaking effects using industry-standard tools like Houdini and Nuke. Perfect your craft and get ready to shape the visual landscapes of film and digital media.",
        heroImage: "/images/Game/01.png",
        duration: "604",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Storyboarder", "Adobe Premiere Pro CC", "Adobe Audition CC", "Adobe Animate CC", "Adobe After Effects CC", "Autodesk Maya", "nCloth", "XGen", "Adobe Substance Painter", "Reality Capture", "Houdini", "Silhouette", "3D Equalizer", "Nuke", "Gen AI Tools"],
        jobProfiles: ["Concept Artist", "Character Designer", "Storyboard Artist", "3D Artist", "Lighting Artist", "3D Generalist", "3D Designer", "3D Product Designer", "Compositor", "Matchmove Artist", "VFX Generalist", "FX Artist", "Motion Graphics Artist", "Matte Painter", "Video Editor", "Roto Artist"],
        syllabus: [
            {
                title: "Term 1 - Design & Visualization", items: ["Cinematography & Photography Basics",
                    "Cinematography & Photography Basics",
                    "Color and Light Magic",
                    "Perspectives and Character Design",
                    "Mastering Digital Illustrations",
                    "Pixel Perfect Painter",
                    "Storyboard Mastery",
                    "Cinematic Edits",
                    "Digital Sound Craft",
                    "2D Animation Mastery",
                    "Motion Graphics",
                    "AI Art Innovator",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 2 - Advanced 3D Design for VFX", items: ["Understanding the CG Pipeline",
                    "Understanding the CG Pipeline",
                    "Asset Creation for CGI & Games",
                    "Texture and Details",
                    "Realistic Surface Creation",
                    "Real World Replication",
                    "Illuminating Assets",
                    "Bringing Characters to Life with Rigging",
                    "Art of 3D Animation",
                    "AI-Powered 3D Workflow",
                    "Portfolio Powerhouse",

                ]
            },
            {
                title: "Term 3 - Advanced FX and Compositing", items: ["3D FX, Dynamics and Simulations",
                    "3D FX, Dynamics and Simulations",
                    "Introduction to Virtual Production",
                    "Procedural FX with Houdini",
                    "Advanced Roto with Silhouette",
                    "Art of Camera Tracking",
                    "Magic of Compositing with Nuke",
                    "Portfolio Powerhouse",
                    "Career Launchpad",
                ]
            },
        ],
    },

    {
        title: "Advanced Program in Architectural Visualization and Interior Design",
        slug: "advanced-program-architectural-visualization-interior-design",
        featured: true,
        description:
            "Transform spaces with your creativity in the Advanced Program in Architectural Visualization and Interior Design. Learn to bring architectural concepts to life using powerful tools like AutoCAD, 3ds Max, Blender and Unreal Engine. From realistic textures to immersive virtual walkthroughs, this program empowers you to visualize interiors and architecture with stunning accuracy, preparing you for a career that shapes the built environment.",
        heroImage: "/images/Game/03.png",
        duration: "580",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Storyboarder", "Adobe Premiere Pro CC", "Adobe Audition CC", "Adobe Animate CC", "Adobe After Effects CC", "Autodesk 3ds Max", "V-Ray", "Adobe Substance Painter", "SketchUp", "Blender", "Unreal Engine", "Twinmotion", "Gen AI Tools"],
        jobProfiles: ["Concept Artist", "3D Artist", "Lighting Artist", "3D Generalist", "3D Designer", "3D Product Designer", "Archviz Artist", "Interior Visualization Artist", "Unreal Engine Archviz Specialist", "3D Rendering Artist"],
        syllabus: [
            {
                title: "Term 1 - Design & Visualization",
                items: ["Cinematography & Photography Basics",
                    "Color and Light Magic",
                    "Perspectives and Character Design",
                    "Mastering Digital Illustrations",
                    "Pixel Perfect Painter",
                    "Storyboard Mastery",
                    "Cinematic Edits",
                    "Digital Sound Craft",
                    "2D Animation Mastery",
                    "Motion Graphics",
                    "AI Art Innovator",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 2 - Advanced 3D Visualization",
                items: ["Understanding the CG Pipeline",
                    "Introduction to AutoCAD",
                    "Shaping World with 3ds Max",
                    "Mastering Texturing & Lighting with 3ds Max",
                    "Animating in 3ds Max",
                    "RenderCraft in 3ds Max",
                    "Realistic Surface Creation",
                    "Introduction to SketchUp",
                    "AI-Powered 3D Workflow",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 3 - Advanced Immersive Visualization",
                items: ["Introduction to Blender",
                    "Modeling Concepts and Techniques",
                    "UV Mapping and Texturing",
                    "Materials and Shading",
                    "Lighting Techniques",
                    "Animation in Blender",
                    "Rendering and Post Processing",
                    "Immersive Media with Unreal Engine",
                    "Archviz with Twinmotion",
                    "Portfolio Powerhouse",
                    "Career Launchpad",
                ]
            },
        ],
    },

    {
        title: "Broadcast Design",
        slug: "broadcast-design",
        featured: true,
        description:
            "Enter the world of high-impact visual storytelling with the Broadcast Design program. This course teaches you how to craft captivating broadcast graphics and motion design for television, lm and digital media. With tools like Cinema4D and 3ds Max, you'll learn to create dynamic visuals that captivate audiences, preparing you to design the future of broadcast media",
        heroImage: "/images/Graphic/01.jpg",
        duration: "408",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Storyboarder", "Adobe Premiere Pro CC", "Adobe Audition CC", "Adobe Animate CC", "Adobe After Effects CC", "Autodesk 3ds Max", "V-Ray", "Cinema 4D", "Gen AI Tools"],
        jobProfiles: ["Concept Artist", "Storyboard Artist", "3D Artist", "Lighting Artist", "3D Generalist", "3D Designer", "Broadcast Designer", "Motion Graphics Designer", "Video Editor", "Motion Design Visualizer"],
        syllabus: [
            {
                title: "Term 1 - Design and Visualization",
                items: ["Cinematography & Photography Basics",
                    "Color and Light Magic",
                    "Perspectives and Character Design",
                    "Mastering Digital Illustrations",
                    "Pixel Perfect Painter",
                    "Storyboard Mastery",
                    "Cinematic Edits",
                    "Digital Sound Craft",
                    "2D Animation Mastery",
                    "Motion Graphics",
                    "AI Art Innovator",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 2 - Advanced 3D Motion Design",
                items: ["Understanding Broadcast Pipeline",
                    "Concepts of Broadcast Design",
                    "Shaping World with 3ds Max",
                    "Mastering Texturing & Lighting with 3ds Max",
                    "Animating in 3ds Max",
                    "RenderCraft in 3ds Max",
                    "Broadcast Design with Cinema4D",
                    "Broadcast Media",
                    "AI-Powered 3D Workflow",
                    "Portfolio Powerhouse",
                    "Career Launchpad",
                ]
            },
        ],
    },

    {
        title: "Digital Content Creation Program",
        slug: "digital-content-creation-program",
        featured: false,
        description:
            "Unlock your creative potential with the Digital Content Creation program. This course empowers you to design stunning visuals, create engaging motion graphics and craft seamless user experiences. Learn the fundamentals of design, photography, typography and web development while mastering tools like Adobe Creative Suite, Figma and WordPress. Whether you're creating social media visuals or building interactive websites, this program prepares you to succeed in the dynamic world of digital content.",
        heroImage: "/images/Graphic/02.jpg",
        duration: "352",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe InDesign CC", "Canva", "Adobe Dimensions", "Adobe Premiere Pro CC", "Adobe Audition CC", "Adobe Animate CC", "Adobe After Effects CC", "DaVinci", "Figma", "Draw.io", "VS Code", "WordPress", "XAMPP", "Gen AI Tools"],
        jobProfiles: ["Graphic Designer", "Digital Illustrator", "UI Artist", "Motion Graphics Artist", "UX Designer", "Social Media Designer", "Video Editor", "Front-end Designer", "UX Researcher", "Web Designer"],
        syllabus: [
            {
                title: "Term 1 - Visual Design and Branding",
                items: ["Foundation of Visual Design & Communication",
                    "Color and Light Magic",
                    "Copyright and Design Ethics",
                    "Typography Techniques",
                    "Creative Vector Illustrations",
                    "Digital Design",
                    "Digital and Interactive Publishing",
                    "Designing for Social Engagement",
                    "Product Visualization & Branding",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 2 - Motion Graphics & Gen AI Enhanced Creativity",
                items: ["Cinematography and Photography Basics",
                    "Cinematic Edits",
                    "Digital Sound Craft",
                    "2D Motion Magic",
                    "Motion Graphics",
                    "Importance of Color Grading",
                    "AI Art Innovator",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 3 - Comprehensive UI/UX Design",
                items: ["Principles of Design in UI/UX",
                    "Design Thinking Process",
                    "UX Research Process in UCD",
                    "UX Informative Architecture",
                    "UI Design Principles",
                    "Wireframing and Collaboration",
                    "Interactive Prototyping with Figma",
                    "UX Research Fundamentals",
                    "Gen AI for UI/UX Design",
                    "Ethical AI Practices",
                    "Responsive Design",
                    "Make a Website with WordPress",
                    "Working with Frameworks",
                    "Case Study & Capstone Project",
                    "Portfolio Powerhouse",
                    "Career Launchpad",
                ]
            },
        ],
    },

    {
        title: 'Next-Gen Graphic Design and Web Development',
        slug: 'next-gen-graphic-design-and-web-development',
        featured: true,
        description: 'The Graphics, Web Design and Development program empowers you to create stunning visuals and interactive web experiences. Learn the fundamentals of graphic design, typography and branding, alongside the technical skills needed for modern web development. Master tools like Adobe Creative Suite, Figma and WordPress and dive into responsive design, SEO and server-side scripting. Whether you’re designing for social media or building dynamic websites, this program equips you with the skills to thrive in the digital content world.',
        heroImage: "/images/Graphic/03.jpg",
        duration: "290",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe InDesign CC", "Canva", "Adobe Dimensions", "Draw.io", "Figma", "HTML5", "CSS3", "Bootstrap", "JavaScript", "WordPress", "XAMPP", "Google AdWords & Analytics", "PHP & MySQL", "Gen AI Tools"],
        jobProfiles: ["Graphic Designer", "Digital Illustrator", "UI Artist", "Social Media Designer", "Front-end Designer", "UX Researcher", "Web Designer", "Web Developer"],
        syllabus: [
            {
                title: 'Term 1 - Graphic and Visual Design',
                items: [
                    "Foundation of Visual Design & Communication",
                    "Color and Light Magic",
                    "Copyright and Design Ethics",
                    "Typography Techniques",
                    "Principles of Design in UI/UX",
                    "Creative Vector Illustrations",
                    "Digital Design",
                    "Digital and Interactive Publishing",
                    "Designing for Social Engagement",
                    "Product Visualization and Branding",
                    "Design Thinking Process",
                    "AI Art Innovator",
                    "Wireframing and Collaboration",
                    "Portfolio Powerhouse",

                ]
            },
            {
                title: "Term 2 - Web Design and Development",
                items: [
                    "Interactive Prototyping with Figma",
                    "Gen AI for UI/UX Design",
                    "Concepts of Web Design and Development",
                    "Foundations of Modern Web Design",
                    "Responsive Web Development with Bootstrap",
                    "Dynamic Web Interactions",
                    "CMS and Local Web Development with WordPress and XAMPP",
                    "Intro to SEO and Digital Marketing Concepts",
                    "Server-side Scripting with PHP",
                    "Website Project",
                    "Portfolio Powerhouse",
                    "Career Launchpad",

                ]
            }
        ]
    },

    {
        title: "Advanced Program in UI/UX Design",
        slug: "advanced-program-in-uiux-design",
        featured: false,
        description: "The Advanced Program in UI/UX Design is designed to equip you with the skills needed to create seamless and user-centered digital experiences. Dive into the principles of design thinking, UI/UX processes and interactive prototyping with Figma. Learn how to craft responsive websites using HTML, CSS and WordPress, while mastering industry-standard tools. This program prepares you to excel as a UI/UX designer, creating intuitive, aesthetically pleasing and functional designs ",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
        duration: "144",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Draw.io", "Figma", "HTML5", "CSS3", "WordPress", "XAMPP", "VS Code", "Gen AI Tools"],
        jobProfiles: ["Creative Designer", "Digital Illustrator", "UI Artist", "Social Media Designer", "UX Researcher", "Interaction Designer", "Visual Designer"],
        syllabus: [
            {
                title: "",
                items: [
                    "Principles of Design in UI/UX",
                    "Digital Design",
                    "Creative Vector Illustrations",
                    "Design Thinking Process",
                    "UX Research Process in UCD",
                    "UX Informative Architecture",
                    "UI Design Principles",
                    "Wireframing and Collaboration",
                    "Interactive Prototyping with Figma",
                    "UX Research Fundamentals",
                    "Gen AI for UI/UX Design",
                    "Ethical AI Practices",
                    "Responsive Design – HTML, CSS",
                    "Make a Website with WordPress",
                    "Working with Frameworks",
                    "Case Study and Capstone Project",
                    "Career Launchpad",
                ]
            },
        ]
    },

    {
        title: "Advanced Program in Digital Marketing with Gen AI",
        slug: "advanced-program-in-digital-marketing-with-gen-ai",
        featured: false,
        description: "The Advanced Program in Digital Marketing with Gen AI is a comprehensive course designed to equip professionals with cutting-edge skills in digital marketing, arti cial intelligence and data-driven strategies. Designed for career growth, it prepares you for roles like AI Marketing Specialist, Paid Media Expert, or Digital Strategist across e-commerce, tech, advertising and marketing agencies. Whether scaling campaigns or launching a freelance business, this program delivers the cutting-edge skills needed to succeed in today’s fast-evolving digital landscape.",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
        duration: "122",
        softwareAndToolsCovered: ["Google Ads", "Google Analytics", "Semrush", "SpyFLU / Wordstream", "Social Pilot", "UpContent", "Curata", "Social Media Ads Platforms", "Hubspot", "Mixpanel", "Sprout Social", "Ahrefs", "Google Data Studio", "Bitly", "Canva", "Mailerlite", "WordPress", "Mailchimp", "Zapier", "Hootsuite"],
        jobProfiles: ["Digital Marketing Executing", "Social Media Strategist", "Marketing Data Analyst", "SEO/SEM Specialist", "Digital Marketing Consultant", "Paid Media Specialist"],
        syllabus: [
            {
                title: "",
                items: [
                    "Foundations of Digital Marketing",
                    "Concepts of Web Design and Development",
                    "Search and Display Marketing",
                    "Social Media Marketing",
                    "Role of AI in Digital Marketing",
                    "Paid Advertising Strategies",
                    "Advanced Analytics",
                    "Affiliate Marketing",
                    "Advanced Marketing Automation",
                    "Data Privacy and Digital Marketing Ethics",
                    "Portfolio Powerhouse",
                    "Career Launchpad",

                ]
            },
        ]
    },

    {
        title: "Next-Gen Visual Design & Motion Graphics",
        slug: "next-gen-visual-design-and-motion-graphics",
        featured: false,
        description: "The Motion Graphics Design program lets you bring visuals to life through stunning animations and cinematic motion graphics. Learn the core principles of visual design, typography and color theory while mastering industry tools like After E ects, Premiere Pro and DaVinci. From social media videos to cinematic edits, this program prepares you to create eye-catching motion graphics that captivate audiences and elevate your creative career",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
        duration: "220",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Canva", "Adobe Animate CC", "Adobe Premiere Pro CC", "Adobe Audition CC", "Adobe After Effects", "DaVinci", "Gen AI Tools"],
        jobProfiles: ["Graphic Designer", "Digital Illustrator", "UI Artist", "Motion Graphics Artist", "Social Media Designer", "Video Editor", "Color Grading Artist", "Creative Designer"],
        syllabus: [
            {
                title: "",
                items: [
                    "Foundation of Visual Design and Communication",
                    "Cinematography and Photography Basics",
                    "Copyright and Design Ethics",
                    "Typography Techniques",
                    "Color and Light Magic",
                    "Creative Vector Illustrations",
                    "Digital Design",
                    "Designing for Social Engagement",
                    "2D Motion Magic",
                    "Cinematic Edits",
                    "Digital Sound Craft",
                    "Motion Graphics",
                    "Importance of Color Grading",
                    "AI Art Innovator",
                    "Portfolio Powerhouse",
                    "Career Launchpad",

                ]
            },
        ]
    },

    {
        title: "Master Program in Game  Art, Design & Development  with ARVR-XR",
        slug: "master-program-in-game-art-design-and-development-with-arvr-xr",
        featured: false,
        description: "The Master Program in Game Art, Design and Development with ARVR-XR prepares you to create immersive digital experiences across games, augmented reality (AR), virtual reality (VR) and extended reality (XR). From mastering game art and design to developing real-time game worlds and AR/VR experiences, this comprehensive program equips you with advanced skills in Unreal Engine, Unity and 3D modeling, setting you on a path to becoming an expert in the rapidly evolving world of game and immersive media development.",
        heroImage: "/images/Game/05.png",
        duration: "818",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Figma", "Adobe Animate CC", "GDevelop.io", "Autodesk Maya", "Maxon ZBrush", "Adobe Substance Painter", "Unreal Engine", "Blender", "Adobe Substance Designer", "Adobe Substance 3D Stager", "Reality Capture", "Unity", "Spark AR", "Gen AI Tools"],
        jobProfiles: ["Game Designer", "Game Producer", "Level Designer", "2D Game Artist", "UI Artist", "3D Game Artist", "Technical Artist", "Game Environment Artist", "Cinematic Artist", "Unreal Generalist", "Real-time 3D Artist", "Game Developer", "AR/VR Developer"],
        syllabus: [
            {
                title: "Term 1: Game Design and Art Essentials",
                items: [
                    "Fundamentals of Game Art & Design",
                    "Pixel Perfect Painter",
                    "Mastering Digital Illustrations",
                    "UI/UX Design for Games",
                    "Animate for Game Art",
                    "AI Art Innovator",
                    "Introduction to Game Engine",
                    "2D Game Project",
                ]
            },
            {
                title: "Term 2: Advanced Game Art",
                items: ["Understanding Game Production Pipeline",
                    "Asset Creation for CGI & Games",
                    "Mastering Digital Sculpting",
                    "Textures and Details",
                    "Realistic Surface Creation",
                    "Illuminating Assets",
                    "Bringing Characters to Life with Rigging",
                    "Art of 3D Animation",
                    "Cinematic Realism with Unreal",
                    "AI-Powered 3D Work ow",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 3: Game Art Specialist",
                items: ["Specialization in Game Art",
                    "Procedural Texture Creation",
                    "Real-time Lookdev",
                    "Real World Replication",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 4: Comprehensive Game Development",
                items: ["Understanding Unreal Engine for Game Development",
                    "Design Game Worlds with the Level Editor",
                    "Create Game Elements with Actors",
                    "Simplify Game Logic with Blueprints",
                    "Set up Player Controls and Inputs",
                    "Enhance Gameplay with Collision Systems",
                    "Design User-Friendly Interfaces",
                    "Integrate Audio for Immersive Experiences",
                    "Export and Share your Game Demo",
                    "Build a Standout 3D Portfolio",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 5: Immersive Design",
                items: ["Introduction to Augmented Reality",
                    "Creating a VR Experience in Unreal",
                    "Essentials of Unity",
                    "Unity AR Foundation",
                    "Creating AR Experience",
                    "Portfolio Powerhouse",
                    "Career Launchpad",
                ]
            },
        ]
    },

    {
        title: "Advanced Program in Game Art and Design with Specialization",
        slug: "advanced-program-in-game-art-and-design-with-specialization",
        featured: false,
        description: "The Advanced Program in Game Art and Design with Specialization takes you deeper into the world of game design and art, allowing you to hone your skills in 2D and 3D game art creation. Learn everything from digital sculpting and texture creation to rigging and 3D animation, with a focus on game production pipelines and cinematic realism. Master industry-standard tools like Unreal Engine, Maya and ZBrush and specialize in creating game environments, characters and assets for a variety of game genres.",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
        duration: "574",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Figma", "Adobe Animate CC", "GDevelop.io", "Autodesk Maya", "Maxon ZBrush", "Adobe Substance Painter", "Unreal Engine", "Blender", "Adobe Substance Designer", "Adobe Substance 3D Stager", "Reality Capture", "Gen AI Tools"],
        jobProfiles: ["Game Designer", "Game Producer", "Level Designer", "2D Game Artist", "UI Artist", "3D Game Artist", "Technical Artist", "Game Environment Artist", "Cinematic Artist", "Unreal Generalist", "Real-time 3D Artist"],
        syllabus: [
            {
                title: "Term 1: Game Design and Art Essentials",
                items: [
                    "Fundamentals of Game Art & Design",
                    "Pixel Perfect Painter",
                    "Mastering Digital Illustrations",
                    "UI/UX Design for Games",
                    "Animate for Game Art",
                    "AI Art Innovator",
                    "Introduction to Game Engine",
                    "2D Game Project",

                ]
            },
            {
                title: "Term 2: Advanced Game Art",
                items: [
                    "Understanding Game Production Pipeline",
                    "Asset Creation for CGI & Games",
                    "Mastering Digital Sculpting",
                    "Textures and Details",
                    "Realistic Surface Creation",
                    "Illuminating Assets",
                    "Bringing Characters to Life with Rigging",
                    "Art of 3D Animation",
                    "Cinematic Realism with Unreal",
                    "AI-Powered 3D Work ow",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 3: Game Art Specialist",
                items: [
                    "Specialization in Game Art",
                    "Procedural Texture Creation",
                    "Real-time Lookdev",
                    "Real World Replication",
                    "Portfolio Powerhouse",
                ]
            },
        ]
    },

    {
        title: "Advanced Program in Game Art, Design and Development",
        slug: "advanced-program-in-game-art-design-and-development",
        featured: false,
        description: "The Advanced Program in Game Art, Design and Development is designed for those looking to master the art and science of game creation. From mastering digital art and UI/UX design to learning game development techniques with Unreal Engine, this program covers the entire game creation process. Build immersive 2D and 3D environments, create engaging gameplay and develop your skills to produce industry-ready game demos, preparing you for a successful career in game art and development.",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
        duration: "600",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Figma", "Adobe Animate CC", "GDevelop.io", "Autodesk Maya", "Maxon ZBrush", "Adobe Substance Painter", "Unreal Engine", "Gen AI Tools"],
        jobProfiles: ["Game Designer", "Game Producer", "Level Designer", "2D Game Artist", "UI Artist", "3D Game Artist", "Technical Artist", "Game Environment Artist", "Cinematic Artist", "Unreal Generalist", "Real-time 3D Artist", "Game Developer"],
        syllabus: [
            {
                title: "Term 1: Game Design and Art Essentials",
                items: [
                    "Fundamentals of Game Art & Design",
                    "Pixel Perfect Painter",
                    "Mastering Digital Illustrations",
                    "UI/UX Design for Games",
                    "Animate for Game Art",
                    "AI Art Innovator",
                    "Introduction to Game Engine",
                    "2D Game Project",
                ]
            },
            {
                title: "Term 2: Advanced Game Art",
                items: [
                    "Understanding Game Production Pipeline",
                    "Asset Creation for CGI & Games",
                    "Mastering Digital Sculpting",
                    "Textures and Details",
                    "Realistic Surface Creation",
                    "Illuminating Assets",
                    "Bringing Characters to Life with Rigging",
                    "Art of 3D Animation",
                    "Cinematic Realism with Unreal",
                    "AI-Powered 3D Work ow",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 3: Comprehensive Game Development",
                items: [
                    "Understanding Unreal Engine for Game Development",
                    "Design Game Worlds with the Level Editor",
                    "Create Game Elements with Actors",
                    "Simplify Game Logic with Blueprints",
                    "Set Up Player Controls and Inputs",
                    "Enhance Gameplay with Collision Systems",
                    "Design User-Friendly Interfaces",
                    "Integrate Audio for Immersive Experiences",
                    "Export and Share your Game Demo",
                    "Build a Standout 3D Portfolio",
                    "Portfolio Powerhouse",
                ]
            },
        ]
    },

    {
        title: "Advanced Program in Immersive Design",
        slug: "advanced-program-in-immersive-design",
        featured: false,
        description: "The Advanced Program in Immersive Game Development equips you with the skills to create cutting-edge gaming experiences that integrate augmented reality (AR) and virtual reality (VR). From mastering game design and 3D art creation to developing interactive AR/VR experiences using Unity and Unreal Engine, this program prepares you to develop immersive worlds. Learn the tools and techniques required for next-gen game development and dive into the world of immersive technologies to bring your creative visions to life.",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
        duration: "548",
        softwareAndToolsCovered: ["Adobe Illustrator CC", "Adobe Photoshop CC", "Figma", "Adobe Animate CC", "GDevelop.io", "Autodesk Maya", "Maxon ZBrush", "Adobe Substance Painter", "Unreal Engine", "Unity", "Gen AI Tools"],
        jobProfiles: ["Game Designer", "Game Producer", "Level Designer", "2D Game Artist", "UI Artist", "3D Game Artist", "Technical Artist", "Game Environment Artist", "Cinematic Artist", "Unreal Generalist", "Real-time 3D Artist", "Game Developer", "AR/VR Developer"],
        syllabus: [
            {
                title: "Term 1: Game Design and Art Essentials",
                items: [
                    "Fundamentals of Game Art & Design",
                    "Pixel Perfect Painter",
                    "Mastering Digital Illustrations",
                    "UI/UX Design for Games",
                    "Animate for Game Art",
                    "AI Art Innovator",
                    "Introduction to Game Engine",
                    "2D Game Project",
                ]
            },
            {
                title: "Term 2: Advanced Game Art",
                items: [
                    "Understanding Game Production Pipeline",
                    "Asset Creation for CGI & Games",
                    "Mastering Digital Sculpting",
                    "Textures and Details",
                    "Realistic Surface Creation",
                    "Illuminating Assets",
                    "Bringing Characters to Life with Rigging",
                    "Art of 3D Animation",
                    "Cinematic Realism with Unreal",
                    "AI-Powered 3D Work ow",
                    "Portfolio Powerhouse",
                ]
            },
            {
                title: "Term 3: Immersive Design",
                items: [
                    "Introduction to Augmented Reality",
                    "Creating a VR Experience in Unreal",
                    "Essentials of Unity",
                    "Unity AR Foundation",
                    "Creating AR Experience",
                    "Portfolio Powerhouse",
                    "Career Launchpad",
                ]
            },
        ]
    },

    {
        title: "Advanced Program in Animation and VFX",
        slug: "advanced-program-in-animation-and-vfx",
        featured: false,
        description: "Unlock your potential in the world of visual storytelling with the Advanced Program in Animation and VFX. This course takes you through the entire VFX and animation pipeline, from creating stunning 3D models to designing realistic visual e ects. With hands-on training in industry-standard software like Maya, Houdini and Nuke, you’ll develop the technical skills and artistic creativity required to produce high-quality animation and VFX for lm, TV and digital media. Prepare to showcase your talent through a polished portfolio that highlights your mastery in both animation and VFX.",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
        duration: "484",
        softwareAndToolsCovered: ["Adobe Photoshop CC", "Adobe Premiere Pro CC", "Adobe Audition CC", "Adobe After Effects CC", "Autodesk Maya", "nCloth", "XGen", "Adobe Substance Painter", "Houdini", "Silhouette", "3D Equalizer", "Nuke"],
        jobProfiles: ["Concept Artist", "Character Designer", "3D Modeler", "Texturing Artist", "Lighting Artist", "3D Animator", "Rigging Artist", "3D Generalist", "3D Designer", "Compositor", "Matchmove Artist", "VFX Generalist", "FX Artist", "Motion Graphics Artist", "Matte Painter", "Video Editor", "Roto Artist"],
        syllabus: [
            {
                title: "Term 1 - Creative Design and Digital Media",
                items: [
                    "Cinematography and Photography Basics",
                    "Color and Light Magic",
                    "Perspectives and Character Design",
                    "Pixel Perfect Painter",
                    "Cinematic Edits",
                    "Digital Sound Craft",
                    "Motion Graphics",
                ]
            },
            {
                title: "Term 2 - Advanced 3D Design",
                items: [
                    "Understanding CG Pipeline",
                    "Asset Creation for CGI & Games",
                    "Textures and Details",
                    "Realistic Surface Creation",
                    "Illuminating Assets",
                    "Bringing Character to Life with Rigging",
                    "Art of 3D Animation",

                ]
            },
            {
                title: "Term 3 - Advanced FX and Compositing",
                items: [
                    "3D FX, Dynamics and Simulations",
                    "Procedural FX with Houdini",
                    "Advanced Roto with Silhouette",
                    "Art of Camera Tracking",
                    "Magic of Compositing with Nuke",
                    "Portfolio Powerhouse",
                    "Career Launchpad",

                ]
            },
        ]
    },
    {
        title: "Advanced Digital Graphics and Animation",
        slug: "advanced-digital-graphics-and-animation",
        featured: false,
        description: "The Advanced Digital Graphics and Animation program is your gateway to mastering the essentials of both digital graphics and animation. Learn how to design and animate engaging visuals, from creating pixel-perfect digital illustrations to advanced 3D character modeling. Whether you choose Maya or Blender, this course covers everything from the fundamentals of design to the intricacies of 3D animation, ensuring you have the skills to bring your digital creations to life. With expert guidance and industry-leading tools, you’ll gain the condence to take on any creative project.",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
        duration: "290/274",
        softwareAndToolsCovered: ["Adobe Photoshop CC", "Adobe Premiere Pro CC", "Adobe Audition CC", "Adobe After Effects CC", "Autodesk Maya*", "Blender*"],
        jobProfiles: ["Concept Artist", "Character Designer", "3D Modeler", "Texturing Artist", "Lighting Artist", "3D Animator", "Rigging Artist", "3D Generalist", "3D Designer", "3D Product Designer"],
        syllabus: [
            {
                title: "Term 1 - Creative Design and Digital Media",
                items: [
                    "Cinematography and Photography Basics",
                    "Color and Light Magic",
                    "Perspectives and Character Design",
                    "Pixel Perfect Painter",
                    "Cinematic Edits",
                    "Digital Sound Craft",
                    "Motion Graphics",

                ]
            },
            {
                title: "Term 2A - 3D Design with Maya",
                items: [
                    "Understanding CG Pipeline",
                    "Asset Creation for CGI & Games",
                    "Textures and Details",
                    "Illuminating Assets",
                    "Bringing Characters to Life with Rigging",
                    "Art of 3D Animation",
                    "Portfolio Powerhouse",
                    "Career Launchpad",

                ]
            },
            {
                title: "Term 2B - 3D Design with Blender",
                items: [
                    "Understanding CG Pipeline",
                    "Introduction to Blender",
                    "Modeling Concepts and Techniques",
                    "UV Mapping and Texturing",
                    "Materials and Shading",
                    "Lighting Techniques",
                    "Animation in Blender",
                    "Rendering and Post Processing",
                    "Portfolio Powerhouse",
                    "Career Launchpad",

                ]
            },
        ]
    },
    {
        title: "Advanced Program in VFX Filmmaking",
        slug: "advanced-program-in-vfx-filmmaking",
        featured: false,
        description: "The Advanced Program in VFX Filmmaking takes you deep into the world of cinematic VFX production. From cinematography and digital design to advanced compositing and 3D animation, this course equips you with the complete skill set needed to bring your lm concepts to life. Specialize in advanced techniques like rotoscoping, camera tracking and compositing with Nuke and learn to build a robust VFX pipeline. This program helps you develop a professional portfolio that showcases your ability to create high-impact visuals for lm, television and digital media.",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
        duration: "426",
        softwareAndToolsCovered: ["Adobe Photoshop CC", "Adobe Premiere Pro CC", "Adobe Audition CC", "Adobe After Effects CC", "Storyboarder", "Autodesk Maya", "Substance", "Silhouette", "3D Equalizer", "Nuke", "Adobe Substance Painter"],
        jobProfiles: ["Concept Artist", "Storyboard Artist", "3D Modeler", "Texturing Artist", "Lighting Artist", "3D Animator", "Rigging Artist", "3D Generalist", "3D Designer", "Compositor", "Motion Graphics Artist", "Matte Painter", "Video Editor", "Roto Artist", "Matchmove Artist", "BG Prep & Paint Artist"],
        syllabus: [
            {
                title: "Term 1 - Creative Design and Digital Media",
                items: [
                    "Cinematography and Photography Basics",
                    "Color and Light Magic",
                    "Perspectives and Character Design",
                    "Pixel Perfect Painter",
                    "Storyboard Mastery",
                    "Cinematic Edits",
                    "Digital Sound Craft",
                    "Motion Graphics",

                ]
            },
            {
                title: "Term 2 - Advanced 3D Design",
                items: [
                    "Understanding CG Pipeline",
                    "Asset Creation for CGI & Games",
                    "Textures and Details",
                    "Realistic Surface Creation",
                    "Illuminating Assets",
                    "Bringing Characters to Life with Rigging",
                    "Art of 3D Animation",

                ]
            },
            {
                title: "Term 3 - Advanced Tracking and Compositing",
                items: [
                    "Advanced Roto with Silhouette",
                    "Art of Camera Tracking",
                    "Magic of Compositing with Nuke",
                    "Portfolio Powerhouse",
                    "Career Launchpad",

                ]
            },
        ]
    },
    {
        title: "Advanced Program in VFX Compositing and Editing",
        slug: "advanced-program-in-vfx-compositing-and-editing",
        featured: false,
        description: "Dive into the art of blending reality and imagination with the Advanced Program in  VFX Compositing and Editing. This course focuses on the critical techniques of compositing and editing, teaching you how to integrate digital assets seamlessly into live-action footage. Master tools like Nuke and Silhouette for advanced rotoscoping, camera tracking and color grading, while learning to craft cinematic edits that captivate audiences. You’ll also sharpen your skills in motion graphics and sound design, building the expertise to deliver stunning visual content for lm and media production.",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
        duration: "220",
        softwareAndToolsCovered: ["Adobe Photoshop CC", "Adobe Premiere Pro CC", "Adobe Audition CC", "Adobe After Effects CC", "Silhouette", "Nuke", "DaVinci"],
        jobProfiles: ["Digital Designer", "Compositor", "Motion Graphics Artist", "Matte Painter", "Video Editor", "Roto Artist"],
        syllabus: [
            {
                title: "",
                items: [
                    "Cinematography and Photography Basics",
                    "Color and Light Magic",
                    "Pixel Perfect Painter",
                    "Cinematic Edits",
                    "Digital Sound Craft",
                    "Motion Graphics",
                    "Magic of Compositing with Nuke",
                    "Advanced Roto with Silhouette",
                    "Importance of Color Grading",
                    "Portfolio Powerhouse",
                    "Career Launchpad",
                ]
            },
        ]
    }
];
