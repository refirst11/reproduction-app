/** Add your relevant code here for the issue to reproduce */
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/a">a Link</Link>
      <br />
      <Link href="/b">b Link</Link>
      <br />
      <Link href="/c">c Link</Link>
    </>
  );
}
