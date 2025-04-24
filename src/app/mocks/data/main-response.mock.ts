import {
  HabilitiesResponse,
  LanguagesResponse,
  ProjectItemResponse,
  SummaryResponse,
  TrainingsResponse,
  WorkExperienceItemResponse,
  workExperienceResponseDetail,
  WorkExperiencesResponse,
} from '../../interfaces';

export const summaryResponseMock: SummaryResponse = {
  summary: 'mock summary',
};

export const habilitiesResponseMock: HabilitiesResponse = {
  habilities: ['mock hability1', 'mock hability2', 'mock hability3'],
};

export const trainingsResponseMock: TrainingsResponse = {
  trainings: ['mock trainning 1', 'mock trainning 2', 'mock trainning 3'],
};

export const languagesResponseMock: LanguagesResponse = {
  languages: ['language1', 'language2', 'language3'],
};

export const projectItemResponseWithoutProjectAndRangesMock: ProjectItemResponse =
  {
    description: 'project description mock without client and range dates',
  };

export const projectItemResponseWithProjectAndRangesMock: ProjectItemResponse =
  {
    company: 'client name mock',
    rangeDates: 'range1 - range2 mock',
    description: 'project description mock without client and range dates mock',
  };

export const workExperienceItemResponseMock1: WorkExperienceItemResponse = {
  company: 'company1 mock',
  rangeDates: 'range1 - range2',
  projects: [
    projectItemResponseWithProjectAndRangesMock,
    projectItemResponseWithProjectAndRangesMock,
  ],
};

export const workExperienceItemResponseMock2: WorkExperienceItemResponse = {
  company: 'company2 mock',
  rangeDates: 'range1 - range2',
  projects: [projectItemResponseWithoutProjectAndRangesMock],
};

export const workExperienceResponseDetailMock: workExperienceResponseDetail = {
  sectionTitle: 'work section title mock',
  sectionIcon: 'icon section title mock',
  sectionAriaTitle: 'aria section title mock',
  workExperiences: [
    workExperienceItemResponseMock1,
    workExperienceItemResponseMock2,
  ],
};

export const workExperiencesResponseMock: WorkExperiencesResponse = {
  workSection1: {
    ...workExperienceResponseDetailMock,
  },
  workSection2: {
    ...workExperienceResponseDetailMock,
  },
};
