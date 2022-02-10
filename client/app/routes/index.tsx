import CountDown from '~/components/CountDown';
import Header from '~/components/Header';
import RankList from '~/components/RankList';

export default function Index() {
  return (
    <>
      <Header />
      <main className="relative shadow-2xl mx-auto min-h-screen max-w-screen-lg bg-white">
        <CountDown />
        <RankList />
      </main>
    </>
  );
}
