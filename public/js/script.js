const iconBtn = document.querySelector('.menuicon_cs');
const barS = document.querySelectorAll('.icon_cs');
const navList = document.querySelector('.navlist_cs');
console.log(navList.classList.contains('navlist_cs'));

// Icon Fucntion
let iconToggle = ()=>{
    switch (navList.classList.contains('navdown')) {
        case true:
            barS.forEach((e,i)=>{
                e.classList.remove(`bar${i}`);
            });
            navList.classList.remove('navdown');
            break;
        case false:
            barS.forEach((e,i)=>{
                e.classList.add(`bar${i}`);
            });
            navList.classList.add('navdown');
            break;
    }
}
iconBtn.addEventListener('click',iconToggle);