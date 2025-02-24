const translations = {
    en: {
        selct : "Select a Language",
        title: "DISCOVER-Cookbook",
        pargr: "The NumFOCUS DISCOVER Handbook (Diverse & Inclusive Spaces and Conferences: Overall Vision and Essential Resources). A guide for organizing more diverse and inclusive events and conferences, produced by the NumFOCUS Diversity & Inclusion in Scientific Computing (DISC) Program, with support from the Moore Foundation.",

    },
    ar: {
        selct : "اختر لغة",
        title: "اكتشاف كتاب الطبخ",
        pargr: "كتاب دليل DISCOVER الصادر عن NumFOCUS (مساحات ومؤتمرات متنوعة وشاملة: الرؤية الشاملة والموارد الأساسية). دليل لتنظيم فعاليات ومؤتمرات أكثر تنوعًا وشمولًا، تم إنتاجه بواسطة برنامج التنوع والشمول في الحوسبة العلمية التابع لـNumFOCUS (DISC)، بدعم من مؤسسة مور.",
    },
    hin: {
        selct : "एक भाषा चुनें",
        title: "खोज रसोई पुस्तक",
        pargr: "नमफोकस डिस्कवर हैंडबुक (विविध और समावेशी स्थान और सम्मेलन: समग्र दृष्टि और आवश्यक संसाधन)। अधिक विविध और समावेशी कार्यक्रमों और सम्मेलनों का आयोजन करने के लिए एक मार्गदर्शिका, जिसे नमफोकस विविधता और समावेशन वैज्ञानिक कंप्यूटिंग (डिस्क) कार्यक्रम द्वारा निर्मित किया गया है, और मूर फाउंडेशन के समर्थन के साथ।",
    }
}

const languageSelectoption = document.querySelector("select");
let h1=document.getElementById("h1");
let title=document.getElementById("title");
let par=document.getElementById("par");

languageSelectoption.addEventListener("change", (event)=>{
    setLanguage(event.target.value)
})

const setLanguage=(language)=>{
    if(language=="ar"){
        h1.innerText=translations.ar.selct;
        title.innerText=translations.ar.title;
        par.innerText= translations.ar.pargr;

    }else if(language=="en"){
        h1.innerText=translations.en.selct;
        title.innerText=translations.en.title;
        par.innerText= translations.en.pargr;
        
    }else if(language=="hin"){
        h1.innerText=translations.hin.selct;
        title.innerText=translations.hin.title;
        par.innerText= translations.hin.pargr;

    }
}