import styles from "@/styles/searchbox.module.css";
import SearchButton from "./SearchButton";

interface propsInterface {
  onClickFunc?: any;
  inputValue?: any;
  onChangeFunc?: any;
}

export default function SearchBox(props: propsInterface) {
  return (
    <div className={styles.box}>
      <div className={styles.boxfrombox}>
        <input
          placeholder="Insira aqui o nome de usuário"
          className={styles.input}
          type="text"
          onChange={props.onChangeFunc}
          value={props.inputValue}
        />
        <SearchButton onClick={props.onClickFunc}></SearchButton>
      </div>
    </div>
  );
}
