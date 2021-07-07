var names_materials=["сталь ст3","чугун серый","сплав титана вт4","алюминий","дюралюминий","латунь","бронза","текстолит","древесина","мтеклопластик","углепластик"];
var E=[2*10^5,
   1.15*10^5,
   1.1*10^5,
   0.7*10^5,
   0.7*10^5,
   1*10^5,
   1.1*10^5,
   0.1*10^5,
   0.1*10^5,
   0.6*10^5,
   1.9*10^5];  // модуль продольной упругости
var sigma_vr=[380,
   120,
   800,
   220,
   450,
   400,
   380,
   100,
   100,
   260,
   900]; // временное сопротивление
var sigma_t = [240,
   0,
   700,
   110,
   330,
   210,
   160,
   0,
   0,
   0,
   0]; // предел текучести
var sigma_r = [160,40,350,55,115,105,90,35,8,130,400];  // допускаемое напряжение при растяжении
var sigma_s = [160,40,350,55,115,105,90,35,12,130,400];  // допускаемое напряжение при сжатии
function s(ts,v1,v2)
{
	if(ts == 1)
		return v1*v1
	if(ts == 2)
		return v1*v2
	if(ts == 3)
		return 3.14*v1
	
}