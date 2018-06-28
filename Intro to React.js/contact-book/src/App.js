import React from 'react';
import './App.css';
import contacts from './data/contacts.json';
import rerender from './index';

let contactIndex = 0;

const makeContact = (data, id) => {
  return (
    <div className="contact" key={id} onClick={() => getContactByIndex(id)}>
      <span className="avatar small">&#9787;</span>
      <span className="title">{data.firstName} {data.lastName}</span>
    </div>
  )
}

const getContactByIndex = (id) => {
  contactIndex = id;
  rerender(App());
}

const getDetail = (contact) => {
  return (
    <div className="content">
      <div className="info">
        <div className="col">
          <span className="avatar">&#9787;</span>
        </div>
        <div className="col">
          <span className="name">{contact.firstName}</span>
          <span className="name">{contact.lastName}</span>
        </div>
      </div>
      <div className="info">
        <span className="info-line">&#x260E; {contact.phone}</span>
        <span className="info-line">&#9993; {contact.email}</span>
      </div>
    </div>
  )
}

const App = () => (
  <div className="container" >
    <header>&#9993; Contact Book</header>
    <div id="book">
      <div id="list">
        <h1>Contacts</h1>
        <div className="content">
          {contacts.map((contact, index) => makeContact(contact, index))}
        </div>
      </div>
      <div id="details">
        <h1>Details</h1>
        {getDetail(contacts[contactIndex])}
      </div>
    </div>
    <footer>Contact Book SPA &copy; 2018</footer>
  </div >
)

export default App;
