const Header = (props) => {
  console.log(props.name)
  return (
      <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return (
      <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = (props) => {
  return props.part.map((val) => (
    <Part part={val} />
    
  ));
};

const Total = (props) => {
  const value = props.part.reduce((total, parts) => total+parts.exercises,0);
  return (
      <p>Number of exercises {value}</p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    part: [{
      name: "Fundamentals of React",
      exercises: 10
    }, {
      name: "Using props to pass data",
      exercises: 7
    }, {
      name: "State of a component",
      exercises: 14
    },{
      name:"Javascript",
      exercises:5
    }]
  };
  
  return (
    <div>
      <Header name={course.name}/>
      <Content part={course.part}/>
      <Total part={course.part}/>
    </div>
  )
}

export default App