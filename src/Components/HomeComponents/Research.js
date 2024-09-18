// Research.js
import React from 'react';
import ResearchItem from '../ResearchItem';

export default function Research() {
  // Define two data objects for the research
  const researchData1 = {
    researchTitle: "CONDUCTED ON DIABETES",
    authorName: "Dr. Abdur Rafi",
    authorTitle: "Chief Research Officer, Dhaka Cast Ltd.",
    downloadLink: "https://drive.google.com/uc?export=download&id=1Gskp-SSopY9yPxedYcQH6OBqyDGOiUCy"
  };

  // const researchData2 = {
  //   researchTitle: "CONDUCTED ON HYPERTENSION",
  //   authorName: "Dr. Sarah Ahmed",
  //   authorTitle: "Senior Researcher, Dhaka Cast Ltd.",
  //   downloadLink: "https://drive.google.com/uc?export=download&id=2Hskp-TTopY9yPxedYcQH6OBqzDGOiVCy"
  // };

  return (
    <div className="container pt-2 pb-2 mt-3 mb-5" style={styles.background}>
       <h2 className="text-center mt-4 mb-4" style={styles.title}>RESEARCH FROM DHAKA CAST</h2>
      {/* Passing data to ResearchItem */}
      <ResearchItem {...researchData1} />
      {/* <ResearchItem {...researchData2} /> */}
    </div>
  );
}


const styles = {
  title: {
    color: '#06b4cb',
  },
  background:{
    backgroundColor: "#D7FBFF",
    borderRadius: "20px"
  }
}