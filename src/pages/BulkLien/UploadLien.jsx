import FileUpload from "../../components/FileUpload/FileUpload";
const UploadLien = () => {
  return (
    <>
      <div className="container text-center">
          <p className="text-3xl font-medium">Bulk Lien Upload</p>
          <section className="">
            <FileUpload />
          </section>
      </div>
    </>
  );
};

export default UploadLien;
