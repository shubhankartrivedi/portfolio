import ClientRedirect from "@/utils/clientRedirect";
import fetchMetaData from "@/utils/fetchMetaData";

export async function generateMetadata() {
    const url = 'https://github.com/shubhankartrivedi';
    const githubProfile = await fetchMetaData(url, {next: {
        revalidate: 500
    }});
  
    const githubName = githubProfile.title || 'Default Name'; // Using the title from the metadata as the name
    const githubBio = githubProfile.description || 'Default Bio';
    const githubMetaImageURL = githubProfile.images[0];
  
    return {
      title: `${githubName}`,
      description: githubBio,
      openGraph: {
        title: `${githubName}`,
        description: githubBio,
        images: [
          {
            url: githubMetaImageURL,
            width: 800,
            height: 800,
          },
        ],
      },
      twitter: {
        title: `${githubName}`,
        description: githubBio,
        images: [
          {
            url: githubMetaImageURL,
            width: 800,
            height: 800,
          },
        ],
      },
    }
  }
  
  
   


function Page() {
    return (
    
        <div className="pt-28 px-10">
    {/* <ClientRedirect /> */}
    <div className="">
    <h1 className="text-6xl font-bold">You being redirected to github...</h1>
    </div>
    </div>
    )
}

export default Page;
