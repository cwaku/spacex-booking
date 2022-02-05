const Save = (data) => {
  localStorage.setItem('missions', JSON.stringify(Array.from(data)));
};
export default Save;
