export type THistory = {
  startMonth: number;
  endMonth?: number;
  title: string;
  content: string;
  link: string;
}

export type THistories = {
  company: string,
  companyEng: string,
  startYear: number,
  endYear: number,
  data: THistory[];
}