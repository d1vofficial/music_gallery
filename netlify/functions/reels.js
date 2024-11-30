import fetch from 'node-fetch';

export const handler = async (event, context) => {
  const accessToken = process.env.INSTAGRAM_TOKEN;
  const userId = process.env.USER_ID; // Your Instagram User ID

  const mediaUrl = `https://graph.instagram.com/v21.0/${userId}/media?access_token=${accessToken}`;

  console.log("Fetching Media from URL:", mediaUrl);

  try {
    // Fetch the media IDs from Instagram
    const mediaResponse = await fetch(mediaUrl);
    const mediaData = await mediaResponse.json();

    console.log("Media Data:", mediaData);

    if (!mediaData.data) {
      throw new Error("Failed to fetch media data. Check API response.");
    }

    // Extract media IDs from the response
    const mediaIds = mediaData.data.map((media) => media.id);

    console.log("Media IDs:", mediaIds);

    // Fetch detailed media information for each media
    const permalinksPromises = mediaIds.map(async (mediaId) => {
      const mediaDetailUrl = `https://graph.instagram.com/v21.0/${mediaId}?fields=caption,media_product_type,media_type,media_url,permalink&access_token=${accessToken}`;
      const detailResponse = await fetch(mediaDetailUrl);
      return await detailResponse.json();
    });

    // Wait for all permalinks to resolve
    const mediaDetails = await Promise.all(permalinksPromises);

    console.log("Detailed Media Information:", mediaDetails);

    // Filter only "REELS" media and extract permalinks
    const reelsData = mediaDetails
      .filter((media) => media.media_product_type === "REELS")
      .map((media) => media.permalink);

    console.log("Reels Data:", reelsData);

    return {
      statusCode: 200,
      body: JSON.stringify(reelsData), // Return reels data as JSON
    };
  } catch (error) {
    console.error("Error in serverless function:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error",
        message: error.message,
      }),
    };
  }
};
