import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';
import './Quiz.css';
import { useNavigate, Link } from 'react-router-dom';

const Photo = () => {
  const [highlightedButton, setHighlightedButton] = useState(null);
  const navigate = useNavigate();

  const highlightButton = (event) => {
    const button = event.target;
    setHighlightedButton(button.innerText);
  };

  return (
    <>
      <div>
        <div className='icon'>
          <Button
            shape="circle"
            style={{ position: 'absolute', left: 300, top: 10 }}
            icon={<LeftCircleFilled />}
          />
        </div>
        <div className='title'>
          <h2> คุณประสบปัญหาปวดเข่า </h2>
          <div>
            <Image width={400} src="/cat.jpg" />
            <div className='button'>
              <div className='photo'>
                <Link to="/Photo1">
                  <button
                    type="button"
                    className={highlightedButton === 'Yes' ? 'yes-button highlight' : 'yes-button'}
                    onClick={highlightButton}
                  >
                    Yes
                  </button>
                </Link>
                <h>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; หรือ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h>
                <Link to="/Photo1">
                  <button
                    type="button"
                    className={highlightedButton === 'No' ? 'no-button highlight' : 'no-button'}
                    onClick={highlightButton}
                  >
                    No
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => navigate('/Photo1')}>ไปต่อ</button>
      </div>
    </>
  );
};

export default Photo;
