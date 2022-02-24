import axios from 'axios'
export default async function getBlogs(req, res) {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
  res.status(200).json(data.data);
}
