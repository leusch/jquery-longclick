# LongClick jQuery Extension
This extension can be used to detect a long click on an element. 

## Code example

### Common
```javascript
$(element).longclick(timeToWaitForALongClick, functionAfterLongClick, functionAfterNormalClick);
```

### Specific example
The usage of this is very simple:
```javascript
$('#myElement').longclick(500, function() { 
  alert('Long click'); 
}, function() { 
  alert('Normal click'); 
});
```

## Usage
This extension was built to work with Version 3.4.1. **Other versions have not been tested yet!**
- Include jQuery for example from https://code.jquery.com/jquery-3.4.1.min.js
- Include this extension file into your HTML page
- Start using the extension as described above
