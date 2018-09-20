//fs: FileSystem
var fs= require('fs');
var http = require('http');

http.createServer((req, res)=>{
    fs.readFile('fileToBeOpen.html', (error, data)=>{
        res.writeHead('200', {'Content-Type': 'text/html'});
        res.write(data);
        res.end()
    });
    //The fs.appendFile() method appends specified content to a file. If the file does not exist,
    // the file will be created:
    /*arguments: firstone adds content at the end if the file exists in computer or create an empty file with content*/
    fs.appendFile('fileCreatedByNodeFileSystem.txt', 'Contnent added to newly createdFile.', (error)=>{
        if(error) {
            throw error
        }
    });
    //The fs.appendFile() method appends the specified content at the end of the specified file:
    fs.appendFile('fileCreatedByNodeFileSystem.txt', 'Contnent added at the end of createdFile.', (error)=>{
        if(error) {
            throw error
        }
    });
    /*second arg w stands to  write to file.*/
    fs.open('openFileByFileSystem.txt', 'w',  (err, file)=> {
        if (err){
            throw err;
        }
    });
    //The fs.writeFile() method replaces the specified file and content:
    fs.writeFile('writeFileByFileSystem.txt', 'Writing text by Node fileSystem.', (err)=> {
        if (err) {
            throw err;
        }
    });
    //To delete a file with the File System module,  use the fs.unlink() method.
    fs.unlink('fileCreatedByNodeFileSystem.txt', function (err) {
        //if file is not present in the computer error will be thrown.
        if (err) throw err;
    });
    //if file exists only then only it renames.
    fs.rename('writeFileByFileSystem.txt', 'writeFileRenamedByFileSystem.txt', function (err) {
        if (err) throw err;
    });
}).listen(8080);