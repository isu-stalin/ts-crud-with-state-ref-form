import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '1rem 2rem',
      }}
    >
      <div className='container'>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <NavLink
            to="/"
            style={({ isActive }) => ({
                color: isActive ? '#fff' : '#ccc',
                textDecoration: isActive ? 'underline' : 'none',
            })}
            >
            Home
            </NavLink>
            <NavLink
            to="/table"
            style={({ isActive }) => ({
                color: isActive ? '#fff' : '#ccc',
                textDecoration: isActive ? 'underline' : 'none',
            })}
            >
            useState
            </NavLink>
            <NavLink
            to="/about"
            style={({ isActive }) => ({
                color: isActive ? '#fff' : '#ccc',
                textDecoration: isActive ? 'underline' : 'none',
            })}
            >
            useRef
            </NavLink>
            <NavLink
            to="/contact"
            style={({ isActive }) => ({
                color: isActive ? '#fff' : '#ccc',
                textDecoration: isActive ? 'underline' : 'none',
            })}
            >
            useForm
            </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
