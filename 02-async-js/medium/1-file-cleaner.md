## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs=require('fs');

fs.readFile('test.txt','utf-8',(err,data)=>{
  if(err)
  {
    console.error(err);
    return;
  }
  var temp="";
  var newstr="";
  var str=data;
  str=str.trim();
  str=str+" ";
  for(let i=0;i<str.length;i++){
    var ch=str.charAt(i);
    if(ch!==' '){
      temp+=ch;
    }
    else if(ch===' ' && str.charAt(i-1)!==' '){
      newstr+=temp+" ";
      temp="";
    }
  }
  newstr=newstr.trim();
  fs.writeFile('test.txt',newstr,(err)=>{
    if(err){
      console.error("Error");
      return;
    }
  })
})
