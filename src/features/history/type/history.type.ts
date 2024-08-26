export type THistory = {
  startDate: string;
  endDate?: string;
  title: string;
  contents: string[];
  link: string;
}

export type THistories = {
  company: string,
  companyEng: string,
  startYear: number,
  endYear: number,
  data: THistory[];
}