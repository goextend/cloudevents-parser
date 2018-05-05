'use strict';

const BodyParser = require('body-parser');

module.exports = () => BodyParser.json({ type: 'application/cloudevents+json' });
