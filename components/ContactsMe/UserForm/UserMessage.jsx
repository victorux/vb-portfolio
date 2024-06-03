import React, { Component } from "react";
import styles from "../../../styles/contacts.module.scss";
import Bot from "../Chat/Bot.jsx";
import Victor from "../Chat/victor.jsx";
import Btn from "../Chat/Btn.jsx";

const UserMessage = (props) => {
  const formik = props.formik;
  // console.log(formik)
  // console.log(formik.errors.message)
  const nextStep = () => {
    formik.setFieldValue("step", 2);
  };

  return (
    <div className={styles.animateChat}>
      <Victor />
      <Bot
        title="Hi! 👋"
        message="Leave a message and I'll email you back promptly"
      />
      <textarea
        placeholder="Write your message..."
        id="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.errors.message && formik.touched.message
            ? [styles.chatBox, styles.inputError].join(" ")
            : styles.chatBox
        }
      />
      {formik.errors.message && formik.touched.message ? (
        <span className={styles.error}>{formik.errors.message}</span>
      ) : null}
      <div className={styles.navigation}>
        <button
          title={
            formik.errors.message
              ? "Minimum 10 characters required to sent a message."
              : "Click to go next step"
          }
          disabled={formik.errors.message ? true : false}
          onClick={nextStep}
          className={styles.button}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default UserMessage;
