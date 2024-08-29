import { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";
import Text from "../../components/Text";
import styles from "../styles/index.module.css";

export default function Home() {
  const [search, setSearch] = useState();
  const [user, setUser] = useState();

  async function getInfo() {
    await fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((json) => setUser(json));
      console.log(user)
     

    return user;
  }

  //

  return (
    <>
      <div className={styles.flex}>
        <SearchBox
          inputValue={search}
          onChangeFunc={(e: any) => setSearch(e.target.value)}
          onClickFunc={() => getInfo()}
        ></SearchBox>
      </div>
      <Text text={"Olá!"}></Text>
      <div></div>
    </>
  );
}
