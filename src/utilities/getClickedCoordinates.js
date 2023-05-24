const clickedCoordinates = (event) => {
  const imageWidth = event.target.offsetWidth;
  const imageHeight = event.target.offsetHeight;
  const xPercentage = (event.nativeEvent.offsetX / imageWidth) * 100;
  const yPercentage = (event.nativeEvent.offsetY / imageHeight) * 100;
  return { xPercentage, yPercentage };
};

export default clickedCoordinates;
