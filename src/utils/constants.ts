// TODO: These lists of metric types are not static but right now we only displaying statically preset charts
export enum RespiratoryDiseases {
  Adenovirus = 'Adenovirus',
  COVID19 = 'COVID-19',
  hMPV = 'hMPV',
  Influenza = 'Influenza',
  Parainfluenza = 'Parainfluenza',
  Rhinovirus = 'Rhinovirus',
  RSV = 'RSV',
}

export enum InfluenzaMetrics {
  HospitalAdmissionRateByWeek = 'influenza_healthcare_hospitalAdmissionRateByWeek',
  ICUHDUadmissionRateByWeek = 'influenza_healthcare_ICUHDUadmissionRateByWeek',
  TestingPositivityByWeek = 'influenza_testing_positivityByWeek',
}

export enum COVID19Metrics {
  CasesByDay = 'COVID-19_cases_casesByDay',
  CasesCountRollingMean = 'COVID-19_cases_countRollingMean',
  CasesLineagePercentByWeek = 'COVID-19_cases_lineagePercentByWeek',
  CasesRateRollingMean = 'COVID-19_cases_rateRollingMean',
  DeathsONSByDay = 'COVID-19_deaths_ONSByDay',
  DeathsONSRegByWeek = 'COVID-19_deaths_ONSRegByWeek',
  DeathsONSRollingMean = 'COVID-19_deaths_ONSRollingMean',
  AdmissionByDay = 'COVID-19_healthcare_admissionByDay',
  AdmissionRollingMean = 'COVID-19_healthcare_admissionRollingMean',
  OccupiedBedsByDay = 'COVID-19_healthcare_occupiedBedsByDay',
  OccupiedBedsRollingMean = 'COVID-19_healthcare_occupiedBedsRollingMean',
  PCRcountByDay = 'COVID-19_testing_PCRcountByDay',
  Positivity7DayRolling = 'COVID-19_testing_positivity7DayRolling',
  Autumn22DosesByDay = 'COVID-19_vaccinations_autumn22_dosesByDay',
  Autumn22UptakeByDay = 'COVID-19_vaccinations_autumn22_uptakeByDay',
  Autumn23DosesByDay = 'COVID-19_vaccinations_autumn23_dosesByDay',
  Autumn23UptakeByDay = 'COVID-19_vaccinations_autumn23_uptakeByDay',
  Spring23DosesByDay = 'COVID-19_vaccinations_spring23_dosesByDay',
  Spring23UptakeByDay = 'COVID-19_vaccinations_spring23_uptakeByDay',
  Spring24DosesByDay = 'COVID-19_vaccinations_spring24_dosesByDay',
  Spring24UptakeByDay = 'COVID-19_vaccinations_spring24_uptakeByDay',
}
