//https://rickandmortyapi.com/api/character

console.log('start----------')

const API = async () => {
    try{
      const res = await fetch("https://rickandmortyapi.com/api/character")
      const {results} = await res.json()
      const fData = results.map((ricky) => {
        const {name,status,gender} = ricky
        return{
            name:name,
            status:status,
            gender:gender
        }
      })
      console.log('fData:::',fData)
      return fData
    }catch(err){
        console.log(`SOME ERROR IN THE API ${err.message}`)
    }
}

API()