- [ ] Why would you use class component over function components (removing hooks from the question)?
We would use class components over functional components anytime we want acess to lifecycle methods and can sometimes give us additional functionality over function components.

- [ ] Name three lifecycle methods and their purposes.
render() allows us to render the components and then return them.
componentDidMount() is called whenever the component is mounted usually making it ideal for API calls.
componentDidUpdate() is called whenever the component updates so you can run any tests or checks whenever anything is updated.  

- [ ] What is the purpose of a custom hook?
Custom hooks enable more funcitonality in functional components allowing them to behave more like class components.


- [ ] Why is it important to test our apps?
We write tests for our apps to catch problems early and avoid more costly user testing later as well as allowing us to deal with edge cases before they become a major problem.