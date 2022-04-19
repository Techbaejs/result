/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect } from 'react';
import useGetList from './api/useGetList';
import ReyesJenniferTable from './ReyesJenniferTable';

const ReyesJennifer = () => {
  const { getList,  data, isLoading } = useGetList();
  

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


//   console.log(getList());

  return (
    <div className="mt-5 p-3">
      <div className="container-fluid pt-4">
      {/* <div className="col-12 d-flex mt-2">
          <CustomCsvDownload
            data={data || []}
            headers={referralHeaders}
            filename={filename(`Referral`)}
            classname="btn btn-green shadow-md"
            textcolor="white"
            text="Download Data"
          />
        </div> */}
        <div className="row">
          <ReyesJenniferTable  data={ data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ReyesJennifer;
