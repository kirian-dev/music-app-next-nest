import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

export const InputFile = ({ name, register, error, label, accept }: any) => {
  return (
    <FormControl isInvalid={error} marginTop="5">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input type="file" name={name} ref={register} accept={accept} />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
