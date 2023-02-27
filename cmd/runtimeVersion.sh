npm install -g json && json -I -f app.json -e '
const numberVersion=this.expo.runtimeVersion?.split(`.`)?.[0] || 1 ;
const d = new Date();
const dateFormat = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
console.log(`${this.expo.runtimeVersion} to ${parseInt(numberVersion,10)+1}.${dateFormat}`)
this.expo.runtimeVersion = `${parseInt(numberVersion,10)+1}.${dateFormat}`
'

