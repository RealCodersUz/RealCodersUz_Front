import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  fallbackLng: "ru",
  lng: "uz",
  resources: {
    uz: {
      translation: {
        navbar_main_link: "Asosiy",
        navbar_about_link: "Biz haqimizda",
        navbar_adventages_link: "Afzalliklarimiz",
        navbar_catalog_link: "Katalog",
        navbar_news_link: "Narxlar",
        navbar_contact_link: "Kontaktlar",
        navbar_lang_select: "Tilni tanlang",
        main_1_1: "AlCoders nima?",
        main_1_2:
          "AlCoders - barcha xalqaro standartlarga javob beradigan va ko'plab xalqaro standartlar tizimlarining sertifikatlariga ega bo'lgan yuqori sifatli mahsulot!",
        main_1_3:
          "AlCoders - bu sanoat va maishiy hududlarda zamonaviy isitish va suv ta'minoti tizimlarida foydalanish uchun mo'ljallangan polipropilen quvurlar va fitinglar, kranlar, metall kollektorlar va metall fitinglar.",
        main_1_4: "Ko'proq bilish",
        main_1_5: "AlCoders - ko'p yillik tajribaga ega kompaniya!",
        main_2_1: "Biz haqimizda",
        main_2_2:
          "AlCoders - 2023 yilda tashkil etilgan, Turkiyaning Istanbul shahrida joylashgan bo'lib, zamonaviy isitish va suv ta'minoti tizimlari uchun mahsulotlar ishlab chiqaradi. Bugungi kunda AlCoders mahsulotlari dunyoning 50 ta davlatida tanilgan. Barcha mahsulotlar xalqaro sertifikatlarga ega. AlCoders mahsulotlari O'zbekiston bozorida 2009 yilda mashhur bo'lgan. Bugungi kunda O'zbekistonda AlCoders mahsulotlarini 20 dan ortiq ixtisoslashtirilgan do'konlarda xarid qilish mumkin!",
        main_2_3: "Ko'proq bilish",
        main_2_4: "Biz bilan bog'lanish",
        main_3_1: "Sertifikatlar",
        main_3_2: "Yuqori sifat",
        main_3_3: "Yevropa sifati",
        main_3_4: "Xalqaro  standartlar",
        main_3_5: "Labaratoriya tekshruvlari",
        main_3_6: "Yuqori kafolat",
        main_3_7: "Mahsulot kafolati",
        main_3_8: "Sifat nazorati",
        main_3_9: "Seminar treninglar",
        main_4_1: "Bizning assortimentimiz",
        main_4_2: "Barcha mahsulotlar",
        main_5_1: "Bizning hamkorlarimiz",
        main_6_1: "Foydali yangliklar",
        //asosiy oyna tugadi
        about_1_1: "Biz haqimizda",
        about_1_2:
          "2023 yil, Turkiyalik 4-ta muxandis, AlCoders kompaniyasini tashkil etgan. O'z oldilariga  xalq uchun yuqori  sifatli mahsulotlarni  yetkazish deb maqsad qo'yishgan. AlCoders kompaniyasi birinchilar qatorida, chet eldan (Evropadan) zamonaviy texnologiyalar va uskunalar olib kelib, suv taʻminoti va isitish tizimlar uchun mahsulotlar ishlab chiqarishni boshlashgan. 1990 yillarda, ichki bozorni yetarli darajada taʻminlab, mahsulotlarni chetel bozoriga tanishtirgan. Shu yillarda, Turkiyada  birinchilar qatorida plastik mahsulotlarni ishlab chiqarishi yo'lga qo'yilgan. 1995 yildan boshlab va xozirgi kunda Turkiyaning 500 yirik kompaniyalaridan biri.",
        about_1_3: "Biz bilan bog'lanish",
        about_2_1: "O'zbekistonda AlCoders",
        about_2_2:
          "INORA IMPEX (O‘zbekiston) kompaniyasi ishlab chiqaruvchi AlCoders KLIMA PAZARLAMA VE TAAHHÜT AŞ (Turkiya) bilan olib borilgan muzokaralardan keyin mahsulotning yuqori sifatiga ishonch hosil qildi. AlCoders mahsulotlarini O‘zbekistonga birinchi yetkazib berish 2009-yilning noyabr oyida amalga oshirilgan. 2010-yildan boshlab O‘zbekistonda AlCoders brendi mahsulotlarining barcha turlarini sotuvchi do‘konlar tarmog‘i yaratilgan. 2023-yilda Toshkent, Buxoro, Namangan, Andijon, Jizzax, Qo‘qon shaharlarida 20 dan ortiq do‘konlar tarmog‘i joriy etildi. Shaharlarda yirik filiallari bor: Buxoro, Namangan.",
        about_3_1: "Sifatli mahsulotlar",
        about_3_2:
          "AlCoders ko'p jihatdan zamonaviy mahsulotlarni ishlab chiqishga investitsiyalar , yuqori samaradorlik va ishlab chiqarish quvvatlarining salohiyatiga etibor qaratadi .AlCoders global bozorlarda tegishli mahsulotlarga bo'lgan o'zgaruvchan talabga tezda javob berish uchun o'z mahsulotlarini doimiy ravishda optimallashtiradi. Dunyo standartlariga to'gri keladigan, AlCoders mahsulotlari, dunyodagi 40-ta yirik mamlakatlarida tanilgan. Barcha mahsulotlariga, xalqaro sertifikatlari mavjud.",
        about_4_1: "Bizning xodimlarimiz",
        about_5_1: "Bizning afzalliklarimiz",
        about_5_2: "Yuqori sifat",
        about_5_3: "Yevropa sifati",
        about_5_4: "Xalqaro  standartlar",
        about_5_5: "Labaratoriya tekshruvlari",
        about_5_6: "Yuqori kafolat",
        about_5_7: "Mahsulot kafolati",
        about_5_8: "Sifat nazorati",
        about_5_9: "Seminar treninglar",
        about_6_1: "Bizning hamkorlar",
        // Biz haqimizda oynasi tugadi
        catalog_1_1: "Kategoriya",
        // Katalog tugadi
        application_1_1:
          "Qo'shimcha savollaringiz bormi? Kompaniya haqida ko'proq bilishni xohlaysizmi? Rasmiy diler bo'lishni xohlaysizmi? Mahsulotlarimiz bilan qiziqasizmi? Keyin biz bilan bog'laning. Va biz har doim siz bilan ishlashga tayyormiz!",
        application_1_2: "Biz bilan bog'lanish",
        application_1_3: "Sizning ismingiz",
        application_1_4: "Sizning telefon raqamingiz",
        application_1_5: "Xabaringizni kiriting",
        application_1_6: "YUBORISH",
        // Zayafka qoldrish umimiy
        product_1_1: "Nomi:",
        product_1_2: "Kod:",
        product_1_3: "Diametri:",
        product_1_4: "Ichki diametri:",
        product_1_5: "Ichki uzunligi:",
        product_1_6: "Tashqi uzunligi",
        product_1_7: "O'lchami:",
        product_1_8: "Qadoqdagi soni:",
        product_1_9: "Narxi:",
        product_1_10: "Tarif:",
        product_2_1: "Shu turdagi mahsulotlar",
        // mahsulot oynasi tugadi
        news_1_1: "Boshqa yangiliklar",
        // News tugadi
        branches_1_1: "Rasmiy dilerlik do'konlari va filiallarining manzillari",
        //Bozning firyalar tugadi
        firyal_1_1: "Manzil:",
        firyal_1_2: "Orientatsiya:",
        firyal_1_3: "Ish vaqti:",
        firyal_1_4: "Telefon raqami:",
        firyal_1_5: "Email:",
        firyal_1_6: " Joylashuv : ",
        firyal_1_7: "Qo'shimcha telefon raqam : ",

        firyal_2_1: "Biz bilan bog'lanish",
        firyal_2_2: "Sizning ismingiz",
        firyal_2_3: "Telefon raqamingiz",
        firyal_2_4: "Xabaringizni kiriting",
        firyal_2_5: "YUBORISH",
        // Firyal tugadi
        advantages_1_1:
          "Yuqori darajadagi A sinfidagi xom ashyolardan tayyorlangan barcha PPR mahsulotlari quvurlar va fitinglarni ulash jarayonida benuqson ulanishlarni yaratishda ustunlik qiladi. Yuqori sifatli materiallardan foydalanish beqiyos natijalarni kafolatlaydi, turli xil qo'llash sohalarida mahsulotimizning ishonchliligi va unumdorligini oshiradi.",
        advantages_1_2:
          "Bizning metall buyumlarimiz Yevropa xomashyosidan  eng so'ngi rusumdagi asbob-uskunalar va zamonaviy Yevropa texnikalaridan foydalangan holda sinchkovlik bilan ishlab chiqariladi. Ushbu fidoyilik xalqaro standartlarga javob beradigan, har bir mahsulotdagi mukammallikni va innovatsiyalarni aks ettiruvchi yuqori sifatli mahsulotlar ishlab chiqarishni ta'minlaydi.",
        advantages_1_3:
          "Barcha ishlab chiqarilgan mahsulotlar xavfsizligi va yuqori sifatini tasdiqlovchi zarur xalqaro standart sertifikatlariga ega.",
        advantages_1_4:
          "Har bir ishlab chiqarish sektorida maxsus laboratoriya, har bir partiyadan namunalarni sinchkovlik bilan sinovdan o'tkazadi. Bundan tashqari, akkreditatsiyalangan mustaqil laboratoriya barcha mahsulotlarni sinchkovlik bilan tekshiradi. Ushbu ikki tomonlama sinov yondashuvi mijozlarimizga doimiy ishonchli va sertifikatlangan mahsulotlarni yetkazib berishga sodiqligimizni tasdiqlab, eng yuqori sifatni kafolatlaydi.",
        advantages_1_5:
          "Barcha ishlab chiqarilgan mahsulotlar nufuzli sug'urta kompaniyalari tomonidan taqdim etilgan kafolatlar bilan ta'minlanadi. Bizning metall mahsulotlarimiz 10 yilgacha kafolatlanadi va polipropilen mahsulotlarimiz ta'sirchan 50 yil kafolat bilan ta'minlanadi. Xususan, polipropilen quvurlar va  fitinglar 50 yillik keng kafolatga ega bo lib, bu bizning chidamlilik va mijozlar ehtiyojini qondirishga sodiqligimizni aks ettiradi.",
        advantages_1_6:
          "Bizning maxsus xizmat ko'rsatish bo'limimiz kafolat so'rovlarini samarali hal qiladi. Mahsulot nosozliklari bilan bog'liq mulkiy zarar holatlarida biz 100% gacha kompensatsiyani taklif qilamiz. Bu bizning muammolarga zudlik bilan yechim topish va mijozlarimiz qoniqishini ta'minlashga sodiqligimizni ta'kidlaydi, bu bizning sifat va mas'uliyatga bo'lgan qat'iy sodiqligimizni aks ettiradi.",
        advantages_1_7:
          "Biz mahsulotlarning mukammalligini oshirish va innovatsiyalarni rivojlantirish uchun muhandislik firmalari va montajchilar bilan izchil, hamkorlikni davom ettiramiz. Ushbu yaqin hamkorlik mahsulotning doimiy rivojlanishiga turtki bo'lib, takliflarimiz sifat va xilma-xillik bo'yicha birinchi o'rinda turishini ta'minlaydi. Taraqqiyotga sodiqligimiz soha mutaxassislari bilan faol aloqalarimizda namoyon bo ladi.",
        advantages_1_8:
          "Biz mahsulot sifatini yaxshilash va innovatsiyalarni rag'batlantirish uchun muhandislik kompaniyalari va montajchilar bilan doimiy hamkorlikni davom ettiramiz. Ushbu yaqin hamkorlik mahsulotlarning uzluksiz rivojlanishiga yordam beradi va bizning takliflarimiz sifat va assortiment bo'yicha birinchi o'rinda turishini ta'minlaydi. Taraqqiyotga sodiqligimiz soha mutaxassislari bilan dinamik o'zaro munosabatlarimizda namoyon bo ladi.",
        advantages_1_9: "Biz bilan bog'lanish",
        // Afzaliklar tugadi.

        // footer
        footer_1_1:
          "AlCoders - zamonaviy isitish va suv ta'minoti tizimlari uchun yuqori sifatli mahsulotlar.",
        footer_1_2: "Foydali sahifalar",
        footer_1_3: "Biz bilan bog'lanish",
        manzil_name:
          "Toshkent shahri, Olmazor tumani, ko'cha Shiroq, 2 (Mo'ljal - Chukursay qurilish bozori)",

        about_2_3: "Xodimlar",
        about_2_4: "Mahsulotlar",
        about_2_5: "Zavodlar",
        about_2_6: "Davlatlar",

        sent_message_succues: "Xabaringiz muvvafaqiyatli yuborildi ",
        sent_message_fail: "Xabaringiz yuborilmadi, qayta urinib ko'ring ",
        sent_message_error: "Xabaringizni yuborishda xatolik yuz berdi",

        xato: "Xatolik",
        loading: "Yuklanmoqda ...",
        no_product: "Mahsulotlar mavjud emas.",
        no_category: "Kategoriyalar mavjud emas.",
        muallif: "Mualliflik huquqi ",
      },
    },
    ru: {
      translation: {
        navbar_main_link: "Главная",
        navbar_about_link: "O нас",
        navbar_adventages_link: "Преимущества",
        navbar_catalog_link: "Каталог",
        navbar_news_link: "Прайс",
        navbar_contact_link: "Контакты",
        navbar_lang_select: "Выберите язык",
        main_1_1: "Что такое AlCoders?",
        main_1_2:
          " AlCoders – это высококачественная продукция, соответствующая всем мировым стандартам и имеющая сертификаты многих систем международных стандартов!",
        main_1_3:
          " AlCoders – это полипропиленовые трубы и фитинги, краны, металлические коллектора и фитинги, предназначенные для использования в современных системах отопления и водоснабжения как в промышленной так и в бытовой сфере.",

        main_1_4: "Узнать больше",
        main_1_5:
          " AlCoders – это компания, за которой стоит многолетний опыт работы!",
        main_2_1: "О нас",
        main_2_2:
          "AlCoders - основана в 2023 году, расположена в Стамбуле, Турция, производит продукцию для современных систем отопления и водоснабжения. Сегодня продукция AlCoders известна в 50 странах мира.  Вся продукция имеет международные сертификаты. На рынке Узбекистана продукция AlCoders стала известна в 2009 году. На сегодняшний день в Узбекистане продукцию AlCoders можно купить более чем в 20 специализированных магазинах!",
        main_2_3: "Узнать больше",
        main_2_4: "Свяжитесь с нами",
        main_3_1: "Сертификаты",
        main_3_2: "Высокое качество",
        main_3_3: "Eвропейское качество",
        main_3_4: "Международные стандарты",
        main_3_5: "Лабораторные тесты",
        main_3_6: "Высокая гарантия",
        main_3_7: "Гарантия на продукт",
        main_3_8: "Контроль качества",
        main_3_9: "Семинар тренинг",
        main_4_1: "Наш ассортимент",
        main_4_2: "Все продукты",
        main_5_1: "Наши партнеры",
        main_6_1: "Полезные новости",
        //asosiy oyna tugadi
        about_1_1: "О нас",
        about_1_2:
          " Компания AlCoders основана в 2023 году, в г. Стамбул (Турция), когда четыре инженера решили объединиться и воплотить мечту в реальность, создавая для народа качественную продукцию, отвечающую мировым требованиям. Компания AlCoders одной из первых завезла современное технологическое оборудование из-за рубежа (из Европы) и начала производить продукцию для систем водоснабжения и отопления. В 1990-е годы, достаточно снабдив внутренний рынок, она вывела свою продукцию на внешний рынок. В эти годы одними из первых в Турции было запущено производство пластиковых изделий. С 1995 года и по сегодняшний день входит в число 500 крупнейших компаний Турции.",
        about_1_3: "Свяжитесь с нами",
        about_2_1: "AlCoders в Узбекистане",
        about_2_2:
          "Компания INORA IMPEX (Узбекистан) помимо переговоров с производителем AlCoders KLİMA PAZARLAMA VE TAAHHÜT AŞ (Турция), и убедилась в высоком качестве продукта. Первая поставка продукции AlCoders в Узбекистан была осуществлена в ноябре 2009 года.C 2010 года в Узбекистане создана сеть магазинов по продаже всех видов товаров бренда AlCoders. В 2023 году представлена сеть из более чем 20 магазинов в городах: Ташкент, Бухарa, Наманган, Андижан, Джизак, Коканд. Имеются крупные филиалы в городах: Бухара, Наманган.",

        about_3_1: "Качество продукции",
        about_3_2:
          "AlCoders вкладывает значительные средства в разработку современных продуктов, высокую эффективность и потенциал производственных мощностей AlCoders постоянно оптимизирует свою продукцию, чтобы быстро реагировать на меняющийся спрос на сопутствующие товары на мировых рынках. Продукция AlCoders, отвечающая мировым стандартам, известна в 40 крупнейших странах мира. Вся продукция имеет международные сертификаты.",
        about_4_1: "Наши сотрудники",
        about_5_1: "Наши преимущества",
        about_5_2: "Высокое качество",
        about_5_3: "Eвропейское качество",
        about_5_4: "Международные стандарты",
        about_5_5: "Лабораторные тесты",
        about_5_6: "Высокая гарантия",
        about_5_7: "Гарантия на продукт",
        about_5_8: "Контроль качества",
        about_5_9: "Семинар тренинг",
        about_6_1: "Наши партнеры",
        // Biz haqimizda oynasi tugadi
        catalog_1_1: "Категория",
        // Katalog tugadi
        application_1_1:
          "У вас есть дополнительные вопросы? Хотите узнать больше о компании? Хотите стать официальным дилером? Заинтересованы в нашей продукции? Тогда свяжитесь с нами. И мы всегда готовы работать с вами!",
        application_1_2: "Связаться с нами",
        application_1_3: "Ваше имя",
        application_1_4: "Ваш номер телефона",
        application_1_5: "Введите сообщение",
        application_1_6: "ОТПРАВИТЬ",
        // Zayafka qoldrish umimiy
        product_1_1: "Имя:",
        product_1_2: "Код:",
        product_1_3: "Диаметр:",
        product_1_4: "Внутренний диаметр:",
        product_1_5: "Внутренняя длина:",
        product_1_6: "Внешняя длина:",
        product_1_7: "Размер:",
        product_1_8: "Количество в упаковке:",
        product_1_9: "Цена :",
        product_1_10: "Информация:",
        product_2_1: "Похожие продукты",
        // mahsulot oynasi tugadi
        news_1_1: "Другие новости",
        // News tugadi
        branches_1_1: "Адреса официальных дилерских магазинов и филиалов",
        //Bozning firyalar tugadi
        firyal_1_1: "Местоположение:",
        firyal_1_2: "Oриентация:",
        firyal_1_3: "Рабочее время:",
        firyal_1_4: "Номер телефона:",
        firyal_1_5: "Электронная почта:",
        firyal_1_6: " Локация : ",
        firyal_1_7: "Дополнительный номер телефона : ",

        firyal_2_1: "Связаться с нами",
        firyal_2_2: "Ваше имя",
        firyal_2_3: "Ваш номер телефона",
        firyal_2_4: "Введите сообщение",
        firyal_2_5: "ОТПРАВИТЬ",

        // Firyal tugadi
        advantages_1_1:
          "Изготовленные из высококачественного сырья класса А, все изделия PPR превосходно подходят для создания безупречных соединений в процессе пайки труб и фитингов. Использование высококачественных материалов гарантирует непревзойденные результаты, повышая надежность и эксплуатационные характеристики нашей продукции в различных областях применения.",
        advantages_1_2:
          "Наши металлические изделия изготавливаются из высококачественного европейского сырья с использованием современного оборудования и передовых европейских технологий. Эта приверженность гарантирует производство высококачественных изделий, соответствующих международным стандартам, отражающих как совершенство, так и инновации в каждом продукте.",
        advantages_1_3:
          "Вся выпускаемая продукция имеет необходимые сертификаты международного стандарта, подтверждающие их безопасность и высокое качество.",
        advantages_1_4:
          "В каждом производственном секторе специальная лаборатория проводит тщательное тестирование образцов из каждой партии. Кроме того, аккредитованная независимая лаборатория тщательно проверяет всю продукцию. Такой подход к двойному тестированию гарантирует высочайшее качество, подтверждая наше стремление поставлять нашим клиентам стабильно надежные и сертифицированные товары.",
        advantages_1_5:
          "Вся производимая продукция подкреплена гарантиями, обеспеченными авторитетными страховыми компаниями. На наши изделия из металла распространяется гарантия до 10 лет, а на изделия из полипропилена действует впечатляющая 50-летняя гарантия. В частности, на трубы и фитинги из полипропилена предоставляется обширная 50-летняя гарантия, отражающая нашу непоколебимую приверженность долговечности и удовлетворенности клиентов.",
        advantages_1_6:
          "Наш специализированный сервисный отдел эффективно обрабатывает гарантийные запросы. В случаях материального ущерба, связанного с дефектами продукции, мы предлагаем комплексную компенсацию до 100%. Это подчеркивает нашу приверженность быстрому решению проблем и обеспечению удовлетворенности наших клиентов, отражая нашу непоколебимую приверженность качеству и ответственности.",
        advantages_1_7:
          "Мы поддерживаем постоянное сотрудничество с инженерными фирмами и установщиками для повышения качества продукции и стимулирования инноваций. Это тесное сотрудничество способствует постоянному развитию продуктов, гарантируя, что наши предложения остаются на переднем крае качества и разнообразия. Наше стремление к прогрессу отражается в нашем динамичном взаимодействии с профессионалами отрасли.",
        advantages_1_8:
          "На сегодняшний день, компания AlCoders, имеет производственные фабрики в городах Стамбул, Денизли, Аксарай (Турция), что позволяет полностью удовлетворить спрос на производимую продукцию в полном объёме. Экспорт более чем в 20 стран мира, доказывает, что наша продукция признана в соответствующей мере.",
        advantages_1_9: "Свяжитесь с нами",
        // Afzaliklar tugadi.

        // footer

        footer_1_1:
          "AlCoders – высококачественные товары для современных систем отопления и водоснабжения.",
        footer_1_2: "Полезные страницы",
        footer_1_3: "Свяжитесь с нами",
        manzil_name:
          "Город Ташкент, Алмазарский район, улица Широк, 2 (Направление – строительный рынок Чукурсай)",

        about_2_3: "Сотрудников",
        about_2_4: "Продуктов",
        about_2_5: "Заводов",
        about_2_6: "Государств",

        sent_message_succues: "Ваше сообщение было отправлено успешно",
        sent_message_fail: "Произошла ошибка при отправке сообщения",
        sent_message_error: "При отправке вашего сообщения произошла ошибка",

        xato: "Ошибка",
        loading: "Загрузка ... ",
        no_product: "Товары недоступны.",
        no_category: "Нет категорий.",
        muallif: "Авторские права ",
      },
    },
    en: {
      translation: {
        navbar_main_link: "Main",
        navbar_about_link: "About",
        navbar_adventages_link: "Our advantages",
        navbar_catalog_link: "Catalog",
        navbar_news_link: "Prices",
        navbar_contact_link: "Contacts",
        navbar_lang_select: "Select language",
        main_1_1: "What is AlCoders?",
        main_1_2:
          "AlCoders is a high-quality product that meets all international standards and has international standard system certificates!",
        main_1_3:
          "AlCoders, for heating and water supply systems, high-quality polypropylene pipes and fittings!",

        main_1_4: "To learn more",
        main_1_5: "AlCoders is a company with many years of experience!",
        main_2_1: "About us",
        main_2_2:
          "AlCoders - founded in 2023, located in Istanbul, Turkey, manufactures products for modern heating and water supply systems. Today AlCoders products are known in 50 countries around the world. All products have international certificates. AlCoders products became known in the Uzbek market in 2009. Today, AlCoders products can be bought in more than 20 specialized stores in Uzbekistan!",
        main_2_3: "To learn more",
        main_2_4: "Contact us",
        main_3_1: "Certificates",
        main_3_2: "High quality",
        main_3_3: "European quality",
        main_3_4: "International standards",
        main_3_5: "Laboratory tests",
        main_3_6: "High warranty",
        main_3_7: "Product warranty",
        main_3_8: "Quality control",
        main_3_9: "Seminar training",
        main_4_1: "Our range",
        main_4_2: "All products",
        main_5_1: "Our partners",
        main_6_1: "Useful news",
        //asosiy oyna tugadi
        about_1_1: "About us",
        about_1_2:
          "In 2023, 4 Turkish engineers founded the AlCoders company. The goal is to deliver high-quality products for the people. The AlCoders company was one of the first to bring modern technology equipment from abroad (Europe) and start producing products for water supply and heating systems. In the 1990s, having sufficiently supplied the domestic market, it introduced its products to the foreign market. During these years, the production of plastic products was launched among the first in Turkey. Since 1995, and today, it is one of the 500 largest companies in Turkey.",
        about_1_3: "Contact us",
        about_2_1: "AlCoders in Uzbekistan",
        about_2_2:
          "The company INORA IMPEX (Uzbekistan), in addition to negotiations with the manufacturer AlCoders KLIMA PAZARLAMA VE TAAHHÜT AŞ (Turkey), was convinced of the high quality of the product. The first delivery of AlCoders products to Uzbekistan was made in November 2009. Since 2010, a network of stores selling all types of AlCoders brand products has been created in Uzbekistan. In 2023, a network of more than 20 stores was introduced in the cities of Tashkent, Bukhara, Namangan, Andijan, Jizzakh, Kokand. There are large branches in the cities: Bukhara, Namangan.",
        about_3_1: "Quality products",
        about_3_2:
          "AlCoders invests heavily in modern product development, high efficiency, and the potential of production facilities. AlCoders constantly optimizes its products to quickly respond to the changing demand for related products in global markets. AlCoders products, meeting world standards, are known in 40 major countries of the world. All products have international certificates.",
        about_4_1: "Our employees",
        about_5_1: "Our advantages",
        about_5_2: "High quality",
        about_5_3: "European quality",
        about_5_4: "International standards",
        about_5_5: "Laboratory tests",
        about_5_6: "High warranty",
        about_53_7: "Product warranty",
        about_5_8: "Quality control",
        about_5_9: "Seminar training",
        about_6_1: "Our partners",
        // Biz haqimizda oynasi tugadi
        catalog_1_1: "Category",
        // Katalog tugadi
        application_1_1:
          ": Do you have additional questions? Do you want to know more about the company? Do you want to become an official dealer? Are you interested in our products? Then contact us. And we are always ready to work with you!",
        application_1_2: "Connect with us",
        application_1_3: "Your name",
        application_1_4: "Your phone number",
        application_1_5: "Enter your message",
        application_1_6: "SEND",
        // Zayafka qoldrish umimiy
        product_1_1: "Name:",
        product_1_2: "Kode:",
        product_1_3: "Diameter:",
        product_1_4: "Inner diameter:",
        product_1_5: "Inner length:",
        product_1_6: "Outer length:",
        product_1_7: "Size:",
        product_1_8: "Quantity per pack:",
        product_1_9: "Cost:",
        product_1_10: "Information:",
        product_2_1: "Similar products",
        // mahsulot oynasi tugadi
        news_1_1: "Other news",
        // News tugadi
        branches_1_1: "Addresses of official dealer stores and branches",
        //Bozning firyalar tugadi
        firyal_1_1: "Location:",
        firyal_1_2: "Orientation:",
        firyal_1_3: "Work time:",
        firyal_1_4: "Phone number:",
        firyal_1_5: "Email:",
        firyal_1_6: "Location : ",
        firyal_1_7: "Additional phone number: ",

        firyal_2_1: "Connect with us",
        firyal_2_2: "Your name",
        firyal_2_3: "Your phone number",
        firyal_2_4: "Enter your message",
        firyal_2_5: "SEND",
        // Firyal tugadi
        advantages_1_1:
          "Crafted from top-tier class A raw materials, all PPR products excel in creating impeccable connections during the soldering process of pipes and fittings. The use of premium materials guarantees unparalleled results, reinforcing the reliability and performance of our products in various applications.",
        advantages_1_2:
          "Our metal goods are meticulously crafted from premium European raw materials using state-of-the-art equipment and cutting-edge European techniques. This dedication ensures the production of high-quality items that adhere to international standards, reflecting both excellence and innovation in every product.",
        advantages_1_3:
          "All manufactured products have the necessary international standard certificates confirming their safety and high quality.",
        advantages_1_4:
          "Within every production sector, a dedicated laboratory conducts thorough testing of samples from each batch. Additionally, an accredited independent laboratory rigorously examines all products. This dual-testing approach guarantees the utmost quality, affirming our commitment to delivering consistently reliable and certified goods to our customers.",
        advantages_1_5:
          "All manufactured products are backed by guarantees provided by reputable insurance companies. Our metal products come with a warranty of up to 10 years, and our polypropylene products come with an impressive 50-year warranty. In particular, polypropylene pipes and fittings come with an extensive 50-year warranty, reflecting our unwavering commitment to durability and customer satisfaction.",
        advantages_1_6:
          "Our dedicated service department handles warranty inquiries effectively. In instances of property damage attributed to product faults, we offer comprehensive compensation of up to 100%. This underscores our commitment to addressing concerns promptly and ensuring our customers' satisfaction, reflecting our steadfast commitment to quality and accountability.",
        advantages_1_7:
          "We maintain a consistent, collaborative partnership with engineering firms and installers to enhance product excellence and foster innovation. This close collaboration fuels ongoing product development, ensuring our offerings remain at the forefront of quality and diversity. Our commitment to progress is reflected in our dynamic engagement with industry professionals.",
        advantages_1_8:
          "We maintain ongoing collaboration with engineering companies and installers to improve product quality and stimulate innovation. This close collaboration contributes to the continuous development of products, ensuring that our offerings remain at the forefront of quality and range. Our commitment to progress is reflected in our dynamic interaction with industry professionals.",
        advantages_1_9: "Contact us",
        // Afzaliklar tugadi.

        //footer
        footer_1_1:
          "AlCoders   high-quality products for modern heating and water supply systems.",
        footer_1_2: "Useful Pages",
        footer_1_3: "Contact Us",

        manzil_name:
          "Tashkent city, Almazor district, street Shiroq, 2 (Destination - Chukursay building market)",

        about_2_3: "Employees",
        about_2_4: "Products",
        about_2_5: "Factories",
        about_2_6: "States",

        sent_message_succues: "Your message has been sent successfully",
        sent_message_fail: "Your message has not been sent",
        sent_message_error: "There was an error sending your message",

        xato: "Error",
        loading: "Loading ...",
        no_product: "Products are not available.",
        no_category: "There are no categories.",
        muallif: "Copyright ",
      },
    },
  },
});

export default i18n;
