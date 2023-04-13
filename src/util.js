export const getArticles = async(type) => {
  const url = `https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${process.env.NEXT_PUBLIC_NYT_ID}`
   try {
    const response = await fetch(url)
    const data = await response.json()
    return data
   } catch(error) {
    return error
   }
}