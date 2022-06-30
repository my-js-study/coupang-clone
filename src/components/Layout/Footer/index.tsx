import Image from "next/image";

import styles from "../../../../styles/Home.module.css";

const index = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/numble.png" alt="NUMBLE Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

export default index;
