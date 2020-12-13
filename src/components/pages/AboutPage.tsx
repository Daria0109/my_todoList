import React from 'react';
import {useHistory} from 'react-router-dom'

const AboutPage: React.FC = () => {
  const history = useHistory();
  return  <div>
    <h1>Information</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Cumque illum ipsum pariatur quasi ut.
      Expedita fugit inventore laborum magni nulla.</p>
    <button onClick={() => history.push('/')}>Home page</button>
  </div>
}
export default AboutPage;