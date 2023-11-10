import { ReactComponent as CLoudIcon } from "../../assets/svg/cloud.svg";
import { ReactComponent as FileIcon } from "../../assets/svg/file.svg";
import { ReactComponent as CorrectIcon } from "../../assets/svg/arror-correct.svg";
import { useState } from "react";
import axios from "axios";
import BaseTable from "../BaseTable";
import { ExcelColumns, EXCEL_DUMMY_DATA } from "../../assets/data/data";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [progress, setProgress] = useState(false);
  const [rowsData, setRowsData] = useState([]);
  const [rowsDatas, setRowsDatas] = useState([]);
  const [colsData, setColsData] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rows = [...Array(2).keys()].map(() => EXCEL_DUMMY_DATA);

  const handleFIleUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    ExcelRenderer(file, (err, response) => {
      if (err) {
        console.log(err);
      } 
      else {
        setColsData(response.rows[0]);
        setRowsData(response.rows.slice(1));
        console.log({ response });
        const [headers, ...rest] = response.rows;
        const transform = rest.map((arr) => {
          const obj = {};
          arr.forEach((itm, idx) => {
            obj[headers[idx].toLowerCase()] = itm;
          });

          return obj;
        });

        setRowsDatas(transform);
      }
    });
    const fileName =
      file.name.length > 12
        ? `${file.name.substring(0, 12)}... .${file.name.split(".")[1]}`
        : file.name;
    // console.log({fileName})
    const _fd = new FormData();
    _fd.append("file", file);

    setFiles((prevS) => [
      ...prevS,
      {
        name: fileName,
        loading: 0,
      },
    ]);
    setProgress(true);

    axios
      .post("https://httpbin.org/post", _fd, {
        onUploadProgress: ({ loaded, total }) => {
          setFiles((prevS) => {
            const newFiles = [...prevS];
            newFiles[0].loading = Math.floor((loaded / total) * 100);
            return newFiles;
          });
          if (loaded === total) {
            const fileSize =
              total < 1024
                ? `${total} KB`
                : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
            setUploadedFiles([
              ...uploadedFiles,
              {
                name: fileName,
                size: fileSize,
              },
            ]);
            setFiles([]);
            setProgress(false);
          }
        },
      })
      .catch(console.error);
  };

  console.log({ rowsData, rowsDatas });
  // console.log({colsData})
  // const viewHeader = header.map((data, idx) => (
  //   console.log(data)
  // ))
  // const age = rowsData[2][1]

  // console.log(age)

  // console.log({ExcelColumns, EXCEL_DUMMY_DATA})

  return (
    <>
      <div className="">
        <div className="w-2/6 mx-auto flex flex-col items-center justify-center p-10 border-2 border-dashed border-black">
          <div className="relative p-[10px] bg-black w-[45px] rounded-lg cursor-pointer ">
            <CLoudIcon />
          </div>
          <p className="mt-2">Browse File to upload</p>
          <input
            type="file"
            name="file"
            className="absolute top-[30%] left-[50%] opacity-0 z-20 cursor-pointer"
            onChange={handleFIleUpload}
          />
        </div>

        {progress && (
          <div>
            {files.map((file, idx) => (
              <section
                className="w-2/6 mx-auto p-1 bg-black text-white grid grid-cols-[50px_auto] items-center space-y-1"
                key={idx}
              >
                <div className="col-span-1 row-span-3 ml-[10px]">
                  <FileIcon className="scale-150" />
                </div>
                <div className="flex items-center justify-between px-2">
                  <div>
                    <p>{`${file.name} - uploading`}</p>
                  </div>
                  <div>
                    <p className="text-sm">{`${file.loading}%`}</p>
                  </div>
                </div>
                <div className="flex items-start px-2 pb-2 pt-2">
                  <progress
                    className="h-[5px] w-full"
                    max="100"
                    value={`${file.loading}`}
                  ></progress>
                </div>
              </section>
            ))}
          </div>
        )}

        {uploadedFiles.map((file, idx) => (
          <section
            className="w-2/6 mx-auto p-1 bg-black text-white grid grid-cols-[50px_auto] items-center space-y-1"
            key={idx}
          >
            <div className="col-span-1 row-span-3 ml-[10px]">
              <FileIcon className="scale-150" />
            </div>
            <div className="flex items-center justify-between px-2">
              <div>
                <p>{file.name}</p>
              </div>
              <div>
                <CorrectIcon className="scale-150" />
              </div>
            </div>
            <div className="flex items-start px-2 pb-2 pt-2">
              <p className="text-sm">{file.size}</p>
            </div>
          </section>
        ))}

        <BaseTable
          rows={rowsDatas || []}
          // rows={rowsData || []}
          columns={ExcelColumns}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </div>
    </>
  );
};

export default FileUpload;
