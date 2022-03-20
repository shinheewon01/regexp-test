let str = `
  010-1234-5678
  thestcon@gmail.com
  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
  http://localhost:1234
`

  console.log(
    str.match(/[fox]/g)
    )
 