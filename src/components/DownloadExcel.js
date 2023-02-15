import { userContext } from "./UserContext";
import * as XLSX from 'xlsx'
import { useContext } from "react";
const DwonloadExcel = () => {

    const userCtx=useContext(userContext)
  
    var data = JSON.parse('['+JSON.stringify(userCtx)+']')
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataURL = URL.createObjectURL(new Blob([excelBuffer], { type: 'application/octet-stream' }));
    const link = document.createElement('a');
    link.href = dataURL;
    link.setAttribute('download', 'data.xlsx');
    document.body.appendChild(link);
    link.click();
  };
  
  export default DwonloadExcel;