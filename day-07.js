//https://www.codewars.com/kata/error-throwing-error-handling-number-2/train/javascript


function validateMessage(msg) {
  if (msg === null) {
     throw new ReferenceError('Message is null!');
  } else if (typeof msg !== 'string') {
     throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  } else if (msg.length > 255 || msg.length < 1) {
     throw new RangeError(`Message contains ${msg.length} characters!`);
  } else if (msg.includes('<') && msg.includes('>')) {
     return false;
  } else if (!msg.includes('<') || !msg.includes('>')) {
     return true;
  }
}


