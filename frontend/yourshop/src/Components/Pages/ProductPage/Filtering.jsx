import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

function Filter({setCat}) {

  return (
    <RadioGroup >
    <Stack direction='row'>
      <Radio className='filterRadio' colorScheme='green' value='all' onChange={(e)=>setCat(e.target.value)} defaultChecked >All</Radio>
      <Radio className='filterRadio' colorScheme='green'  value='Mens' onChange={(e)=>setCat(e.target.value)}>Mens</Radio>
      <Radio className='filterRadio' colorScheme='green'  value='Womens' onChange={(e)=>setCat(e.target.value)}>Womens</Radio>
      <Radio className='filterRadio' colorScheme='green'  value='Children' onChange={(e)=>setCat(e.target.value)}>Children</Radio>
    </Stack>
  </RadioGroup>
  );
}

export default Filter;