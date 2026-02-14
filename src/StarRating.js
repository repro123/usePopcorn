const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const starContainer = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  margin: "0",
  gap: "4px",
};

export default function StarRating(maxRating) {
  return (
    <div style={containerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
