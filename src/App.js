import React, { useState } from 'react';

import NewGoal from './components/NewGoal/NewGoal';
import GoalList from './components/GoalList/GoalList';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState(
    [
      {id: '1', text: 'finish the course'},
      {id: '2', text: 'Learn all'},
      {id: '3', text: 'Help others'},
    ]
  );

  const addNewGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal));

    // if depends on the previous otherwise above one;
    setCourseGoals((prevCourseGoals)=>{
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
  <div>
    <h2>Course goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals}/>
  </div>);
};

export default App;
