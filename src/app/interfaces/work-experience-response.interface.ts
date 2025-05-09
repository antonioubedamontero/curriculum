export interface WorkExperienceResponseDetail {
  sectionTitle: string;
  sectionIcon: string;
  sectionAriaTitle: string;
  workExperiences: WorkExperienceItemResponse[];
}

export type WorkExperiencesResponse = Record<
  string,
  WorkExperienceResponseDetail
>;

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
