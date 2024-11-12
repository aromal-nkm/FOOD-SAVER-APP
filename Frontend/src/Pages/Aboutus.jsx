import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.paragraph}>
        At <span style={styles.highlight}>Food Saver</span>, we believe in making every meal count—not just for you, but for the planet. 
        Our mission is to reduce food waste while helping people save money and live more sustainably.
      </p>
      <p style={styles.paragraph}>
        Whether it's meal planning, tracking expiration dates, or redistributing surplus food, 
        <span style={styles.highlight}> Food Saver</span> is your partner in preserving the goodness of every bite.
      </p>
      <p style={styles.paragraph}>
        Join us on our journey to save food, save money, and save the planet—<span style={styles.highlight}>one plate at a time</span>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    color: "#27ae60",
    fontSize: "2.5em",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2em",
    color: "#333",
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  highlight: {
    color: "#27ae60",
    fontWeight: "bold",
  },
};

export default AboutUs;
