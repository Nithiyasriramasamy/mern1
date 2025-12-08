import Grandchild from './GrandChild';

export default function Child({ custombutton }) {
  return (
    <>
      <h3>This is Child Component</h3>
     <button onClick={custombutton}>Click Me</button>
      
    </>
  );
}