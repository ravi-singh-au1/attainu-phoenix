function is_unique(str) {
    var obj = {};
    for(var z=0;z<str.length;++z) {
      var ch = str[z];
      if(obj[ch]) return false; else obj[ch] = true;
    }
    return true;
  }
  // test:
  console.log(is_unique("ansal")); // false
  console.log(is_unique("arkesh")); // true