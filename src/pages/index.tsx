import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>lazzzzzzzy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ position: "relative" }}>
        {[...Array(50)].map((_, i) => (
          <p key={i}>{i}</p>
        ))}

        <Image src="/cat.jpg" alt="image" width={400} height={600} />
      </main>
    </>
  )
}
