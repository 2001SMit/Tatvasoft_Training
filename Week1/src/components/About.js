import React from 'react'
import Person from './Person'

function About() {
    const persons = [
        {
            id: 1,
            name: 'Smit',
            age: 21,
            skill: 'Machine Learning, Data Analysis'
        }
    ]
    const personList = persons.map(person => <Person person={person}/>)
  return (
    <div>
        <h1>----------------------------------------------This is About Us Page----------------------------------------------</h1>
        {personList}
    </div>
  )
}

export default About