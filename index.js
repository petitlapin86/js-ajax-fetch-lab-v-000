function getIssues(data) {
  fetch(`${baseApi}repos/${fork}/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      } )
    })
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseApi}repos/${repo}/forks`, {
   method: 'post',
   headers: {
     'Authorization': `token ${getToken()}`
   }
 }).then(resp => {
   let repo = new Repo(resp);
   showForkedRepo(repo);
 })
}//use fetch to fork it!


function getToken() {
  const token = '39380f11db515d01709a391b20d05865f160cf64';

  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
