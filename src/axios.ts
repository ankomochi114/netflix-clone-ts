import axios from 'axios'

//movie databaseからのbaseURLリクエストを作成
const instance: any = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export default instance
