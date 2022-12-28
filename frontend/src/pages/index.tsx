import React, { useEffect } from "react";
import { NextPage } from "next/types";

/* Component */
import { Section } from "components/Section";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, [router]);

  return (
    <main>
      <Section />
    </main>
  );
};

export default Home;
