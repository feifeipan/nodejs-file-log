'use strict';

var fancylog = require("fancy-log");
var timestamp = require('time-stamp');
var fs  = require("fs");
var os = require("os");

function getTimestamp(){
  	return '['+timestamp('HH:mm:ss')+'] ';
}

function getDay(){ 
	var d = new Date();
  	return '(' + [d.getMonth()+1, d.getDate()].join("-") + ")";
}

function dealArgs(){
	var args = arguments[0];
	var arr = [];
	for(var key in args){
		arr.push(args[key]+"");
	}
	return arr.join(" ");
}

module.exports = (options={})=>{
  var fname = options.fname || "file-log"+getDay()+".txt";
  var append = options.append || false;
  var eol = options.eol || os.EOL;
  
  var fexec = append ? fs.appendFileSync : fs.writeFileSync;

  this.log =  function(){
  	fancylog.apply(fancylog, arguments);
  	fexec(fname, getTimestamp() + "= log =   " + dealArgs(arguments) + eol);
  }

  this.info = function(){
  	fancylog.info.apply(fancylog, arguments);
  	fexec(fname, getTimestamp() + "= info=   " + dealArgs(arguments) + eol);
  }

  this.dir = function(){
  	fancylog.dir.apply(fancylog, arguments);
  	fexec(fname, getTimestamp() + "= dir =   " + dealArgs(arguments) + eol);
  }

  this.warn = function(){
  	fancylog.warn.apply(fancylog, arguments);
  	fexec(fname, getTimestamp() + "= warn=   " + dealArgs(arguments) + eol);
  }

  this.error = function(){
  	fancylog.error.apply(fancylog, arguments);
  	fexec(fname, getTimestamp() + "= err =   " + dealArgs(arguments) + eol);
  }

  return this;
}
