import React from 'react';
import { Image } from 'antd';
import { Button } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';
import './Quiz.css';


function highlightButton(event) {
  const buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('highlight');
  }

  const button = event.target;
  button.classList.add('highlight');
}


const Photo1 = () => {
  return (
    <div>
        <div className='icon'>
            <Button
            shape="circle"
            style={{ position: 'absolute', left: 300, top: 10, }}
            icon={<LeftCircleFilled />}
        />
      </div>
      <div className='title'>
        <h2> คุณประสบปัญหาปวดเข่า </h2>
        <div>
          <Image width={400} src="/cat.jpg" />
          <div className='button'>
            <div>
              <button type="button" className='yes-button' onClick={highlightButton}>
                Yes
              </button>
              <h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; หรือ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>
              <button type="button" className='no-button' onClick={highlightButton}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo1;
