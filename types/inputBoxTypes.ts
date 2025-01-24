export type InputBoxProps = {
    value?: any;
    boxWidth: string;
    boxHeight: number;
    boxBorderWidth?: number;
    boxBorderColor?: any;
    labelBackgroundColor?: any;
    displayFloatingLabel: any;
    secureTextEntry?: boolean;
    keyboardType?: "email-address"| "number-pad" | "default";
    placeholder: string;
    label: string;
    onBlur: () => void;
    onFocus: () => void;
    onChangeText?: (val: any) => void;
    textInputWidth: string;
    iconName?: undefined | "eye-off" | "eye";
    iconSize?: number;
    iconColor?: any;
    displayIcon: undefined | "flex" | "none";
    switchIcon?: () => void;
    editable?: boolean;
};