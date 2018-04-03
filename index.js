var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object.assign({}, obj, { [key]: value });
  return newObject;
}