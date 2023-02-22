import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

function Filter({setCat}) {

  return (
    // <Form id='filterForm'>
    //   {['radio'].map((type) => (
    //     <div key={`inline-${type}`} className="mb-3">
    //       <Form.Check
    //         inline
    //         label="All"
    //         value="all"
    //         name="group1"
    //         onChange={(e)=>setCat(e.target.value)}
    //         type={type}
    //         id={`inline-${type}-1`}
    //       />
    //       <Form.Check
    //         inline
    //         label="Mens"
    //         value="Mens"
    //         name="group1"
    //         onChange={(e)=>setCat(e.target.value)}
    //         type={type}
    //         id={`inline-${type}-1`}
    //       />
    //       <Form.Check
    //         inline
    //         label="Womens"
    //         value="Womens"
    //         name="group1"
    //         onChange={(e)=>setCat(e.target.value)}
    //         type={type}
    //         id={`inline-${type}-2`}
    //       />
    //       <Form.Check
    //         inline
    //         label="Children"
    //         value="Children"
    //         name="group1"
    //         onChange={(e)=>setCat(e.target.value)}
    //         type={type}
    //         id={`inline-${type}-2`}
    //       />

    //     </div>
    //   ))}
    // </Form>

    <RadioGroup >
    <Stack direction='row'>
      <Radio value='all' onChange={(e)=>setCat(e.target.value)} defaultChecked>All</Radio>
      <Radio value='Mens' onChange={(e)=>setCat(e.target.value)}>Mens</Radio>
      <Radio value='Womens' onChange={(e)=>setCat(e.target.value)}>Womens</Radio>
    </Stack>
  </RadioGroup>
  );
}

export default Filter;