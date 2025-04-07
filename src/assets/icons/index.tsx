import React from 'react';

interface IconProps {
  className?: string;
}

export const ButtonIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 4.16667V15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.16675 10H15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SecondaryIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const GreyIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10.0001 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 10C10.8334 9.53976 10.4603 9.16667 10.0001 9.16667C9.53984 9.16667 9.16675 9.53976 9.16675 10C9.16675 10.4602 9.53984 10.8333 10.0001 10.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16667 15.8333 9.16667C15.3731 9.16667 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.16675 10.8333C4.62699 10.8333 5.00008 10.4602 5.00008 10C5.00008 9.53976 4.62699 9.16667 4.16675 9.16667C3.70651 9.16667 3.33342 9.53976 3.33342 10C3.33342 10.4602 3.70651 10.8333 4.16675 10.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DestructiveIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2.5 5H4.16667H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66675 5.00008V3.33341C6.66675 2.89139 6.84234 2.46746 7.15491 2.1549C7.46748 1.84234 7.8914 1.66675 8.33342 1.66675H11.6667C12.1088 1.66675 12.5327 1.84234 12.8453 2.1549C13.1578 2.46746 13.3334 2.89139 13.3334 3.33341V5.00008M15.8334 5.00008V16.6667C15.8334 17.1088 15.6578 17.5327 15.3453 17.8453C15.0327 18.1578 14.6088 18.3334 14.1667 18.3334H5.83341C5.39139 18.3334 4.96746 18.1578 4.6549 17.8453C4.34234 17.5327 4.16675 17.1088 4.16675 16.6667V5.00008H15.8334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Input Icons
export const SearchIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M6.66675 1.66675V4.16675M13.3334 1.66675V4.16675M2.91675 7.57508H17.0834M3.33341 3.33341H16.6667C17.1271 3.33341 17.5001 3.7065 17.5001 4.16675V16.6667C17.5001 17.127 17.1271 17.5001 16.6667 17.5001H3.33341C2.87317 17.5001 2.50008 17.127 2.50008 16.6667V4.16675C2.50008 3.7065 2.87317 3.33341 3.33341 3.33341Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const EyeIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2.5 10C2.5 10 5.83333 3.33337 10 3.33337C14.1667 3.33337 17.5 10 17.5 10C17.5 10 14.1667 16.6667 10 16.6667C5.83333 16.6667 2.5 10 2.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SuccessIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ErrorIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 6.66675V10.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14.1667H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10.0001C18.3332 5.39771 14.6022 1.66675 9.99984 1.66675C5.39746 1.66675 1.6665 5.39771 1.6665 10.0001C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 