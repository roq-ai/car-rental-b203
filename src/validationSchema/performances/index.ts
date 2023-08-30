import * as yup from 'yup';

export const performanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  usage_count: yup.number().integer().required(),
  average_duration: yup.number().integer().required(),
  average_distance: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
});
