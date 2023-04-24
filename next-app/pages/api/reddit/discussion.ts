import axios from "axios";

export default async function handler(req, res) {
  const { url } = req.query;

  const cleanedUrl = "https://reddit.com" + url.replace(/\/$/, "") + ".json";

  const discussionRes = await axios
    .get(cleanedUrl, {
      headers: {
        // "User-Agent":
        //   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0",
        // Cookie:
        //   "loid=0000000000000d5iwd.2.1379184854290.Z0FBQUFBQmo0bUE4QmZQU2MtQmpNRm9WckRIckoyNnltbXlSZ0F2Nm5UYUhFQWN1TmhpTGt6UTVCZ29iTVEyN2Nwblk3R0FLQVFMRFhNLWVOeS13YVdSdkh6a21tM3kxdjJScjZxdVZPbENwLWphcjZCYnk4UzgtUDJGLW1EeUFSSkd0ODFsS0plT0E; token_v2=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODIzMDE4NTYsInN1YiI6IjIyMDkyNzgxLS0xNWstZ1FWMU9xcFJGYUQ3Y1dwMnhjVzBWV1h0dyIsImxvZ2dlZEluIjp0cnVlLCJzY29wZXMiOlsiKiIsImVtYWlsIiwicGlpIl0sImNpZCI6Ijl0TG9GMHNvcDVSSmdBIn0.rbsssDJWLOTAGOsk2zw2HaG3y4KGjBxHwt01YFggZYA; csv=2; edgebucket=4AYCVlNrr2r1dgeLIU; recent_srs=t5_2qizd%2Ct5_4lxcd3%2Ct5_2rfz5%2Ct5_2rfxx%2Ct5_2s0ro%2Ct5_3b9u5%2Ct5_2qifv%2Ct5_39dcn%2Ct5_2rfcw%2Ct5_2rcti; pc=ba; reddit_session=22092781%2C2023-02-07T14%3A29%3A16%2C6c1802f9733703d29c00b61c7533eb39c42d4b0a; session_tracker=qjqjocrdmjqfagimkr.0.1682244120810.Z0FBQUFBQmtSUUlhQTFTdkpHTFpUeVJ0Njk5YkoybVAzb0lEak9GdHQwLUpzRUFWRlFucGQ3YUJ1MDloalJ1TUlGdkxaMzBFcDIzdDNfS0pLOTJLTkZZR2lzdE03eUtOcGNsdUN3X2JwY2lkZThrMDJqZWJ5bzBzYTYwMFNXOXE0eVRlTkpIdkkyX3Y; session=1fd59136657d8bca61fb1d8791f40b74ac1c186bgAWVSQAAAAAAAABKxgBFZEdB2Q6t/szyg32UjAdfY3NyZnRflIwoNGYwODUxYzYxZDk1NDQ2YTAwMjc2MDFmNTM2ZGM0MDI5OWZjOGY3MZRzh5Qu; Soaza_recentclicks2=t3_12mzwwt%2Ct3_d9vxbl%2Ct3_8np%E2%80%A6ce_chapter_906",
      },
    })
    .catch((err) => {
      console.log(err);
      throw Error("Axios Error");
    });

  res.status(200).json({
    data: discussionRes.data[1].data.children.map((child) => child.data),
  });
}
