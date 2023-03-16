# Project: SDKGEN
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
# 📁 Collection: Request Methods 


## End-point: Between timestamps
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
### Method: GET
>```
>https://postman-echo.com/time/between?timestamp=2016-10-10&start=2017-10-10&end=2019-10-10
>```
### Query Params

|Param|value|
|---|---|
|timestamp|2016-10-10|
|start|2017-10-10|
|end|2019-10-10|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Leap year check
A simple `GET` request to `/time/leap` to check if the provided/current timestamp belongs to a leap year.

This endpoint also accepts `timestamp`, `locale`, `format`, `strict`, and `target` query parameters to construct the date time instance to check against.

Responses are provided in JSON format, with a `leap` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.

```
{
  leap: true/false
}
```
### Method: GET
>```
>https://postman-echo.com/time/leap?timestamp=2016-10-10
>```
### Query Params

|Param|value|
|---|---|
|timestamp|2016-10-10|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: POST Form Data
The HTTP `POST` request method is meant to transfer data to a server 
(and elicit a response). What data is returned depends on the implementation
of the server.

A `POST` request can pass parameters to the server using "Query String 
Parameters", as well as the Request Body. For example, in the following request,

> POST /hi/there?hand=wave
>
> <request-body>

The parameter "hand" has the value "wave". The request body can be in multiple
formats. These formats are defined by the MIME type of the request. The MIME 
Type can be set using the ``Content-Type`` HTTP header. The most commonly used 
MIME types are:

* `multipart/form-data`
* `application/x-www-form-urlencoded`
* `application/json`

This endpoint echoes the HTTP headers, request parameters, the contents of
the request body and the complete URI requested when data is sent as a form parameter.
### Method: POST
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: DELETE Request
The HTTP `DELETE` method is used to delete resources on a server. The exact
use of `DELETE` requests depends on the server implementation. In general, 
`DELETE` requests support both, Query String parameters as well as a Request 
Body.

This endpoint accepts an HTTP `DELETE` request and provides debug information
such as the HTTP headers, Query String arguments, and the Request Body.
### Method: DELETE
>```
>undefined
>```
### Body (**raw**)

```json
This is expected to be sent back as part of response body.valur
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: POST Raw Text
The HTTP `POST` request method is meant to transfer data to a server 
(and elicit a response). What data is returned depends on the implementation
of the server.

A `POST` request can pass parameters to the server using "Query String 
Parameters", as well as the Request Body. For example, in the following request,

> POST /hi/there?hand=wave
>
> <request-body>

The parameter "hand" has the value "wave". The request body can be in multiple
formats. These formats are defined by the MIME type of the request. The MIME 
Type can be set using the ``Content-Type`` HTTP header. The most commonly used 
MIME types are:

* `multipart/form-data`
* `application/x-www-form-urlencoded`
* `application/json`

This endpoint echoes the HTTP headers, request parameters, the contents of
the request body and the complete URI requested.
### Method: POST
>```
>undefined
>```
### Body (**raw**)

```json
This is expected to be sent back as part of response body value3 value2
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: POST Raw Text Copy
The HTTP `POST` request method is meant to transfer data to a server 
(and elicit a response). What data is returned depends on the implementation
of the server.

A `POST` request can pass parameters to the server using "Query String 
Parameters", as well as the Request Body. For example, in the following request,

> POST /hi/there?hand=wave
>
> <request-body>

The parameter "hand" has the value "wave". The request body can be in multiple
formats. These formats are defined by the MIME type of the request. The MIME 
Type can be set using the ``Content-Type`` HTTP header. The most commonly used 
MIME types are:

* `multipart/form-data`
* `application/x-www-form-urlencoded`
* `application/json`

This endpoint echoes the HTTP headers, request parameters, the contents of
the request body and the complete URI requested.
### Method: POST
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET Request
The HTTP `GET` request method is meant to retrieve data from a server. The data
is identified by a unique URI (Uniform Resource Identifier). 

A `GET` request can pass parameters to the server using "Query String 
Parameters". For example, in the following request,

> http://example.com/hi/there?hand=wave

The parameter "hand" has the value "wave".

This endpoint echoes the HTTP headers, request parameters and the complete
URI requested.
### Method: GET
>```
>https://postman-echo.com/get?foo1=valurvalue4&foo2=value2value5
>```
### Query Params

|Param|value|
|---|---|
|foo1|valurvalue4|
|foo2|value2value5|


### 🔑 Authentication hawk

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "args": {
        "foo1": "bar1",
        "foo2": "bar2"
    },
    "headers": {
        "x-forwarded-proto": "https",
        "host": "postman-echo.com",
        "accept": "*/*",
        "accept-encoding": "gzip, deflate",
        "cache-control": "no-cache",
        "postman-token": "5c27cd7d-6b16-4e5a-a0ef-191c9a3a275f",
        "user-agent": "PostmanRuntime/7.6.1",
        "x-forwarded-port": "443"
    },
    "url": "https://postman-echo.com/get?foo1=bar1&foo2=bar2"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
