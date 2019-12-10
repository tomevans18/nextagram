import React from 'react';

export default ({ url: { query: { id = 'Not logged in' } } }) => (
  <div className='main'>
    <h1 className='heading'>
      User profile:
      {' '}
      <b className='username'>{id}</b>
    </h1>
    <style jsx>{`
      .main {
        padding: 100px;
      }

      .heading {
        font: 15px Monaco;
      }

      .username {
        color: blue;
      }
    `}</style>
  </div>
)
