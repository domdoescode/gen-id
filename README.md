# GenID [![Build Status](https://secure.travis-ci.org/domudall/gen-id.png)](http://travis-ci.org/domudall/gen-id)

[![NPM](https://nodei.co/npm/gen-id.png?downloads=true)](https://nodei.co/npm/uid-gen/)

var genId = require('gen-id')

genId.seed()


Initial available formats:

* n - numeric [0-9]
* a - alphabetical [a-z]
* A - alphabetical (case inclusive) [a-zA-Z]
* h - hexadecimal [0-9a-f]
* x - alpha-numeric [0-9a-z]
* X - alpha-numeric (case inclusive) [0-9a-zA-Z]
* c - checksum

You can define your own formats and set them within the system: