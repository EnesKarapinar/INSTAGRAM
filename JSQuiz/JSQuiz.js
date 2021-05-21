function SgunesTabIleriGeriButton(nerenin_icinde, yon) {
    var tabs = $(nerenin_icinde).find('.nav-tabs').find('li');
    var active_tab = $(nerenin_icinde).find('.nav-tabs').find('.active');
    var tab_panes = $(nerenin_icinde).find('.tab-pane');

    for (var i = 0; i < tabs.length; i++) {
        var mevcut_tab = $(tabs[i]);
        if (i == 0) {
            if (mevcut_tab[0] == active_tab[0] && yon == 1) {
                $(tabs[i]).removeClass('active');
                $(tabs[i + 1]).addClass('active');
                $(tab_panes[i]).removeClass('in active');
                $(tab_panes[i + 1]).addClass('in active');
                break;
            }
        } else if (i == tabs.length - 1) {
            if (mevcut_tab[0] == active_tab[0] && yon == 0) {
                $(tabs[i]).removeClass('active');
                $(tabs[i - 1]).addClass('active');
                $(tab_panes[i]).removeClass('in active');
                $(tab_panes[i - 1]).addClass('in active');
                break;
            }
        } else {
            if (mevcut_tab[0] == active_tab[0]) {
                $(tab_panes[i]).removeClass('in active');
                $(tabs[i]).removeClass('active');
                if (yon == 0) {
                    $(tabs[i - 1]).addClass('active');
                    $(tab_panes[i - 1]).addClass('in active');
                } else {
                    $(tabs[i + 1]).addClass('active');
                    $(tab_panes[i + 1]).addClass('in active');
                }
                break;
            }
        }
    }

}

function cevapla() {
    var soruSayisi = 3;
    var gelenCevap = new Array();
    var dogruCevap = new Array("C", "C", "C");
    var dogru = 0;
    var yanlis = 0;
    var cevap = 0;
    var rapor = "";
    var tryagain = "";

    for (i = 1; i <= soruSayisi; i++) {
        var secenekler = document.getElementsByName("s" + i);
        for (j = 0; j < secenekler.length; j++) {
            if (secenekler[j].checked) {
                if (secenekler[j].value == dogruCevap[i - 1]) {
                    cevap = 1;
                } else {
                    cevap = 0;
                }
                if (cevap) {
                    rapor += "<h5>" + i + ". Soru için cevabınız: " +
                        "<p style='color: green; display:inline;'> DOĞRU </P> </h5> <br />";
                } else {
                    rapor += "<h5>" + i + ". Soru için cevabınız: " +
                        "<P style='color: red; display:inline;'>YANLIŞ</P> , <P style='color: green; display:inline;'> Doğru Cevap: " + dogruCevap[i - 1] + "</P> </h5> <br />";
                }
                gelenCevap.push(secenekler[j].value);
            }
        }
    }
    for (k = 0; k < soruSayisi; k++) {
        if (gelenCevap[k] == dogruCevap[k]) {
            dogru++;
        } else {
            yanlis++;
        }
    }
    rapor += "<h3 class='sonuç' style='display:inline;'> Sonuç: " + "<p class='doğru' style='color:green; display:inline;'>" + dogru + " Doğru </p> " + ", " + "<p class='yanlış' style='color:red; display:inline;'>" + yanlis + " Yanlış </p>" + "</h3>" + "<br />";
    document.getElementById('rapor').innerHTML = rapor;
    tryagain = "<a href='JSQuiz.html' class='try-again'><svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-arrow-counterclockwise' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z'/><path d='M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z'/></svg><span>Tekrar Dene</span></a>"
    document.getElementById('tryagain').innerHTML = tryagain;
}