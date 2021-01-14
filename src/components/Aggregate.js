import DataTable from 'react-data-table-component';
import { Box, Container, Center, Spinner } from "@chakra-ui/react"
import React, { useState, useEffect } from 'react';


export default function Aggregate() {

  const [isLoading, setIsLoading] = useState(false);

  const [dataArr, setData] = useState([]);
  const columns = [];
  useEffect( async () => {
    setIsLoading(true);
    const request = await fetch('/interview/all/aggregate')
    const response = await request.json();
    setData(response);
    setIsLoading(false);

  }, []);

  columns.push(
    {
      name: 'Company',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Rating',
      selector: 'rating',
      sortable: true,
    },
    {
      name: 'Offer',
      selector: 'offer',
      sortable: true,
    },
    {
      name: 'Interviewer',
      selector: 'interviewer',
      sortable: true,
    },
    {
      name: 'Feedback',
      selector: 'feedback',
      sortable: true,
    }
  );

  const ExpandableComponent = ({ data }) => {

    return (
      <Container ml="6" mt="2" mb="2">
        <Box> <span className='bold'>Company:</span> {data.name} </Box>
        <Box> <span className='bold'>Date:</span> {data.date.slice(0, 10)}</Box>
        <Box> <span className='bold'>First Name:</span> {data.first_name}</Box>
        <Box> <span className='bold'>Last Name:</span> {data.last_name}</Box>
        <Box> <span className='bold'>Phone:</span> {data.phone}</Box>
        <Box> <span className='bold'>Notes:</span> {data.pre_notes}</Box>
        <Box> <span className='bold'>Questions:</span> {data.questions}</Box>
        <Box> <span className='bold'>Feedback:</span> {data.feedback}</Box>
        <Box> <span className='bold'>Interviewer:</span> {data.interviewer}</Box>
        <Box> <span className='bold'>Offer:</span> {data.offer}</Box>
      </Container>
    );

  };

  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner size="xl" className='spinner'/>
        </Center>
      ) : (
      <div className="companies">
        <DataTable
          defaultSortAsc="true"
          Clicked
          title="Company Listings"
          columns={columns}
          data={dataArr}
          expandableRows
          expandableRowsComponent={<ExpandableComponent />}
        />
      </div>
      )}
    </>
  );
}
