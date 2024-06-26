
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import Learner from './Learner';

const App = () => {
  const [learners] = useState([
    {
      name: 'Cait Yomorta',
      bio: 'College is hard. But, I am tough too. I am determined to get this done.',
      scores: [
         {date: '2018-02-08', score: 77} ,
         {date: '2018-04-22', score: 92} ,
         {date: '2018-09-15', score: 68}
      ]
    },
    {
      name: 'Holly Baird',
      bio: 'I am a nerd that gets stuff done! I hope the world is ready for me.',
      scores: [
        { date: '2018-12-14', score: 88 },
        { date: '2019-01-09', score: 79 },
        { date: '2019-02-23', score: 91 },
        { date: '2019-03-01', score: 95 }
      ]
    },
    {
      name: 'Wes Mungia',
      bio: 'I am Jamaican. I play basketball. While it is hard, I still manage to balance sports and books.',
      scores: [
        { date: '2018-10-11', score: 62 },
        { date: '2018-11-24', score: 74 },
        { date: '2018-12-19', score: 85 }
      ]
    }
  ]);

  return (
    <div className="App">
      {learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
}

export default App;
