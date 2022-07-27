import axios from "axios";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { Movie } from "../types/types";
import requests from "../utils/requests";
import useAuth from "../hooks/useAuth";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "../components/Modal";
import Plans from "../components/Plans";

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  const { loading } = useAuth();
  const showModal = useRecoilValue(modalState);
  const subscription = false;
  if (loading || subscription === null) return null;

  if (!subscription) return <Plans/>
  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
        showModal && "!h-screen overflow-hidden"
      }`}
    >
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 lg:pl-20 pb-24 lg:space-y-24">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="pt-5 md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    axios(requests.fetchNetflixOriginals),
    axios(requests.fetchTrending),
    axios(requests.fetchTopRated),
    axios(requests.fetchActionMovies),
    axios(requests.fetchComedyMovies),
    axios(requests.fetchHorrorMovies),
    axios(requests.fetchRomanceMovies),
    axios(requests.fetchDocumentaries),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.data.results,
      trendingNow: trendingNow.data.results,
      topRated: topRated.data.results,
      actionMovies: actionMovies.data.results,
      comedyMovies: comedyMovies.data.results,
      horrorMovies: horrorMovies.data.results,
      romanceMovies: romanceMovies.data.results,
      documentaries: documentaries.data.results,
    },
    revalidate: 600,
  };
};
