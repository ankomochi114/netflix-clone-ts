import { useState } from 'react'
import './App.scss'
import { Row } from './components/organisms/Row'
import { Nav } from './components/organisms/Nav'
import { Banner } from './components//organisms/Banner'
import { requests } from './request'

const categorys = [
  { title: 'Top Rated', fetchUrl: requests.feactTopRated, isLargeRow: true },
  { title: 'Action Movies', fetchUrl: requests.feactActionMovies },
  { title: 'Comedy Movies', fetchUrl: requests.feactComedyMovies },
  { title: 'Horror Movies', fetchUrl: requests.feactHorrorMovies },
  { title: 'Romance Movies', fetchUrl: requests.feactRomanceMovies },
  { title: 'Documentaries', fetchUrl: requests.feactDocumentMovies },
]

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={requests.feachNetflixOriginals} />
      {categorys.map((category, index) =>
        category.isLargeRow ? (
          <Row
            key={index}
            title={category.title}
            fetchUrl={category.fetchUrl}
            isLargeRow
          />
        ) : (
          <Row
            key={index}
            title={category.title}
            fetchUrl={category.fetchUrl}
          />
        ),
      )}
    </div>
  )
}

export default App
