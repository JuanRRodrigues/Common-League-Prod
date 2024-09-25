import React, { useEffect } from 'react';
import { styled } from "styled-components";
import EstilosGlobais from "../componentes/GlobaStyle";
import * as Components from '../componentes/Login/Components';
import http from "../http";
import { useNavigate } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

// Definindo os tipos dos valores do formulário
interface FormValues {
  login: string;
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Backgroundgradient = styled.div`
  background: linear-gradient(174.61deg, #141d26 4.16%, #1a2633 48%, #151515 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const validationSchema = Yup.object().shape({
  login: Yup.string().email('Email inválido').required('Email é obrigatório'),
  fullName: Yup.string().required('Nome completo é obrigatório'),
  username: Yup.string().required('Username é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
  confirmPassword: Yup.string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([Yup.ref('password')], 'As senhas devem coincidir'),
});

const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 12px;
`;

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  const navigate = useNavigate();
  const [signIn, toggle] = React.useState(true);
  const [imageUrl, setImageUrl] = React.useState('');

  const imageUrls = [
    '/imagens/galeria/6.mp4'
  ];

  useEffect(() => {
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    setImageUrl(randomImage);
  }, []);

  useEffect(() => {
    const video = document.querySelector('video');

    const handleVisibilityChange = () => {
      if (video) {
        if (document.hidden) {
          video.pause();
        } else {
          video.play();
        }
      }
    };

    const handleVideoEnd = () => {
      if (video) {
        video.play();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    if (video) {
      video.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  const handleFormSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    http.post('auth/login', values, {})
      .then(response => {
        sessionStorage.removeItem('token');
        sessionStorage.setItem('token', response.data.token);
        localStorage.setItem('login', values.login);
        console.log(response.data);
        actions.resetForm();
        navigate('/');
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  return (
    
    <Backgroundgradient>
      
      <EstilosGlobais />
      <Formik
        initialValues={{
          login: '',
          fullName: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
          <Components.SignUpContainer $signinIn={signIn}>
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>{t('Create Account')}</Components.Title>
              <Components.Input
                type="text"
                placeholder={t("Username")}
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.username && touched.username && errors.username}</ErrorMessageStyled>
              <Components.Input
                type="text"
                name="fullName"
                placeholder={t("Full Name")}
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.fullName && touched.fullName && errors.fullName}</ErrorMessageStyled>
              <Components.Input
                type="text"
                name="login"
                placeholder={t("Email")}
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.login && touched.login && errors.login}</ErrorMessageStyled>
              <Components.Input
                type="password"
                name="password"
                placeholder={t("Password")}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.password && touched.password && errors.password}</ErrorMessageStyled>
              <Components.Input
                type="password"
                name="confirmPassword"
                placeholder={t("Retry Password")}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</ErrorMessageStyled>
              <Components.Button type="submit">{t("Sign Up")}</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>
        )}
      </Formik>

      <Formik
        initialValues={{
          login: '',
          fullName: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
          <Components.SignInContainer $signinIn={signIn}>
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>{t("Sign In")}</Components.Title>
              
              <Components.Input
                type="text"
                name="login"
                placeholder={t("Username")}
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.login && touched.login && errors.login}</ErrorMessageStyled>
              <Components.Input
                type="password"
                name="password"
                placeholder={t("Password")}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.password && touched.password && errors.password}</ErrorMessageStyled>
              <Components.Anchor href="#">{t('Forgot Your Password?')}</Components.Anchor>
              <Components.Button type="submit">{t('Sign In')}</Components.Button>
            </Components.Form>
          </Components.SignInContainer>
        )}
      </Formik>

      <Components.OverlayContainer $signinIn={signIn}>
        <Components.Overlay $signinIn={signIn} imageUrl={imageUrl}>
          {imageUrl.endsWith('.mp4') ? (
            <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src={imageUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={imageUrl} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
          <Components.LeftOverlayPanel $signinIn={signIn}>
            <Components.Title>{t("Welcome Back!")}</Components.Title>
            <Components.Paragraph>{t('To keep connected with us please login with your personal info')}</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>{t('Sign In')}</Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel $signinIn={signIn}>
            <Components.Title>{t("Welcome, Friend!")}</Components.Title>
            <div>
                <button onClick={() => changeLanguage('pt')}>PT-BR</button>
                <button onClick={() => changeLanguage('en')}>ENG</button>
                <button onClick={() => changeLanguage('jpn')}>JPN</button>
                <button onClick={() => changeLanguage('zh')}>ZH</button>
                <button onClick={() => changeLanguage('ko')}>KO</button>
                <button onClick={() => changeLanguage('ru')}>RU</button>
                <button onClick={() => changeLanguage('de')}>DE</button>
                <button onClick={() => changeLanguage('fr')}>FR</button>
        </div>
            <Components.Paragraph>{t('Enter your personal details and start your journey with us')}</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>{t('Sign Up')}</Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
     
    </Backgroundgradient>
  );
};

export default App;
