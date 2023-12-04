function head(xs) {
  return xs[0]
}

function tail(xs) {
  return xs.slice(1)
}

function size(xs) {
  return xs.length
}

function cons(x, arr) {
  return [x].concat(arr)
}

function createFile(f, path, name) {
  if (size(path) < 1 || head(path) != f.name) return f
  return {
    "name" : f.name,
    "files" : (size(path)==1 && head(path)==f.name) ? cons(name, f.files) : f.files,
    "subfolders" : f.subfolders.map(folder => createFile(folder, tail(path), name))
  }
}