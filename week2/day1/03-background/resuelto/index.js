const getRandom = () => Math.ceil(Math.random() * 255);

const handleClick = () => {
  document.querySelector(
    "#body"
  ).style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
};

document.querySelector("#btn").addEventListener("click", handleClick);
