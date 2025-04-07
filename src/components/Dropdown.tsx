import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import {
  useFloating,
  flip,
  shift,
  offset,
  autoUpdate,
  FloatingPortal
} from '@floating-ui/react';

export interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface DropdownSection {
  items: DropdownItem[];
}

export interface DropdownProps {
  label?: string;
  avatar?: string;
  icon?: React.ReactNode;
  sections: DropdownSection[];
  disabled?: boolean;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  type?: 'default' | 'avatar' | 'icon-only';
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  avatar,
  icon,
  sections,
  disabled = false,
  className = '',
  buttonClassName = '',
  menuClassName = '',
  type = 'default',
}) => {
  const { x, y, strategy, refs } = useFloating({
    middleware: [
      offset(8), // Adds 8px gap between button and menu
      flip(), // Flips the menu if there's not enough space
      shift(), // Shifts the menu to keep it in view
    ],
    whileElementsMounted: autoUpdate,
    placement: 'bottom-end'
  });

  const renderTrigger = () => {
    if (type === 'avatar' && avatar) {
      return (
        <img
          src={avatar}
          alt="User avatar"
          className="w-8 h-8 rounded-full object-cover border border-white cursor-pointer"
        />
      );
    }

    if (type === 'icon-only' && icon) {
      return (
        <div className="p-1 cursor-pointer">
          {icon}
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2 cursor-pointer">
        {icon && <span className="text-[#344054]">{icon}</span>}
        {label && <span className="text-sm font-semibold text-[#344054]">{label}</span>}
        <FiChevronDown className="w-5 h-5 text-[#667185]" />
      </div>
    );
  };

  return (
    <Menu as="div" className={twMerge("relative inline-block text-left", className)}>
      {({ open }) => (
        <>
          <Menu.Button
            ref={refs.setReference}
            disabled={disabled}
            className={twMerge(
              "flex items-center justify-center rounded-lg border border-[#D0D5DD] bg-white cursor-pointer",
              type === 'default' && "px-3 py-2",
              type === 'icon-only' && "p-2",
              type === 'avatar' && "p-0",
              disabled && "bg-[#F9FAFB] border-[#F0F2F5] cursor-not-allowed",
              !disabled && "hover:border-[#B6D8FF] focus:border-[#3D89DF] focus:ring-2 focus:ring-[#E3EFFC]",
              buttonClassName
            )}
          >
            {renderTrigger()}
          </Menu.Button>

          <FloatingPortal>
            <Transition
              as={Fragment}
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-150 ease-in"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              show={open}
            >
              <Menu.Items
                ref={refs.setFloating}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                  width: 'max-content',
                  minWidth: '14rem'
                }}
                className={twMerge(
                  "rounded-lg bg-white shadow-lg z-50",
                  "shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(0,0,0,0.05)]",
                  menuClassName
                )}
              >
                {sections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className={twMerge(
                      "py-1",
                      sectionIndex !== sections.length - 1 && "border-b border-[#F0F2F5]"
                    )}
                  >
                    {section.items.map((item) => (
                      <Menu.Item key={item.id} disabled={item.disabled}>
                        {({ active }) => (
                          <button
                            onClick={item.onClick}
                            className={twMerge(
                              "flex w-full items-center justify-between px-4 py-2 text-sm cursor-pointer",
                              active ? "bg-[#F9FAFB]" : "",
                              item.disabled ? "text-[#98A2B3] cursor-not-allowed !cursor-not-allowed" : "text-[#101928]"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              {item.icon && (
                                <span className="text-[#667185]">{item.icon}</span>
                              )}
                              <span>{item.label}</span>
                            </div>
                            {item.shortcut && (
                              <span className="ml-4 rounded bg-[#F9FAFB] px-2 py-0.5 text-xs text-[#475367] border border-[#F0F2F5]">
                                {item.shortcut}
                              </span>
                            )}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                ))}
              </Menu.Items>
            </Transition>
          </FloatingPortal>
        </>
      )}
    </Menu>
  );
};

export default Dropdown; 