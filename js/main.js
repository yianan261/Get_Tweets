function Counter() {
  let count = 0;
  let res = {};

  function incr() {
    count += 1;
    console.log("got tweets", count);
  }
  function setCount(_count) {
    count = _count;
    return count;
  }
  res.incr = incr;
  res.setCount = setCount;
  
  return res;
}

const btnGetTweets = document.querySelector("#btnGetTweets");
const btnGetTweets2 = document.querySelector("#btnGetTweets2");
const firstCounter = Counter();
const secondCounter = Counter();
firstCounter.setCount(5);

btnGetTweets.addEventListener("click", Counter().incr);
btnGetTweets2.addEventListener("click", Counter().incr);

// Counter("#btnGetTweets2");
