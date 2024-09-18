// Research.js
import React, { useEffect, useState } from 'react';
import ResearchItem from './ResearchItem';

export default function Research() {
  const [data, setData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch("http://localhost:3005/research")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container pt-2 pb-2 mt-3 mb-5" style={styles.background}>
      <h2 className="text-center mt-4 mb-4" style={styles.title}>RESEARCH FROM DHAKA CAST</h2>
      {data.map((res) => (
        <ResearchItem 
          key={res.id}
          title={res.title} 
          name={res.name} // Optional chaining + fallback
          designation={res.designation} // Optional chaining + fallback
          link={res.link} // Fallback if downloadLink is missing
        />
      ))}
    </div>
  );
}

const styles = {
  title: {
    color: '#06b4cb',
  },
  background: {
    backgroundColor: "#D7FBFF",
    borderRadius: "20px"
  }
};
