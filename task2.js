//// task 1
//// 1. 1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın.
// let eded;
// let cem=0;
// let hasil=1;
// for (eded=1; eded<=10; eded++) {
//     cem+=eded;
//     hasil*=eded;

// }
//console.log("TASK 1. cem : "+cem+" / hasil : "+hasil);

//// TASK 2
//// 2. 1-dən100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın
// let cem=0;
// let hasil=1;
// let eded;
// for (eded=1; eded <=100; eded++) {
//     if(eded%2==0){
//         console.log(eded);
//         cem+=eded;
//         hasil*=eded;
//     }
    
// }
// console.log("TASK 2. ededlerin cemi "+cem+" / "+"ededlerin hasili "+hasil);

//// TASK 3. 3 rəqəmli ədədlərin ədədi ortasını tapın


// let edediOrta=0;
// let cem=0;
// let say=0;
// for (eded = 100; eded <=999; eded++) {
//     cem+=eded;
//     say++;
// }
// edediOrta=cem/say;
// console.log("TASK 3. Ededi orta "+edediOrta);
// console.log("-----------");

//// TASK 4. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın

// let eded=0;
// for (eded = 100; eded <1000; eded++) {
//     if(eded%7==0 && eded%8==0){
//         console.log("TASK 4| "+eded);
//     }
// }
// console.log("-----------");

////TASK 5. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın
// let cem=0;
// let eded;
// for (eded = 100; eded <1000; eded++) {
//     if(eded%7==0 && eded%8==0){
//         cem+=eded;
//     }
// }
// console.log("TASK 5| 7 və 8-ə bölünən ədədlərin cəmi: "+cem);

////TASK 6. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın
// console.log("-----------");
// let eded;
// for (eded = 100; eded <1000; eded++) {
//     if(eded%7==0 && eded%8==0){
//         console.log("TASK 6| 7 və 8-ə bölünən ilk ədəd: "+eded);
//         break;
//     }
// }

// TASK 7. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.
// console.log("-----------");
// let eded;
// let sonuncuEded;
// for (eded = 100; eded <1000; eded++) {
//     if(eded%7==0 && eded%8==0){
//      sonuncuEded=eded;
//     }
// }
// console.log("TASK 7| 7 və 8-ə bölünən son ədəd "+sonuncuEded);

// TASK 8. 1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın.
// console.log("-----------");
// let eded;
// let sadeEded;
// let murekkebEded;
// let bolunenEded;
// let say=0;
// for (eded = 1; eded <=100; eded++) {
//     if(eded==1){
//         console.log("1 ne sadedir ne murekkeb");
//         eded++;
//     }
//     say=0;
//     for (bolunenEded = 1; bolunenEded <=eded; bolunenEded++) {
//             if(eded%bolunenEded==0){
//                 say++;
//             }
//     }
//     if(say>2){
//         murekkebEded=eded;
//         console.log("murekkeb :"+murekkebEded);
//     }
//     else{
//         sadeEded=eded;
//         console.log("sade :"+sadeEded);
//     }
    
// }
// console.log("-----------");

//// TASK 9| Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın

// let x=10;
// let y=555;
// let z=5;

// console.log("TASK 9| Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın");
// x>y?(x>z)?console.log("en boyuk "+x):console.log("en boyuk "+z):(y>z)?console.log("en boyuk "+y):console.log("en boyuk "+z);

// x<y?(x<z)?console.log("en kicik "+x):console.log("en kicik "+z):(y<z)?console.log("en kicik "+y):console.log("en kicik "+z);

// console.log("-----------");

//// TASK 10| İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.
////(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)

// let userNumber;
// // userNumber=+prompt();
// userNumber=777;
// if(userNumber%2==0){
//     console.log("TASK 10| "+userNumber,"ededi cutdur");
// }
// else{
//     console.log("TASK 10| "+userNumber,"ededi tekdir");
// }
// console.log("-----------");
//// TASK 12. İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və 
// //həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın.
// let birinciEded;
// let ikinciEded;
// let riyaziEmel;
// let bool= false;
// let netice;

//// Do While yazmaq sebebim- promptda teleb olunandan ferqli bir deyer gondere bilmesin
// do {
//     birinciEded=Number(prompt("Birinci ededi daxil edin"));
// } while (isNaN(birinciEded));

// do {
//     ikinciEded=Number(prompt("Ikinci ededi daxil edin"));
// } while (isNaN(ikinciEded));

// do {
//     riyaziEmel=prompt("Riyazi emel daxil edin.(toplama + ; cixma - ; vurma * ; bolme / ; qaligi tapmaq %)");
//     if(riyaziEmel=="+" || riyaziEmel=="-" || riyaziEmel=="*" || riyaziEmel=="/" || riyaziEmel=="%"){
//         bool=true;
//         netice=birinciEded+riyaziEmel+ikinciEded;
//         alert(eval(netice));
//         // eval funksiyasi var deye haazir onunla yazdm yoxsa switch case ya da tek-tek iflerle yazmaq olardi
//     }
// } while (bool==false);

