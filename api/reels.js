import fetch from 'node-fetch';

export default async function handler(req, res) {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN; // Use environment variable
  const userId = process.env.INSTAGRAM_USER_ID;

  const mediaUrl = `https://graph.instagram.com/v21.0/${userId}/media?access_token=${accessToken}`;
  
  try {
    // Step 1: Fetch media IDs
    const mediaResponse = await fetch(mediaUrl);
    const mediaData = await mediaResponse.json();
    const mediaIds = mediaData.data.map((media) => media.id);

    // Step 2: Fetch permalinks for each media ID
    const permalinksPromises = mediaIds.map(async (mediaId) => {
      const mediaDetailUrl = `https://graph.instagram.com/v21.0/${mediaId}?fields=caption,media_product_type,media_type,media_url,permalink&access_token=${accessToken}`;
      const detailResponse = await fetch(mediaDetailUrl);
      return await detailResponse.json();
    });

    // Step 3: Wait for all permalinks
    const mediaDetails = await Promise.all(permalinksPromises);

    // Filter for reels (if needed) and save permalinks
    const reelsData = mediaDetails
      .filter((media) => media.media_product_type === 'REELS') // Optional: Only include video posts
      .map((media) => media.permalink);

    res.status(200).json({ reels: reelsData });
  } catch (error) {
    console.error('Error fetching media permalinks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
