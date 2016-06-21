(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    // Hint: What did you learn on Day 6? Use the method that lets you send a HEAD

    $.getJSON('https://api.github.com/user/repos?access_token=' + githubToken, function(data){
      $.each(data, function(index, value) {
        repos.all.push(value);
      });
    }).done(function(){
      callback();
    });
  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr]>0;
    });
  };

  module.repos = repos;
})(window);
