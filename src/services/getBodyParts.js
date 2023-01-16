
export default function getBodyParts () {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '77cb09fecfmsh579a2be741118f9p117bb7jsn3827c51edb98',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

    }
  }
  fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
    .then(response => response.json())
    .then(data => { return data })
    .catch(err => console.log(err))
}
