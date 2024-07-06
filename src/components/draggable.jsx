import Draggable from "react-draggable";

export const renderAllShapes = (shapes) => {
  return shapes.map((shape, index) => {
    const { position, styles } = shape;

    return (
      <Draggable
        key={index}
        bounds=".canvas"
        defaultPosition={{ x: position.x, y: position.y }}
      >
        <div style={{ ...styles, position: "absolute" }}></div>
      </Draggable>
    );
  });
};

export const generateRandomShape = () => {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const shapes = ["rectangle", "circle"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  const positionX = Math.floor(Math.random() * 300);
  const positionY = Math.floor(Math.random() * 300);

  return {
    position: { x: positionX, y: positionY },
    styles:
      randomShape === "rectangle"
        ? rectangleStyle(randomColor)
        : circleStyle(randomColor),
  };
};

export const rectangleStyle = (color) => ({
  backgroundColor: color,
  width: `${Math.floor(Math.random() * 100) + 100}px`,
  height: `${Math.floor(Math.random() * 50) + 100}px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "grab",
});

export const circleStyle = (color) => {
  const size = `${Math.floor(Math.random() * 200) + 1}px`;
  return {
    backgroundColor: color,
    width: size,
    height: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "grab",
    borderRadius: "50%",
  };
};
