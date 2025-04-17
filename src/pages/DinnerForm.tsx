import React, { useState } from 'react';
import backgroundImage from '../assets/images/1img1.png';
import svgLogoEs from '../assets/images/logosyvectores-03.svg';
import svgLogoEn from '../assets/images/logosyvectores-03_eng.svg';
import svgLogoIt from '../assets/images/logosyvectores-03_ita.svg';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import LanguageSelector from '../components/LanguageSelector';

const DinnerForm = () => {
  const [captchaValid, setCaptchaValid] = useState(false);
  const { t } = useTranslation();

  const options = [
    { value: 'Miami', label: t('dinnerForm.options.miami') },
    { value: 'NYC', label: t('dinnerForm.options.nyc') },
    { value: 'Ambas', label: t('dinnerForm.options.both') },
    { value: 'Otras', label: t('dinnerForm.options.others') },
  ];

  const getSvgLogoByLanguage = () => {
    switch (i18n.language) {
      case 'en':
        return svgLogoEn;
      case 'it':
        return svgLogoIt;
      case 'es':
      default:
        return svgLogoEs;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString().trim();
    const dinner = formData.getAll('dinner');

    if (!name || dinner.length === 0) {
      alert(t('dinnerForm.alert_required'));
      return;
    }

    if (!captchaValid) {
      alert(t('dinnerForm.alert_captcha'));
      return;
    }

    alert(t('dinnerForm.alert_sent'));
  };

  return (
    <div
  className="min-h-screen pt-5 pb-5 flex items-center justify-center px-4 bg-[#151829] sm:bg-cover sm:bg-center"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto', // en mobile: ancho completo, altura auto
    backgroundPosition: 'top',
  }}
>
  <LanguageSelector />
  <form
    onSubmit={handleSubmit}
    className="bg-white/20 mt-30 sm:mt-0 backdrop-blur-xs p-8 rounded-2xl max-w-2xl w-full text-white space-y-6 shadow-xl"
  >
    {/* Título con imagen */}
    <div className="text-center absolute  -top-30 sm:top-0 sm:relative flex justify-end right-10  sm:justify-center sm:align-center w-full">
      <img src={getSvgLogoByLanguage()} alt="Una Cena por una Sonrisa" className="w-20 sm:w-40 h-auto self-center" />
    </div>

    <p className="text-sm text-center italic">{t('dinnerForm.description')}</p>

    {/* Nombre y apellido */}
    <div>
      <label className="block mb-1 font-semibold">
        {t('dinnerForm.name_label')} <span className="text-white">*</span>
      </label>
      <input
        name="name"
        type="text"
        className="w-full p-2 rounded bg-white/30 backdrop-blur placeholder-white text-white border border-white/20"
        placeholder={t('dinnerForm.input_placeholder')}
      />
    </div>

    {/* Domicilio */}
    <div>
      <label className="block mb-1 font-semibold">
        {t('dinnerForm.address_label')}
      </label>
      <input
        name="address"
        type="text"
        className="w-full p-2 rounded bg-white/30 backdrop-blur placeholder-white text-white border border-white/20"
        placeholder={t('dinnerForm.input_placeholder')}
      />
    </div>

    {/* Cena */}
    <div>
      <label className="block mb-1 font-semibold">
        {t('dinnerForm.dinner_label')} <span className="text-white">*</span>
      </label>
      <div className="flex flex-row justify-center mt-4 gap-2 text-sm flex-wrap">
        {options.map(({ value, label }) => (
          <label key={value} className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="dinner" value={value} className="ml-5 accent-white cursor-pointer" />
            {label}
          </label>
        ))}
      </div>
    </div>

    <p className="text-xs text-white italic">{t('dinnerForm.required_notice')}</p>

    {/* Captcha */}
    <div className="flex justify-center">
      <ReCAPTCHA
        sitekey="TU_SITE_KEY_AQUI"
        onChange={() => setCaptchaValid(true)}
        onExpired={() => setCaptchaValid(false)}
      />
    </div>

    <button
      type="submit"
      className="w-full mt-2 cursor-pointer py-2 bg-[#CDA434] hover:bg-[#b99d2c] text-black font-bold rounded transition"
    >
      {t('dinnerForm.send_button')}
    </button>
  </form>
</div>
  );
};
export default DinnerForm;
