import React from "react";
import classNames from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import type { NextPage } from "next";
import { UserStore } from "../stores/UserStore";
import styles from "../styles/Home.module.scss";
import Header from "../layout/Header";
import { HeroBlock } from "../components";

const Home: NextPage = observer((props) => {
  const store = useInjection(UserStore);

  return (
    <div className={classNames(styles.container, styles.main)}>
      <HeroBlock />
    </div>
  );
});

export default Home;