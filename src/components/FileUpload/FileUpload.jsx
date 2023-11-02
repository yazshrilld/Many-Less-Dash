import { ReactComponent as CLoudIcon } from "../../assets/svg/cloud.svg";
import { ReactComponent as FileIcon } from "../../assets/svg/file.svg";
import { ReactComponent as CorrectIcon } from "../../assets/svg/arror-correct.svg";

const FileUpload = () => {
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
            name=""
            id=""
            className="absolute top-[30%] left-[50%] opacity-0 z-20 cursor-pointer"
          />
        </div>
        <section className="w-2/6 mx-auto p-1 bg-black text-white grid grid-cols-[50px_auto] items-center space-y-1">
          <div className="col-span-1 row-span-3 ml-[10px]">
            <FileIcon className="scale-150" />
          </div>
          <div className="flex items-center justify-between px-2">
            <div>
                <p>example-image.png</p>
            </div>
            <div>
              {true ? (
                <p className="text-sm">50%</p>
              ) : (
                <CorrectIcon className="scale-150" />
              )}
            </div>
          </div>
          <div className="flex items-start px-2 pb-2 pt-2">
            {true ? (
              <progress className="h-[5px]" max="100" value="50"></progress>
            ) : (
              <p className="text-sm">704kb</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default FileUpload;
