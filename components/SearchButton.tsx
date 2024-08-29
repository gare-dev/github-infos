import styles from "@/styles/searchbutton.module.css";
import Image from "next/image";

interface interfaceProps {
  onClick?: any;
}

export default function SearchButton(props: interfaceProps) {
  return (
    <button onClick={props.onClick} className={styles.button}>
      <Image alt="Pic" src={"/searchIcon.png"} height={50} width={50}></Image>
    </button>
  );
}
