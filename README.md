# Connect middleware for parsing CloudEvents messages

This middleware supports parsing [CloudEvents](https://github.com/cloudevents) messages using the [structed content mode](https://github.com/cloudevents/spec/blob/v0.1/http-transport-binding.md#32-structured-content-mode) of the HTTP binding. HTTP requests that carry `application/cloudevents+json` content type will have their body parsed as JSON and added to the `req.body` parameter. 

Also see [cloudevents-extend-api](https://github.com/goextend/cloudevents-extend-api) for how to use this middleware to create CloudEvents consumers in [Extend](https://goextend.io) and Auth0 Wetasks (https://webtask.io).  
