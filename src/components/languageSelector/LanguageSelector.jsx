import React from 'react'
import { withTranslation } from 'react-i18next';
function LanguageSelector(props) {


    const onChangeLanguage = (language) => {
        const { i18n } = props;
        i18n.changeLanguage(language);
      };

  return (
    <div className='mt-3'>
    <img
      onClick={() => onChangeLanguage("aze")}
      src="https://flagsapi.com/AZ/flat/24.png"
      alt="AZE Flag"
    />
    <img
      onClick={() => onChangeLanguage("tr")}
      src="https://flagsapi.com/TR/flat/24.png"
      alt="Turkish Flag"
    />
    <img
      onClick={() => onChangeLanguage("en")}
      src="https://flagsapi.com/US/flat/24.png"
      alt="USA Flag"
    />
  </div>
  )
}

export default withTranslation()(LanguageSelector);