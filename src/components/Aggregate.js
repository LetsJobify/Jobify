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
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    fetch('/company')
      .then((data) => data.json())
      .then((response) => {
        response.forEach((company, i) => {
          setData({
            id: company.id,
            title: company.name,
            feedback: company.feedback,
          });
          setColumns({
            name: company.name,
            selector: 'title',
            sortable: true,
          });
        });
      });
    return;
  }, []);
  console.log('DATA:', data);
  console.log('COLUMNS:', columns);
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

  return (
    <div>
    <div>
      what the fuck
    </div>
    <div className="companies">
      <DataTable
        Clicked
        title="Company Listings"
        columns={[columns]}
        data={[data]}
      />
    </div>
    </div>
  );
}
