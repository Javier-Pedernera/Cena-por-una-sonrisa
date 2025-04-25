import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-01bis.png';
import svgLogoEs from '../assets/images/logosyvectores-03.svg';
import svgLogoEn from '../assets/images/logosyvectores-03_eng.svg';
import svgLogoIt from '../assets/images/logosyvectores-03_ita.svg';
import LogoEnt from '../assets/images/logosyvectores-01oro.svg';
import LocaLogo from '../assets/images/logosyvectores-02B.svg';
import LogoPupi from '../assets/images/logosyvectores-04.svg';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import LanguageSelector from '../components/LanguageSelector';
import Select from 'react-select';
import axios from 'axios';
import MessageModal from '../components/MessageModal';
import { ClockLoader} from 'react-spinners';

interface CountryOption {
  value: number;
  label: string;
}
const customSelectStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    padding: '2px',
    fontSize: '0.875rem',
    borderColor: state.isFocused ? '#CDA434' : '#D1D5DB', // dorado o gris
    boxShadow: state.isFocused ? '0 0 0 1px #CDA434' : 'none',
    '&:hover': {
      borderColor: '#CDA434',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    fontSize: '0.875rem',
    zIndex: 9999,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#CDA434' : 'white',
    color: state.isFocused ? 'white' : '#2B2D46',
    cursor: 'pointer',
  }),
};

