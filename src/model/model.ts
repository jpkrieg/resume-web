export interface IResumeData {
    contactInfo: IContactInfo,
    skills: ISkills,
    summary: ISummary,
    experience: Array<IExperience>,
    education: Array<IExperience>
    involvement: Array<IExperience>
}

export interface IContactInfo {
    email: string,
    phone: string,
    address: string
}

export interface ISkills {
    skillsCategories: Array<ISkillsCategory>;
}

export interface ISkillsCategory {
    category: string,
    skills: Array<string>
}

export interface ISummary {
    title: string,
    subtitle: string,
    summary: string,
}

export interface ILocationAndDates {
    location?: string;
    dates?: string;
}

export interface IExperience extends ILocationAndDates {
    title?: string;
    subtitle: string;
    description?: string;
    bulletpoints?: Array<string>;
}