var express = require('express');

var getInfo = function(req,res){
    return {ipaddress: req.ip};
}

exports.getInfo = getInfo;