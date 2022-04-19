/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const  ReyesJenniferTable = ({  data, isLoading }) => {
  const tableData =
     data &&  data.length
      ?  data.map((item, i) => {
          const { email, password, details, created_at } = item;
          return (
            <tr className="text-nowrap" key={i}>
              <td>{i + 1}</td>
              <td>{ email}</td>
              <td>{ password}</td>
              <td>{ details || 'N/A'}</td>
              <td>{moment(created_at).format('DD/MM/YYYY')}</td>
            </tr>
          );
        })
      : 'NO RECORD';
  return (
    <div className="card x-panel mt-2 px-0">
      <div className="table-responsive content col-12 px-1">
        <table className="table">
          <thead>
            <tr className="">
              <th>#</th>
              <th>Email</th>
              <th>Password</th>
              <th>Details </th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="8" className="text-center">
                 
                </td>
              </tr>
            ) : (
              tableData
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

 ReyesJenniferTable.propTypes = {
   data: PropTypes.arrayOf.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default  ReyesJenniferTable;
