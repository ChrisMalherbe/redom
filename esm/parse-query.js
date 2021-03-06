export function parseQuery (query) {
  let isId = false;
  let isClass = false;
  let tag = '';
  let id = '';
  let className = '';
  for (var i = 0; i < query.length; i++) {
    let char = query[i];
    if (char === '.') {
      isClass = true;
      isId = false;
      if (className.length > 0) {
        className += ' ';
      }
    }
    if (char === '#') {
      isId = true;
      isClass = false;
    }
    if (isId && !isClass && char !== '#') {
      id += char;
    }
    if (isClass && !isId && char !== '.') {
      className += char;
    }
    if (!isId && !isClass) {
      tag += char;
    }
  }

  return {
    tag: tag || 'div',
    id,
    className
  };
}
