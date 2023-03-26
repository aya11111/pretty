import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
en: {
    translation: {
        nav: {
            "logo": "pretty store",
            "home": "home",
            "about": "about us",
            "shop": "shop",
            "contact": "contact us"
        },
        home: {
            "head": "beauty for all",
            "shop": "shop now",
            "best": "the best for you",
            "welcome": "welcome to pretty store",
            "quality": "good quality",
            "beautiful": "looks more beautiful",
            "variety":"variety of looks",
            "easy": "easy to apply",
            "feedback": "users feedback",
            "roz": "rozalina william",
            "nova": "nava hong",
            "sara": "sara ahmed",
            "details": "more details"
        },
        categories: {
            "categories":"categories",
            "foundation": "foundation",
            "blusher": "blusher",
            "lips": "lip stick",
            "brushes": "brushes",
            "eyes": "eye shadow ",
            "nails": "nails",
            "skinCare": "skin care",
            "shopby":"shop by category:"
        },
        "paragraph": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
        "longp":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
        footer: {
            "information": "information",
            "stay": "stay in touch",
            "stayPar": "Our conversation is just getting started",
            "email": "Your Email",
            "made": "made with",
            "rights": "all rights reserved"
        },
        form: {
            "location": "location",
            "street":"122 King Street Cairo",
            "phone": "phone number",
            "email": "email",
            "getintouch": "get in touch",
            "firstname": "first name",
            "lastname": "last name",
            "yourmessage": "your message",
            "send": "send your message"
        }
    }
},
ar: {
    translation: {
        nav: {
            "logo": "بريتي ستور",
            "home": "الرئيسية",
            "about": "من نحن",
            "shop": "تسوق",
            "contact": "تواصل معنا",
        },
        home: {
            "head": "الجمال للجميع",
            "shop": "تسوق الآن",
            "best": "الافضل لك",
            "welcome": "اهلا بكم في بريتي ستور",
            "quality": "جودة جيدة",
            "beautiful": "تبدو اكثر جمالا",
            "variety":"تنوع في الاطلالات",
            "easy": "سهل الاستخدام",
            "feedback": "تعليقات المستخدمين",
            "roz": "روزالينا وليام",
            "nova": "نوفا هونج",
            "sara": "ساره احمد",
            "details": "تفاصيل اكثر"
        },
        categories: {
            "categories": "الفئات",
            "foundation": "كريم اساس",
            "blusher": "احمر خدود",
            "lips": "روج",
            "brushes": "فرش",
            "eyes": "ايشادو",
            "nails": "اظافر",
            "skinCare": "العناية بالبشرة",
            "shopby": "تسوق بالفئه:"
        },
        "paragraph": "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم و نماذج مواقع انترنت",
        "longp": "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. الهدف من استخدام لوريم إيبسوم هو أنه يحتوي على توزيع طبيعي -إلى حد ما- للأحرف ، بدلاً من استخدام هنا يوجد محتوى نصي ، هنا يوجد محتوى نصي ، مما يجعلها تبدو وكأنها إنجليزية قابلة للقراءة. تستخدم العديد من حزم النشر المكتبي ومحرري صفحات الويب الآن لوريم  كنص نموذج افتراضي ، وسيكشف البحث عن لوريم عن العديد من مواقع الويب التي لا تزال في مهدها. تطورت إصدارات مختلفة على مر السنين ، أحيانًا عن طريق الصدفة",
        footer: {
            "information": "معلومات",
            "stay": "ابقى على اتصال",
            "stayPar": "لقد بدأت محادثتنا للتو",
            "email": "ايميلك",
            "made": "صنع ب",
            "rights": "كل الحقوق محفوظة"
        },
        form: {
            "location": "الموقع",
            "street":"122 شارع كنج القاهره",
            "phone": "رقم الهاتف",
            "email": "الايميل",
            "getintouch": "تواصل معنا",
            "firstname": "الاسم الاول",
            "lastname": "الاسم الاخير",
            "yourmessage": "رسالتك",
            "send": "ارسل رسالتك"
        }
    }
}
};

i18n
.use(initReactI18next) 
.init({
    resources,
    lng: "en", 
    interpolation: {
    escapeValue: false // react already safes from xss
    }
});

export default i18n;