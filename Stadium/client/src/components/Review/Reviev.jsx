import React from 'react';

export default function Review({ user, comment, date, rating }) {
    return (
        <article>
            <header>{user}</header>
            <p>{comment}</p>
            <footer>posted on {date}</footer>
        </article>
    )
}