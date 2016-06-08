import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('links',function () {
    return Links.find({});
  })

});

// below will only match one level of directories ie. http://localhost:3000/abcd not http://localhost:3000/abcd/ef/g

const middleware = ConnectRoute (function (router) {
  router.get('/:token',(req) => console.log(req))
})

WebApp.connectHandlers.use(middleware);
