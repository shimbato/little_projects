import React from "react";
import { useFormik } from "formik";
import "./form.css";
import * as Yup from "yup";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      amount: 0,
      currency: "",
      text: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "2 symbols").required("required"),
      email: Yup.string().email("Wrong mail").required("required"),
      amount: Yup.number().min(5, "5 amount minimum").required("required"),
      currency: Yup.string().required("Choose currency"),
      text: Yup.string().min(10, "min 10 symbols"),
      terms: Yup.boolean().required("agrements need").oneOf([true], '  agrements need ')
    }),
    onSubmit: (value) => console.log(JSON.stringify(value, null, 2)),
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Отправить пожертвование</h2>
      <label htmlFor="name">Ваше имя</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name ? (
        <div className='error'>{formik.errors.name}</div>
      ) : null}
      <label htmlFor="email">Ваша почта</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email ? (
        <div className='error'>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="amount">Количество</label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
       {formik.errors.amount && formik.touched.amount ? (
        <div className='error'>{formik.errors.amount}</div>
      ) : null}
      <label htmlFor="currency">Валюта</label>
      <select
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">Выберите валюту</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
      </select>
      <label htmlFor="text">Ваше сообщение</label>
      <textarea
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
       {formik.errors.currency && formik.touched.currency ? (
        <div className='error'>{formik.errors.currency}</div>
      ) : null}
      <label className="checkbox">
        <input
          name="terms"
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        Соглашаетесь с политикой конфиденциальности?
      </label>
      {formik.errors.terms && formik.touched.terms ? (
        <div className='error'>{formik.errors.terms}</div>
      ) : null}
      <button type="submit">Отправить</button>
    </form>
  );
};
