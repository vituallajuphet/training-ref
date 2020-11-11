import React, { useState, useEffect, useRef } from "react";
import cn from 'classnames'


function useComponentVisible(initialIsVisible) {

  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref = useRef(null);

  const handleHideDropdown = (event) => { // event: KeyboardEvent
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}


const BtnDropdown = (props) => {
  const {
    name,
    children
  } = props

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(true);

  const DropdownMenu = () => {

    const dropdownMenuLists = [
      {
        id: '1',
        label: 'Report',
        badge: '3',
        badgeColor: '#e86969'
      },
      {
        id: '2',
        label: 'Groups',
        badge: '25',
        badgeColor: '#6996e8'
      },
      {
        id: '3',
        label: 'Settings',
        badge: '8',
        badgeColor: '#32afa3'
      }
      ,
      {
        id: '4',
        label: 'Help',
        badge: '5',
        badgeColor: 'orange'
      },
      {
        id: '5',
        label: 'Privacy',
        badge: '',
        badgeColor: 'gray'
      }
    ]

    return (
      <>
        <ul className={cn(`${name}__menu`)}>
          {dropdownMenuLists.map(dropdownMenuList => (
            <li
              id={dropdownMenuList.id}
              className={cn(`${name}__menu--item`)}
              key={dropdownMenuList.id}
            >
              <span>{dropdownMenuList.label}</span>
              {dropdownMenuList.badge &&
                (
                  <span
                    className='badge'
                    style={{ backgroundColor: `${dropdownMenuList.badgeColor }` }}
                  >
                    {dropdownMenuList.badge}
                  </span>
                )
              }
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <div ref={ref} className={cn(`${name}`)}>
      <button
        className={cn(`${name}__btn btn btn-default ml05rem`)}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {children}
      </button>

      {!isComponentVisible && (
        <DropdownMenu />
      )}
    </div>
  );
};

export default BtnDropdown
