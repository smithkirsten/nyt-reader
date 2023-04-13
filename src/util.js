export const getArticles = async(type) => {
  let url
  type === 'popular' ? 
    url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NEXT_PUBLIC_NYT_ID}` :
    url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.NEXT_PUBLIC_NYT_ID}`
   try {
    const response = await fetch(url)
    const data = await response.json()
    return data
   } catch(error) {
    return error
   }
}