function myzakat() {
     let camel=document.getElementById("usman").value;
     let zakat;
     if(camel<5) {
        zakat="There is no Zakat on Camels"
     }else if(camel<10) {
        zakat="Only One Goat(Minimum one year old)"
     } else if(camel<15){
        zakat="Only Two Goats(Minimum one year old)"
     }  else if(camel<20) {
        zakat="Only Three Goats(Minimum one year old)"
     }  else if(camel<25) {
        zakat="Only Four Goats(Minimum one year old)"
     }  else if(camel<36) {
        zakat="Only One 'Bint e Makhaaz' (A She-Camel Whose second year has already begun)"
     }  else if(camel<46) {
        zakat="Only One 'Bint e Laboon' (A She-Camel Whose third year has already begun)"
     }  else if(camel<61) {
        zakat="Only One  'Hiqqah' (A She-Camel Whose fourth year has already begun)"
     }  else if(camel<76) {
        zakat="Only One 'Jadha'ah' (A She-Camel Whose fifth year has already begun)"
     }   else if(camel<91) {
        zakat="Only Two 'Bint e Laboon'(A She-Camel Whose  third year has already begun)"
     }   else if(camel<125) {
        zakat="Only Two 'Hiqqah'(A She-Camel Whose  four year has already begun)"
     }   else if(camel<129) {
        zakat="Only Two 'Hiqqah and one goat(Minimum one year old)'(Hiqqah:A She-Camel Whose  four year has already begun)"
     }   else if(camel<135) {
        zakat="Only Two 'Hiqqah and Two goats(Minimum one year old)'(Hiqqah:A She-Camel Whose  four year has already begun)"
     }    else if(camel<140) {
        zakat="Only Two 'Hiqqah and Three goats(Minimum one year old)'(Hiqqah:A She-Camel Whose  four year has already begun)"
     }    else if(camel<145) {
        zakat="Only Two 'Hiqqah and Fours goats(Minimum one year old)'(Hiqqah:A She-Camel Whose  four year has already begun)"
     }    else if(camel<150) {
        zakat="Only Two 'Hiqqah and one Bint e Makhaaz'(Hiqqah:A She-Camel Whose  four year has already begun  and Bint e Makhaaz: A She-Camel Whose second year has already begun)" 
        
     }    else if(camel<155) {
        zakat="Only Three 'Hiqqah'(Hiqqah:A She-Camel Whose  four year has already begun)"
     }    else if(camel<160) {
        zakat="Only Three 'Hiqqah and one goat(Minimum one year old)'(Hiqqah:A She-Camel Whose  four year has already begun)"
     }    else if(camel<165) {
        zakat="Only Three 'Hiqqah and two goats(Minimum one year old)'(Hiqqah:A She-Camel Whose  four year has already begun)"  
     }  else if(camel<170) {
        zakat="Only Thre 'Hiqqah and three goats(Minimum one year old)'(Hiqqah:A She-Camel Whose  four year has already begun)"  
     }  else if(camel<175) {
        zakat="Only Three 'Hiqqah and four goats(Minimum one year old)'(Hiqqah:A She-Camel Whose  four year has already begun)"  
     }  else if(camel<186) {
        zakat="Only Three 'Hiqqah and one Bint e Makhaaz'(Hiqqah:A She-Camel Whose  four year has already begun  and Bint e Makhaaz: A She-Camel Whose second year has already begun)"  
     }   else if(camel<196) {
        zakat="Only Three 'Hiqqah and one Bint e Laboon'(Hiqqah:A She-Camel Whose  four year has already begun  and Bint e Laboon: A She-Camel Whose third year has already begun)"         
     }    else if(camel<205) {
        zakat="Only four 'Hiqqah'(Hiqqah:A She-Camel Whose  four year has already begun)" 
     }
        document.getElementById("just").innerText=zakat
   }