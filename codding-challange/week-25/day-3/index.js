function is_uniqueString(str) {
    var obj = {};
    for(var z=0;z<str.length;++z) {
      var ch = str[z];
      if(obj[ch]) return false; 
        else obj[ch] = true;
    }
    return true;
  }
  // test:
<<<<<<< HEAD
  console.log(is_unique("ansal")); // false
  console.log(is_unique("arkesh")); // true
=======
  console.log(is_uniqueString("ansal")); // false
  console.log(is_uniqueString("arkesh")); // true
>>>>>>> 0380e99b6d9b57e1a1346984509db71e76f93355
