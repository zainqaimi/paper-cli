import React from 'react';
import {Button} from 'react-native-paper';

interface CustomButtonProps {
  text: string; // Button ka text
  icon?: string; // Optional icon name
  mode?: 'text' | 'outlined' | 'contained'; // Mode for the button
  onPress: () => void; // Function to handle button press
  color?: string; // Custom color
  disabled?: boolean; // Disabled state
  style?: object; // Custom styles
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon,
  mode = 'contained', // Default value 'contained'
  onPress,
  color,
  disabled = true,
  style = {},
}) => {
  return (
    <Button
      icon={icon}
      mode={mode}
      onPress={onPress}
      textColor={color}
      disabled={disabled}
      style={style}>
      {text}
    </Button>
  );
};

export default CustomButton;
