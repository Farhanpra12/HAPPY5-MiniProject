const clothing = ["shirt", "pants", "jacket"];
const color = ["black", "white"];
const size = ["s", "m", "l"];

const generateList = () => {
  const mix = [];

  clothing.forEach((jenis) => {
    color.forEach((warna) => {
      size.forEach((ukuran) => {
        mix.push(jenis + ' ' + warna + ' ' + ukuran);
      });
    });
  });

  return mix;
}

const list = generateList();

console.log(list)