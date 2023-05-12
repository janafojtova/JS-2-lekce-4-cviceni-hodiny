console.log('funguju!');
// Hodiny
// to dáš
// Vytvořte si repozitář ze šablony cviceni-hodiny se stránkou zobrazující digitální hodiny. Následujte instrukce níže.

// Vytvořte komponentu Clock, která bude na vstupu očekávat takovýto objekt:
// {
//   hours: 12,
//   minutes: 34,
// }
const hodiny = [
    {
      hours: 12,
      minutes: 4,
    },
    {
        hours: 10,
        minutes: 6,
    },
    {
        hours: 8,
        minutes: 35,
    },
    {
        hours: 6,
        minutes: 45,
    },
    {
        hours: 5,
        minutes: 2,
      },
  ];

const Clock =(props)=>{
    const { hours, minutes } = props;
    return `
    <div class="clock">
      <span class="clock__hours">${String(hours).padStart(2,'0')}</span>:<span class="clock__minutes">${String(minutes).padStart(2,'0')}</span>
    </div>
    `    
}
// Komponenta nechť z takového objektu vytvoří HTML pro jedny hodiny. Jak má vypadat HTML hodin, najdete v souboru index.html.
// HTML kód hodin ze stránky vyjměte a nechte v ní pouze element app.
// Ve vašem programu vyberte element app a pomocí komponenty Clock do něj zapojte hodiny zobrazující nějaký čas.

// Pomocí funkce Clock vložte do stránky pod sebe několik různých hodin s různými časy.
const zobrazHodiny = (items)=>{
    const appElm =document.querySelector('#app');
appElm.innerHTML+=items.map((item)=>{
    return Clock(item);
})
.join('');
}
zobrazHodiny(hodiny);
// Vyrobte pole hodin a zobrazte je pomocí cyklu na stránce.
// Zajistěte, aby hodiny vždy zobrazovaly čas dvouciferně, tedy aby například pro čas
// {
//   hours: 8,
//   minutes: 5,
// }
// zobrazily čas 08:05.