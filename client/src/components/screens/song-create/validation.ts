import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(4, 'Minimum length should be 4'),
  artist: yup.string().required('Artist is required').min(4, 'Minimum length should be 4'),
  text: yup.string().required('Text is required').min(4, 'Minimum length should be 4'),
  audio: yup
    .mixed()
    .required('Audio file is required')
    .test('fileSize', 'File size should be less than 10 MB', (value: FileList | any) => {
      return value && value.size / 1024 / 1024 < 10;
    }),
  picture: yup
    .mixed()
    .required('Image file is required')
    .test('fileSize', 'File size should be less than 5 MB', (value: FileList | any) => {
      return value && value.size / 1024 / 1024 < 5;
    })
});
