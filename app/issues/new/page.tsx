import { Button, TextField } from '@radix-ui/themes';
import React from 'react';
import SimpleMDEWrapper from '../../components/SimpleMDEWrapper';

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Title'>
        <TextField.Slot />
      </TextField.Root>
      <SimpleMDEWrapper placeholder='Description' />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
