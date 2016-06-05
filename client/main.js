import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import LinkCreate from './components/link_create.js';

const App = () => {
   return (
      <div>
         <Header />
         <LinkCreate />
      </div>

   );
};

Meteor.startup(() => {
   ReactDOM.render(<App />, document.querySelector('.render-target'));
});
