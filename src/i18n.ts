import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Found: "We found",
      FoundCourses: "course available for you",
      FoundCourses_plural: "course available for you",
      "Welcome to React": "Welcome to React and react-i18next",
      Home: "Home",
      Courses: "Courses",
      Courses_plural: "Course",
      Tutors: "Tutors",
      "Contact Us": "Contact Us",
      Lesson: "Lesson",
      Lesson_plural: "Lessons",
      Topic: "Lesson",
      Topic_plural: "Lessons",
      Student: "Student",
      Student_plural: "Students",
      Title: "Title",
      StudentsEnrolled: "Students Enrolled",
      playVideo: "Play video",
      Image: "Image",
      Video: "Video",
      H5P: "Interactive element",
      RichText: "Text",
      OEmbed: "Inserted Element",
      "Buy now": "Buy now",
      RecentCourses: "Recent courses",
      Pages: "Pages",
      Homepage: {
        heading: "Digital Wellbeing",
        headingText: `Modern information and communication technologies have changed the way we live and function forever. Learn how to take control of them to reach their full potential. It's up to you to have power over them, not over you.`,
        joinFree: "Join For Free",
      },
      OrdersPage: {
        MyOrders: "My Orders",
        Price: {
          Subtotal: "Subtotal",
          Tax: "Tax",
          Total: "Total",
        },
      },
      PaymentsPage: {
        MyPayments: "My payments",
        TableCols: {
          OrderId: "ORDER ID",
          PaymentId: "PAYMENT ID",
          Created: "CREATED",
          Price: "PRICE",
          Items: "Items",
        },
        PaymentStatus: {
          new: "New",
          paid: "Paid",
        },
      },
      CourseProgram: {
        TopicAttachment: "Topic attachments",
      },
    },
  },
  pl: {
    translation: {
      Student: "Student",
      Student_plural: "Studentów",
      Topic: "Lekcja",
      Topic_plural: "Lekcje",
      Lesson: "Moduł",
      Lesson_plural: "Moduły",
      FREE: "DARMOWY",
      Found: "Znaleźliśmy",
      FoundCourses: "kurs dostępny dla Ciebie",
      FoundCourses_plural: "kursów dostępnych dla Ciebie",
      Home: "Strona główna",
      Courses: "Kursy",
      Courses_plural: "Kurs",
      Tutors: "Instruktorzy",
      Tutor: "Instruktor",
      "Contact Us": "Kontakt",
      "Welcome to React": "Bienvenue à React et react-i18next",
      "Sort By": "Sortuj według",
      Title: "Tytuł",
      "Price: low to high": "Cena: od najwyzszej",
      "Price: high to low": "Cena: od najnizszej",
      "All Categories": "Wszystkie kategorie",
      "All Tutors": "Wszyscy Instruktorzy",
      "Search for": "Szukaj",
      Search: "Szukaj",
      Categories: "Kategorie",
      "Popular Tags": "Tagi",
      Preview: "Podgląd",
      Category: "Kategoria",
      StudentsEnrolled: "Ilość słuchaczy",
      "Last Updated": "Ostatnia aktualizacja",
      Summary: "Konspekt Kursu",
      "Course Program": "Program Kursu",
      Description: "Opis",
      "Meet Your Instructors": "Autor Kursu",
      RichText: "Tekst",
      Video: "Wideo",
      "Attend to Course": "Uruchom kurs",
      "Course Preview": "Zajawka Kursu",
      Duration: "Czas Trwania",
      Language: "Język",
      Level: "Poziom",
      Dostęp: "Access",
      Lifetime: "Dozywotni",
      "Add to Cart": "Dodaj do koszyka",
      "Back to website": "Wróć do strony głównej",
      "Next Topic": "Następna lekcja",
      "Buy now": "Kup teraz",
      "Buy Course": "Kup kurs",
      "Preview course for free": "Podgląd kursu za darmo",
      "change font size": "zmień wielkość tekstu",
      "prev topic": "poprzedni moduł",
      "next topic": "następny moduł",
      next: "Następny",
      prev: "Poprzedni",
      playVideo: "Odtwórz wideo",
      Image: "Obraz",
      H5P: "Element interaktywny",
      OEmbed: "Element wstawiony",
      Pages: "Strony",
      RecentCourses: "Ostatnie kursy",
      Homepage: {
        heading: "Cyfrowy Dobrostan",
        headingText: `Nowoczesne technologie informacyjno-komunikacyjne na zawsze
        zmieniły sposób, w jaki żyjemy i funkcjonujemy. Naucz się, jak
        przejąć nad nimi kontrolę, aby w pełni wykorzystać ich
        potencjał. To Ty masz mieć nad nimi władzę, a nie one nad Tobą.`,
        joinFree: "Dołącz bezpłatnie",
      },
      OrdersPage: {
        MyOrders: "Moje zamówienia",
        Price: {
          Subtotal: "Suma",
          Tax: "Podatek",
          Total: "Koszt całkowity",
        },
      },
      PaymentsPage: {
        MyPayments: "Moje płatności",
        TableCols: {
          OrderId: "ID ZAMÓWIENIA",
          PaymentId: "ID Płatności",
          Created: "Utworzono",
          Price: "Cena",
          Items: "Kursy",
        },
        PaymentStatus: {
          new: "Nowe",
          paid: "Opłacone",
        },
      },
      CourseProgram: {
        TopicAttachment: "Załączniki lekcji",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    supportedLngs: ["pl", "en"],
    fallbackLng: "pl",
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
