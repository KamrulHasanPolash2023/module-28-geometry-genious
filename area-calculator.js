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

function calculateRectangleArea(){
        // get rectangle width value
    const widthFeild= document.getElementById('rectangle-width');
    const widthValueText = widthFeild.value;
    const width = parseFloat(widthValueText);
    console.log(width);
      
    // get rectangle length value
        const lengthFeild= document.getElementById('rectangle-length');
    const lengthValueText = lengthFeild.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // calculatoin
    const area= width *length;
    console.log(area)

    // calculatoin shoe in area block
    const areaSpan=document.getElementById('rectangle-area');
    areaSpan.innerText = area;

}