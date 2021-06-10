import React from "react";
import './Table.css';

function Table({ posts }) {
  return (
    <>
      {
        !posts.length
          ? 'Loading posts...'
          : <table>
            <thead>
              <th></th>
              <th>Date</th>
              <th>By</th>
              <th>Title</th>
              <th>Content</th>
            </thead>
            <tbody>
              {
                posts.map(post => {
                  return <tr>
                    <td className='no-wrap'>{
                      post.content.isFavorite ? <>⭐</> : ''
                    }</td>
                    <td className='no-wrap'>{post.date}</td>
                    <td className='no-wrap'>{post.author}</td>
                    <td>{post.title}</td>
                    <td>{post.content.post}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
      }
    </>
  );
}

export default Table;
