import React, { useContext } from 'react';
import { UserStateContext, UserDispatchContext } from '../context/user/UserContext';

function Home() {
  const { users } = useContext(UserStateContext);
  const { addUser } = useContext(UserDispatchContext);

  return (
    <div>
      <div style={{height: '400px'}}>section1</div>
      <div style={{height: '400px'}}>section2</div>
      <div style={{height: '400px'}}>section3</div>
      <div style={{height: '400px'}}>section4</div>
      <div style={{height: '400px'}}>section5</div>
      <div style={{height: '400px'}}>section6</div>
      <div style={{height: '400px'}}>section7</div>
    </div>
  );
}

export default Home;
