import React from 'react'
import { withTranslation } from 'react-i18next';

function Input(props) {
    const {name,type,label,error,onChange}=props;
    let className=error? "form-control is-invalid":"form-control";
    const {t}=props;
  return (
    <div class="form-group mt-2">
    <label>{label}</label>
    <input onChange={(e)=>onChange(e)} type={type} class={className} name={name}/>
    <div class="invalid-feedback">{t(error)}</div>
  </div>
  
  )
}
export default withTranslation()(Input);