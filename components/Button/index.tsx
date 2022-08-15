import React, {ReactNode} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button: React.FC<{children: ReactNode; [key: string]: any}> = ({
  children,
  ...props
}) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
export default Button;
