function TweetsFetcher() {
  const tf = {};
  const errorMsg = document.querySelector("#error");
  const ul = document.querySelector("ul#tweetList");

  function showError(msg) {
    // show an error on the page
    // Implement some code that will show a message in the DOM
    errorMsg.innerHTML = msg;
  }

  tf.getTweets = async () => {
    // AJAX
    let tweets;
    try {
      const res = await fetch("./tweets.json");
      tweets = await res.json();
    } catch (e) {
      showError("error downloading the data");
      alert("Error downloading tweets!");
    }
    console.log("finished downloading data", tweets);
    return tweets;
  };

  // Create a public synchronous function renderTweets, that given the array of tweets, will render them in the dom
  const renderTweets = (tweets) => {
    try {
      Object.values(tweets).forEach((tweet) => {
        let li = document.createElement("li");
        li.innerHTML = tweet;
        ul.appendChild(li);
      });
    } catch (e) {
      console.error(e);
    }
  };

  // Create a public async function fetchAndRender that calls getTweets, and renders them
  tf.fetchAndRender = async () => {
    const tweets = await tf.getTweets();

    renderTweets(tweets);
  };
  // console.log("tf",tf)

  return tf;
}

// TweetsFetcher();

function runIt() {
  const tf = TweetsFetcher();
  tf.fetchAndRender();
}

const btnGetTweets = document.querySelector("#btnGetTweets");
let clicked = false;
btnGetTweets.addEventListener("click", () => {
  if (!clicked) {
    runIt();
    clicked = true;
  }
});

const btnClearTweets = document.querySelector("#btnClearTweets");
const ul = document.querySelector("ul#tweetList");

btnClearTweets.addEventListener("click", () => {
  if (clicked) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    clicked = false;
  }
});
