const request = require('request');
const _ = require('lodash');
const hawk = require('@hapi/hawk');

/**
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
@param {object} config - Variables to used in SDK. 
*/
function SDK(config = {}) {

  /**
  The HTTP `POST` request method is meant to transfer data to a server 
  (and elicit a response). What data is returned depends on the implementation
  of the server.

  A `POST` request can pass parameters to the server using &quot;Query String 
  Parameters&quot;, as well as the Request Body. For example, in the following request,

  &gt; POST /hi/there?hand=wave
  &gt;
  &gt; &lt;request-body&gt;

  The parameter &quot;hand&quot; has the value &quot;wave&quot;. The request body can be in multiple
  formats. These formats are defined by the MIME type of the request. The MIME 
  Type can be set using the ``Content-Type`` HTTP header. The most commonly used 
  MIME types are:

  * `multipart/form-data`
  * `application/x-www-form-urlencoded`
  * `application/json`

  This endpoint echoes the HTTP headers, request parameters, the contents of
  the request body and the complete URI requested.
  @param {Function} callback - Callback function to return response (err, res)
  */
  this["postRawText"] = (callback) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {},
      body: 'This is expected to be sent back as part of response body value3 value2'

    };
    request(options, function(error, response) {
      return callback(error, response);
    });
  };

  /**
  The HTTP `POST` request method is meant to transfer data to a server 
  (and elicit a response). What data is returned depends on the implementation
  of the server.

  A `POST` request can pass parameters to the server using &quot;Query String 
  Parameters&quot;, as well as the Request Body. For example, in the following request,

  &gt; POST /hi/there?hand=wave
  &gt;
  &gt; &lt;request-body&gt;

  The parameter &quot;hand&quot; has the value &quot;wave&quot;. The request body can be in multiple
  formats. These formats are defined by the MIME type of the request. The MIME 
  Type can be set using the ``Content-Type`` HTTP header. The most commonly used 
  MIME types are:

  * `multipart/form-data`
  * `application/x-www-form-urlencoded`
  * `application/json`

  This endpoint echoes the HTTP headers, request parameters, the contents of
  the request body and the complete URI requested.
  @param {Function} callback - Callback function to return response (err, res)
  */
  this["postRawTextCopy"] = (callback) => {
    var options = {
      'method': 'POST',
      'url': 'https://postman-echo.com/post',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: '{\n    body {\n        graphql {\n            \n        }\n    }\n}',
        variables: {}
      })
    };
    request(options, function(error, response) {
      return callback(error, response);
    });
  };

  /**
  The HTTP `GET` request method is meant to retrieve data from a server. The data
  is identified by a unique URI (Uniform Resource Identifier). 

  A `GET` request can pass parameters to the server using &quot;Query String 
  Parameters&quot;. For example, in the following request,

  &gt; http://example.com/hi/there?hand=wave

  The parameter &quot;hand&quot; has the value &quot;wave&quot;.

  This endpoint echoes the HTTP headers, request parameters and the complete
  URI requested.
  @param {Function} callback - Callback function to return response (err, res)
  */
  this["getRequest"] = (callback) => {
    let hawkAuth = hawk.client.header(
      'https://postman-echo.com/get?foo1=valurvalue4&foo2=value2value5',
      'GET', {
        credentials: {
          id: 'testid',
          key: 'testkeyssss',
          algorithm: 'sha256',
        },
        ext: 'aaaaa',
        timestamp: '',
        nonce: '',
        payload: '',
        app: '',
        dlg: 'dlgggg'
      }
    ).header;
    var options = {
      'method': 'GET',
      'url': 'https://postman-echo.com/get?foo1=valurvalue4&foo2=value2value5',
      'headers': {
        'Authorization': '' + hawkAuth + ''
      }
    };
    request(options, function(error, response) {
      return callback(error, response);
    });
  };

  /**
  HTTP has multiple request &quot;verbs&quot;, such as `GET`, `PUT`, `POST`, `DELETE`,
  `PATCH`, `HEAD`, etc. 

  An HTTP Method (verb) defines how a request should be interpreted by a server. 
  The endpoints in this section demonstrate various HTTP Verbs. Postman supports 
  all the HTTP Verbs, including some rarely used ones, such as `PROPFIND`, `UNLINK`, 
  etc.

  For details about HTTP Verbs, refer to [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9)

  */
  this.requestMethods = {
    /**
    The HTTP `POST` request method is meant to transfer data to a server 
    (and elicit a response). What data is returned depends on the implementation
    of the server.

    A `POST` request can pass parameters to the server using &quot;Query String 
    Parameters&quot;, as well as the Request Body. For example, in the following request,

    &gt; POST /hi/there?hand=wave
    &gt;
    &gt; &lt;request-body&gt;

    The parameter &quot;hand&quot; has the value &quot;wave&quot;. The request body can be in multiple
    formats. These formats are defined by the MIME type of the request. The MIME 
    Type can be set using the ``Content-Type`` HTTP header. The most commonly used 
    MIME types are:

    * `multipart/form-data`
    * `application/x-www-form-urlencoded`
    * `application/json`

    This endpoint echoes the HTTP headers, request parameters, the contents of
    the request body and the complete URI requested when data is sent as a form parameter.
    @param {Function} callback - Callback function to return response (err, res)
    */
    "postFormData": (callback) => {
      var options = {
        'method': 'POST',
        'url': 'https://postman-echo.com/post',
        'headers': {},
        form: {
          'foo1': 'value4',
          'foo2': 'value5'
        }
      };
      request(options, function(error, response) {
        return callback(error, response);
      });
    },
    /**
    The HTTP `DELETE` method is used to delete resources on a server. The exact
    use of `DELETE` requests depends on the server implementation. In general, 
    `DELETE` requests support both, Query String parameters as well as a Request 
    Body.

    This endpoint accepts an HTTP `DELETE` request and provides debug information
    such as the HTTP headers, Query String arguments, and the Request Body.
    @param {Function} callback - Callback function to return response (err, res)
    */
    "deleteRequest": (callback) => {
      var options = {
        'method': 'DELETE',
        'url': 'https://postman-echo.com/delete',
        'headers': {},
        body: 'This is expected to be sent back as part of response body.valur'

      };
      request(options, function(error, response) {
        return callback(error, response);
      });
    },
    /**
    A set of `/time/*` mounted requests to perform date-time manipulations, among other operations.

    */
    "utilities-/DateAndTime": {
      /**
      A simple `GET` request to `/time/between` to check if the provided timestamp is between a range specified by the `start` and `end` query parameters. A resolution limit can also be specified by the `unit` query parameter.

      For instance, for a resolution `unit` of `month`,
      `2016-10-05` does lie between `2016-11-02` and `2016-09-01`.

      This endpoint also accepts `timestamp`, `locale`, `format`, `strict`, and `target` query parameters to construct the date time instance to check against.

      Responses are provided in JSON format, with a `between` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.

      ```
      {
        between: true/false
      }
      ```
      @param {Function} callback - Callback function to return response (err, res)
      */
      "betweenTimestamps": (callback) => {
        var options = {
          'method': 'GET',
          'url': 'https://postman-echo.com/time/between?timestamp=2016-10-10&start=2017-10-10&end=2019-10-10',
          'headers': {}
        };
        request(options, function(error, response) {
          return callback(error, response);
        });
      },
      /**
      A simple `GET` request to `/time/leap` to check if the provided/current timestamp belongs to a leap year.

      This endpoint also accepts `timestamp`, `locale`, `format`, `strict`, and `target` query parameters to construct the date time instance to check against.

      Responses are provided in JSON format, with a `leap` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.

      ```
      {
        leap: true/false
      }
      ```
      @param {Function} callback - Callback function to return response (err, res)
      */
      "leapYearCheck": (callback) => {
        var options = {
          'method': 'GET',
          'url': 'https://postman-echo.com/time/leap?timestamp=2016-10-10',
          'headers': {}
        };
        request(options, function(error, response) {
          return callback(error, response);
        });
      }
    }
  };

}

module.exports = SDK;