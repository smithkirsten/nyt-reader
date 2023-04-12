export const getArticles = async() => {
  const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.NEXT_PUBLIC_NYT_ID}`
   try {
    const response = await fetch(url)
    const data = await response.json()
    return data
   } catch(error) {
    return error
   }
}