const getLines = async () => {
  try {
    // const res = await fetch("https://vinuxd.vercel.app/api/pickup");
    const res = await fetch("./data.json");
    const data = await res.json();
    // console.log(data);
    const myPickupLine = document.querySelector("#myPickupLine");
    let randomNum = Math.floor(Math.random() * 10);
    // console.log(randomNum);
    const line = data.pickUpLines;
    // console.log(line[randomNum]);
    // console.log(randomNum);
    // console.log(line[randomNum].pickup);
    // console.log(line);
    myPickupLine.innerHTML = line[randomNum].pickup;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", () => {
  getLines();
});
