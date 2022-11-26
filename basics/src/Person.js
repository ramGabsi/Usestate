
function Person(props) {
    const {personName,personLoction} = props
    return (
      <div >
        <h1> Person component </h1>
        <h2>The name is {personName}</h2>
        <h2>I live in {personLoction}</h2>
      </div>
    );
  }
  export default Person;