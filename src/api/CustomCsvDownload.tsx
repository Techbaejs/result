import React from 'react';

import { CSVLink } from 'react-csv';

type DownloadProps = {
  data: any;

  headers: any;

  filename: string;

  classname: string;

  textcolor: string;

  text: string;
};

const CustomCsvDownload = ({ data, headers, filename, classname, textcolor, text }: DownloadProps) => {
  return (
    <CSVLink data={data} headers={headers} filename={filename} className={classname} style={{ color: textcolor }}>
      {text}
    </CSVLink>
  );
};

export default CustomCsvDownload;
