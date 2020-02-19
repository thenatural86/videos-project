import axios from "axios"

const KEY = "AIzaSyBFG6ZY1_wa1Mh72-Vrm0VYlQ5OODH8sNo"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
})
