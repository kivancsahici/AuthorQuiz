/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

describe("when setting up testing", () => {

  let classroom = {
    "employees":[
      {"firstName":"Sally", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    };

    let  numbers = [45, 4, 9, 16, 25];

  
  it("should fail", () => {
    let add = (x,y) => x + y;

    const sum = classroom.employees.reduce((total, value) =>
      total + value.firstName
    , "");

    console.log(sum);
    expect(add(3,5)).toBe(8);
  });
});