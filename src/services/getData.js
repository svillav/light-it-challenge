const url = "https://us-central1-prueba-front-280718.cloudfunctions.net/";

export async function getData(category) {
  try {
    const request = await fetch(`${url}${category}`);
    const json = await request.json();
    return json;
  }
  catch (e) {
    console.error(e);
  }
}