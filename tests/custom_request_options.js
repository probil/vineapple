"use strict";

var
    tape = require('tape'),
    Vineapple = require('./../index');

tape(function(t){
    // Instantiate a Vine API client
    var vine = Vineapple.create({
        request_options: {
            headers: {
                'X-Vine-Test': 55
            }
        }
    });

    t.plan(1);

    t.ok(vine instanceof Vineapple, 'Vine should be instance of Vineapple');
});