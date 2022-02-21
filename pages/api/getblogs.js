import axios from 'axios'
export default async function getBlogs(req, res) {
  const data = await axios.get('https://toppstation.com/api/blogs')
  res.status(200).json(data.data)
}
