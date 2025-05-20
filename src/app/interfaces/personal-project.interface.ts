export interface PersonalProjects {
  personalProjects: PersonalProject[];
}

export interface PersonalProject {
  name: string;
  code: string;
  app?: string;
}
