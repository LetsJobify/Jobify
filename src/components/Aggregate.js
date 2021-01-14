import DataTable from 'react-data-table-component';
import React, { useState, useEffect } from 'react';

/**full company data:
 * 
 * key={`companies${i}`}
                id={company.id}
                name={company.name}
                rating={company.rating}
                address={company.address}
                offer={company.offer}
                feedback={company.feedback}
                questions={company.questions}
                interviewer={company.interviewer}
                logo={company.logo}
                size={company.size}
                date={company.date}
 */

//add props once connected to db
export default function Aggregate() {
  const [dataArr, setData] = useState([]);
  const columns = [];
  useEffect(() => {
    fetch('/interview/all/aggregate')
      .then((data) => data.json())
      .then((response) => {
       
        setData(response);
        
      });
    return;
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
  );
}
