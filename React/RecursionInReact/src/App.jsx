import React, { useState } from 'react'
import Comment from './Comoponents/Comment';

const App = () => {
  const data = 
  [
  {
    id: 1,
    author: "Shubham",
    text: "Recursion in React is actually pretty elegant.",
    replies: [
      {
        id: 2,
        author: "Aman",
        text: "Especially for nested comments or folders.",
        replies: [
          {
            id: 3,
            author: "Priya",
            text: "Yeah, tree structures become super clean.",
            replies: [
              {
                id: 4,
                author: "Rohit",
                text: "And you avoid repeating components again and again.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        author: "Neha",
        text: "Can recursion cause performance issues?",
        replies: [
          {
            id: 6,
            author: "Karan",
            text: "Only if the nesting becomes extremely deep.",
            replies: [
              {
                id: 7,
                author: "Simran",
                text: "Memoization can help in some cases too.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    author: "Dev",
    text: "File explorers are another great recursion example.",
    replies: [
      {
        id: 9,
        author: "Ankit",
        text: "Like VS Code sidebar folders.",
        replies: [
          {
            id: 10,
            author: "Mehul",
            text: "Each folder renders itself recursively.",
            replies: [],
          },
        ],
      },
    ],
  },
];


const[comments, setComments] = useState(data)
console.log(comments)


  return (
    <div>
      {comments.map((item) => {
        return <Comment id={item.id} text={item.text} author={item.author} replies={item.replies} />
      })}
    </div>
  )
}

export default App