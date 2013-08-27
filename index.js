var format = 'aann aanc'
  , formats =
    { n: '0123456789'
    , a: 'abcdefghijklmnopqrstuvwxyz'
    , A: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    , x: '0123456789abcdefghijklmnopqrstuvwxyz'
    , X: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
  , str = []
  , crc = require('crc')
  , checksumPositions = []

format.split('').forEach(function (character, index) {
  if (character === ' ') {
    str.push(character)
  } else if (character === 'c') {
    checksumPositions.unshift(index)
    str.push(character)
  } else {
    if (formats[character]) {
      var buh = shuffle(formats[character])

      str.push(buh[Math.floor(Math.random() * formats[character].length)])
    }
  }
})

var checksumArray = str
checksumPositions.forEach(function (index, count) {
  checksumArray.splice(index, 1)
})

// Added >>> 0 to ensure number is positive
var crc32 = (crc.crc32(checksumArray.join(''))) >>> 0

checksumPositions.reverse().forEach(function (index, count) {
  str[index] = String(crc32)[count]
})
str = str.join('')

function shuffle(sourceArray) {
  var targetArray = []
    , characterIndex

  sourceArray = sourceArray.split('')

  while (sourceArray.length > 0) {
    characterIndex = Math.floor(Math.random() * sourceArray.length);
    targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
  }

  return targetArray.join('');
}