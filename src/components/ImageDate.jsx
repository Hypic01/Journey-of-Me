const ImageDate = ({ imageIndex, album }) => {

  const date = album[imageIndex].date;
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  let year = date.getFullYear();

  if (month.length < 2) {
     month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  let displayDate = [year, month, day].join('-');
  
  return (
    <h2>{displayDate}</h2>
  )
}

export default ImageDate;