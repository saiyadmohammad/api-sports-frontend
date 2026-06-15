export async function getHomePageData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/test`);

  if (!response.ok) {
    throw new Error("Failed to fetch homepage data");
  }

  const data = await response.json();
  return data[0].section;
}

export async function getFootBallPageData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/test`);

  if (!response.ok) {
    throw new Error("Failed to fetch homepage data");
  }

  const data = await response.json();
  return data[1].section;
}

export async function getCricketPageData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/test`);

  if (!response.ok) {
    throw new Error("Failed to fetch homepage data");
  }

  const data = await response.json();
  return data[2].section;
}