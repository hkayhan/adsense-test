import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  return (
      <main className={styles.main}>
        hello
          <div style={{backgroundColor:"aliceblue", height:"500px", width:"100%", color:"black"}}>
asda
              <ins className="adsbygoogle"
                   style={{ display: 'block' }}
                   data-ad-client="ca-pub-8034519108259358"
                   data-ad-slot="6991267104"></ins>
          </div>

          {/* eslint-disable-next-line @next/next/inline-script-id */}
        <Script>
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </main>
  );
}
