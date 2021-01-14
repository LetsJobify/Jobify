import DataTable, { createTheme } from 'react-data-table-component';
import { Box, Container, Center, Spinner } from "@chakra-ui/react"
import React, { useState, useEffect, useContext } from 'react';
import { GlobalStateContext } from './App';


export default function Aggregate() {

  const { colorMode } = useContext(GlobalStateContext);

  if (colorMode === 'dark') {
    createTheme('mood', {
      text: {
        primary: '##FFFFFF',
        secondary: '##FFFFFF',
      },
      background: {
        default: '#000000',
      },
      context: {
        background: '##FFFFFF',
        text: '#FFFFFF',
      },
      divider: {
        default: '#54545E',
      },
      action: {
        button: '#FFFFFF',
        hover: '#FFFFFF',
        disabled: '#FFFFFF',
      },
    });
  } else {
    createTheme('mood', {
      text: {
        primary: '#000000',
        secondary: '#000000',
      },
      background: {
        default: '#FFFFFF',
      },
      context: {
        background: '#FFFFFF',
        text: '#FFFFFF',
      },
      divider: {
        default: '#54545E',
      },
      action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
      },
    });
  }

  const [isLoading, setIsLoading] = useState(false);

  const [dataArr, setData] = useState([]);
  const columns = [];
  useEffect( async () => {
    setIsLoading(true);
    const request = await fetch('/interview/all/aggregate')
    const response = await request.json();
    setData(response);
    setIsLoading(false);

  }, [colorMode]);

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

  // const newArr = []
  // dataArr.forEach(el=> {
  //   newArr.push(el)
  // })
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
      name: 'Feedback',
      selector: 'feedback',
      sortable: true,
    }
  );
  console.log('data-columns ', columns);

  console.log('data-array ', dataArr);
  const ExpandableComponent = ({ dataArr }) => (
    <ul>
      <li>Feedback: {dataArr.feedback}</li>
      <li>Name: {dataArr.name}</li>
      <li>Data: {dataArr.date}</li>
    </ul>
  );
  // const exdata = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
  // const excolumns = [
  //   {
  //     name: 'Title',
  //     selector: 'title',
  //     sortable: true,
  //   },
  //   {
  //     name: 'Year',
  //     selector: 'year',
  //     sortable: true,
  //     right: true,
  //   },
  // ];
  return (
<<<<<<< HEAD
    <div>
    <div>
      what the fuck
    </div>
    <div className="companies">
      <DataTable
        defaultSortAsc="true"
        Clicked
        title="Company Listings"
        columns={columns}
        data={dataArr}
        expandableRows

        // expandableRowsComponent={<ExpandableComponent />}
      />
    </div>
    </div>
=======
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
          theme='mood'
        />
      </div>
      )}
    </>
>>>>>>> 299d708f5f003d4e71ecfdd7812edf5c51fa13f1
  );
}
