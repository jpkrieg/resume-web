import React, { ReactNode } from "react";

interface IResumeData {
    "summary": {
        "title": string,
        "subtitle": string,
        "summary": string,
    },
    "experience": Array<IExperience>,
    "education": Array<IExperience>
}

export interface IExperience {
    institution: string;
    location: string;
    subtitle: string;
    dates: string;
    description?: string; 
    descriptionList?: Array<IBulletPoint>;
}

export interface IBulletPoint {
    label: string,
    children?: Array<IBulletPoint>;
}

const data: IResumeData = {
    "summary": {
        "title": "John Paul Krieg",
        "subtitle": "Junior Developer",
        "summary": "Professional full-stack web developer since 2019. Equipped with a record of success in delivering high quality features, mentoring junior developers, and exercising software craftsmanship skills. Toolkit includes excellent problem solving and communication skills, and an attitude to match. Invested in constantly improving my craft."
    },
    "experience": [
        {
            institution: "Ford Pro",
            location: "Remote",
            subtitle: "Software Engineer",
            dates: "Oct 2021 - Present",
            descriptionList: [],
        },
        {
            institution: "Epic Systems Corporation",
            location: "Verona, WI",
            subtitle: "Software Developer",
            dates: "July 2019 - July 2021",
            descriptionList: [
                {
                    label: "Facilitated a multi-year transition from a legacy codebase (VB6) to a modern ASP.NET web framework (C# + TypeScript)",
                    children: [
                        { label: "Lead developer on two multi-phase web applications" },
                        { label: "Collaborated on two company-wide \"tentpole\" applications, spanning several development teams and used by thousands of billing and clinical users" },
                        { label: "Measured, investigated, and optimized performance of our web applications" },
                        { label: "Participated in end-user feedback sessions to optimize workflows to their needs" },
                    ]
                },
                {
                    label: "Repaired customer-reported issues by implementing hot-fixes compatible across several versions of Epic's software",
                },
            ],
        },
        {
            institution: "Link Engineering Company",
            location: "Dearborn, MI",
            subtitle: "Software Engineer Intern",
            dates: "May 2018 - Aug 2018",
            descriptionList: [
                {
                    label: "Created a proposal for modernizing the company's version control and code documentation practices",
                },
                {
                    label: "Automated test engineers' workflows using custom VBA macros",
                },
                {
                    label: "Developed report templates and test scripts",
                },
            ],
        },
    ],
    "education": [
        {
            institution: "University of Michigan College of Engineering",
            location: "Ann Arbor, MI",
            subtitle: "BSE Computer Science and Engineering | Cum Laude",
            dates: "Aug 2015 - May 2019",
            description: "Studies Included: Web Development, Operating Systems, Machine Learning, Software Engineering, Mobile Application Development, Computer Security, Logic Design, and Database Management Systems",
        }
    ]
}

export default data;