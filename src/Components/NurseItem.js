import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function NurseItem({ name, education, experienceYear, image, rating }) {
  return (
    <div className="card text-center  mb-5" style={{ margin: '0 auto', padding: '10px', width: '18rem' }}>
      <img
        src={image}
        className="card-img-top rounded-circle"
        alt={name}
        style={{ width: '150px', height: '150px', margin: '0 auto' }}
      />
      <div className="card-body">
        <h5 className="card-title" style={ styles.name}>
          {name.length > 20 ? (
            <>
              {name.substring(0, 20)+"..."}
            </>
          ) : name}
        </h5>
        <p className="card-text text-info" style={styles.education}>
          {education}
        </p>
        <p className="text-muted" style={styles.experienceYear}> 
          {experienceYear} Years of Experience ({rating} Rating)
        </p>
      </div>
    </div>
  );
}

const styles = {
  name: {
    fontFamily:'Roboto',
    fontSize: '18px',
    fontWeight: 'bold',
    verflowWrap: 'break-word',
    wordWrap: 'break-word',
    maxWidth: '100%'
  },
  education: {
    fontFamily:'Roboto',
    fontSize: '14px',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden'
  },
  experienceYear: {
    fontFamily:'Roboto',
    fontSize: '12px',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden'
  }
}
