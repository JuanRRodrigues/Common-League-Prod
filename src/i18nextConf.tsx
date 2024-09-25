import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { languageDetector, languageDetectorOptions } from "./lang-detector"

const resources = {
    en: {
        translation: {
            "Sign In": "Sign In",
            "Sign Up": "Sign Up",
            "Create Account": "Create Account",
            "Retry Password": "Retry Password",
            "Password": "Password",
            "Full Name": "Full Name",
            "Username": "Username",
            "Forgot Your Password?": "Forgot Your Password?",
            "Welcome, Friend!": "Welcome, Friend!",
            "Enter your personal details and start your journey with us": "Enter your personal details and start your journey with us",
            "Welcome Back!": "Welcome Back!",
            "Email": "Email"
        }
    },
    pt: {
        translation: {
            "Sign In": "Entrar",
            "Sign Up": "Criar Conta",
            "Create Account": "Criar Conta",
            "Retry Password": "Repetir Senha",
            "Password": "Senha",
            "Full Name": "Nome Completo",
            "Username": "Nome de Usuário",
            "Forgot Your Password?": "Esqueceu sua Senha?",
            "Welcome, Friend!": "Bem-vindo, Amigo!",
            "Enter your personal details and start your journey with us": "Insira seus dados pessoais e comece sua jornada conosco",
            "Welcome Back!": "Bem-vindo de volta!",
            "Email": "Email"
        }
    },
    jpn: {
        translation: {
            "Sign In": "サインイン",
            "Sign Up": "アカウント作成",
            "Create Account": "アカウント作成",
            "Retry Password": "パスワードを再入力",
            "Password": "パスワード",
            "Full Name": "フルネーム",
            "Username": "ユーザー名",
            "Forgot Your Password?": "パスワードをお忘れですか？",
            "Welcome, Friend!": "ようこそ、友達！",
            "Enter your personal details and start your journey with us": "個人情報を入力して、私たちと一緒に旅を始めましょう",
            "Welcome Back!": "お帰りなさい！",
            "Email": "メールアドレス"
        }
    },
    es: {
        translation: {
            "Sign In": "Iniciar sesión",
            "Sign Up": "Crear cuenta",
            "Create Account": "Crear cuenta",
            "Retry Password": "Repetir contraseña",
            "Password": "Contraseña",
            "Full Name": "Nombre completo",
            "Username": "Nombre de usuario",
            "Forgot Your Password?": "¿Olvidaste tu contraseña?",
            "Welcome, Friend!": "¡Bienvenido, amigo!",
            "Enter your personal details and start your journey with us": "Introduce tus datos personales y comienza tu viaje con nosotros",
            "Welcome Back!": "¡Bienvenido de nuevo!",
            "Email": "Correo electrónico"
        }
    },
    fr: {
        translation: {
            "Sign In": "Se connecter",
            "Sign Up": "Créer un compte",
            "Create Account": "Créer un compte",
            "Retry Password": "Ressaisir le mot de passe",
            "Password": "Mot de passe",
            "Full Name": "Nom complet",
            "Username": "Nom d'utilisateur",
            "Forgot Your Password?": "Mot de passe oublié ?",
            "Welcome, Friend!": "Bienvenue, ami !",
            "Enter your personal details and start your journey with us": "Entrez vos informations personnelles et commencez votre voyage avec nous",
            "Welcome Back!": "Content de vous revoir !",
            "Email": "E-mail"
        }
    },
    de: {
        translation: {
            "Sign In": "Anmelden",
            "Sign Up": "Registrieren",
            "Create Account": "Registrieren",
            "Retry Password": "Passwort erneut eingeben",
            "Password": "Passwort",
            "Full Name": "Vollständiger Name",
            "Username": "Benutzername",
            "Forgot Your Password?": "Passwort vergessen?",
            "Welcome, Friend!": "Willkommen, Freund!",
            "Enter your personal details and start your journey with us": "Geben Sie Ihre persönlichen Daten ein und beginnen Sie Ihre Reise mit uns",
            "Welcome Back!": "Willkommen zurück!",
            "Email": "E-Mail"
        }
    },
    ru: {
        translation: {
            "Sign In": "Войти",
            "Sign Up": "Создать аккаунт",
            "Create Account": "Создать аккаунт",
            "Retry Password": "Повторите пароль",
            "Password": "Пароль",
            "Full Name": "Полное имя",
            "Username": "Имя пользователя",
            "Forgot Your Password?": "Забыли пароль?",
            "Welcome, Friend!": "Добро пожаловать, друг!",
            "Enter your personal details and start your journey with us": "Введите свои персональные данные и начните ваше путешествие с нами",
            "Welcome Back!": "С возвращением!",
            "Email": "Электронная почта"
        }
    },
    ko: {
        translation: {
            "Sign In": "로그인",
            "Sign Up": "계정 만들기",
            "Create Account": "계정 만들기",
            "Retry Password": "비밀번호 다시 입력",
            "Password": "비밀번호",
            "Full Name": "전체 이름",
            "Username": "사용자 이름",
            "Forgot Your Password?": "비밀번호를 잊으셨나요?",
            "Welcome, Friend!": "환영합니다, 친구!",
            "Enter your personal details and start your journey with us": "개인 정보를 입력하고 우리와 함께 여행을 시작하세요",
            "Welcome Back!": "다시 오신 것을 환영합니다!",
            "Email": "이메일"
        }
    },
    zh: {
        translation: {
            "Sign In": "登录",
            "Sign Up": "创建账户",
            "Create Account": "创建账户",
            "Retry Password": "重试密码",
            "Password": "密码",
            "Full Name": "全名",
            "Username": "用户名",
            "Forgot Your Password?": "忘记密码了吗？",
            "Welcome, Friend!": "欢迎，朋友！",
            "Enter your personal details and start your journey with us": "输入您的个人信息，开始与我们的旅程",
            "Welcome Back!": "欢迎回来！",
            "Email": "电子邮件"
        }
    }
};






i18n.use(languageDetector)
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        detection: languageDetectorOptions,
        resources,
        // supportedLngs: ["pt", "en"],
        // lng: "pt", // fallback language is portuguese
        fallbackLng: ["en", "pt"],

        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
        },
    });

export default i18n;