import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('links',function () {
    return Links.find({});
  });

});

// executed when user visits with route like http://localhost:3000/abcd
function onRoute(req,res,next) {
  // take token out of url and try to find matching link in the Links collection
  const link = Links.findOne({ token:req.params.token });

  // if link object redirect user to long url
  if (link){
    res.writeHead(307, {'Location':link.url}); // redirect
    res.end();
  } else {
    // else , send user to React app
    next();
  }
}

// below will only match one level of directories ie. http://localhost:3000/abcd not http://localhost:3000/abcd/ef/g

const middleware = ConnectRoute (function (router) {
  router.get('/:token',onRoute);
});

WebApp.connectHandlers.use(middleware);
