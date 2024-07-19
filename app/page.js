import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
        hello
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-xxxxxxxxxx"
             data-ad-slot="xxxxxxx"></ins>
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </script>
      </main>
  );
}
