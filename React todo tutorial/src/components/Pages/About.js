import React from 'react'

function About() {
    return (
        //returning something has to be wrapped in an element. But if its not needed in the dom then we can use React fragment, a ghost element
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app. Part of a crash course in React</p>
        </React.Fragment>
    )
}

export default About;