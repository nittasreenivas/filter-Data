
console.log('dummy')

const DUMMY = async () => {
    try{
     const res = await fetch("https://dummyjson.com/products?limit=100")
     const {products} = await res.json()
     const fData = products.map((prod) => {
        const {title,description} = prod
        return {title,description}
     })
     console.log('fData::',fData)
     return fData
    }catch(err){
        console.log(`SOME ERROR IN THE API ${err}`)
    }
}

DUMMY() 