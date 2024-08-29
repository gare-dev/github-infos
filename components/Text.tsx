import styles from "../src/styles/text.module.css";

interface propsInterface {
  text?: any;
}

export default function Text(props: propsInterface) {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  );
}
