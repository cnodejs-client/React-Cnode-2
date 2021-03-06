import React from 'react'
import { Result, Icon, Button } from 'antd-mobile';
import { browserHistory } from 'react-router';

export const Success = (props) => {
  return (
    <div style={{
      position: 'absolute',
      top: '40%',
      transform: 'translateY(-50%)',
      width: '100%'
    }}
    >
      <Result
        img={<Icon type={require('../../icons/success_fill.svg')} style={{height: '1rem', width: '1rem'}} />}
        title="发帖成功"
        message="所提交内容已成功发布"
      />
      <Button type="primary" style={{marginTop: '1rem'}} onClick={() => browserHistory.replace('/publish')}>继续发布</Button>
    </div>
  );
}

export default Success;