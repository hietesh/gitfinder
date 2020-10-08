class UI{
   constructor(){
       this.profile = document.querySelector('.profile');
   } 
   //show profile UI
   showProfile(user){
     this.profile.innerHTML= `<div class='card card-body mb-3'>
               <div class='row'>
                  <div class='col-md-3'>
                      <img src=${user.avatar_url} class='img-fluid mb-2
                      '>
                      <a href='${user.html_url}' target='_blank' class='btn btn-primary btn-block mb-4'>View Profile</a>
                  </div>
                  <div class='col-md-9'>
                     <span class='badge badge-primary'>Public Repos: ${user.public_repos}</span>
                     <span class='badge badge-secondary'>Public Gists: ${user.public_gists}</span>
                     <span class='badge badge-success'>Followers: ${user.followers}</span>
                     <span class='badge badge-info'>Following: ${user.following}</span>
                     <br><br>
                     <ul class='list-group'>
                        <li class='list-group-item'>Company: ${user.company}</li> 
                        <li class='list-group-item'>Website: ${user.blog}</li>
                        <li class='list-group-item'>Location: ${user.location}</li>
                        <li class='list-group-item'>Member Since: ${user.created_at}</li> 
                     </ul>
                  </div>
               </div>
             </div>
             <h3 class='page-heading mb-3'>Latest Repos</h3>
             <div id='repos'></div>`;
    }
    showRepos(repos){
        let output='';
        repos.forEach(function(repo){
            output+=`
            <div class='card card-body mb-2'>
               <div class='row'>
                  <div class='col-md-6'>
                     <a href='${repo.html_url}' target='_blank'>${repo.name}</a>   
                  </div> 
                  <div class='col-md-6'>
                    <span class='badge badge-primary'>Stars: ${repo.stargazers_count}</span>
                    <span class='badge badge-secondary'>Watchers: ${repo.watchers}</span>
                    <span class='badge badge-success'>Forks: ${repo.forms_count}</span>    
                  </div> 
                </div>          
            </div>`;
        });
        console.log(output);
        document.getElementById('repos').innerHTML=output;
    }
    //show alert Message
    showAlert(message,className){ 
       console.log(message); 
       const div = document.createElement('div');
       div.className=className;
       div.appendChild(document.createTextNode(message));
       //parent
       const container = document.querySelector('.searchContainer');
       //search box
       const search = document.querySelector('.search');
       console.log(container);
       container.insertBefore(div,search);
       setTimeout(()=>{
         div.remove();   
       },3000);
    }
    //clear Profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
    clearDiv(div){
      div.remove();   
    } 
}