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
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
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
        featured: false,
        description:
            "Immerse yourself in the realm of visual magic with the Advanced Program in Visual Effects. This program equips you with the skills to bring the most imaginative ideas to life through VFX. Learn to create realistic simulations, compelling composites, and breathtaking effects using industry-standard tools like Houdini and Nuke. Perfect your craft and get ready to shape the visual landscapes of film and digital media.",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
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
        featured: false,
        description:
            "Transform spaces with your creativity in the Advanced Program in Architectural Visualization and Interior Design. Learn to bring architectural concepts to life using powerful tools like AutoCAD, 3ds Max, Blender and Unreal Engine. From realistic textures to immersive virtual walkthroughs, this program empowers you to visualize interiors and architecture with stunning accuracy, preparing you for a career that shapes the built environment.",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
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
        featured: false,
        description:
            "Enter the world of high-impact visual storytelling with the Broadcast Design program. This course teaches you how to craft captivating broadcast graphics and motion design for television, lm and digital media. With tools like Cinema4D and 3ds Max, you'll learn to create dynamic visuals that captivate audiences, preparing you to design the future of broadcast media",
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
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
        heroImage: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
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
];
