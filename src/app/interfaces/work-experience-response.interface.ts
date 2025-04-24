export interface workExperienceResponseDetail {
  sectionTitle: string;
  sectionIcon: string;
  sectionAriaTitle: string;
  workExperiences: WorkExperienceItemResponse[];
}

export interface WorkExperiencesResponse {
  [sectionName: string]: workExperienceResponseDetail;
}

export interface WorkExperienceItemResponse {
  company: string;
  rangeDates: string;
  projects: ProjectItemResponse[];
}

export interface ProjectItemResponse {
  company?: string;
  rangeDates?: string;
  description: string;
}
