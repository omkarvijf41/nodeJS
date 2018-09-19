//To include a module, use the require() function with the name of the module:
var http = require('http');
//There are built-in modules to easily split the query string into readable parts, such as the URL module.
var url = require('url');
/*this below function returns date Object*/
var  myFirstNodeModuleExportingDateObject= require('./myFirstNodeModule');
/*create a server object:*/
//The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
http.createServer((req, res)=> {
	console.log(res);
	/*arguments to writeHead method are statusCode, reason*/
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("This is my first Node Module returning or exporting date Object:"
		+myFirstNodeModuleExportingDateObject.myDateTime());//write a response to the client
    //Read the Query String
    //Return the url part of the request object:
	res.write(req.url);
	var getQueryParams = url.parse('http://localhost:8080/?year=2017&month=July', true).query;
	var urlQueryParams = getQueryParams.year + " " + getQueryParams.month;
	res.write(urlQueryParams);
	res.end();//end the response
}).listen(8080);//the server object listens on port 8080