console.log('main');
const BASE_URL = 'http://localhost:3000/api/colors';

const btn = document.getElementById('colors');

btn.onclick = getColors;

async function getColors() {
  const resp = await fetch(BASE_URL);
  console.log('resp ===', resp);
  const data = await resp.json();
  console.log('data ===', data);
  // resp ok
  if (data.success) {
    data.colors.forEach((c) => console.log(c));
  } else {
    // error
    alert(data.error);
  }
}
