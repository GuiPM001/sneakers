import { NavLink, useLocation } from "react-router-dom";

interface LinkProps {
  label: string;
  path: string;
}

export default function Link(props: LinkProps) {
  const { label, path } = props;

  const location = useLocation();

  const isActive = location.pathname == path;

  return (
    <NavLink
      to={path}
      data-active={isActive}
      className='block md:inline-block p-2 hover:text-orange-700 transition duration-150 ease-in-out data-[active=true]:text-orange-600'
    >
      {label}
    </NavLink>
  );
};