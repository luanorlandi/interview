// Implement the Unix cd command then output the pwd after a cd

// Time complexity: O(n+m) where n and m are the length of current and target
// Space complexity: O(n+m) where n and m are the length of current and target
function cd(current, target) {
  if (target === "...") {
    console.log("/");
    return "/";
  }

  const stack = current.split("/");
  const queue = target.split("/");

  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "..") {
      if (stack.length > 1) {
        stack.pop();
      } else {
        throw Error(`Invalid path of ${target}`);
      }
    } else {
      stack.push(queue[i]);
    }
  }

  const newPath = stack.join("/");

  console.log(newPath);

  return newPath;
}

cd("/Users/luanorlandi/exercises", "../projects/my-project");
