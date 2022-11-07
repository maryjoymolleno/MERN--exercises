import * as React from 'react';
const list = [{
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Molleno',
    num_comments: 1,
    points: 9,
    objectID: 0,
},
{
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Maryjoy, Antigo',
    num_comments: 1,
    points: 7,
    objectID: 1,
},
];
const App = () => {
    return (
        <div>
        <h1>Everything is Under Control</h1>
        </div>
    ); 
};
const Search = () => {
    return (
    <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />
    </div>
    );
};
const List = () => (
    <ul>
    {list.map((item) => (
    <li key={item.objectID}>
    <span>
    <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    </li>
    ))}
    <div>
        <Search />
        <List />
    </div>
    </ul>
);
export default App;