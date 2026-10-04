export interface ResumeSection {
  title: string;
  content: string;
}

export interface Resume {
  id: number;
  name: string;
  email: string;
  sections: ResumeSection[];
}

export interface ResumeCreate {
    name: string;
}