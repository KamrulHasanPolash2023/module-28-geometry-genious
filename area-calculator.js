function calculateTringleArea(){
    // get triangle base value
 const baseFeild = document.getElementById('triangle-base');
 const baseValueText = baseFeild.value;
 const base =parseFloat(baseValueText);
 console.log(base);
  // get triangle high value

const hightFeild = document.getElementById('triangle-hight')
const hightValueText =hightFeild.value;
const hight =parseFloat(hightValueText);
console.log(hight);

const area= 0.5 * base * hight;
console.log(area)


const areaSpan =document.getElementById('triangle-area');
areaSpan.innerText = area;
}