const CLBindings = require('../build/Release/bindings.node');

const CLBindingsErrorType = {
  CLocationErrorNoLocationService: 'CLocationErrorNoLocationService',
  CLocationErrorLocationServiceDenied: 'CLocationErrorLocationServiceDenied',
  CLocationErrorLocationUnknown: 'CLocationErrorLocationUnknown',
  CLocationErrorLookupFailed: 'CLocationErrorLookupFailed',
  CLocationErrorGeocodeCanceled: 'CLocationErrorGeocodeCanceled',
};

const HTML5PositionErrorType = {
  PERMISSION_DENIED: 1,
  POSITION_UNAVAILABLE: 2,
  TIMEOUT: 3,
};

const PositionErrorConsts = {
  PERMISSION_DENIED: HTML5PositionErrorType.PERMISSION_DENIED,
  POSITION_UNAVAILABLE: HTML5PositionErrorType.POSITION_UNAVAILABLE,
  TIMEOUT: HTML5PositionErrorType.TIMEOUT,
};

let lastResult;

function getCurrentPosition(
  successCallback,
  errorCallback,
  {
    maximumAge = 120000,
    timeout = 0,
    enableHighAccuracy = true,
  } = {},
) {
  const options = {
    maximumAge,
    timeout,
    enableHighAccuracy,
  };
  const timestamp = new Date().getTime();


  try {
    const result = CLBindings.getLocation(options);

    successCallback(result);
  } catch (e) {
    let error;
    console.log('exception', e.message)
  }
}

exports.getCurrentPosition = getCurrentPosition;
