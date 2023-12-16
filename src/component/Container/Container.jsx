import PropTypes from 'prop-types'; 

const Container = ({children}) => {
    return (
        <div className='max-w-6xl mx-auto'>
            {children}
        </div>
    );
};
Container.propTypes = {
    children: PropTypes.object,
  };
export default Container;