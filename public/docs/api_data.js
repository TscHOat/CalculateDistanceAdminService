define({ "api": [
  {
    "type": "POST",
    "url": "/API",
    "title": "Calculate Distance",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --location --request POST 'https://pasticode.com/API' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"KEY\":\"XXX\",\n    \"branchcode\":\"0001\",\n    \"address\":\"Rawamangun\",\n    \"reqcode\":1873712,\n    \"timestamps\":\"10-04-19 12:00:17\"\n}'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "name": "CalculateDistance",
    "group": "API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "KEY",
            "description": "<p>Key that used to access this API</p>"
          },
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "reqcode",
            "description": "<p>numeric only. must be 7 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "timestamps",
            "description": "<p>[UTC +7 yy-MM-dd HH:mm:ss]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branchcode",
            "description": "<p>The branch code stored in the database is used to get the latitude and longitude of the Branch location. [numeric only, must be 4 characters]</p>"
          },
          {
            "group": "Parameter",
            "type": "Varchar(200)",
            "optional": false,
            "field": "address",
            "description": "<p>The street address that you want to convert, in the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>Detail about error</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Response data</p>"
          },
          {
            "group": "Success 200",
            "type": "Numeric",
            "optional": false,
            "field": "result.requestcode",
            "description": "<p>Passing from original requester, 7 characters</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "result.timestamp",
            "description": "<p>Passing from original requester [UTC +7 yy-MM-dd HH:mm:ss]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.branchcode",
            "description": "<p>Passing from original requester [numeric only, 4 characters]</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "result.lat",
            "description": "<p>Latitude of the given address</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "result.lng",
            "description": "<p>Longitude of the given address</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "result.distance",
            "description": "<p>Distance (meter) between given address and given branch code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Response status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"result\": {\n\t\t\"reqcode\": \"1873712\",\n\t\t\"timestamps\": \"10-04-19 12:00:17\",\n\t\t\"lat\": -6.1976024,\n\t\t\"lng\": 106.879792,\n\t\t\"branchcode\": \"0001\",\n\t\t\"distance\": 5672.89666568615\n\t},\n\t\"status\": \"SUCCESS\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./example.js",
    "groupTitle": "API"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "E:\\React\\Example\\Doc\\doc\\main.js",
    "groupTitle": "E:\\React\\Example\\Doc\\doc\\main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "E:\\React\\Example\\Doc\\docs\\main.js",
    "groupTitle": "E:\\React\\Example\\Doc\\docs\\main.js",
    "name": ""
  }
] });
