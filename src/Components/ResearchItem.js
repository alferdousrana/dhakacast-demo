// ResearchItem.js
import React from 'react';
import { FaDownload } from 'react-icons/fa';

export default function ResearchItem({ title, name, designation, link }) {
  return (
    <div className="container pt-2 pb-2">
      <div className="row">
        <div className="col-md-10">
          {/* Research Title */}
          <h3 className="text-left ms-5 mt-4 mb-4" style={styles.title}>{title}</h3>
          {/* Author Name and Title */}
          <h5 className="text-left ms-5 mt-4 mb-4" style={{ color: "#A4449D" }}>{name}, {designation}</h5>
        </div>
        <div className="col-md-2">
          {/* Download Button */}
          <a href={link} className="btn mt-4 mb-4" style={styles.button}>
            DOWNLOAD <FaDownload style={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  title: {
    color: '#06b4cb',
  },
  button: {
    backgroundColor: '#06b4cb',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '10px',
    color: 'white',
  },
};
