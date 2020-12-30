var express = require('express');

var getInfo = function(req,res){
    return {ipaddress: req.ip, language : req.headers["accept-language"] , software: req.headers["user-agent"]};
}

exports.getInfo = getInfo;