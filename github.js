class Github{
   constructor(){
     this.client_id = '4e73679f6400bfef59b2';
     this.client_secret = 'c3186f35a2a081e33b0e03038696270ab6f7c189';
     this.repos_count = 5;
     this.repos_sort = 'created: asc';
   }  
   async getUser(user){
      const profileResponse = await fetch(`https://api.github.com/users/${user}`);
      const porfileRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc`);
      const profileData = await profileResponse.json();
      const repos = await porfileRepos.json();
      return {
         profileData,
         repos
      }
   }     
} 