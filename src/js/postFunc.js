
const TwitterLogo = {
    src: 'src/images/svg/twitter_logo_original.svg'
};

const NotionLogo = {
    src: 'src/images/svg/notion_logo_original.svg'
};

const LinkedInLogo = {
    src: 'src/images/svg/linkedin_logo_original.svg'
};

const GithubLogo = {
    src: 'src/images/svg/github_logo_original.svg'
};

const InstagramLogo = {
    src: 'src/images/svg/instagram_logo_original.svg'
};

export function createPostComponent(title, description, buttonLink) {  

    // Create the HTML string for the post element
    let twitterPost = `
    <div id="post1" class="post text-center h-80 items-center p-6 rounded-large drop-shadow-2xl post1">
      <div class="flex justify-center mx-auto items-center w-full">                    
        <span class="user-image bg-[url('https://pbs.twimg.com/profile_images/1601601952181362693/aiU2RPoE_400x400.jpg')] mr-4 h-14 w-14 bg-cover rounded-full"></span>
          <div class="profile-user">
            <span class="font-bold text-base text-blitblue-500">Abass Jammal</span>
            <span class="mr-8 text-sm text-white">@abass_j1</span>
        </div>
      </div>  
      <div class="flex justify-center mx-auto items-center w-4/5 h-3/5">                    
          <p class="text-white">
          ${description}
          </p>
      </div>
      <div class="flex mx-auto items-center w-full">
          <div class="flex mx-auto">  
              <div class="flex w-12 h-12">
                  <img class="flex" src="${TwitterLogo.src}" /> 
              </div>
              <div class="flex items-center mx-auto w-full h-12">
                <form action="${buttonLink}" class="mx-auto flex">
                  <button class="viewBtn mx-auto flex"> View
                      <span></span>
                  </button>
                </form>
              </div>
              <div class="flex w-12 h-12">
                  <div class="flex text-white mt-3">6m</div>
              </div>
          </div>
      </div>
    </div>
    `;
  
    let notionPost = `
      <div id="post1" class="post text-center h-80 items-center p-6 rounded-large drop-shadow-2xl post1">
        <div class="flex mx-auto mt-2 items-center w-full">                    
            <h1 class="text-lg mx-auto font-extrabold text-blitblue-500">${title}</h1>
        </div> 
        <div class="flex justify-center mx-auto items-center w-4/5 h-3/5">                    
          <p class="text-white">
            ${description}
          </p>
        </div>
        <div class="flex mx-auto items-center w-full">
          <div class="flex mx-auto">  
            <div class="flex w-12 h-12">
              <img class="flex" src="${NotionLogo.src}" /> 
            </div>
            <div class="flex items-center mx-auto w-full h-12">
              <form action="${buttonLink}" class="mx-auto flex">
                <button class="viewBtn mx-auto flex"> View
                  <span></span>
                </button>
              </form>
            </div>
          <div class="flex w-12 h-12">
            <div class="flex text-white mt-3">6m</div>
          </div>
        </div>
      </div>
    </div>
    `;
  
    let linkedInPost = `
      <div id="post1" class="post text-center h-80 items-center p-6 rounded-large drop-shadow-2xl post1">
        <div class="flex mx-auto mt-2 items-center w-full">                    
            <h1 class="text-lg mx-auto font-extrabold text-blitblue-500">${title}</h1>
        </div> 
        <div class="flex justify-center mx-auto items-center w-4/5 h-3/5">                    
          <p class="text-white">
            ${description}
          </p>
        </div>
        <div class="flex mx-auto items-center w-full">
          <div class="flex mx-auto">  
            <div class="flex w-12 h-12">
              <img class="flex" src="${LinkedInLogo.src}" /> 
            </div>
            <div class="flex items-center mx-auto w-full h-12">
              <form action="${buttonLink}" class="mx-auto flex">
                <button class="viewBtn mx-auto flex"> View
                  <span></span>
                </button>
              </form>
            </div>
          <div class="flex w-12 h-12">
            <div class="flex text-white mt-3">6m</div>
          </div>
        </div>
      </div>
    </div>
    `;
  
    let githubPost = `
      <div id="post1" class="post text-center h-80 items-center p-6 rounded-large drop-shadow-2xl post1">
        <div class="flex mx-auto mt-2 items-center w-full">                    
            <h1 class="text-lg mx-auto font-extrabold text-blitblue-500">${title}</h1>
        </div> 
        <div class="flex justify-center mx-auto items-center w-4/5 h-3/5">                    
          <p class="text-white">
            ${description}
          </p>
        </div>
        <div class="flex mx-auto items-center w-full">
          <div class="flex mx-auto">  
            <div class="flex w-12 h-12">
              <img class="flex" src="${GithubLogo.src}" /> 
            </div>
            <div class="flex items-center mx-auto w-full h-12">
              <form action="${buttonLink}" class="mx-auto flex">
                <button class="viewBtn mx-auto flex"> View
                  <span></span>
                </button>
              </form>
            </div>
          <div class="flex w-12 h-12">
            <div class="flex text-white mt-3">6m</div>
          </div>
        </div>
      </div>
    </div>
    `;
  
    let instaPost = `
    <div class="bg-cover bg-[url('https://pbs.twimg.com/media/FjTY2rEWYAITzqr?format=jpg&name=4096x4096')] h-80 rounded-[10%]">
    <div id="post1" class="instaPost text-center h-80 items-center p-6 rounded-large drop-shadow-2xl post1">
  
      <div class="flex justify-center mx-auto items-center w-full">                    
        <span class="user-image bg-[url('https://pbs.twimg.com/profile_images/1601601952181362693/aiU2RPoE_400x400.jpg')] mr-4 h-14 w-14 bg-cover rounded-full"></span>
          <div class="profile-user">
            <span class="font-bold text-base text-blitblue-500">Abass Jammal</span>
            <span class="mr-8 text-sm text-white">@abass_j1</span>
        </div>
      </div>  
      <div class="flex justify-center mx-auto items-center w-4/5 h-3/5">                    
          <p class="text-white">
          ${description}
          </p>
      </div>
      <div class="flex mx-auto items-center w-full">
          <div class="flex mx-auto">  
              <div class="flex w-12 h-12">
                  <img class="flex" src="${InstagramLogo.src}" /> 
              </div>
              <div class="flex items-center mx-auto w-full h-12">
                <form action="${buttonLink}" class="mx-auto flex">
                  <button class="viewBtn mx-auto flex"> View
                      <span></span>
                  </button>
                </form>
              </div>
              <div class="flex w-12 h-12">
                  <div class="flex text-white mt-3">6m</div>
              </div>
          </div>
      </div>
    </div>
    </div>
    `;
  
    //check string of url to see if it contains a twitter link
    if (buttonLink.includes("twitter")) {
        
        return twitterPost

    } else if (buttonLink.includes("notion")) {

        return notionPost

    } else if (buttonLink.includes("linkedin")) {

        return linkedInPost

    } else if (buttonLink.includes("github")) {

        return githubPost

    } else if (buttonLink.includes("instagram")) {

        return instaPost

    } else {

        return instaPost

    }

}