const DinnerForm: React.FC = () => {
  const [captchaValid, setCaptchaValid] = useState(false);
  const isMobile = window.innerWidth < 640;
  const { t } = useTranslation();
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;

  console.log(" errors",errors);
  
  useEffect(() => {
    axios
      .get(`${API_URL}/countries`)
      .then((res) => {
        const options = res.data.map((c: any) => ({
          value: c.id,
          label: c.name,
        }));
        setCountries(options);
      })
      .catch((err) => {
        console.error('Error fetching countries:', err);
        setFormMessage({ type: 'error', text: t('dinnerForm.alert_fetch_error') });
      });
  }, [API_URL, t]);

  const options = [
    { value: 'Miami', label: t('dinnerForm.options.miami') },
    { value: 'NYC', label: t('dinnerForm.options.nyc') },
    { value: 'Ambas', label: t('dinnerForm.options.both') },
    // { value: 'Otras', label: t('dinnerForm.options.others') },
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

  const handleCountryChange = (option: CountryOption | null) => {
    setSelectedCountry(option);
  };
// console.log("form",FormData,"formMessage",formMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const nombre = (formData.get('name'));
    const apellido = (formData.get('lastName'));
    const direccion = formData.get('address');
    const paisId = selectedCountry?.value;
    const cenaName = formData.get('dinner');
    const tipoComida = formData.get('foodType');
    const cantidadInvitados = Number(formData.get('guestCount'));
    const nombresAcompanantes = formData.get('companions');
    const detalles = formData.get('details');
    const email = (formData.get('email') as string)?.trim();
    const newErrors: string[] = [];
    if (!nombre) newErrors.push('name');
    if (!apellido) newErrors.push('lastName');
    if (!email) newErrors.push('email');
    if (!paisId) newErrors.push('pais_id');
    if (!direccion) newErrors.push('address');
    if (!cenaName) newErrors.push('dinner');
    if (!tipoComida) newErrors.push('foodType');
  
    if (newErrors.length > 0) {
      setErrors(newErrors);
      setFormMessage({ type: 'error', text: t('dinnerForm.alert_required') });
      return;
    }
    if (!captchaValid) {
      setFormMessage({ type: 'error', text: t('dinnerForm.alert_captcha') });
      return;
    }
    setErrors([]);
    const payload = {
      nombre,
      apellido,
      direccion,
      pais_id: paisId,
      cena_asistira: true,
      cena_name: cenaName,
      tipo_comida: tipoComida,
      cantidad_invitados: isNaN(cantidadInvitados) ? 0 : cantidadInvitados,
      nombres_acompanantes: nombresAcompanantes,
      detalles,
      email,
      recaptcha_token: recaptchaToken,
    };
        // console.log("datos a enviar", payload);
        setIsLoading(true);   
    axios
      .post(`${API_URL}/cena_por_una_sonrisa`, payload)
      .then(() => {
        setFormMessage({ type: 'success', text: t('dinnerForm.alert_sent') });
        form.reset();
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setFormMessage({ type: 'error', text: t('dinnerForm.alert_submit_error') });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
  className="min-h-screen w-full relative flex items-center justify-center sm:justify-end px-2 sm:px-4 py-4 sm:px-0 sm:bg-[#151829] bg-[#fff] bg-no-repeat bg-cover"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: isMobile ? 'contain' : 'cover',
    backgroundPosition: isMobile ? 'top' : 'center',
    backgroundRepeat: 'no-repeat',
  }}
> 
      <div className="absolute top-5 right-3 sm:top-10 sm:right-15 z-50">
      <LanguageSelector />
      </div>
      <div className="text-center absolute top-5 sm:top-20 pl-5 sm:pl-20 w-full">
          <img
            src={getSvgLogoByLanguage()}
            alt="Una Cena por una Sonrisa"
            className="w-15 sm:w-40 h-auto self-center"
          />
        </div>

        <div className="text-center absolute top-5  sm:top-63 pl-[70%] sm:pl-20 w-full">
          <img
            src={LogoPupi}
            alt="Una Cena por una Sonrisa"
            className="w-9  sm:w-15 h-auto self-center"
          />
        </div>
        <div className="text-center flex flex-col sm:flex-row absolute top-17 sm:top-80 pl-5 pl-[70%] sm:pl-20 w-full">
          <img
            src={LocaLogo}
            alt="Una Cena por una Sonrisa"
            className="w-15 sm:w-37 h-auto flex-end  items-end content-end"
          />
          <img
            src={LogoEnt}
            alt="Una Cena por una Sonrisa"
            className="w-7 sm:w-10 h-auto mt-3 sm:mt-0 sm:ml-3  items-end content-end"
          />
      
        </div>
        <MessageModal
            show={!!formMessage}
            type={formMessage?.type || 'success'}
            message={formMessage?.text || ''}
            onClose={() => setFormMessage(null)}
          />
      <form
  onSubmit={handleSubmit}
  className="bg-white z-10 mt-[65%] sm:mt-[0%] p-4 sm:mr-5 sm:p-6 rounded-2xl sm:w-[45%] w-full text-black space-y-4 shadow-xl"
>
  {/* Logo y mensaje */}
  {/* <div className="text-center"> */}
    {/* <img
      src={getSvgLogoByLanguage()}
      alt="Una Cena por una Sonrisa"
      className="mx-auto w-16 sm:w-28 h-auto"
    /> */}
  {/* </div> */}

  <p className="text-xs  mb-10 sm:mb-5 sm:w-[83%] text-[#0E1373] sm:text-[#333]text-center text-[0.8rem] sm:text-[0.9rem] font-semibold">{t('dinnerForm.description')}</p>

  {/* Grid de campos */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Nombre */}
    <div>
      <label className={`block mb-1 text-sm font-medium text-left ${errors.includes('name') ? 'text-red-500' : ''}`}>{t('dinnerForm.name_label')} <span className={errors.includes('name') ? 'text-red-500' : ''}>*</span></label>
      <input
        name="name"
        type="text"
        className="w-full p-2 rounded border border-gray-300 focus:border-[#CDA434] focus:outline-none text-sm"
        // placeholder={t('dinnerForm.placeholder_nombre')}
      />
    </div>

    {/* Apellido */}
    <div>
      <label className={`block mb-1 text-sm font-medium text-left ${errors.includes('lastName') ? 'text-red-500' : ''}`}>{t('dinnerForm.lastName_label')} <span className={errors.includes('lastName') ? 'text-red-500' : ''}>*</span></label>
      <input
        name="lastName"
        type="text"
        className="w-full p-2 rounded border border-gray-300 focus:border-[#CDA434] focus:outline-none text-sm"
        // placeholder={t('dinnerForm.placeholder_apellido')}
      />
    </div>

    {/* Email */}
    <div className="sm:col-span-2">
      <label className={`block mb-1 text-sm font-medium text-left ${errors.includes('email') ? 'text-red-500' : ''}`}>{t('dinnerForm.email_label')} <span className={errors.includes('email') ? 'text-red-500' : ''}>*</span></label>
      <input
        name="email"
        type="email"
        className="w-full p-2 rounded border border-gray-300 focus:border-[#CDA434] focus:outline-none text-sm"
        placeholder={t('dinnerForm.placeholder_email')}
      />
    </div>

    {/* País */}
    <div >
      <label className={`block mb-1 text-sm font-medium text-left ${errors.includes('pais_id') ? 'text-red-500' : ''}`}>{t('dinnerForm.country_label')} <span className={errors.includes('pais_id') ? 'text-red-500' : ''}>*</span></label>
      <Select
        options={countries}
        value={selectedCountry}
        onChange={handleCountryChange}
        name="pais_id"
        styles={customSelectStyles}
        placeholder={t('dinnerForm.select_country')}
      />
    </div>

    {/* Dirección */}
    <div>
      <label className={`block mb-1 text-sm font-medium text-left ${errors.includes('address') ? 'text-red-500' : ''}`}>{t('dinnerForm.address_label')} <span className={errors.includes('address') ? 'text-red-500' : ''}>*</span></label>
      <input
        name="address"
        type="text"
        className="w-full p-2 rounded border border-gray-300 focus:border-[#CDA434] focus:outline-none text-sm"
        // placeholder={t('dinnerForm.placeholder_direccion')}
      />
    </div>

    {/* Cena (radio) */}
    <div className="sm:col-span-2">
      <label className={`block mb-1 text-sm font-medium text-left ${errors.includes('dinner') ? 'text-red-500' : ''}`}>{t('dinnerForm.dinner_label')}  <span className={errors.includes('dinner') ? 'text-red-500' : ''}>*</span></label>
      <div className="flex flex-wrap justify-center gap-5 text-sm">
        {options.map(o => (
          <label key={o.value} className="flex items-center cursor-pointer relative pl-4 sm:pl-6 text-sm text-[#1D2538]">
          <input
            type="radio"
            name="dinner"
            value={o.value}
            className="peer absolute opacity-0 w-0 h-0"
          />
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 rounded-full border-1 border-[#CDA434] peer-checked:bg-[#CDA434] peer-checked:border-[#CDA434] transition" />
          {o.label}
        </label>
        ))}
      </div>
    </div>

    {/* Tipo de comida */}
    <div>
      <label className={`block mb-1 text-sm font-medium text-left ${errors.includes('foodType') ? 'text-red-500' : ''}`}>{t('dinnerForm.food_type_label')}  <span className={errors.includes('foodType') ? 'text-red-500' : ''}>*</span></label>
      <input
        name="foodType"
        type="text"
        className="w-full p-2 rounded border border-gray-300 focus:border-[#CDA434] focus:outline-none text-sm"
        placeholder={t('dinnerForm.placeholder_tipo_comida')}
      />
    </div>

    {/* Cantidad de invitados */}
    <div>
      <label className="block mb-1 text-sm font-medium text-left">{t('dinnerForm.guest_count_label')}</label>
      <input
        name="guestCount"
        type="number"
        min="0"
        className="w-full p-2 rounded border border-gray-300 focus:border-[#CDA434] focus:outline-none text-sm"
        // placeholder="3"
      />
    </div>

    {/* Acompañantes */}
    <div className="sm:col-span-2">
      <label className="block mb-1 text-sm font-medium text-left">{t('dinnerForm.companions_label')}</label>
      <input
        name="companions"
        type="text"
        className="w-full p-2 rounded border border-gray-300 focus:border-[#CDA434] focus:outline-none text-sm"
        placeholder={t('dinnerForm.placeholder_acompanantes')}
      />
    </div>

    {/* Detalles adicionales */}
    <div className="sm:col-span-2">
      <label className="block mb-1 text-sm font-medium text-left">{t('dinnerForm.details_label')}</label>
      <textarea
        name="details"
        className="w-full p-2 rounded border border-gray-300 focus:border-[#CDA434] focus:outline-none text-sm"
        // placeholder={t('dinnerForm.placeholder_detalles')}
      />
    </div>
  </div>

  {/* Captcha */}
  <div className="flex justify-center">
      <ReCAPTCHA
      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      onChange={(token) => {
        setCaptchaValid(!!token);
        setRecaptchaToken(token); // <- Aquí guardamos el token para enviarlo
      }}
      onExpired={() => {
        setCaptchaValid(false);
        setRecaptchaToken(null);
      }}
    />
  </div>

  <button
    type="submit"
    className="w-full py-2 text-sm bg-[#CDA434] cursor-pointer hover:bg-[#dba436] text-[#1D2538] font-semibold rounded transition"
  >
    {isLoading ? (
          <ClockLoader
          size={24} color="#333" loading={isLoading} />
        ) : (
          t('dinnerForm.send_button')
        )}
  </button>
</form>
    </div>
  );
};

export default DinnerForm;