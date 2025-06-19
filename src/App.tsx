// import Shuffle from "./assets/images/shuffle.svg";
// import Android from "./assets/images/Android.png";
import { useState } from "react";

import {
  Container,
  BoxBody,
  ImgLogo,
  ImgCapa,
  ImgButton,
  FilmName,
  Boxall,
  Boxdescrition,
  H1,
  Button,
  P,
  Descrition,
} from "./appStyled";

type Movie = {
  original_title: string;
  poster_path: string;
  overview: string;
};

const App = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c5ae7b435c80c3e1a95b75ea79d5ffca",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setMovies(data.results);
      setCurrentMovieIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  return (
    <>
      <Container isData={movies.length > 0}>
        <BoxBody>
          <ImgLogo src="./src/assets/images/Android.png" alt="Logo" />
          <H1>Não sabe o que assistir?</H1>
          <Boxall>
            {movies.length > 0 && (
              <>
                <ImgCapa
                  src={`https://image.tmdb.org/t/p/w500${movies[currentMovieIndex].poster_path}`}
                  alt="Capa do filme"
                />
                <Boxdescrition>
                  <FilmName>
                    {movies[currentMovieIndex].original_title}
                  </FilmName>
                  <Descrition>{movies[currentMovieIndex].overview}</Descrition>
                </Boxdescrition>
              </>
            )}
          </Boxall>
          <Button onClick={fetchMovies}>
            <ImgButton src="./src/assets/images/shuffle.svg" alt="img button" />
            Encontrar Filme
          </Button>

          <P>
            Clique em "Encontrar filme" que traremos informações de algum filme
            para você assistir hoje.
          </P>
        </BoxBody>
      </Container>
    </>
  );
};

export default App;
