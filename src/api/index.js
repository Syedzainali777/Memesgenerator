export const apicall = async () => {
  try {
    let response = await fetch("https://api.imgflip.com/get_memes", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error occurred during API call:", error);
    return { error: error.message };
  }
};