//// TASK 13 | Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.
// console.log("-----TASK 13------");

// let daxilEdilmisEded=50;
// for (let index = 100; index <1000; index++) {
//     if(index%daxilEdilmisEded==0){
//         console.log(index);
//     }
// }

//// TASK 14. Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.

// console.log("-----TASK 14------");
// let daxilEdilmisEded=42;
// console.log(daxilEdilmisEded+" ədədin bütün mümkün tam bölənləri :");
// for (let index = 1; index <=daxilEdilmisEded; index++) {
//     if (daxilEdilmisEded%index==0) {
//         console.log(index);
//     }
    
// }

//// TASK 15. 12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)

// console.log("-----TASK 15------");
// let eded = 12;
// let cem;
// for (let index = 0; index <=12; index++) {
//     cem=index+"+"+(eded-index)
//     console.log(cem);
// }

//// TASK 16. İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, =&gt; x=6, y=5)

// console.log("-----TASK 16------");
// let x = 13;
// let y = 7;
// let change=x;
// x=y;
// y=change;
// console.log("x = "+x,"y = "+y);

//// TASK 17. Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın.
// console.log("-----TASK 17------");
// let a = 284.7;
// let yuvarlaq=Math.floor(a);
// if(a%yuvarlaq==0){
// console.log(a, "tam ededdir");
// }
// else{
//     console.log(a, "tam eded DEYIL");
// }

//// TASK 18. number dəyişənində iki rəqəmli ədəd saxlanılır. Bu ədədin
//// - beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın);
//// - 3-ə bölünmədən qalan qalığını (tapın);

// console.log("-----TASK 18------");
// let number = 23;
// let quvvet = Math.pow(number, 5);
// let qaliq = number%3;
// console.log("beşinci dərəcə qüvvəti : "+quvvet+" | 3-ə bölünmədən qalan qalığı : "+qaliq);

////19.Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.
////0 < cox soyuq
////0-15 derece soyuq
////15-30 derece  isti
////30> cox isti
////Əgər heç biri deyilse alerte versin ki temperatur yanlışdır.

// console.log("-----TASK 19------");
// let temperatur = +prompt();
// let check;
// check= temperatur<=0?console.log("cox soyuq"):(temperatur<=15)?console.log("soyuq"):(temperatur<=30)?console.log("isti"):(temperatur>30)?console.log("cox isti"):alert("Daxil edilen deyer yanlisdir");;;

//// TASK 20. Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) 
////Meselen: 1 - bazarertesi, 3 - cersenbe (heftenin 7 gunu ucun)

// console.log("-----TASK 20------");
// let gun=7;
// switch (gun) {
//     case 1:
//         console.log("bazar ertesi");
//         break;
//     case 2:
//         console.log("cersenbe axsami");
//         break;
//     case 3:
//         console.log("cersenbe");
//         break;
//     case 4:
//         console.log("cume axsami");
//         break;
//     case 5:
//         console.log("cume");
//         break;
//     case 6:
//         console.log("senbe");
//         break;
//     case 7:
//         console.log("bazar");
//         break;
//     default:
//         console.log("deyer yanlisdir");;
// }

//// TASK 21. Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. 
//// Meselen : 5 (may ayı 5-cidir) output: Yaz fesli alertə çıxarın.
// console.log("-----TASK 21------");
// let ay=+prompt("secdiyiniz ayin sira nomresini daxil edin");
// let fesil;
// if(ay==12||ay==1||ay==2){
//     fesil="qış fəslidir";
// }
// else if(ay==3||ay==4||ay==5){
//     fesil="yaz fəslidir";
// }
// else if(ay==6||ay==7||ay==8){
//     fesil="yay";
// }
// else if(ay==9||ay==10||ay==11){
//     fesil="payız fəslidir"
// }
// else{
//     fesil="dəyər yanlışdır";
// }
// alert(fesil)
// switch (ay) {
//          case 1:
//              console.log("yanvar");
//              break;
//         case 2:
//              console.log("fevral");
//              break;
//          case 3:
//              console.log("mart");
//              break;
//          case 4:
//              console.log("aprel");
//              break;
//          case 5:
//              console.log("may");
//              break;
//          case 6:
//             console.log("iyun");
//              break;
//          case 7:
//              console.log("iyul");
//              break;
//          case 8:
//              console.log("avqust");
//              break;
//         case 9:
//             console.log("sentyabr");
//                 break;
//         case 10:
//             console.log("oktyabr");
//                 break;
//         case 11:
//             console.log("noyabr");
//                 break;
//         case 12:
//                  console.log("dekabr");
//              break;
//          default:
//              console.log("deyer yanlisdir");;
//     }