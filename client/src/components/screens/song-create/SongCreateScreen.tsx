import { FC } from 'react';
import { Flex, Button, FormControl, FormLabel, FormErrorMessage, Input, Textarea, FlexProps } from '@chakra-ui/react';
import { SongFormData } from '@/src/types/song.interface';
import { useCreateSong } from './useCreateSong';
import { validationSchema } from './validation';
import { Formik, Form } from 'formik';

export const SongCreateScreen: FC = () => {
  const { createSong } = useCreateSong();

  return (
    <Flex flexDir="column" width="100%">
      <Formik
        initialValues={{
          name: '',
          artist: '',
          text: '',
          audio: '',
          picture: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values: SongFormData) => {
          createSong(values);
        }}
      >
        {({ errors, touched, handleChange, setFieldValue, handleBlur }) => (
          <Form>
            <FormControl isInvalid={errors && touched.name} marginBottom="1.5">
              <FormLabel>Name of song</FormLabel>
              <Input id="name" name="name" type="text" placeholder="Enter name" onChange={handleChange} />
              {errors && touched.name && <FormErrorMessage>{errors?.name}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors && touched.artist} marginBottom="1.5">
              <FormLabel>Artist of song</FormLabel>
              <Input id="artist" artist="artist" type="text" placeholder="Enter artist" onChange={handleChange} />
              {errors && touched.artist && <FormErrorMessage>{errors?.artist}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors && touched.text} marginTop="5">
              <FormLabel htmlFor="text">Text of song</FormLabel>
              <Textarea id="text" name="text" onChange={handleChange} />
              {errors && touched.text && <FormErrorMessage>{errors?.text}</FormErrorMessage>}
            </FormControl>
            <FormControl marginTop="5">
              <FormLabel htmlFor="audio">Audio file</FormLabel>
              <Input
                id="audio"
                name="audio"
                type="file"
                onChange={(event) => {
                  setFieldValue('audio', event.currentTarget.files[0]);
                }}
                onBlur={handleBlur}
                accept=".mp3,.wav,.ogg"
              />
              {errors && touched.audio && <FormErrorMessage>{errors?.audio}</FormErrorMessage>}
            </FormControl>
            <FormControl marginTop="5">
              <FormLabel htmlFor="audio">Audio file</FormLabel>
              <Input
                id="picture"
                name="picture"
                type="file"
                onChange={(event) => {
                  setFieldValue('picture', event.currentTarget.files[0]);
                }}
                onBlur={handleBlur}
                accept="image/*"
              />
              {errors && touched.picture && <FormErrorMessage>{errors?.picture}</FormErrorMessage>}
            </FormControl>
            <Button colorScheme="cyan" variant="solid" borderRadius="2xl" type="submit" marginTop="10">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
