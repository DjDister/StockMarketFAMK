import React, { useState } from "react";
import Activity from "../../assets/icons/Activity";
import Email from "../../assets/icons/Email";
import Monitor from "../../assets/icons/Monitor";
import PersonAdd from "../../assets/icons/PersonAdd";
import Phone from "../../assets/icons/Phone";
import SwitchButton from "../SwitchButton.tsx/SwitchButton";
import styles from "./NotificationPreferences.module.css";

interface NotificationPreferences {
  priceAlert: boolean;
  referralCommissionAlerts: boolean;
  deviceLoginAlerts: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
}

interface NotificationOption {
  label: string;
  value: keyof NotificationPreferences;
  icon: JSX.Element;
  color: string;
}

export default function NotificationPreferences() {
  const notificationOptions: NotificationOption[] = [
    {
      label: "Price Alert",
      value: "priceAlert",
      icon: <Activity />,
      color: "#fca5a4",
    },
    {
      label: "Referral Commission Alerts",
      value: "referralCommissionAlerts",
      icon: <PersonAdd />,
      color: "#6de7b6",
    },
    {
      label: "Device Login Alerts",
      value: "deviceLoginAlerts",
      icon: <Monitor />,
      color: "#56b2ff",
    },
    {
      label: "Email Notifications",
      value: "emailNotifications",
      icon: <Email />,
      color: "#56b2ff",
    },
    {
      label: "SMS Notifications",
      value: "smsNotifications",
      icon: <Phone />,
      color: "#56b2ff",
    },
  ];
  const [notificationPreferences, setNotificationPreferences] =
    useState<NotificationPreferences>({
      priceAlert: false,
      referralCommissionAlerts: false,
      deviceLoginAlerts: false,
      emailNotifications: false,
      smsNotifications: false,
    });
  return (
    <div className={styles.container}>
      <div className={styles.label}>Notification Preferences</div>
      {notificationOptions.map((option, index) => (
        <SwitchButton
          key={index}
          id={option.label}
          label={option.label}
          style={{ height: 70, marginBottom: 15 }}
          iconLeft={option.icon}
          iconBgColor={option.color}
          isOn={notificationPreferences[option.value]}
          onClick={() =>
            setNotificationPreferences({
              ...notificationPreferences,
              [option.value]: !notificationPreferences[option.value],
            })
          }
        />
      ))}
    </div>
  );
}
