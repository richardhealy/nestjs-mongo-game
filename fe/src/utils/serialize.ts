export function serialize<T extends Record<string, string | number>>(obj: T) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p) && obj[p] !== undefined) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
}
