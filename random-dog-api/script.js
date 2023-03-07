const dogImageDiv = document.getElementById('dogImage')

const getNewDogButton = document.getElementById('get-new-dog')

getNewDogButton.onclick = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then(
      (json) =>
        (dogImageDiv.innerHTML = `<img src='${json.message}' alt='dog-image' height='300' width='300'>`),
    )
}
