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
        // response.forEach((company) => {
        //   setData({
        //     ...dataArr,
        //     id: company.company_id,
        //     title: company.name,
        //     feedback: company.feedback,
        //   });
        setData(response);
        // setColumns(Object.keys(response[0]));
        // setColumns(response)
        // setColumns({
        //   ...columns,
        //   name: company.name,
        //   selector: 'title',
        //   sortable: true,
        // });
        // });
        //phone, name, interviewer, rating
      });
    return;
  }, []);
  // console.log('DATA:', dataArr);
  // console.log('COLUMNS:', columns);
  // .then((data) => data.json())
  // .then((response) => {
  //   setCompanies(
  //     response.map((company, i) => {

  // key: `companies${i}`,
  // id: company.id,
  // name: company.name,
  // address: company.address,
  // logo: company.logo,
  // data: {company.size, company.name, company.address}

  // const data = (companies) => {
  //   const dataArr = [];

  //   let columns = 0;
  //   for (let i = 0; i < companies.length; i += 1) {
  //     dataArr.push({
  //       id: companies.id,
  //       title: companies.name,
  //       feedback: companies.feedback,
  //     });
  //     columns.push({
  //       title: companies.name,
  //       selector: companies.name,
  //       sortable: true,
  //     });
  //   }
  // };

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
