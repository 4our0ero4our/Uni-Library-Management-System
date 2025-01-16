const BookCover = ({ image }) => {
  return (
    <div style={styles.bookContainer}>
      <div style={{ ...styles.spine }}></div>
      <div style={{ ...styles.bottom }}></div>
      <img src={image} alt="Book Cover" style={styles.coverImage} />
    </div>
  );
};

const styles = {
  bookContainer: {
    position: "relative",
    display: "inline-block",
    width: "240px",
    height: "335px",
    transformStyle: "preserve-3d",
    boxShadow: "5px 10px 20px rgba(0,0,0,0.3)", // Adds shadow effect
  },
  coverImage: {
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.3)", // Additional shadow for depth
    zIndex: 2,
    position: "relative",
  },
  spine: {
    position: "absolute",
    width: "20px",
    height: "100%",
    background: "linear-gradient(to right, #2a2a2a, #4a4a4a)",
    left: "-20px",
    top: "0",
    borderRadius: "4px 0 0 4px",
    zIndex: 1,
  },
  bottom: {
    position: "absolute",
    width: "100%",
    height: "20px",
    background: "linear-gradient(to top, #dcdcdc, #f5f5f5)",
    bottom: "-20px",
    left: "0",
    borderRadius: "0 0 4px 4px",
    zIndex: 0,
  },
};

export default BookCover;
