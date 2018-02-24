# console-file-log

Save console.log content to a file. Use [fancy-log](https://www.npmjs.com/package/fancy-log) to do console and save the same content to a file.

I use it in a child_process spawn or fork case. When the main process ended, the console of subprocess is unavaliable. Usually we may save the log to a file.

## Usage

```js
var filelog = require("console-file-log");

var mylog = filelog({
	append: true,    	//appendFile or writeFile (default: false)
	fname: "mylog.txt",      //name of log file (default: file-log(2-23).txt)
	eol: "\n"		 //eol (default: os.EOL)
});

mylog.log("this is a test log");
// [18:38:04] this is a test log (console)
// [18:38:04] = log =   this is a test log (file)

mylog.warn("this is a test warn log");
// [18:38:04] this is a test warn log (console)
// [18:38:04] = warn=   this is a test warn log (file)
```

## API(same as fancy-log, thanks a lot)

### `log(msg...)`

Logs the message as if you called `console.log` but prefixes the output with the
current time in HH:MM:ss format.

### `log.error(msg...)`

Logs the message as if you called `console.error` but prefixes the output with the
current time in HH:MM:ss format.

### `log.warn(msg...)`

Logs the message as if you called `console.warn` but prefixes the output with the
current time in HH:MM:ss format.


### `log.info(msg...)`

Logs the message as if you called `console.info` but prefixes the output with the
current time in HH:MM:ss format.

### `log.dir(msg...)`

Logs the message as if you called `console.dir` but prefixes the output with the
current time in HH:MM:ss format.