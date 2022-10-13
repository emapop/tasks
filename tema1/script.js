const weatherContainer = document.querySelector(".weather");
const section = document.querySelector(".section");
clicked = [];
const getCity = async (city) => {
  const parent = city.parentNode;
  //search the parent's children to simulate sibling searching
  var val = parent.querySelector("input[type=text]").value;
  if (val == "") {
    console.log("no input");
  }

  await fetch(`https://weatherdbi.herokuapp.com/data/weather/${val}`)
    .then((res) => res.json())
    .then((data) => {
      return renderWeather(data);
    })
    .catch((err) => {
      console.error(`Something went wrong. Try again!`);
    });
  function renderWeather(data) {
    //iterating the data value
    for (var i = 0; i < 7; i++) {
      const html = `
      <div class="weather-block">
      <div class="info">
        <h2 style="text-align: center;">${data.next_days[i].day}</h2>
        <img class="cloud-image" src=${data.next_days[i].iconURL}>
        <h3>High: ${data.next_days[i].max_temp.c}&deg;</h3>
        <h3>Low: ${data.next_days[i].min_temp.c}&deg;</h3>
        <div>
      <div>
    `;
      weatherContainer.insertAdjacentHTML("beforeend", html);
      //using the push method to increment the number of elements iterated so we can keep the count in the click array
      clicked.push(val);
      if (clicked.length >= 8) {
        weatherContainer.removeChild(weatherContainer.firstElementChild);
      }
    }
  }
};
