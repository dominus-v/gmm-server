'use strict';

app.factory('WorkspaceService', function ($http, $rootScope, $log, $location, orsService) {

  var log_prefix = "Workspace Service - ";
  $log.debug("Workspace Service Init()");

  var pageData = {};
  var pageObserverCallbacks = [];
  var connectCount = 0;
  var disconnectCount = 0;
  var orsStatus = '';
  var sessionId = undefined;

  var setPageData = function(data){
    pageData = data;
    notifyPageObservers();
  };

  var getPageData = function(){
    return pageData;
  };

  //register an page observer
  var registerPageObserverCallback = function(callback){
    pageObserverCallbacks.push(callback);
  };

  //call this when page data changes
  var notifyPageObservers = function(){
    angular.forEach(pageObserverCallbacks, function(callback){
      callback();
    });
  };
  
  var setSessionId = function(sid) {
    $log.debug(log_prefix + "Set session ID: " + sid);
    
    //if(sessionId != undefined && sessionId != '' && orsStatus != 'Registered') {
    if(sid != undefined && sid != '' && sid != sessionId) {

      // Attempt to deregister existing session
      if(sessionId != undefined) deregisterClient(sessionId);
      sessionId = sid;
      registerClient(sessionId);
    }
  };

  var getSessionId = function() {
    return sessionId;
  }

  var registerClient = function(sessionId) {
    $log.debug(log_prefix + "Attempting to register client");
    orsService.emit('register', {
      sessionId: sessionId
    });
  };

  var deregisterClient = function(sessionId) {
    $log.debug(log_prefix + "Attempting to deregister client");
    orsService.emit('deregister', {
      sessionId: sessionId
    });
  };

  var sendEvent = function (event, data) {
    $log.debug("Emitting event [" + event + "] with data: ", data);
    orsService.emit(event, data);
  };

  orsService.on('menu', function (data) {
    $log.debug(log_prefix + "menu event");
    if(data && data.pageData && data.pageData != undefined && data.pageData != '') {
      setPageData(data.pageData);
      $location.path('menu');
    }
  });

  orsService.on('page', function (data) {
    $log.debug(log_prefix + "page event");
    if(data && data.pageData && data.pageData != undefined && data.pageData != '') {
      setPageData(data.pageData);
      $location.path('page');
    }
  });

  orsService.on('auth', function (data) {
    $log.debug(log_prefix + "auth event");
    if(data && data.pageData && data.pageData != undefined && data.pageData != '') {
      setPageData(data.pageData);
      $location.path('auth');
    }
  });

  orsService.on('callback', function (data) {
    $log.debug(log_prefix + "callback event");
    if(data && data.pageData && data.pageData != undefined && data.pageData != '') {
      setPageData(data.pageData);
      $location.path('callback');
    }
  });

  orsService.on('comment', function (data) {
    $log.debug(log_prefix + "comment event");
    if(data && data.pageData && data.pageData != undefined && data.pageData != '') {
      setPageData(data.pageData);
      $location.path('comment');
    }
  });

  orsService.on('gmmframe', function (data) {
    $log.debug(log_prefix + "frame event");
    if(data && data.pageData && data.pageData != undefined && data.pageData != '') {
      setPageData(data.pageData);
      $location.path('gmmframe');
    }
  });

  orsService.on('err', function (data) {
    $log.debug(log_prefix + "error event");
    $log.error("Error returned from server:",data);
  });

  orsService.on('navigate', function (data) {
    $log.debug(log_prefix + "Navigate event");
    console.log(data);
    if(data && data.path && data.path != undefined && data.path != '') {
      $location.path(data.path);
    }
  });

  orsService.on('disconnect', function () {
    disconnectCount++;
    orsStatus = "Disconnected";
    $log.debug(log_prefix + "Disconnected");
  });

  orsService.on('registered', function (data) {
    orsStatus = "Registered";
    $log.debug(log_prefix + "Registered session");
  });

  orsService.on('connect', function () {
    connectCount++;
    orsStatus = "Connected";
    $log.debug(log_prefix + "Socket Connected");
    if(sessionId != undefined && sessionId != '' && orsStatus == 'Disconnected') {
      registerClient(sessionId);
    };
  });

  $log.debug("Workspace Service Init() Complete");

  return {
    setSessionId: setSessionId,
    getSessionId: getSessionId,
    setPageData: setPageData,
    getPageData: getPageData,
    registerPageObserverCallback: registerPageObserverCallback,
    sendEvent: sendEvent
  };

});