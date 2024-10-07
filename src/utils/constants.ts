// TODO: The list of metric types is not static but right now we only display statically preset charts
export enum COVID19Metrics {
  CasesByDay = 'COVID-19_cases_casesByDay',
  AdmissionByDay = 'COVID-19_healthcare_admissionByDay',
  PCRcountByDay = 'COVID-19_testing_PCRcountByDay',
  OccupiedBedsByDay = 'COVID-19_healthcare_occupiedBedsByDay',
}
