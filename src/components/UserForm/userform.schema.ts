import { type Output, enum_, maxValue, minValue, number, object, optional, string } from "valibot";

export enum UserCareer {
  Student = "Student",
  Worker = "Worker",
  Retired = "Retired",
}

export enum UserJobStudent {
  ElementarySchool = "Elementary School",
  MiddleSchool = "Middle School",
  HighSchool = "High School",
  University = "University",
}

export enum UserJobWorker {
  Accountant = "Accountant",
  Sales = "Sales",
  Constructor = "Constructor",
  Banker = "Banker",
  Engineer = "Engineer",
  Others = "Others",
}

export const userJobs = {
  [UserCareer.Student]: Object.values(UserJobStudent),
  [UserCareer.Worker]: Object.values(UserJobWorker),
};

export const userSchema = object({
  id: optional(string()),
  name: string(),
  age: number([minValue(1), maxValue(120)]),
  career: enum_(UserCareer),
  job: optional(string()),
});

export type UserModel = Output<typeof userSchema>;
