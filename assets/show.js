function show(f) {
  showCalc(f, 0)
}

function showCalc(f, i) {
  console.log(tab(i) + f.name)
  f.files.forEach(a => console.log(tab(i + 1) + a))
  f.subfolders.forEach(a => showCalc(a, i + 1))
}

function tab(t) {
  if (t < 1) return "" 
  else return ".." + tab(t - 1)
}