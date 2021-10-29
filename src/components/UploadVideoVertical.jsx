import React from "react";

const UploadVideoVertical = () => {
  return (
    <div>
      <h3 className="upload-card-heading">Upload Your Own Card</h3>
      <section className="upload-photo-sec">
        <div className="blank-card">
          <h3>UPLOAD VIDEO</h3>
          <p> If you didn't upload photo, first frame of the video will would be used.</p>
          <a href="">Upload now</a>
        </div>
        <div className="upload-photo-card">
          <div className="upload-photo-card-heading">
            <h3>UPLOAD VIDEO</h3>
          </div>
          <p>Upload your video here</p>
          <button style={{ width: "90%", marginBottom: "1rem" }} className="btn-customize">
            Create card
          </button>
        </div>
      </section>
    </div>
  );
};

export default UploadVideoVertical;
