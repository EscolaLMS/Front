import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources as ComponentTranslations } from "@escolalms/components/lib/styleguide/i18n";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      ...ComponentTranslations.en.translation,
      Show: "Show",
      Agenda: "Agenda",
      ReadAll: "Read all",
      HowItWorks: "How it works",
      "Access from": "Access from",
      "Access to": "Access to",
      Access: "Access",
      StartNow: "Start now",
      "Add to Cart": "Add to Cart",
      "All Categories": "All categories",
      "All Tutors": "All tutors",
      "Go to the course": "Go to the course",
      "Go to the main page": "Go to the main page",
      Authentication: "Authentication",
      Back: "Back",
      "Back to website": "Back to website",
      "Buy Course": "Buy Course",
      "Buy now": "Buy now",
      Categories: "Categories",
      Category: "Category",
      "change font size": "change font size",
      Confirm: "Confirm",
      "Contact Us": "Contact Us",
      "Course Preview": "Course Preview",
      "Course Program": "Course Program",
      "Checkout Course": "Checkout Course",
      Courses: "Courses",
      Consultations: "Consultations",
      DateAdded: "Date added",
      Description: "Description",
      Duration: "Duration",
      Found: "We found",
      FoundCourses_one:
        "We found <strong>{{count}}</strong> course available for you",
      FoundCourses_other:
        "We found <strong>{{count}}</strong> courses available for you",
      FREE: "FREE",
      group_access: "Group access",
      H5P: "Interactive element",
      Home: "Home",
      hours_to_complete: "Hours to complete",
      Image: "Image",
      Language: "Language",
      "Last Updated": "Last Updated",
      Lesson_one: "Lesson",
      Lesson_other: "Lessons",
      LessonSummary: "Lesson summary",
      Level: "Level",
      Lifetime: "Lifetime",
      "Login to buy": "Login to buy",
      "Meet your instructor": "Meet your instructor",
      "next topic": "next topic",
      "Next Topic": "Next topic",
      next: "Next",
      NoCourses: "No courses found",
      NoCoursesYet: "You have no courses yet. Find one on ",
      OEmbed: "Inserted Element",
      Pages: "Pages",
      Password: "Password",
      playVideo: "Play video",
      "Popular Tags": "Popular Tags",
      "prev topic": "prev topic",
      prev: "Prev",
      "Preview course for free": "Preview course for free",
      Preview: "Preview",
      "Price: high to low": "Price: high to low",
      "Price: low to high": "Price: low to high",
      RecentCourses: "Recent courses",
      Register: "Register",
      RichText: "Text",
      "Search for": "Search for",
      Send: "Send",
      SortBy: "Sort by",
      Students: "students",
      Student_one: "Student",
      Student_other: "Students",
      StudentsEnrolled: "Students Enrolled",
      Summary: "Summary",
      Tags: "Tags",
      Title: "Title",
      Topic_one: "Topic",
      Topic_other: "Topics",
      TopicSummary: "Topic summary",
      Tutor: "Tutor",
      Tutors: "Tutors",
      Video: "Video",
      "Video Coursers": "Video Coursers",
      "No Videos": "No Videos",
      Payment: "Payment",
      "Card number": "Card number",
      "Name on card": "Name on card",
      "Expiration date": "Expiration date",
      "with Stripe": "with Stripe",
      "stripe testing card numbers": "stripe testing card numbers",
      Eg: "eg",
      Use: "Use",
      Close: "Close",
      Pay: "Pay",
      Download: "Download",
      CoursePreviewNavbar:
        "This is course preview. Back to app, or purchase this course.",
      CoursesLength: "{{count}} courses",
      CoursesLength_few: "{{count}} courses",
      CoursesLength_many: "{{count}} courses",
      CoursesLength_one: "{{count}} course",
      ShowCustomizer: "Show theme customizer",
      HideCustomizer: "Hide theme customizer",
      CoursePage: {
        ErrorOccurred: "Error occurred",
        HeroBtnText: "See more",
        Level: "Level",
        StartDate: "Start date",
        CourseCategory: "Course category",
        Duration: "Duration",
        CompaniesTitle: "Companies that offer this course to their employees",
        CourseDescriptionTitle: "Course description",
        CourseRatingsTitle: "Course ratings",
        CourseRatingsEmpty: "This course has not been rated yet.",
        RelatedCoursesTitle: "Related courses",
        InterestTitle: "Maybe it will interest you",
        GoToCheckout: "Go to checkout",
        NotStarted: "Not started",
        "30Days": "30 day money return guarantee",
        ContentToDownload: "Content to download",
        SmartphoneAccess: "Access on smartphone and tablet",
        Certificate: "Certificate of completion",
        Finished: "Finished",
        Of: "of",
        IsFinished: "The course is over",
        Lessons: "Lessons",
        FinishToGetCertificate: "Finish to get certificate",
        MyProgress: "My progress",
        ToSeeProgress: "to see your progress",
        UnavailableCourse: "This course is unavailable to buy",
        AvarageRating: "Average rating of Jan Kamiński's training courses",
        Satisfaction: "satisfaction or your money back *",
        Guarantee: "Guaranteed",
        Recommends: "recommend training of Jan Kamiński",
        SeeOtherCourses: "See other courses",
        BackToCourse: "Go back to the course",
        Language: "Language",
        Students: "Students",
        Teacher: "Teacher",
        Login: "Log in",
      },
      Cart: {
        UseTestCard: "Use test cards for Stripe",
        LearnMore: "Learn more",
        Cart: "Cart",
        PayWithStripe: "Pay with stripe",
        ChoosePaymentMethod: "Choose payment method",
        FreeCheckout: "End for free",
        Interest: "May be of interest to you",
        CartIsEmpty: "Cart is empty",
        CartSummary: "Cart total",
        Summary: "Summary",
        FullName: "Full name",
        RememberCard: "Remember card",
        YourCart: "Your cart",
        CreditCard: "Credit card",
        EmptyCartTitle: "Your cart is empty",
        EmptyCartText: "Add courses to your cart and checkout",
        EmptyCartBtnText: "Browse courses",
        EmptyNameWarning: "Enter your full name",
      },
      CourseProgram: {
        TopicAttachment: "Topic attachments",
        ShowAgenda: "Show agenda",
        NoProgram: "No program",
        NoTopic: "No topic",
        FinishTitle: "Congratulations! You have finished the course!",
        FinishSubtitle: "Go to your profile or browse other courses.",
      },
      ConsultationsPageMeta: "Consultations",
      ConsultationPage: {
        Book: "Book your consultation",
        SidebarHeader: "Online consultation with your expert",
        IsFinished: "The consultation is over",
        GoToCheckout: "Go to checkout",
        BuyConsultation: "Buy consultation",
        SidebarFeature1: "Meet one-on-one with your expert",
        SidebarFeature2: "Ask whatever you want",
        SidebarFeature3: "Another value from meeting",
        ByFields: "By fields",
        Alphabetically: "Alphabetically",
        Join: "Join",
        Finished: "Finished",
      },
      Warning: "Warning",
      "I'm aware": "I'm aware",
      EmailActivation: {
        Title: "Please check your email to complete the registration process",
        Text: `We sent a message to the address **{{email}}** z
        link to activate your account.
        Go to e-mail and confirm your e-mail address.`,
        HelpText: `**You did not receive the e-mail?**
- Check the SPAM folder
- Check that you have entered your e-mail address correctly
- We cannot deliver the message to your address (usually via firewall or mail filters)`,
        RegisterAgain: "Try registering again",
      },
      CoursesPage: {
        Category: "Category",
        Free: "Free",
        All: "All",
        Type: "Type",
        Courses: "Courses",
        Search: "Search courses",
      },
      EventsPage: {
        Events: "Stationary events",
      },
      TutorPage: {
        Courses: "Tutor Courses",
        TutorCoursesEmpty: "No courses",
      },
      Homepage: {
        HeroBtnText: "Check out our trainings",
        CoursesSlider1Title: "The best training for you",
        CoursesSlider2Title: "Last added",
        AwardedCoursesTitle: "Learning soft basics",
        AwardedCoursesBtnText: "See more training",
        CategoriesTitle: "See training categories",
        CategoryBtnText: "Read more",
      },
      LoginPage: {
        RememberMe: "Remember me",
        Lost: "Lost your password?",
        Reset: "Reset your password",
        TempLogin: "For this demo you can use the following credentials",
        Username: "Username",
        TempEmail1: "This demo is using fake email service",
        TempEmail2:
          "Use the following credentials to check what emails are being sent.",
        ForgotSuccess: "We send a email for password reset",
      },
      MyProfilePage: {
        Avatar: "Select file to replace Avatar",
        Archived: "Archived",
        Upcoming: "Upcoming",
        InvoiceTitle: "Invoice for order no",
        Invoice: "Invoice",
        OrdersEmpty: "You have not placed any orders yet",
        MyCourses: "My courses",
        MyTasks: "My tasks",
        Ascending: "Ascending",
        Descending: "Descending",
        Personal: "Personal",
        Incoming: "Incoming",
        ShowDone: "Show done",
        HideDone: "Hide done",
        OrdersHistory: "Orders history",
        Notifications: "Notifications",
        Logout: "Logout",
        FinishedCourses: "finished courses",
        TotalCertificates: "total certificates",
        MyProgress: "My progress",
        YourAccount: "Your account",
        EmptyCoursesText:
          "You don't have any courses yet, but thanks to our offer you can start learning today!",
        EmptyCoursesBtnText: "Choose a course for yourself",
        EmptyCoursesTitle: "Start your development",
        EmptyCertificates:
          "Here you will see your certificates after completed courses",
        RateCourse: "Rate this course",
        ShowMore: "Show more",
        MyCertificates: "My certificates",
        MyConsultations: "My consultations",
        ALlCourses: "All courses",
        InProgress: "In progress",
        Planned: "Planned",
        Finished: "Finished",
        EditData: "Edit data",
        MyStationaryEvents: "My stationary events",
        EmptyEventTitle: "Start your development",
        EmptyEventText:
          "You don't have any stationary events yet, but thanks to our offer you can start learning today!",
        EmptyEventsBtnText: "Choose a stationary event for yourself",
      },
      Menu: {
        Browse: "Browse",
        HomePage: "Home Page",
        Courses: "Courses",
        Tutors: "Tutors",
        Me: "My Menu",
        Profile: "Profile",
        Notifications: "Notifications",
        LoginRegister: "Login / Register",
        Language: "Language",
        Orders: "Orders",
        Consultations: "Consultations",
        Events: "Stationary events",
      },
      Footer: {
        HomePage: "Home Page",
        Courses: "Courses",
        Cart: "Cart",
        PoweredBy: "Powered by",
        UserProfile: "Your account",
      },
      Navbar: {
        MyProfile: "My Profile",
        MyCourses: "My Courses",
        MyCertificates: "My Certificates",
        MyMattermostChannels: "My Mattermost Channels",
        MyOrders: "My Orders",
        MyTasks: "My Tasks",
        MyPayments: "My Payments",
        EditProfile: "Edit data",
        Logout: "Logout",
        MyStationaryEvents: "Stationary events",
      },
      Custom404Page: {
        NotFound: "Error 404 : Page Not Found",
        Info: "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
      },
      Notifications: {
        EscolaLmsTopicFinishedTemplateEvent: "Topic finished",
        NoNotifications: "You have no notification",
        UserLogged: "User logged in",
        list: "List",
        PermissionRoleRemoved: "Permission role removed",
        PermissionRoleChanged: "Permission role changed",
        CartOrderPaid: "Cart order paid",
        CartOrderSuccess: "Order success",
        PdfCreated: "PDF created",
        SettingPackageConfigUpdated: "Setting package config updated",
        CourseTutorAssigned: "Course tutor assigned",
        CourseStarted: "Course started",
        // NEW TRANLATIONS
        // STATIONARY EVENTS
        "EscolaLms\\StationaryEvents\\Events\\StationaryEventAssigned":
          "You are assigned to stationary event {{name}}",
        "EscolaLms\\StationaryEvents\\Events\\StationaryEventUnassigned":
          "You are unassigned from stationary event {{name}}",
        "EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorAssigned":
          "You are assigned to stationary event {{name}} as author",
        "EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorUnassigned":
          "You are unassigned from stationary event {{name}} as author",
        // CART
        "EscolaLms\\Cart\\Events\\AbandonedCartEvent": "Cart cleared",
        "EscolaLms\\Cart\\Events\\OrderCancelled": "Order canceled",
        "EscolaLms\\Cart\\Events\\OrderCreated": "Order created",
        "EscolaLms\\Cart\\Events\\OrderPaid": "Order {{name}} paid",
        "EscolaLms\\Cart\\Events\\ProductableAttached":
          "Productable {{name}} attached",
        "EscolaLms\\Cart\\Events\\ProductableDetached":
          "Productable {{name}} detached",
        "EscolaLms\\Cart\\Events\\ProductAddedToCart":
          "Product {{name}} added to cart",
        "EscolaLms\\Cart\\Events\\ProductAttached": "Product {{name}} attached",
        "EscolaLms\\Cart\\Events\\ProductBought": "Product {{name}} bought",
        "EscolaLms\\Cart\\Events\\ProductDetached": "Product {{name}} detached",
        "EscolaLms\\Cart\\Events\\ProductRemovedFromCart":
          "Product {{name}} removed from cart",
        // PAYMENT
        "EscolaLms\\Payments\\Events\\PaymentCancelled":
          "Payment for {{name}} product for the amount {{amount}} zł cancelled",
        "EscolaLms\\Payments\\Events\\PaymentFailed":
          "Payment for {{name}} product for the amount {{amount}} zł failed",
        "EscolaLms\\Payments\\Events\\PaymentRegistered":
          "Payment for the amount {{amount}} zł reqistered",
        "EscolaLms\\Payments\\Events\\PaymentSuccess":
          "Payment for {{name}} product for the amount {{amount}} zł success",
        // COURSE
        "EscolaLms\\Courses\\Events\\CourseAccessFinished":
          "You don't have access to course {{name}}",
        "EscolaLms\\Courses\\Events\\CourseAccessStarted":
          "You have access to course {{name}}",
        "EscolaLms\\Courses\\Events\\CourseAssigned":
          "Course {{name}} assigned to you",
        "EscolaLms\\Courses\\Events\\CourseDeadlineSoon":
          "Course {{name}} finishing soon {{date}}",
        "EscolaLms\\Courses\\Events\\CoursedPublished":
          "Course {{name}} published",
        "EscolaLms\\Courses\\Events\\CourseFinished":
          "Course {{name}} finished",
        "EscolaLms\\Courses\\Events\\CourseStarted": "Course {{name}} started",
        "EscolaLms\\Courses\\Events\\CourseStatusChanged":
          "Status of course {{name}} changed",
        "EscolaLms\\Courses\\Events\\CourseTutorAssigned":
          "You are assigned as tutor to course {{name}}",
        "EscolaLms\\Courses\\Events\\CourseTutorUnassigned":
          "You are unassigned as tutor to course {{name}}",
        "EscolaLms\\Courses\\Events\\CourseUnassigned":
          "You are assigned to course {{name}}",
        "EscolaLms\\Courses\\Events\\TopicFinished":
          "Topic of course {{name}} finished",
        // TOPIC
        "EscolaLms\\TopicTypes\\Events\\TopicTypeChanged":
          "Topic {{name}} changed",
        // CONSULTATIONS
        "EscolaLms\\Consultations\\Events\\ApprovedTerm":
          "Term approved at {{date}}",
        "EscolaLms\\Consultations\\Events\\ApprovedTermWithTrainer":
          "Term approved with trainer at {{date}}",
        "EscolaLms\\Consultations\\Events\\ChangeTerm":
          "Term changed at {{date}}",
        "EscolaLms\\Consultations\\Events\\RejectTerm":
          "Term at {{date}} rejected",
        "EscolaLms\\Consultations\\Events\\RejectTermWithTrainer":
          "Term with trainer at {{date}} rejected",
        "EscolaLms\\Consultations\\Events\\ReminderAboutTerm":
          "Reminder! Term at {{date}}",
        "EscolaLms\\Consultations\\Events\\ReminderTrainerAboutTerm":
          "Reminder! Term at {{date}}",
        "EscolaLms\\Consultations\\Events\\ReportTerm":
          "User {{user}} report new term {{date}} for consultation {{name}}",
        // WEBINAR
        "EscolaLms\\Webinar\\Events\\ReminderAboutTerm":
          "Reminder! Webinar at {{date}}",
        "EscolaLms\\Webinar\\Events\\WebinarTrainerAssigned":
          "Webinar trainer assigned",
        "EscolaLms\\Webinar\\Events\\WebinarTrainerUnassigned":
          "Webinar trainer unassigned",
        // VIDEO
        ProcessVideoStarted: "Video process started",
        ProcessVideoFailed: "Video process failed",
        // CSV USER
        "EscolaLms\\CsvUsers\\Events\\EscolaLmsImportedNewUserTemplateEvent":
          "Imported new user template",
        // UNLOGGED USER
        AssignToProduct: "Unlogged user assigned to product",
        AssignToProductable: "Unlogged user unassigned to product",
        // FILES
        FileDeleted: "File deleted",
        FileStored: "File stored",
        // SETTINGS
        "EscolaLms\\Settings\\Events\\SettingPackageConfigUpdated":
          "Setting package config updated",
        // AUTH
        "EscolaLms\\Auth\\Events\\AccountBlocked": "Account blocked",
        "EscolaLms\\Auth\\Events\\AccountConfirmed": "Account confirmed",
        "EscolaLms\\Auth\\Events\\AccountDeleted": "Account deleted",
        "EscolaLms\\Auth\\Events\\AccountMustBeEnableByAdmin":
          "Account must be enable by admin",
        "EscolaLms\\Auth\\Events\\AccountRegistered": "Account registered",
        "EscolaLms\\Auth\\Events\\ForgotPassword": "Forgot password",
        "EscolaLms\\Auth\\Events\\Login": "Successfully logged in",
        "EscolaLms\\Auth\\Events\\Logout": "Logout",
        "EscolaLms\\Auth\\Events\\PasswordChanged": "Password changed",
        "EscolaLms\\Auth\\Events\\ResetPassword": "Reset password",
        "EscolaLms\\Auth\\Events\\UserAddedToGroup":
          "You have been added to the group",
        "EscolaLms\\Auth\\Events\\UserRemovedFromGroup":
          "You have been removed from the group",
        AccountConfirmed: "Account confirmed",
        ProductableAttached: "Productable attached???",
        ProductBought: "Product bought",
        ProductAttached: "Product attached",
        OrderCreated: "Order created",
      },
      Header: {
        Register: "Register",
        Login: "Log in",
      },
      AcceptCheckbox: "By checking this fields you accept",
      PrivacyPolicy: "Privacy Policy",
      TermsOfService: "Terms of Service",
      EmailWasVerified: "Email has been verified.",
      RateCourse: {
        ThankYou: "Thank you for rating this course",
        ThankYouMessage: "Your rating has been saved",
      },
      Filters: {
        Category: "Category",
        Search: "Search",
      },
      EventPage: {
        IsFinished: "The stationary event is over",
        GoToCheckout: "Go to checkout",
        NotStarted: "Not started",
        UnavailableEvent: "This event is unavailable to buy",
        "30Days": "30 day money return guarantee",
      },
    },
  },
  pl: {
    translation: {
      ...ComponentTranslations.pl.translation,
      Show: "Zobacz",
      Agenda: "Program",
      ReadAll: "Odznacz wszystkie",
      Warning: "Uwaga",
      HowItWorks: "Jak to działa",
      UnexpectedError: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie",
      StartNow: "Zacznij teraz",
      Students: "kursantów",
      Lessons: "lekcji",
      "Access from": "Dostęp od",
      "Access to": "Dostęp do",
      Access: "Dostęp",
      "Add to Cart": "Dodaj do koszyka",
      "All Categories": "Wszystkie kategorie",
      "All Tutors": "Wszyscy Instruktorzy",
      "Go to the course": "Idź do kursu",
      "Go to the main page": "Idź do strony głównej",
      Authentication: "Uwierzytelnianie",
      Back: "Wróć",
      "Back to website": "Wróć do strony głównej",
      "Buy Course": "Kup kurs",
      "Buy now": "Kup teraz",
      Categories: "Kategorie",
      "Checkout Course": "Zamówienie kursu",
      Category: "Kategoria",
      "change font size": "zmień wielkość tekstu",
      Confirm: "Potwierdź",
      Consultations: "Konsultacje",
      Consultation: "Konsultacja",
      "Contact Us": "Kontakt",
      "Course Preview": "Zajawka Kursu",
      "Course Program": "Program Kursu",
      Courses: "Kursy",
      DateAdded: "Data dodania",
      Description: "Opis",
      Duration: "Czas Trwania",
      Found: "Znaleźliśmy",
      FoundCourses_few:
        "Znaleźliśmy <strong>{{count}}</strong> kursy dostępne dla Ciebie",
      FoundCourses_many:
        "Znaleźliśmy <strong>{{count}}</strong> kursów dostępnych dla Ciebie",
      FoundCourses_one:
        "Znaleźliśmy <strong>{{count}}</strong> kurs dostępny dla Ciebie",
      FREE: "DARMOWY",
      group_access: "Dostęp grupowy",
      H5P: "Element interaktywny",
      Home: "Strona główna",
      hours_to_complete: "Godziny do ukończenia",
      Image: "Obraz",
      Language: "Język",
      "Last Updated": "Ostatnia aktualizacja",
      Lesson_few: "Lekcje",
      Lesson_many: "Lekcji",
      Lesson_one: "Lekcja",
      LessonSummary: "Podsumowanie lekcji",
      Level: "Poziom",
      Lifetime: "Dożywotni",
      "Login to buy": "Zaloguj się by kupić",
      "Meet your instructor": "Poznaj swojego nauczyciela",
      "Next Topic": "Następna lekcja",
      "next topic": "następny moduł",
      next: "Następny",
      NoCourses: "Nie znaleziono kursów",
      NoCoursesYet: "Nie masz kursów. Znajdź je na ",
      OEmbed: "Element wstawiony",
      Pages: "Strony",
      Password: "Hasło",
      playVideo: "Odtwórz wideo",
      "Popular Tags": "Popularne tagi",
      "prev topic": "poprzedni moduł",
      prev: "Poprzedni",
      "Preview course for free": "Podgląd kursu za darmo",
      Preview: "Podgląd",
      "Price: high to low": "Cena: od najniższej",
      "Price: low to high": "Cena: od najwyższej",
      RecentCourses: "Ostatnie kursy",
      Register: "Rejestracja",
      RichText: "Tekst",
      "Search for": "Szukaj",
      Send: "Wyślij",
      SortBy: "Sortuj według",
      Student_few: "Studentów",
      Student_many: "Studentów",
      Student_one: "Student",
      StudentsEnrolled: "Ilość słuchaczy",
      Summary: "Konspekt Kursu",
      Tags: "Tagi",
      Title: "Tytuł",
      Topic_few: "Tematy",
      Topic_many: "Tematów",
      Topic_one: "Temat",
      TopicSummary: "Podsumowanie tematu",
      Tutor: "Instruktor",
      Tutors: "Instruktorzy",
      Video: "Wideo",
      "Video Coursers": "Kursy wideo",
      "No Videos": "Brak wideo",
      Payment: "Płatność",
      "Card number": "Numer karty",
      "Name on card": "Nazwa na karcie",
      "Expiration date": "Data ważności",
      "with Stripe": "przez Stripe",
      "stripe testing card numbers": "stripe testowy numer karty",
      Eg: "np.",
      Use: "Użyj",
      Close: "Zamknij",
      Pay: "Zapłać",
      Download: "Pobierz",
      LoginAndRegister: "Logowanie i rejestracja",
      CoursesLength: "{{count}}kursów",
      CoursesLength_few: "{{count}} kursy",
      CoursesLength_many: "{{count}} kursów",
      CoursesLength_one: "{{count}} kurs",
      ShowCustomizer: "Pokaż edytor motywu",
      HideCustomizer: "Ukryj edytor motywu",
      CoursePreviewNavbar:
        "To jest podgląd kursu. Wróć do aplikacji lub kup ten kurs.",
      "I'm aware": "Tak, wiem",
      EmailActivation: {
        Title: "Aby dokończyć proces rejestracji sprawdź swoją pocztę",
        Text: `Wysłaliśmy wiadomość na adres **{{email}}** z
          linkiem do aktywacji Twojego konta.
          Przejdź do poczty i potwierdź swój adres e-mail.`,
        HelpText: `**Nie dostałeś maila?**
  - Sprawdź folder SPAM
  - Sprawdź czy poprawnie wpisałeś adres e-mail
  - Nie możemy dostarczyć wiadomości na Twój adres (zazwyczaj  przez firewalla lub filtry na poczcie)`,
        RegisterAgain: "Wpisz adres ponownie",
      },
      CoursePage: {
        ErrorOccurred: "Wystąpił błąd",
        HeroBtnText: "Zobacz więcej",
        Level: "Poziom trudności",
        StartDate: "Termin rozpoczęcia",
        CourseCategory: "Kategoria szkolenia",
        Duration: "Czas trwania",
        CompaniesTitle: "Firmy które oferują ten kurs swoim pracownikom",
        CourseDescriptionTitle: "Opis szkolenia",
        CourseRatingsTitle: "Opinie studentów",
        CourseRatingsEmpty: "Ten kurs nie został jeszcze oceniony.",
        RelatedCoursesTitle: "Powiązane szkolenia",
        InterestTitle: "Może Cię zainteresuje",
        GoToCheckout: "Do kasy",
        NotStarted: "Kurs się jeszcze nie rozpoczął",
        "30Days": "Gwarantowane 30 dni na zwrot",
        ContentToDownload: "Materiały szkoleniowe do pobrania",
        SmartphoneAccess: "Dostęp na smartphone i tablet",
        Certificate: "Certyfikat ukończenia",
        Finished: "Ukończono",
        Of: "z",
        IsFinished: "Kurs się zakończył",
        Lessons: "Lekcji",
        FinishToGetCertificate: "Ukończ kurs aby zdobyć certyfikat",
        MyProgress: "Moje postępy",
        ToSeeProgress: "aby widzieć postępy",
        UnavailableCourse: "Kurs niemożliwy do kupienia",
        AvarageRating: "Średnia ocena szkoleń Jana Kamińskiego",
        Satisfaction: "zadowolenia lub zwrot pieniędzy*",
        Guarantee: "Gwarancja",
        Recommends: "Poleca szkolenia Jana Kaminskiego",
        SeeOtherCourses: "Zobacz inne kursy",
        BackToCourse: "Powrót do kursu",
        Language: "Język",
        Students: "Uczniów",
        Teacher: "Nauczyciel",
        Login: "Zaloguj się",
      },
      Cart: {
        UseTestCard: "Użyj testowej karty Stripe",
        LearnMore: "Sprawdź karty",
        Cart: "Koszyk",
        PayWithStripe: "Płać za pomocą stripe Checkout",
        ChoosePaymentMethod: "Wybierz metodę płatności",
        FreeCheckout: "Zakończ bezpłatnie",
        Interest: "Może Cię zainteresować",
        CartIsEmpty: "Koszyk jest pusty",
        CartSummary: "Suma koszyka",
        Summary: "Podsumowanie",
        FullName: "Imię i nazwisko",
        RememberCard: "Zapamiętaj kartę",
        YourCart: "Twój koszyk",
        CreditCard: "Karta kredytowa",
        EmptyCartTitle: "Twój koszyk jest pusty",
        EmptyCartText: "Dodaj kursy do koszyka",
        EmptyCartBtnText: "Przeglądaj kursy",
        EmptyNameWarning: "Podaj imię i nazwisko",
      },
      CourseProgram: {
        TopicAttachment: "Załączniki lekcji",
        ShowAgenda: "Pokaż agendę",
        NoProgram: "Lekcja nie istnieje",
        NoTopic: "Temat nie istnieje",
        FinishTitle: "Gratulacje! Ukończyłeś/aś kurs!",
        FinishSubtitle:
          "Przejdź do swojego profilu albo przeglądaj inne kursy.",
      },
      CoursesPage: {
        Category: "Kategoria",
        Free: "Darmowe",
        All: "Wszystkie",
        Type: "Typ szkolenia",
        Courses: "Kursy",
        Search: "Szukaj kursów",
      },
      EventsPage: {
        Events: "Wydarzenia stacjonarne",
      },
      ConsultationsPageMeta: "Konsultacje",
      ConsultationPage: {
        Book: "Umów spotkanie",
        SidebarHeader: "Konsultacja online z ekspertem",
        IsFinished: "Konsultacja się zakończyła",
        GoToCheckout: "Do kasy",
        BuyConsultation: "Kup konsultację",
        SidebarFeature1: "Spotkanie jeden na jeden",
        SidebarFeature2: "Zadaj pytania jakie chcesz",
        SidebarFeature3: "Kolejna wartość ze spotkania",
        ByFields: "Według dziedzin",
        Alphabetically: "Alfabetycznie",
        Join: "Dołącz",
        Finished: "Ukończono",
      },
      TutorPage: {
        Courses: "Kursy instruktorów",
        TutorCoursesEmpty: "Ten autor nie ma jeszcze żadnych kursów",
      },
      Homepage: {
        HeroBtnText: "Sprawdź nasze szkolenia",
        HeroText:
          "Witaj w platformie elearningowej Orange. Pomożemy Ci znaleźć najlepsze szkolenia",
        CoursesSlider1Title: "Najlepsze szkolenia dla Ciebie",
        CoursesSlider2Title: "Ostatnio dodane",
        AwardedCoursesTitle: "Nauka podstaw miękkich",
        AwardedCoursesBtnText: "Zobacz więcej szkoleń",
        CategoriesTitle: "Zobacz kategorie szkoleń",
        CategoryBtnText: "Zobacz",
      },
      LoginPage: {
        RememberMe: "Zapamietaj mnie",
        Lost: "Zapomniałeś hasła?",
        RPlaeset: "Zresetuj swoje hasło",
        TempLogin:
          "W tym demo możesz użyć następujących danych uwierzytelniających",
        Username: "Nazwa użytkownika",
        TempEmail1: "To demo używa fałszywej usługi e-mail.",
        TempEmail2:
          "Użyj poniższych danych uwierzytelniających, aby sprawdzić, jakie e-maile są wysyłane",
        ForgotSuccess:
          "Wysłaliśmy wiadomość e-mail z prośbą o zresetowanie hasła",
        ForgotSuccessStep2: "Twoje hasło zostało zmienione",
      },

      Menu: {
        Browse: "Przeglądaj",
        HomePage: "Strona Główna",
        Courses: "Kursy",
        Tutors: "Trenerzy",
        Me: "Moje",
        Profile: "Profil",
        Notifications: "Notifikacje",
        LoginRegister: "Logowanie / Rejestracja",
        Language: "Język",
        Orders: "Zamównienia",
        Consultations: "Konsultacje",
        Events: "Wydarzenia stacjonarne",
      },
      Footer: {
        HomePage: "Strona Główna",
        Courses: "Kursy",
        Cart: "Koszyk",
        PoweredBy: "Powered by",
        UserProfile: "Twój profil",
      },
      MyProfilePage: {
        InvoiceTitle: "Faktura za zamówienie nr",
        Invoice: "Rachunek",
        Archived: "Archiwalne",
        Upcoming: "Nadchodzące",
        OrdersEmpty: "Nie złożyłeś jeszcze żadnych zamówień",
        MyCourses: "Moje szkolenia",
        MyTasks: "Moje zadania",
        Ascending: "Rosnąco",
        Descending: "Malejąco",
        Personal: "Osobiste",
        Incoming: "Zewnętrzne",
        ShowDone: "Pokaż skończone",
        HideDone: "Ukryj skończone",
        OrdersHistory: "Historia zakupów",
        Notifications: "Powiadomienia",
        Logout: "Wyloguj",
        FinishedCourses: "ukończonych kursów",
        TotalCertificates: "zdobytych certyfikatów",
        MyProgress: "Moje postępy",
        YourAccount: "Twoje konto",
        EmptyCoursesText:
          " Nie masz jeszcze żadnych kursów, ale dzięki naszej ofercie już dziś możesz zacząć naukę!",
        EmptyCoursesBtnText: " Wybierz kurs dla siebie",
        EmptyCoursesTitle: "Rozpocznij swój rozwój",
        EmptyCertificates:
          "Tu zobaczysz swoje certyfikaty po ukończonych kursach",
        RateCourse: "Oceń kurs",
        ShowMore: "Pokaż więcej",
        MyCertificates: "Moje certyfikaty",
        MyConsultations: "Moje konsultacje",
        ALlCourses: "Wszystkie kursy",
        InProgress: "W trakcie",
        Planned: "Zaplanowane",
        Finished: "Ukończone",
        EditData: "Edytuj dane",
        MyStationaryEvents: "Moje wydarzenia stacjonarne",
        EmptyEventTitle: "Rozpocznij swój rozwój",
        EmptyEventText:
          "Nie masz jeszcze żadnych wydarzeń stacjonarnych, ale dzięki naszej ofercie już dziś możesz zacząć naukę!",
        EmptyEventsBtnText: " Wybierz wydarzenie stacjonarne dla siebie",
      },
      Navbar: {
        MyProfile: "Mój Profil",
        MyCourses: "Moje Kursy",
        MyCertificates: "Moje Certyfikaty",
        MyMattermostChannels: "Moje Kanały Mattermost",
        MyOrders: "Moje zamówienia",
        MyTasks: "Moje zadania",
        MyPayments: "Płatności",
        EditProfile: "Edytuj dane",
        Logout: "Wyloguj",
        MyStationaryEvents: "Moje wydarzenia stacjonarne",
      },
      Custom404Page: {
        NotFound: "Error 404 : Nie znaleziono strony",
        Info: "Strona której szukasz może być usunięta albo zmienione jej nazwę albo jest czasowo niedostępna",
      },
      Notifications: {
        EscolaLmsTopicFinishedTemplateEvent: "Temat zakończony",
        NoNotifications: "Nie masz notyfikacji",
        UserLogged: "Użytkownik zalogowany",
        list: "Lista",
        PermissionRoleRemoved: "Uprawnienia usunięte",
        PermissionRoleChanged: "Uprawnienia zmienione",
        CartOrderPaid: "Zamówienie w koszyku opłacone",
        CartOrderSuccess: "Zamówienie zakończone",
        PdfCreated: "PDF stworzony",
        SettingPackageConfigUpdated: "Zaktualizowano konfigurację pakietu",
        CourseTutorAssigned: "Instruktor przypisany",
        CourseStarted: "Kurs rozpoczęty",
        // STATIONARY EVENT
        "EscolaLms\\StationaryEvents\\Events\\StationaryEventAssigned":
          "Zostałeś przypisany do wydarzenia stacjonarnego {{name}}",
        "EscolaLms\\StationaryEvents\\Events\\StationaryEventUnassigned":
          "Zostałeś wypisany z wydarzenia stacjonarnego {{name}}",
        "EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorAssigned":
          "Zostałeś przypisany do wydarzenia stacjonarnego {{name}} jako autor",
        "EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorUnassigned":
          "Zostałeś wypisany z wydarzenia stacjonarnego {{name}} jako autor",
        // CART
        "EscolaLms\\Cart\\Events\\AbandonedCartEvent": "Wyczyszczono koszyk",
        "EscolaLms\\Cart\\Events\\OrderCancelled": "Zamówienie anulowane",
        "EscolaLms\\Cart\\Events\\OrderCreated": "Zamówienie stworzone",
        "EscolaLms\\Cart\\Events\\OrderPaid": "Zamówienie {{name}} zapłacone",
        "EscolaLms\\Cart\\Events\\ProductableAttached":
          "Productable {{name}} attached",
        "EscolaLms\\Cart\\Events\\ProductableDetached":
          "Productable {{name}} detached",
        "EscolaLms\\Cart\\Events\\ProductAddedToCart":
          "Produkt {{name}} dodany do koszyka",
        "EscolaLms\\Cart\\Events\\ProductAttached":
          "Produkt {{name}} dołączony",
        "EscolaLms\\Cart\\Events\\ProductBought": "Produkt {{name}} zakupiony",
        "EscolaLms\\Cart\\Events\\ProductDetached":
          "Produkt {{name}} odłączony",
        "EscolaLms\\Cart\\Events\\ProductRemovedFromCart":
          "Produkt {{name}} usunięty z koszyka",
        // PAYMENT
        "EscolaLms\\Payments\\Events\\PaymentCancelled":
          "Płatność za produkty {{name}} na kwotę {{amount}} zł anulowana",
        "EscolaLms\\Payments\\Events\\PaymentFailed":
          "Błąd płatności za produkty {{name}} na kwotę {{amount}} zł",
        "EscolaLms\\Payments\\Events\\PaymentRegistered":
          "Płatność na kwotę {{amount}} zł zarejestrowana",
        "EscolaLms\\Payments\\Events\\PaymentSuccess":
          "Płatność za produkty {{name}} na kwotę {{amount}} zł udana",
        // COURSE
        "EscolaLms\\Courses\\Events\\CourseAccessFinished":
          "Nie masz dostępu do kursu {{name}}",
        "EscolaLms\\Courses\\Events\\CourseAccessStarted":
          "Masz dostęp do kursu {{name}}",
        "EscolaLms\\Courses\\Events\\CourseAssigned":
          "Kurs {{name}} został przypisany do Ciebie",
        "EscolaLms\\Courses\\Events\\CourseDeadlineSoon":
          "Kurs {{name}} zakończy się {{date}}",
        "EscolaLms\\Courses\\Events\\CoursedPublished":
          "Kurs {{name}} opublikowany",
        "EscolaLms\\Courses\\Events\\CourseFinished":
          "Kurs {{name}} zakończony",
        "EscolaLms\\Courses\\Events\\CourseStarted":
          "Kurs {{name}} wystartował",
        "EscolaLms\\Courses\\Events\\CourseStatusChanged":
          "Status kursu {{name}} zmieniony",
        "EscolaLms\\Courses\\Events\\CourseTutorAssigned":
          "Zostałeś przypisany jako trener do kursu {{name}}",
        "EscolaLms\\Courses\\Events\\CourseTutorUnassigned":
          "Zostałeś wypisany jako trener do kursu  {{name}}",
        "EscolaLms\\Courses\\Events\\CourseUnassigned":
          "Zostałeś przypisany {{name}}",
        "EscolaLms\\Courses\\Events\\TopicFinished":
          "Temat kursu {{name}} zakończony",
        // TOPIC
        "EscolaLms\\TopicTypes\\Events\\TopicTypeChanged":
          "Temat {{name}} zmianiony",
        // CONSULTATIONS
        "EscolaLms\\Consultations\\Events\\ApprovedTerm":
          "Termin zatwierdzony {{date}}",
        "EscolaLms\\Consultations\\Events\\ApprovedTermWithTrainer":
          "Termin z trenerem zatwierdzony {{date}}",
        "EscolaLms\\Consultations\\Events\\ChangeTerm":
          "Termin zmieniony na {{date}}",
        "EscolaLms\\Consultations\\Events\\RejectTerm":
          "Termin {{date}} odrzucony",
        "EscolaLms\\Consultations\\Events\\RejectTermWithTrainer":
          "Termin z trenerem {{date}} odrzucony",
        "EscolaLms\\Consultations\\Events\\ReminderAboutTerm":
          "Przypomnienie! Termin o {{date}}",
        "EscolaLms\\Consultations\\Events\\ReminderTrainerAboutTerm":
          "Przypomnienie! Termin o {{date}}",
        "EscolaLms\\Consultations\\Events\\ReportTerm":
          "Uytkownik {{user}} zgłosił nowy termin {{date}} na konsultacje {{name}}",
        // WEBINAR
        "EscolaLms\\Webinar\\Events\\ReminderAboutTerm":
          "Przypomnienie! Webinar startuje {{date}}",
        "EscolaLms\\Webinar\\Events\\WebinarTrainerAssigned":
          "Trener został przypisany do webinaru",
        "EscolaLms\\Webinar\\Events\\WebinarTrainerUnassigned":
          "Trener został wypisany z webinaru",
        // VIDEO
        ProcessVideoStarted: "Wideo zostało włączone",
        ProcessVideoFailed: "Błąd podczas włączania wideo",
        // CSV USER
        "EscolaLms\\CsvUsers\\Events\\EscolaLmsImportedNewUserTemplateEvent":
          "Zaimportowano nowy szablon użytkownika",
        // UNLOGGED USER
        AssignToProduct:
          "Niezalogowany użytkownik został przypisany do produktu",
        AssignToProductable: "Niezalogowany użytkownik",
        // FILES
        FileDeleted: "Plik usunięty",
        FileStored: "Plik przechowywany",
        // SETTINGS
        "EscolaLms\\Settings\\Events\\SettingPackageConfigUpdated":
          "Pakiet ustawień został zaktualizowany",
        // AUTH
        "EscolaLms\\Auth\\Events\\AccountBlocked": "Konto zablokowane",
        "EscolaLms\\Auth\\Events\\AccountConfirmed": "Konto potwierdzone",
        "EscolaLms\\Auth\\Events\\AccountDeleted": "Konto usuniete",
        "EscolaLms\\Auth\\Events\\AccountMustBeEnableByAdmin":
          "Konto musi został aktywowane przez administratora",
        "EscolaLms\\Auth\\Events\\AccountRegistered": "Konto zarejestrowane",
        "EscolaLms\\Auth\\Events\\ForgotPassword": "Zapomniano hasła",
        "EscolaLms\\Auth\\Events\\Login": "Poprawnie zalogowano",
        "EscolaLms\\Auth\\Events\\Logout": "Wylogowano",
        "EscolaLms\\Auth\\Events\\PasswordChanged": "Hasło zmienione",
        "EscolaLms\\Auth\\Events\\ResetPassword": "Hasło zresetowane",
        "EscolaLms\\Auth\\Events\\UserAddedToGroup": "Zostałeś dodany do grupy",
        "EscolaLms\\Auth\\Events\\UserRemovedFromGroup":
          "Zostałeś usunięty z grupy",
        AccountConfirmed: "Konto potwierdzone",
        ProductAddedToCart: "Produkt dodany do koszyka",
        ProductRemovedFromCart: "Produkt usunięty z koszyka",
        ProductableAttached: "Produkt dołączony???",
        ProductBought: "Produkt kupiony",
        ProductAttached: "Produkt dołączony",
        OrderCreated: "Zamówienie utworzone",
      },
      Header: {
        Register: "Zarejestruj",
        Login: "Logowanie",
      },
      AcceptCheckbox: "Zaznaczając to pole, akceptujesz",
      PrivacyPolicy: "Politykę prywatności",
      TermsOfService: "Warunki usługi",
      EmailWasVerified: "Email został potwierdzony.",
      RateCourse: {
        ThankYou: "Dziękujemy za wystawienie oceny",
        ThankYouMessage: "Twoja ocena została zapisana",
      },
      Filters: {
        Category: "Kategoria",
        Search: "Szukaj",
      },
      EventPage: {
        IsFinished: "Wydarzenie zakończyło się",
        GoToCheckout: "Do kasy",
        NotStarted: "Wydarzenie jeszcze się nie rozpoczęło",
        UnavailableEvent: "Wydarzenie niemożliwe do kupienia",
        "30Days": "Gwarantowane 30 dni na zwrot",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "pl",
    // debug: true,
    //lng: "pl",
    //supportedLngs: ["pl", "en"],
    // fallbackLng: "pl",
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    },
  });

export default i18n;
