export async function getHomePageData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/page/home`);

  if (!response.ok) {
    throw new Error("Failed to fetch homepage data");
  }

  const data = await response.json();
  return data;
}

export async function getFootBallPageData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/page/football`);

  if (!response.ok) {
    throw new Error("Failed to fetch FootBall Page data");
  }

  const data = await response.json();
  return data;
}

export async function getCricketPageData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/page/cricket`);

  if (!response.ok) {
    throw new Error("Failed to fetch Cricket Page data");
  }

  const data = await response.json();
  return data;
}

export async function getBlogsData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs`);

  if (!response.ok) {
    throw new Error("Failed to fetch Cricket Page data");
  }

  const data = await response.json();
  return data;
}

export async function getSingleBlog(slug) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch Cricket Page data");
  }

  const data = await response.json();
  return data;
}