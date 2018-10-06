angular.module('ark').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('modules/agent/view.html',
    "<style>\n" +
    ".btn {\n" +
    "\tmargin-top:3px;\n" +
    "\twidth:140px;\n" +
    "\t}\n" +
    "</style>\n" +
    "<div class=\"container-fluid\">\n" +
    "\n" +
    "\t<div class=\"jumbotron\">\n" +
    "\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-md-6\" style=\"\">\n" +
    "\n" +
    "\t\t\t\t<img src=\"images/genesys-logo-mobile.png\" class=\"img-responsive\"/>\n" +
    "\t\t\t\t<h1>Agent Control</h1>\n" +
    "\t\t\t\t<p>Send events to mobile client...</p>\n" +
    "\n" +
    "\t\t\t\t<form class=\"form-horizontal\" role=\"form\">\n" +
    "\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t<label for=\"inputSessionId\" class=\"col-sm-2 control-label\">Session ID</label>\n" +
    "\t\t\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputSessionId\" ng-model=\"inputSessionId\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t<label class=\"col-sm-2 control-label\">Globals</label>\n" +
    "\t\t\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t\t\t<button ng-click=\"sendEvent({event: 'navigate', path: 'start'})\" class=\"btn btn-primary\">Show Start</button>\n" +
    "\t\t\t\t\t\t\t<button ng-click=\"sendEvent({event: 'navigate', path: 'nosession'})\" class=\"btn btn-primary\">Show No Session</button>\n" +
    "\t\t\t\t\t\t\t<button ng-click=\"sendEvent({event: 'navigate', path: 'welcome'})\" class=\"btn btn-primary\">Show Welcome</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t<label class=\"col-sm-2 control-label\">Authentication</label>\n" +
    "\t\t\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t\t\t<button ng-click=\"sendEvent({event: 'auth', pageData:{pageName:'Sign In', headerImg: 'images/genesys-logo-mobile.png', introText:'Sign in for personalized support from a Microsoft expert at Answer Desk', bottomText:''}})\" class=\"btn btn-primary\">Sign In Screen</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t<label class=\"col-sm-2 control-label\">Pages Navigation</label>\n" +
    "\t\t\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t\t\t<button ng-click=\"sendEvent({event: 'page', pageData:{pageName:'Technical Support', headerImg: 'images/genesys-logo-mobile.png',  introText:'Welcome technical support', bottomText:'An introduction to the mind-bending world of quantum computing. Learn how Microsoft is blending quantum physics with computer science', videoSrc:'http://www.youtube.com/embed/jg8iCnQTLfM?autoplay=1', pageButtons:[{name:'Button 1',action:'button1'},{name:'Button 2',action:'button2'}]}})\" class=\"btn btn-primary\">Quantum - Video</button>\n" +
    "\n" +
    "\t\t\t\t\t\t\t<button ng-click=\"sendEvent({event: 'page', pageData:{pageName:'Microsoft Office Support', headerImg: 'images/genesys-logo-mobile.png', centerImg:'images/ms-office.jpg', introText:'Welcome technical support', bottomText:'An introduction to the mind-bending world of quantum computing. Learn how Microsoft is blending quantum physics with computer science', pageButtons:[{name:'Button 4',action:'button4'},{name:'Button 5',action:'button5'}]}})\" class=\"btn btn-primary\">Office - No Video</button>\n" +
    "\n" +
    "\t\t\t\t\t\t\t<button ng-click=\"sendEvent({event: 'page', pageData:{pageName:'Ask and Expert', headerImg: 'images/genesys-logo-mobile.png', centerImg:'images/ms-tech.png', introText:'Welcome technical support', bottomText:'An introduction to the mind-bending world of quantum computing. Learn how Microsoft is blending quantum physics with computer science', pageButtons:[{name:'Button 4',action:'button4'},{name:'Button 5',action:'button5'}]}})\" class=\"btn btn-primary\">Expert - No Video</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t<label class=\"col-sm-2 control-label\">Menu Navigation</label>\n" +
    "\t\t\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t\t\t<button ng-click=\"sendEvent({event: 'menu', pageData: { pageName:'Reason for call', headerImg: 'images/genesys-logo-mobile.png', introText:'Please tell us the reason for your call today', menuItems: [{name:'Push test 1',action:'none'},{name:'Push test 2',action:'none'}]}})\" class=\"btn btn-primary\">Show Menu 1</button>\n" +
    "\n" +
    "\t\t\t\t\t\t\t<button ng-click=\"sendEvent({event: 'menu', pageData: { pageName:'Office Product', headerImg: 'images/genesys-logo-mobile.png', introText:'Please choose from one of the following Microsoft Office products', menuItems: [{name:'Push test 3',action:'none'},{name:'Push test 4',action:'none'}]}})\" class=\"btn btn-primary\">Show Menu 2</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</form>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t<iframe ng-src=\"{{iframeSrc}}\"  width=\"400\" height=\"650\">\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('modules/auth/view.html',
    "<div class=\"container-fluid\">\n" +
    "\t<img class=\"page-header-img\" ng-if=\"pageData.headerImg != undefined\" ng-src=\"{{pageData.headerImg}}\"/>\n" +
    "\t<h1>{{pageData.pageName}}</h1>\n" +
    "\t<p>{{pageData.introText}}</p>\n" +
    "\n" +
    "\t<form class=\"form-horizontal\" role=\"form\">\n" +
    "\t\t<div class=\"form-group\">\n" +
    "\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"inputEmail3\" ng-model=\"loginForm.username\">\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"form-group\">\n" +
    "\t\t\t<label for=\"inputPassword3\" class=\"col-sm-2 control-label\" ng-model=\"loginForm.password\">Password</label>\n" +
    "\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"inputPassword3\" >\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"form-group\">\n" +
    "\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "\t\t\t\t<button ng-repeat=\"btn in pageData.pageButtons track by $index\" ng-click=\"btnClick($index)\" class=\"btn btn-primary\" style=\"margin-right:3px\">{{btn.name}}</button>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t\n" +
    "\t</form>\n" +
    "\n" +
    "\t<p>{{pageData.bottomText}}</p>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('modules/callback/view.html',
    "<div class=\"container-fluid\">\n" +
    "\t<img class=\"page-header-img\" ng-if=\"pageData.headerImg != undefined\" ng-src=\"{{pageData.headerImg}}\"/>\n" +
    "\t<h1>{{pageData.pageName}}</h1>\n" +
    "\t<p>{{pageData.introText}}</p>\n" +
    "\n" +
    "\t<form class=\"form-horizontal\" role=\"form\">\n" +
    "\t\t<div class=\"form-group\">\n" +
    "\t\t\t<label for=\"cbName\" class=\"col-sm-2 control-label\">Name</label>\n" +
    "\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cbName\" ng-model=\"callbackForm.name\" required>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"form-group\">\n" +
    "\t\t\t<label for=\"cbPhone\" class=\"col-sm-2 control-label\" ng-model=\"callbackForm.phone\">Phone</label>\n" +
    "\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"cbPhone\" required>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"form-group\">\n" +
    "\t\t\t<label for=\"cbDate\" class=\"col-sm-2 control-label\" ng-model=\"callbackForm.phone\">Date</label>\n" +
    "\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t<input type=\"datetime\" date-time ng-model=\"start\">\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\t\t<div class=\"form-group\">\n" +
    "\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "\t\t\t\t<button ng-repeat=\"btn in pageData.pageButtons track by $index\" ng-click=\"btnClick($index)\" class=\"btn btn-primary\" style=\"margin-right:3px\">{{btn.name}}</button>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</form>\n" +
    "\n" +
    "\t<p>{{pageData.bottomText}}</p>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('modules/main/view.html',
    "<ng-switch on=\"module\">\n" +
    "    \n" +
    "    <!-- Default -->\n" +
    "    <welcome ng-switch-when=\"default\" ng-controller=\"WelcomeCtrl\"></welcome>\n" +
    "    <welcome ng-switch-when=\"welcome\" ng-controller=\"WelcomeCtrl\"></welcome>\n" +
    "    <start ng-switch-when=\"start\" ng-controller=\"StartCtrl\"></start>\n" +
    "    <nosession ng-switch-when=\"nosession\" ng-controller=\"NoSessionCtrl\"></nosession>\n" +
    "    <menu ng-switch-when=\"menu\" ng-controller=\"MenuCtrl\"></menu>\n" +
    "    <page ng-switch-when=\"page\" ng-controller=\"PageCtrl\"></page>\n" +
    "    <auth ng-switch-when=\"auth\" ng-controller=\"AuthCtrl\"></auth>\n" +
    "    <callback ng-switch-when=\"callback\" ng-controller=\"CallbackCtrl\"></callback>\n" +
    "\n" +
    "<ng-switch>"
  );


  $templateCache.put('modules/menu/view.html',
    "<div class=\"container-fluid\">\n" +
    "\t\n" +
    "\t<img class=\"page-header-img\" ng-if=\"pageData.headerImg != undefined\" ng-src=\"{{pageData.headerImg}}\"/>\n" +
    "\t<h1>{{pageData.pageName}}</h1>\n" +
    "\t<p>{{pageData.introText}}</p>\n" +
    "\t\n" +
    "\t<div class=\"list-group\">\n" +
    "\t  <a ng-repeat=\"item in pageData.menuItems track by $index\" class=\"list-group-item\" ng-click=\"menuItemSelected($index)\">\n" +
    "\t  \t{{item.name}}\n" +
    "\t  </a>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"form-group\">\n" +
    "\t\t<div>\n" +
    "\t\t\t<button ng-repeat=\"btn in pageData.pageButtons track by $index\" ng-click=\"btnClick($index)\" class=\"btn btn-primary\" style=\"margin-right:3px\">{{btn.name}}</button>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t\n" +
    "</div>"
  );


  $templateCache.put('modules/nosession/view.html',
    "<div class=\"container-fluid\">\n" +
    "\n" +
    "\t<div class=\"jumbotron\">\n" +
    "\t\t<img src=\"images/genesys-logo.png\" class=\"img-responsive\"/>\n" +
    "\t\t<h1>Opps !</h1>\n" +
    "\t\t<p>You might be here by mistake. No session was found</p>\n" +
    "\t</div>\n" +
    "\t\n" +
    "</div>"
  );


  $templateCache.put('modules/page/view.html',
    "<div class=\"container-fluid\">\n" +
    "\t\n" +
    "\t<img class=\"page-header-img\" ng-if=\"pageData.headerImg != undefined\" ng-src=\"{{pageData.headerImg}}\"/>\n" +
    "\t<h1>{{pageData.pageName}}</h1>\n" +
    "\t<p>{{pageData.introText}}</p>\n" +
    "\n" +
    "\t<div ng-if=\"videoSrc != undefined && videoSrc != ''\" class=\"flex-video widescreen\">\n" +
    "\t\t<iframe class=\"embed-responsive-item youtube-player\" frameborder=\"0\" ng-src=\"{{videoSrc}}\" allowfullscreen></iframe>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<img ng-if=\"pageData.centerImg != undefined && pageData.centerImg != ''\" class=\"img-responsive\" ng-src=\"{{pageData.centerImg}}\"/>\n" +
    "\n" +
    "\t<p>{{pageData.bottomText}}</p>\n" +
    "\n" +
    "\t<div class=\"form-group\">\n" +
    "\t\t<div>\n" +
    "\t\t\t<button ng-repeat=\"btn in pageData.pageButtons track by $index\" ng-click=\"btnClick($index)\" class=\"btn btn-primary\" style=\"margin-right:3px\">{{btn.name}}</button>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('modules/start/view.html',
    "<div class=\"container-fluid\">\n" +
    "\n" +
    "\t<div class=\"jumbotron\">\n" +
    "\t\t<img src=\"images/genesys-logo.png\" class=\"img-responsive\"/>\n" +
    "\t\t<h1>Starting</h1>\n" +
    "\t\t<p>Just a moment whilst we connect...</p>\n" +
    "\t\t<img src=\"images/loading.gif\" class=\"img-responsive\" style=\"margin: 0 auto\"/>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('modules/test/view.html',
    "<div class=\"container-fluid\">\n" +
    "\n" +
    "\t<div class=\"jumbotron\">\n" +
    "\t\t<img src=\"images/genesys-logo.png\" class=\"img-responsive\"/>\n" +
    "\t\t<h1>Testing</h1>\n" +
    "\t\t<p>Fire events to clients...</p>\n" +
    "\n" +
    "\t\t<form class=\"form-horizontal\" role=\"form\">\n" +
    "\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t<label for=\"inputSessionId\" class=\"col-sm-2 control-label\">Session ID</label>\n" +
    "\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputSessionId\" ng-model=\"inputSessionId\">\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t<label class=\"col-sm-2 control-label\">Globals</label>\n" +
    "\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t<button ng-click=\"sendEvent({event: 'navigate', path: 'start'})\" class=\"btn btn-primary\">Show Start</button>\n" +
    "\t\t\t\t\t<button ng-click=\"sendEvent({event: 'navigate', path: 'nosession'})\" class=\"btn btn-primary\">Show No Session</button>\n" +
    "\t\t\t\t\t<button ng-click=\"sendEvent({event: 'navigate', path: 'welcome'})\" class=\"btn btn-primary\">Show Welcome</button>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t<label class=\"col-sm-2 control-label\">Authentication</label>\n" +
    "\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t<button ng-click=\"sendEvent({event: 'auth', pageData:{pageName:'Sign In', headerImg: 'images/ms-logo.png', introText:'Sign in for personalized support from a Microsoft expert at Answer Desk', bottomText:''}})\" class=\"btn btn-primary\">Sign In Screen</button>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t<label class=\"col-sm-2 control-label\">External Data</label>\n" +
    "\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t<button ng-click=\"sendEvent({event: 'callback', pageData:{pageName:'Call Back', headerImg: 'images/ms-logo.png', introText:'We can call you back when one of our experts becomes free', bottomText:''}})\" class=\"btn btn-primary\">Call Back</button>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t<label class=\"col-sm-2 control-label\">Pages Navigation</label>\n" +
    "\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t<button ng-click=\"sendEvent({event: 'page', pageData:{pageName:'Microsoft Technical Support', headerImg: 'images/ms-logo.png',  introText:'Welcome microsoft technical support', bottomText:'An introduction to the mind-bending world of quantum computing. Learn how Microsoft is blending quantum physics with computer science', videoSrc:'http://www.youtube.com/embed/jg8iCnQTLfM?autoplay=1', pageButtons:[{name:'Button 1',action:'button1'},{name:'Button 2',action:'button2'}]}})\" class=\"btn btn-primary\">Quantum - Video</button>\n" +
    "\n" +
    "\t\t\t\t\t<button ng-click=\"sendEvent({event: 'page', pageData:{pageName:'Microsoft Office Support', headerImg: 'images/ms-logo.png', centerImg:'images/ms-office.jpg', introText:'Welcome microsoft technical support', bottomText:'An introduction to the mind-bending world of quantum computing. Learn how Microsoft is blending quantum physics with computer science', pageButtons:[{name:'Button 4',action:'button4'},{name:'Button 5',action:'button5'}]}})\" class=\"btn btn-primary\">Office - No Video</button>\n" +
    "\n" +
    "\t\t\t\t\t<button ng-click=\"sendEvent({event: 'page', pageData:{pageName:'Ask and Expert', headerImg: 'images/ms-logo.png', centerImg:'images/ms-tech.png', introText:'Welcome microsoft technical support', bottomText:'An introduction to the mind-bending world of quantum computing. Learn how Microsoft is blending quantum physics with computer science', pageButtons:[{name:'Button 4',action:'button4'},{name:'Button 5',action:'button5'}]}})\" class=\"btn btn-primary\">Expert - No Video</button>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t<label class=\"col-sm-2 control-label\">Menu Navigation</label>\n" +
    "\t\t\t\t<div class=\"col-sm-10\">\n" +
    "\t\t\t\t\t<button ng-click=\"sendEvent({event: 'menu', pageData: { pageName:'Reason for call', headerImg: 'images/ms-logo.png', introText:'Please tell us the reason for your call today', menuItems: [{name:'Push test 1',action:'none'},{name:'Push test 2',action:'none'}]}})\" class=\"btn btn-primary\">Show Menu 1</button>\n" +
    "\n" +
    "\t\t\t\t\t<button ng-click=\"sendEvent({event: 'menu', pageData: { pageName:'Office Product', headerImg: 'images/ms-logo.png', introText:'Please choose from one of the following Microsoft Office products', menuItems: [{name:'Push test 3',action:'none'},{name:'Push test 4',action:'none'}]}})\" class=\"btn btn-primary\">Show Menu 2</button>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('modules/welcome/view.html',
    "<div class=\"container-fluid\">\n" +
    "\n" +
    "\t<div class=\"jumbotron\">\n" +
    "\t\t<img src=\"images/genesys-logo.png\" class=\"img-responsive\"/>\n" +
    "\t\t<h1>Welcome</h1>\n" +
    "\t\t<p>Enter the session ID to commence</p>\n" +
    "\t\t\n" +
    "\t\t<form name=\"startSessionForm\" role=\"form\" class=\"form-inline\">\n" +
    "\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Session ID\" id=\"txtSessionId\" ng-model=\"inputSessionId\" required/>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<a ng-click=\"startSession()\" class=\"btn btn-primary\" role=\"button\" ng-disabled=\"startSessionForm.$invalid\">Start</a>\n" +
    "\t\t</form>\n" +
    "\t</div>\n" +
    "\t\n" +
    "</div>"
  );

}]);
