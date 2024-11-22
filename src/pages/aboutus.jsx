import React from 'react';

const teamMembers = [
  { name: 'Farhaan Arshad', image: require('../images/farhaan.jpeg') }, 
  { name: 'Eesha Shah', image: require('../images/eesha.jpeg') }, 
  { name: 'Dhriti Rai', image: require('../images/dhriti.jpeg') }, 
];

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.description}>
        Flights can sometimes feel boring—how long can you just stare out of the window, right? 
        That's why we've developed an innovative in-flight entertainment system designed to keep you engaged. 
        Stay updated with the latest entertainment options and get reminders about the orders you've placed, 
        making your journey more enjoyable and interactive.
        </p>
        <h2 style={styles.subTitle}>Meet Our Team</h2>
        <div style={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.memberCard}>
              <img src={member.image} alt={member.name} style={styles.memberImage} />
              <h3 style={styles.memberName}>{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh', 
  },
  content: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '800px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)', 
    backgroundColor: '#ffffff', 
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '10px',
    color: '#000', 
  },
  description: {
    fontSize: '1.2em',
    marginBottom: '20px',
    color: '#000', 
  },
  subTitle: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#000', 
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'center', 
    flexWrap: 'wrap', 
  },
  memberCard: {
    backgroundColor: '#f9f9f9', 
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    width: '200px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
  },
  memberImage: {
    width: '100px', 
    height: '100px', 
    borderRadius: '8px', 
    objectFit: 'cover', 
  },
  memberName: {
    fontSize: '1.2em',
    marginTop: '10px',
    color:'#000' 
  },
  memberRole: {
    color: '#000', 
  },
};

export default AboutUs;