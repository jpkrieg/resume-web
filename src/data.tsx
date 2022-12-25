import { IResumeData } from "./model/model";

const data: IResumeData = {
    contactInfo: {
        email: "jpk806@gmail.com",
        address: "3345 Oakhill Place, Clarkston, MI 48348",
        phone: "+1 (586) 747-1401"
    },
    skills: {
        skillsCategories: [
            {
                category: "Programming:",
                skills: [
                    "JavaScript, TypeScript",
                    "HTML, CSS (+SASS)",
                    "Node.js",
                    "React.js",
                    "Express.js",
                    "Webpack",
                    "C#, ASP.NET",
                    "C & C++",
                    "SQL",
                    "Firestore & MongoDB",
                    "Unit testing",
                    "Infrastructure as Code",
                    "Micro-services",
                    "Micro-frontends",
                ]
            },
            {
                category: "Other Software:",
                skills: [
                    "Google Cloud Platform",
                    "Linux, MacOS, Windows",
                    "Git, SVN",
                    "Visual Studio, VS Code",
                    "Docker/Podman",
                    "Drone",
                    "Harness",
                ]
            },
        ]
    },
    interests: [
        "Woodworking",
        "College Football",
        "Formula 1",
        "Programming",
        "Homelab/Networking",
        "Video Games",
        "Film",
        "Cars"
    ],
    summary: {
        title: "John Paul Krieg",
        subtitle: "Software Engineer",
        summary: "Professional full-stack web developer since 2019. Equipped with a record of success in delivering high quality features, solving complicated technical problems, mentoring junior developers, and contributing through all phases of the product lifecycle. Toolkit includes excellent problem solving, technical, and communication skills; and an attitude to match."
    },
    experience: [
        {
            title: "Ford Motor Company",
            location: "Remote",
            subtitle: "Software Engineer - Ford Pro Gateway Team",
            dates: "Oct 2021 - Present",
            bulletpoints: [
                "Transformed fordpro.com from a simple marketing site into a powerful content delivery platform, including authentication, multimarket support, and localization",
                "Created powerful tools empowering partners to easily onboard and manage their applications as MFEs",
                "Enabled non-technical personnel to perform the previously technical task of site content management",
                "Contributed through all phases of the product lifecycle",
                "Contributed to our team's Terraform IaC to ensure high availability for our services deployed in GCP",
                "Mentored interns and junior developers, and assisted with the interviewing process"
            ],
        },
        {
            title: "Epic Systems Corporation",
            subtitle: "Software Developer - Charge Router Team",
            location: "Verona, WI",
            dates: "July 2019 - July 2021",
            bulletpoints: [
                "Contributed on two tentpole applications, spanning several development teams and used by thousands of billing and clinical users",
                "Facilitated a multi-year transition from a legacy codebase to a modern web framework",
                "Lead developer on two multi-phase software modernization projects",
                "Performance lead for quantifying and optimizing the performance of our web applications",
                // "Repaired customer-reported issues by implementing hot-fixes compatible across several versions of Epic's software",
            ],
        },
        {
            title: "Link Engineering Company",
            subtitle: "Software Engineer Intern",
            location: "Detroit, MI",
            dates: "May 2018 - Aug 2018",
            bulletpoints: [
                "Developed VBA data visualization scripts to automatically produce reports on dynamometer telemetry data",
                "Automated test engineers' workflows using custom VBA macros",
            ],
        },
    ],
    education: [
        {
            title: "University of Michigan Engineering",
            subtitle: "BSE Computer Science and Engineering | Cum Laude",
            location: "Ann Arbor, MI",
            dates: "Aug 2015 - May 2019",
            description: "Studied: Web Development, Operating Systems, Machine Learning, Software Engineering, Mobile Application Development, Computer Security, Logic Design, and Database Management Systems",
        }
    ],
    involvement: [
        {
            subtitle: "Michigan Marching Band - Trumpet Player",
            // location: "Ann Arbor, MI",
            dates: "Aug 2015 - May 2019",
        },
        {
            subtitle: "Arborhacks - Finance Coordinator",
            // location: "Ann Arbor, MI",
            dates: "Jan 2017 - Dec 2018",
        },
        {
            subtitle: "MIBYTES - Instructional Aide",
            // location: "Ann Arbor, MI",
            dates: "Summer 2017",
        },
    ]
}

export default data;