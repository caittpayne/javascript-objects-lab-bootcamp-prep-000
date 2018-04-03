var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign({}, object, { [key]: value });
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value; 
  
  return object;
}


function deleteFromObjectByKey(object, key) {
   let Object = Object.assign({}, object,{ [key]: value });
   delete newObject[key];
   return object; 
   
}
