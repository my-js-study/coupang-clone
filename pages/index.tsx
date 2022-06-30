import type { NextPage } from "next";

import Layout from "../src/components/Layout";
import useMe from "../src/hooks/query/useMe";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const me = useMe({
    refetchInterval: 500,
    onSuccess: (data) => {
      console.log("내 정보입니다", data);
    },
  });

  return (
    <Layout>
      <h1 className={styles.title}>Hello World!</h1>
      <p className={styles.description}>
        Get started by editing <code className={styles.code}>src/services</code>
        ,<code className={styles.code}>src/hooks</code>
      </p>
    </Layout>
  );
};

export default Home;
