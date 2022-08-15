import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  loading?: boolean;
  [key: string]: any;
}
const Button: React.FC<ButtonProps> = ({children, loading, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...(props.disabled ? {backgroundColor: '#999999'} : {}),
      }}
      {...props}>
      <Text style={styles.text}>{loading ? 'Loading...' : children}</Text>
    </TouchableOpacity>
  );
};
export default Button;
