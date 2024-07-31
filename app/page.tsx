import Link from "next/link";

const Home = () => {


  return (
    <main>
      <Link href='/profile'>Profile</Link>
      <br />
      <Link href="/orders">Orders</Link>
    </main>
  );
}

export default Home;