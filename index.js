function takeANumber(line, name){
  line.push(name)
  let curNum = line.indexOf(name) + 1
  let phrase = `Welcome, ${name}. You are number ${curNum} in line.`
  return phrase
}
